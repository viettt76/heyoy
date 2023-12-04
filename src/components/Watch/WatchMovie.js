import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import styles from './WatchMovie.module.scss'

function WatchMovie() {
    const { id } = useParams();

    const videoUrl = `https://2embed.org/e.php?id=${id}`;

    return (
        <div>
            <iframe className={clsx(styles['video'])} title={`Movie-${id}`} allowFullScreen src={videoUrl} />
        </div>
    );
}

export default WatchMovie;
