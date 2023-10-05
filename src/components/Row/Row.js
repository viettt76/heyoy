import clsx from "clsx";
import styles from './Row.module.scss'
import poster from '~/assets/images/poster.jpg'


function Row() {
    return ( 
        <div className={clsx(styles.row)}>
            <h3 className={clsx(styles.title)}>Trending</h3>
            <div className={clsx(styles.rowPoster)}>
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
                <img className={clsx(styles.poster)} src={poster} alt="poster" />
            </div>
        </div>
     );
}

export default Row;