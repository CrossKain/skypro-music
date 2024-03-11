"use client";
import styles from "@components/ContentPlaylist/ContentPlaylist.module.css";
import PlayListItem from "@components/PlayListItem/PlayListItem";
import classNames from "classnames";
import { TTrack } from "../../types";
type ContentPlayListProps = {
  tracks: TTrack[];
};
export default function ContentPlaylist({ tracks }: ContentPlayListProps) {
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {tracks?.map((track) => (
        <PlayListItem key={track.id} name={track.name} author={track.author} album={track.album} time={track.duration_in_seconds}/>
      ))}
    </div>
  );
}
