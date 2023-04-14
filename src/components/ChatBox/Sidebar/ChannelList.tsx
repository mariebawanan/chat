import classNames from "classnames";
import { useState } from "react";
import { ChannelIds, ChannelName } from "../../../types/channel";
import { Option } from "../../../types/option";

const channelList: Option[] = [
  {
    label: ChannelName.General,
    value: ChannelIds[ChannelName.General],
  },
  {
    label: ChannelName.Technology,
    value: ChannelIds[ChannelName.Technology],
  },
  {
    label: ChannelName.LGTM,
    value: ChannelIds[ChannelName.LGTM],
  },
];

export default function ChannelList() {
  const [channelId, setChannelId] = useState(channelList[0].value);

  const handleChannelChange = (value: string) => {
    setChannelId(value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label>Choose your channel</label>
      {channelList.map((channel) => (
        <div
          className={classNames({ "bg-white": channelId === channel.value })}
          onClick={() => handleChannelChange(channel.value)}
        >
          {channel.label}
        </div>
      ))}
    </div>
  );
}
