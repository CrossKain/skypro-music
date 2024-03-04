import ContentPlaylist from "@components/ContentPlaylist/ContentPlaylist";
import classNames from "classnames";
import styles from "@components/CentrBlock/CentrBlock.module.css";

export default function CentrBlock() {
  return (
    <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
      <div className={classNames(styles.centerBlockSearch, styles.search)}>
        <svg className={styles.searchSvg}>
          <use href="/image/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      <div className={classNames(styles.centerBlockFilter, styles.filter)}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div
          className={classNames(
            styles.filterButton,

            styles.buttonAuthor,

            styles.btnText
          )}
        >
          исполнителю
        </div>
        <div
          className={classNames(
            styles.filterButton,
            styles.buttonYear,
            styles.btnText
          )}
        >
          году выпуска
        </div>
        <div
          className={classNames(
            styles.filterButton,

            styles.buttonGenre,

            styles.btnText
          )}
        >
          жанру
        </div>
      </div>
      <div
        className={classNames(
          styles.centerBlockContent,
          styles.playlistContent
        )}
      >
        <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use href="image/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <ContentPlaylist />
      </div>
    </div>
  );
}
