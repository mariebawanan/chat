import { gql } from "@apollo/client";

export const FETCH_LATEST_MESSAGES = gql`
  query MessagesFetchLatest($channelId: ChannelId!) {
    MessagesFetchLatest(channelId: $channelId) {
      messageId
      text
      datetime
      userId
    }
  }
`;
