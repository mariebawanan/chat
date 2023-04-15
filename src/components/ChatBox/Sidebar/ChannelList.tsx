import { SectionLayout } from "@/components/Layout";
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
    <SectionLayout title="Channels">
      <div className="flex flex-col space-y-4">
        {channelList.map(({ value, label }) => (
          <div
            key={value}
            className={classNames(
              "p-4 rounded-md bg-white hover:cursor-pointer hover:drop-shadow-lg transition-all",
              {
                "bg-gradient-to-r from-blue-100  to-blue-50": channelId === value,
              }
            )}
            onClick={() => handleChannelChange(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
