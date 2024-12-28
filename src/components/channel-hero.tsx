import { format } from "date-fns";

interface ChannelHeroProps {
  name: string;
  creationTime: number;
}

export const ChannelHero = ({ name, creationTime }: ChannelHeroProps) => {
  return (
    <div className="mt-[88px] mx-5 mb-4">
      <p className="text-2xl font-bold flex items-center mb-2"># {name}</p>
      <p className="font-normal text-slate-800 mb-4">
        Welcome to the beginning of the <strong># {name}</strong> channel!
        Created on {format(creationTime, "MMMM do, yyyy")}.
      </p>
      <p className="text-sm text-slate-600">
        This is where your team's conversations will live. Share messages,
        files, and collaborate together in this space.
      </p>
    </div>
  );
};
