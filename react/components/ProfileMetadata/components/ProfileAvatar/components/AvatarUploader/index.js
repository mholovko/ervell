import React, { Component } from 'react';
import { propType } from 'graphql-anywhere';
import { Query, Mutation } from 'react-apollo';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import uploadPolicyQuery from 'react/components/ProfileMetadata/components/ProfileAvatar/queries/uploadPolicy';

import updateGroupAvatarMutation from 'react/components/ProfileMetadata/components/ProfileAvatar/mutations/updateGroupAvatar';

import profileAvatarFragment from 'react/components/ProfileMetadata/components/ProfileAvatar/fragments/profileAvatar';

import Box from 'react/components/UI/Box';
import GenericButton from 'react/components/UI/GenericButton';
import Avatar from 'react/components/ProfileMetadata/components/ProfileAvatar/components/Avatar';
import { FilledButton } from 'react/components/UI/Buttons';

const Replace = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${props => props.mode === 'resting' && `
    > * {
      display: none;
    }

    &:hover > * {
      display: block;
    }
  `}
`;

export default class AvatarUploader extends Component {
  static propTypes = {
    identifiable: propType(profileAvatarFragment).isRequired,
    startPolling: PropTypes.func.isRequired,
    stopPolling: PropTypes.func.isRequired,
  }

  state = {
    policy: {},
    mode: 'loading',
    progress: 0,
  }

  componentWillReceiveProps({ identifiable: { avatar: nextAvatar } }) {
    const { identifiable: { avatar: currentAvatar }, stopPolling } = this.props;

    if (nextAvatar !== currentAvatar) {
      stopPolling();
      this.setState({ mode: 'resting' });
    }
  }

  onAddFile = updateGroupAvatar => (e) => {
    const { identifiable: { id }, startPolling } = this.props;
    const { policy } = this.state;

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('Content-Type', file.type);
    formData.append('key', policy.key);
    formData.append('AWSAccessKeyId', policy.AWSAccessKeyId);
    formData.append('acl', policy.acl);
    formData.append('success_action_status', policy.success_action_status);
    formData.append('policy', policy.policy);
    formData.append('signature', policy.signature);
    formData.append('file', file);

    this.setState({ mode: 'uploading' });

    axios
      .post(policy.bucket, formData, {
        responseType: 'text',
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          this.setState({ progress });
        },
      })
      .then(({ data }) => {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(data, 'text/xml');
        return parsed.getElementsByTagName('Location')[0].childNodes[0].nodeValue;
      })
      .then(temporaryUrl => updateGroupAvatar({
        variables: { id, avatar_url: temporaryUrl },
      }))
      .then(() => {
        this.setState({ mode: 'done' });
        startPolling(500);
      })
      .catch((error) => {
        console.error(error);
        this.setState({ mode: 'error' });
      });
  }

  getReady = ({ me: { policy } }) => {
    this.setState({
      policy,
      mode: 'resting',
    });
  }

  triggerAddFile = (e) => {
    e.preventDefault();
    this.file.click();
  }

  render() {
    const { mode, progress } = this.state;
    const { identifiable, identifiable: { avatar } } = this.props;

    return (
      <Query query={uploadPolicyQuery} fetchPolicy="cache-and-network" onCompleted={this.getReady}>
        {({ error }) => {
          if (error) return '';

          return (
            <Mutation mutation={updateGroupAvatarMutation}>
              {updateGroupAvatar => (
                <div>
                  <input
                    type="file"
                    ref={(ref) => { this.file = ref; }}
                    style={{ display: 'none' }}
                    onChange={this.onAddFile(updateGroupAvatar)}
                  />

                  {!avatar &&
                    <GenericButton f={1} onClick={this.triggerAddFile}>
                      {{
                        loading: '...',
                        resting: 'Upload group logo',
                        uploading: `Uploading ${progress}%`,
                        done: 'Processing...',
                        error: 'Error',
                      }[mode]}
                    </GenericButton>
                  }

                  {avatar &&
                    <Avatar avatar={identifiable.avatar}>
                      <Replace mode={mode}>
                        <FilledButton f={0} bg="white" onClick={this.triggerAddFile}>
                          {{
                            loading: '...',
                            resting: 'Replace group logo',
                            uploading: `Uploading ${progress}%`,
                            done: 'Processing...',
                            error: 'Error',
                          }[mode]}
                        </FilledButton>
                      </Replace>
                    </Avatar>
                  }
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}