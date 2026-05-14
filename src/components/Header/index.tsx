import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href="/"><Image src="/logo.webp" alt="Logo com texto SpriteDex. Sprite possui a cor amarela em destaque, ja o Dex tem o vermelho com branco." width={140} height={50} fetchPriority="high" /></Link>
                </h1>
                <nav className={styles.header__nav}>
                    <Link href="/">Página inicial</Link>
                    <Link href="/pokemon/primeira-geracao">Primeira geração</Link>
                    <Link href="/pokemon/segunda-geracao">Segunda geração</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;