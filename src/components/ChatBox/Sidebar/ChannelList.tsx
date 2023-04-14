import { ChannelContext } from "@/context/channelContext";
import { Channel, Option } from "@/types";
import classNames from "classnames";
import { useContext } from "react";

const channelList: Option[] = [
  {
    label: Channel.General,
    value: Channel.General,
  },
  {
    label: Channel.Technology,
    value: Channel.Technology,
  },
  {
    label: Channel.LGTM,
    value: Channel.LGTM,
  },
];

export default function ChannelList() {
  const { channelId, setChannelId } = useContext(ChannelContext);

  const handleChannelChange = (value: string) => {
    setChannelId(value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label>Choose your channel</label>
      {channelList.map(({ value, label }) => (
        <div
          key={value}
          className={classNames({ "bg-white": channelId === value })}
          onClick={() => handleChannelChange(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
