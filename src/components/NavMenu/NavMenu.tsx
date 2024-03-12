import classNames from "classnames";
import styles from "@components/NavMenu/NavMenu.module.css";
import Link from "next/link";
import { FC } from "react";
type TNavMenu = {
  isOpen: boolean;
};
export const NavMenu: FC<TNavMenu> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={classNames(styles.navMenu, styles.menu)}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>Мой плейлист</li>
            <li className={styles.menuItem}>
              <Link href="/signin">Войти</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
