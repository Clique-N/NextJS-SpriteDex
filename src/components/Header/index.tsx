import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__logo}>
                    <Link href="/"><Image src="/logo.png" alt="2Travel" width={140} height={50} priority/></Link>
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