import { Fragment, useState } from 'react';
import FilmType from '../../types/film-type';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: FilmType[];
}

function FilmList(props: FilmListProps): JSX.Element {
  const [, setActiveFilmCard] = useState<number>(NaN); // добавить потом activeFilmCard
  return (
    <Fragment>
      {props.films.map((film)=>(<FilmCard key={film.id} film={film} setActiveFilmCard={setActiveFilmCard}/>))}
    </Fragment>);
}

export default FilmList;
