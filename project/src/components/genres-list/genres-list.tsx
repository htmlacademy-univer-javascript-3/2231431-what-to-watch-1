import React, {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ALL_GENRES} from '../../const';
import { changeGenre } from '../../store/films-process/films-process';
import {getFilms, getGenre} from '../../store/films-process/selectors';

type GenresListProps = {
  buttonClickHandler: () => void;
}

function GenresList(props: GenresListProps) {
  const currentGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const genres = [ALL_GENRES, ...Array.from(new Set([ ...films.map((film) => film.genre)].sort()))].slice(0, 10);
  const dispatch = useAppDispatch();

  const genreChangeHandler = (event: MouseEvent<HTMLButtonElement>, genre: string) => {
    event.preventDefault();
    dispatch(changeGenre(genre));
    props.buttonClickHandler();
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${genre === currentGenre && 'catalog__genres-item--active'}`}
          data-testid="genre"
        >
          <button className="reset-default-button-style catalog__genres-link" onClick={((event) => genreChangeHandler(event, genre))}>{genre}</button>
        </li>
      ))}
    </ul>);
}

export default GenresList;
