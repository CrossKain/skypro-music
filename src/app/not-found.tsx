import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h3>Страница не найдена</h3>
      <p>Возможно она была удалена или перенесена на другой адрес</p>

      <Link href="/">Вернуться на главную</Link>
    </div>
  );
}
