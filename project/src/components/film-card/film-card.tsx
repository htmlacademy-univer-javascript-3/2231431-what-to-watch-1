import FilmType from '../../types/film-type';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: FilmType;
  setActiveFilmCard: (id: number) => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => props.setActiveFilmCard(props.film.id)}
      onMouseLeave={() => props.setActiveFilmCard(NaN)}
    >
      <div className="small-film-card__image">
        <img src={props.film.posterImage}
          alt={props.film.name} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.film.id}`} className="small-film-card__link">{props.film.name}</Link>
      </h3>
    </article>);
}

export default FilmCard;
