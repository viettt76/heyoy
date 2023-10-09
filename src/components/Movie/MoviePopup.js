import { useState, useEffect } from 'react';
import ButtonBootstrap from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import clsx from 'clsx';
import axios from '~/utils/customizeAxios';
import { AddIcon, ArrowDownIcon, CloseIcon, DislikeIcon, LikeIcon, PlayIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './Movie.module.scss';

function MoviePopup({ movieId }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [detailMovie, setDetailMovie] = useState({
        trailerLink: '',
        title: '',
        voted: '',
        runtime: '',
        genres: [],
        releaseDate: '',
        overview: '',
        backdrop: '',
    });

    const [actors, setActors] = useState([]);

    useEffect(() => {
        if (movieId) {
            axios
                .get(`movie/${movieId}?api_key=1b133fbcf72e164485c108b94fbdac4b&append_to_response=videos,images`)
                .then((res) => {
                    if (res?.videos?.results) {
                        const trailer = res.videos.results.find((link) => {
                            return link.type === 'Trailer';
                        });

                        const genresName = res.genres.map((genre) => genre.name);

                        const oldDate = res.release_date.split('-');
                        const newDate = `${oldDate[2]}-${oldDate[1]}-${oldDate[0]}`;
                        if (trailer?.key) {
                            setDetailMovie({
                                trailerLink: trailer.key,
                                title: res.title,
                                voted: res.vote_average,
                                runtime: res.runtime,
                                genres: genresName,
                                releaseDate: newDate,
                                overview: res.overview,
                                backdrop: res.backdrop_path,
                            });
                        }
                    }
                });
        }
    }, [movieId]);

    useEffect(() => {
        if (show) {
            axios.get(`movie/${movieId}/credits?api_key=1b133fbcf72e164485c108b94fbdac4b`).then((res) => {
                if (res) {
                    const actors = res.cast.filter((actor) => {
                        return actor.known_for_department === 'Acting' && [0, 1, 2].includes(actor.order);
                    });

                    setActors(actors.map((actor) => actor.name));
                }
            });
        }
    }, [movieId, show]);

    return (
        <>
            {detailMovie.trailerLink ? (
                <div>
                    <iframe
                        className={clsx(styles.posterTrailer)}
                        allowFullScreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title="Blacklist Season 1 - Trailer"
                        width="100%"
                        height="180"
                        src={`https://www.youtube.com/embed/${detailMovie.trailerLink}?autoplay=1&amp;controls=0&amp;&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fnotflex.vercel.app&amp;widgetid=5`}
                        id="widget6"
                    ></iframe>
                    <div className={clsx(styles.posterInfo)}>
                        <h4 className={clsx(styles.posterTitle)}>{detailMovie.title}</h4>
                        <div className={clsx(styles.controls)}>
                            <div className={clsx(styles.controlsLeft)}>
                                <Button control>
                                    <PlayIcon width="33.6px" height="33.6px" />
                                </Button>
                                <Button control>
                                    <AddIcon width="33.6px" height="33.6px" />
                                </Button>
                                <Button control>
                                    <LikeIcon />
                                </Button>
                                <Button control>
                                    <DislikeIcon />
                                </Button>
                            </div>
                            <div>
                                <Button control>
                                    <ButtonBootstrap
                                        variant="white"
                                        onClick={handleShow}
                                        style={{ color: 'white', border: 'none' }}
                                    >
                                        <ArrowDownIcon />
                                    </ButtonBootstrap>
                                    {show && (
                                        <div style={{ marginTop: '50px' }}>
                                            <Modal centered={true} size="lg" show={show} onHide={() => setShow(false)}>
                                                <Modal.Header>
                                                    <span className={clsx(styles.modalCloseBtn)}>
                                                        <Button onClick={handleClose}>
                                                            <CloseIcon className={clsx(styles.modalCloseIcon)} />
                                                        </Button>
                                                    </span>
                                                    <div
                                                        className={clsx(styles.modalBackdrop)}
                                                        style={{
                                                            backgroundImage: `url("https://image.tmdb.org/t/p/w500/${detailMovie.backdrop}")`,
                                                        }}
                                                    >
                                                        <div className={clsx(styles.nameControl)}>
                                                            <h1>{detailMovie.title}</h1>
                                                            <div className={clsx(styles.controlsLeft)}>
                                                                <Button control small>
                                                                    <PlayIcon width="26px" height="26px" />
                                                                </Button>
                                                                <Button control small>
                                                                    <AddIcon width="26px" height="26px" />
                                                                </Button>
                                                                <Button control small>
                                                                    <LikeIcon />
                                                                </Button>
                                                                <Button control small>
                                                                    <DislikeIcon />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={clsx(styles.modalBotCover)}></div>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className={clsx(styles.modalInfo)}>
                                                        <div className={clsx(styles.modalInfoLeft)}>
                                                            <div>
                                                                <span className={clsx(styles.voted)}>
                                                                    {detailMovie.voted} Rate
                                                                </span>
                                                                <span className={clsx(styles.mr24)}>
                                                                    {detailMovie.releaseDate}
                                                                </span>
                                                                <span className={clsx(styles.mr24)}>
                                                                    {detailMovie.runtime}m
                                                                </span>
                                                            </div>
                                                            <div>{detailMovie.overview}</div>
                                                        </div>
                                                        <div className={clsx(styles.modalInfoRight)}>
                                                            <div>
                                                                <span className={clsx(styles.grayText)}>Cast:</span>{' '}
                                                                {actors.map((actor, index) => (
                                                                    <span key={`actor-${index}`}>{actor}, </span>
                                                                ))}
                                                                , more
                                                            </div>
                                                            <div>
                                                                <span className={clsx(styles.grayText)}>Genres:</span>{' '}
                                                                {detailMovie.genres.map((genre, index) => (
                                                                    <span key={`genre-${index}`}>{genre}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div>
                            <span className={clsx(styles.voted)}>{Math.round(detailMovie.voted * 10) / 10} Rate</span>
                            <span>{detailMovie.runtime}m</span>
                        </div>
                        <div className={styles.genresMovie}>
                            {detailMovie.genres.map((genre, index) => {
                                return (
                                    <span className={clsx(styles.genreItem)} key={`genre-${index}`}>
                                        {genre.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default MoviePopup;
