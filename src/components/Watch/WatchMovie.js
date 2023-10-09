import { useParams } from 'react-router-dom';

function WatchMovie() {
    const { id } = useParams();

    const videoUrl = `https://2embed.org/e.php?id=${id}`;

    return (
        <div>
            <iframe title={`Movie-${id}`} allowFullScreen width={1000} height={530} src={videoUrl} />
        </div>
    );
}

export default WatchMovie;
