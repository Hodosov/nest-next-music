import { FC } from "react";
import { ITrack } from "types/track";
import { TrackItem } from "./TrackItem";

export const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <>
      {tracks.map((el) => (
        <TrackItem key={el._id} track={el} />
      ))}
    </>
  );
};

interface TrackListProps {
  tracks: ITrack[];
}
