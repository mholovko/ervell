/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProfileContents
// ====================================================

export interface ProfileContents_Group {
  __typename: "Group";
}

export interface ProfileContents_User_contents_Text_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Text_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Text_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Text_connection_user | null;
}

export interface ProfileContents_User_contents_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Text_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_Text {
  __typename: "Text";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Text_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Text_connection | null;
  source: ProfileContents_User_contents_Text_source | null;
  counts: ProfileContents_User_contents_Text_counts | null;
  content: string | null;
}

export interface ProfileContents_User_contents_Image_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Image_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Image_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Image_connection_user | null;
}

export interface ProfileContents_User_contents_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Image_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_Image {
  __typename: "Image";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Image_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Image_connection | null;
  source: ProfileContents_User_contents_Image_source | null;
  counts: ProfileContents_User_contents_Image_counts | null;
  src: string | null;
}

export interface ProfileContents_User_contents_Link_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Link_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Link_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Link_connection_user | null;
}

export interface ProfileContents_User_contents_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Link_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_Link {
  __typename: "Link";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Link_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Link_connection | null;
  source: ProfileContents_User_contents_Link_source | null;
  counts: ProfileContents_User_contents_Link_counts | null;
  src: string | null;
  external_url: string | null;
}

export interface ProfileContents_User_contents_Embed_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Embed_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Embed_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Embed_connection_user | null;
}

export interface ProfileContents_User_contents_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Embed_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_Embed {
  __typename: "Embed";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Embed_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Embed_connection | null;
  source: ProfileContents_User_contents_Embed_source | null;
  counts: ProfileContents_User_contents_Embed_counts | null;
  src: string | null;
}

export interface ProfileContents_User_contents_Attachment_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Attachment_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Attachment_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Attachment_connection_user | null;
}

export interface ProfileContents_User_contents_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Attachment_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_Attachment {
  __typename: "Attachment";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Attachment_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Attachment_connection | null;
  source: ProfileContents_User_contents_Attachment_source | null;
  counts: ProfileContents_User_contents_Attachment_counts | null;
  src: string | null;
  file_extension: string | null;
}

export interface ProfileContents_User_contents_PendingBlock_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_PendingBlock_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_PendingBlock_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_PendingBlock_connection_user | null;
}

export interface ProfileContents_User_contents_PendingBlock_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_PendingBlock_counts {
  __typename: "BlockCounts";
  comments: number | null;
}

export interface ProfileContents_User_contents_PendingBlock {
  __typename: "PendingBlock";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_PendingBlock_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_PendingBlock_connection | null;
  source: ProfileContents_User_contents_PendingBlock_source | null;
  counts: ProfileContents_User_contents_PendingBlock_counts | null;
}

export interface ProfileContents_User_contents_Channel_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Channel_connection_user {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export interface ProfileContents_User_contents_Channel_connection {
  __typename: "Connection";
  created_at: string | null;
  user: ProfileContents_User_contents_Channel_connection_user | null;
}

export interface ProfileContents_User_contents_Channel_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface ProfileContents_User_contents_Channel_counts {
  __typename: "ChannelCounts";
  contents: number | null;
}

export interface ProfileContents_User_contents_Channel_owner_Group {
  __typename: "Group";
  id: number | null;
  name: string | null;
  visibility: string | null;
}

export interface ProfileContents_User_contents_Channel_owner_User {
  __typename: "User";
  id: number | null;
  name: string | null;
}

export type ProfileContents_User_contents_Channel_owner = ProfileContents_User_contents_Channel_owner_Group | ProfileContents_User_contents_Channel_owner_User;

export interface ProfileContents_User_contents_Channel {
  __typename: "Channel";
  id: number | null;
  href: string | null;
  updated_at: string | null;
  title: string | null;
  user: ProfileContents_User_contents_Channel_user | null;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: ProfileContents_User_contents_Channel_connection | null;
  source: ProfileContents_User_contents_Channel_source | null;
  truncatedTitle: string | null;
  visibility: string | null;
  counts: ProfileContents_User_contents_Channel_counts | null;
  owner: ProfileContents_User_contents_Channel_owner | null;
}

export type ProfileContents_User_contents = ProfileContents_User_contents_Text | ProfileContents_User_contents_Image | ProfileContents_User_contents_Link | ProfileContents_User_contents_Embed | ProfileContents_User_contents_Attachment | ProfileContents_User_contents_PendingBlock | ProfileContents_User_contents_Channel;

export interface ProfileContents_User {
  __typename: "User";
  id: number | null;
  name: string | null;
  contents: (ProfileContents_User_contents | null)[] | null;
}

export type ProfileContents = ProfileContents_Group | ProfileContents_User;
