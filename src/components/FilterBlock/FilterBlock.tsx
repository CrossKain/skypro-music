"use client";
import styles from "@components/FilterBlock/FilterBlock.module.css";
import { FilterList } from "@components/FilterList/FilterList";
import classNames from "classnames";
import { useState } from "react";
const filterObj = {
  AUTHORS: "authors",
  GENRES: "genres",
  RELEASE: "release",
};

export default function FilterBlock() {
  const [filterState, setFilterState] = useState<string | null>(null);
  const handleClick = (filter: string) => {
    if (filterState === filter) {
      setFilterState(null);
    } else {
      setFilterState(filter);
    }
  };
  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.AUTHORS)}
          className={classNames(
            styles.filterButton,

            styles.buttonAuthor,

            styles.btnText
          )}
        >
          исполнителю
        </div>
        {filterState === filterObj.AUTHORS && <FilterList />}
      </div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.RELEASE)}
          className={classNames(
            styles.filterButton,
            styles.buttonYear,
            styles.btnText
          )}
        >
          году выпуска
        </div>
        {filterState === filterObj.RELEASE && <FilterList />}
      </div>
      <div className={styles.filterButtonWrapper}>
        <div
          onClick={() => handleClick(filterObj.GENRES)}
          className={classNames(
            styles.filterButton,

            styles.buttonGenre,

            styles.btnText
          )}
        >
          жанру
        </div>
        {filterState === filterObj.GENRES && <FilterList />}
      </div>
    </div>
  );
}
