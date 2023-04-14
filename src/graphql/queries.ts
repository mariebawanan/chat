import { gql } from "@apollo/client";

export const FETCH_LATEST_MESSAGES = gql`
  query MessagesFetchLatest($channelId: String!) {
    fetchLatestMessages(channelId: $channelId) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export const FETCH_MORE_MESSAGES = gql`
  query MessagesFetchMore($channelId: String!, $messageId: String!, $old: Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
      messageId
      text
      datetime
      userId
    }
  }
`;
