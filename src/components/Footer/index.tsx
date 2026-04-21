import styles from "./Footer.module.css"

const Footer = () => {

    return(
        <footer className={styles.footer}>
            <p className={styles.footer__text}>SpriteDex - Um projeto para EBAC</p>
        </footer>
    );
}

export default Footer;