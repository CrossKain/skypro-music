"use client";
import styles from "@components/FilterBlock/FilterBlock.module.css";
import { FilterList } from "@components/FilterList/FilterList";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { TTrack } from "../../types";
import { releaseData } from "../../Lib/const";
const filterObj = {
  AUTHORS: "authors",
  GENRES: "genres",
  RELEASE: "release",
};

type Props = {
  tracks: TTrack[];
};

export default function FilterBlock({ tracks }: Props) {
  const [authorList, setAuthorList] = useState<string[]>([]);
  const [ganresList, setGanresList] = useState<string[]>([]);

  const [filterState, setFilterState] = useState<string | null>(null);
  const handleClick = (filter: string) => {
    if (filterState === filter) {
      setFilterState(null);
    } else {
      setFilterState(filter);
    }
  };
  useEffect(() => {
    if (tracks.length) {
      const authorsArray = tracks.map((track) => track.author);
      const authors = new Set(authorsArray);
      setAuthorList(Array.from(authors));
      const ganresArray = tracks.map((track) => track.genre);
      const ganres = new Set(ganresArray);
      setGanresList(Array.from(ganres));
    }
  }, [tracks]);

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.AUTHORS)}
          className={classNames(
            styles.filterButton,

            { [styles.active]: filterState === filterObj.AUTHORS },

            styles.btnText
          )}
        >
          исполнителю
        </div>
        {filterState === filterObj.AUTHORS && <FilterList list={authorList} />}
      </div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.RELEASE)}
          className={classNames(
            styles.filterButton,
            { [styles.active]: filterState === filterObj.RELEASE },
            styles.btnText
          )}
        >
          году выпуска
        </div>
        {filterState === filterObj.RELEASE && <FilterList list={releaseData} />}
      </div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.GENRES)}
          className={classNames(
            styles.filterButton,

            { [styles.active]: filterState === filterObj.GENRES },

            styles.btnText
          )}
        >
          жанру
        </div>
        {filterState === filterObj.GENRES && <FilterList list={ganresList} />}
      </div>
    </div>
  );
}
