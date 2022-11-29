import FilmType from '../../types/film-type';

type FilmOverviewProps = {
  film: FilmType;
}

function getRatingLevel(ratingCount: number): string {
  if (ratingCount < 3) {return 'Bad';}
  else if (ratingCount < 5) {return 'Normal';}
  else if (ratingCount < 8) {return 'Good';}
  else if (ratingCount < 10) {return 'Very good';}
  else {return 'Awesome';}
}

function FilmOverview(props: FilmOverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(props.film.rating)}</span>
          <span className="film-rating__count">{props.film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.film.description}</p>

        <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {props.film.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}
export default FilmOverview;
