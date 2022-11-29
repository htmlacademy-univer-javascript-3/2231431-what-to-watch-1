import FilmType from '../../types/film-type';
import FilmList from '../film-list/film-list';

type RelatedFilmsProps = {
  films: FilmType[];
  currentFilm: FilmType;
}

function RelatedFilms(props : RelatedFilmsProps) {
  const relatedFilms = props.films
    .filter((currentFilm) => (currentFilm.genre === props.currentFilm.genre && currentFilm.id !== props.currentFilm.id))
    .slice(0, 4);

  return (<FilmList films={relatedFilms} />);
}

export default RelatedFilms;
