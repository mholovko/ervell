import gql from 'graphql-tag'

import profileGroupsFragment from 'v2/components/ProfileGroups/fragments/profileGroups'

export default gql`
  query ProfileGroups($id: ID!, $page: Int, $per: Int) {
    identity(id: $id) {
      identifiable {
        ...ProfileGroups
      }
    }
  }
  ${profileGroupsFragment}
`
