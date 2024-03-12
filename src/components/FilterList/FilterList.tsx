import styles from "@components/FilterList/FilterList.module.css";

type Props = {
  list: string[];
};
export const FilterList = ({ list }: Props) => {
  return (
    <div className={styles.filterWrapper}>
      <ul className={styles.filterList}>
        {list?.map((item, index) => (
          <li className={styles.li} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
