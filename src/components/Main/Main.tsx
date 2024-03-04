import Bar from "@components/Bar/Bar";
import CentrBlock from "@components/CentrBlock/CentrBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CentrBlock />
        <MainSlideBar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </>
  );
}
