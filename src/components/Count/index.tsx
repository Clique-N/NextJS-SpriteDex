import styles from "./Count.module.css"

type Props = {
    start: number;
    end: number;
};

export default function Count ({start, end}: Props) {

    return (
        <div className={styles.count}>
            <p className={styles.count__text}>Mostrando pokemon {start} até pokemon {end}</p>
        </div>
    )
}