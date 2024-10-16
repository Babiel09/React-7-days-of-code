import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/assets/logo header.png";
import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.image}>
          <Image src={Logo} alt="Logo do site" width={150} />
        </div>
        <div className={styles.link}>
          <Link href={"#"}>Como fazer </Link>
          /
          <Link href={"#"}>Ofertas</Link>
          /
          <Link href={"#"}>Depoimentos</Link>
          /
          <Link href={"#"}>Vídeos</Link>
          /
          <Link href={"#"}>Meu carrinho </Link>
          /
        </div>
      </nav>
    </header>
  );
}
