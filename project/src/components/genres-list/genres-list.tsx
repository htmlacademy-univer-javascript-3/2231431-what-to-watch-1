import React, {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ALL_GENRES} from '../../const';
import {changeGenre, filterFilmsByCurrentGenre} from '../../store/action';

type GenresListProps = {
  buttonClickHandler: () => void;
}

function GenresList(props: GenresListProps) {
  const currentGenre = useAppSelector(((state) => state.currentGenre));
  const films = useAppSelector((state) => state.films);
  const genres = [ALL_GENRES, ...Array.from(new Set([ ...films.map((film) => film.genre)].sort()))];
  const dispatch = useAppDispatch();

  const genreChangeHandler = (event: MouseEvent<HTMLButtonElement>, genre: string) => {
    event.preventDefault();
    dispatch(changeGenre({newGenre: genre}));
    dispatch(filterFilmsByCurrentGenre());
    props.buttonClickHandler();
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === currentGenre && 'catalog__genres-item--active'}`}>
          <button className="reset-default-button-style catalog__genres-link" onClick={((event) => genreChangeHandler(event, genre))}>{genre}</button>
        </li>
      ))}
    </ul>);
}

export default GenresList;
