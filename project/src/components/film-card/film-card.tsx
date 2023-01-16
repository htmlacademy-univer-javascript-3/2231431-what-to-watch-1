import FilmType from '../../types/film-type';
import {Link} from 'react-router-dom';
import {memo, useEffect, useState} from 'react';
import Player from '../player/player';
import {useAppDispatch} from '../../hooks';
import {redirectToRoute} from '../../store/action';

type FilmCardProps = {
  film: FilmType;
  setActiveFilmCard: (id: number) => void;
  isActive: boolean;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (props.isActive){
      const timer = setTimeout(() => setIsPlaying(true), 1000);
      return ()=> {
        clearTimeout(timer);
        setIsPlaying(false);
      };
    }
  }, [props.isActive]);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => props.setActiveFilmCard(props.film.id)}
      onMouseLeave={() => props.setActiveFilmCard(NaN)}
      onClick={() => dispatch(redirectToRoute(`/films/${props.film.id}`))}
    >
      <div className="small-film-card__image">
        {isPlaying ?
          <Player videoSrc={props.film.previewVideoLink} posterImageSrc={props.film.previewImage} muted /> :
          <img src={props.film.previewImage} alt={props.film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.film.id}`} className="small-film-card__link" data-testid="card-link">
          {props.film.name}
        </Link>
      </h3>
    </article>);
}

export default memo(FilmCard);
