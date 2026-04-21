import Link from "next/link";
import styles from "./Button.module.css"

type Props = {
    offset: number;
};

export default function Button ({offset}: Props) {

    return (
        <div className={styles.grid}>
            {offset > 0 && (
                <Link href={`/?page=${offset - 20}`}>
                    <button className={styles.button}>Página anterior</button>
                </Link>
            )}
            <Link href={`/?page=${offset + 20}`}>
                <button className={styles.button}>Próxima página</button>
            </Link> 
        </div>
    )
}