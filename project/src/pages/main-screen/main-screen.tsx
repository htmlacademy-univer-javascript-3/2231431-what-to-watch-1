import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import FilmList from '../../components/film-list/film-list';
import {Link, NavLink} from 'react-router-dom';
import GenresList from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {AppRoute, AuthorizationStatus, FILM_IN_PAGE} from '../../const';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import SignIn from '../../components/sign-in/sign-in';
import {getFilteredFilms, getPromoFilm} from '../../store/films-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function MainScreen(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [showedFilmsCount, changeShowedFilmsCount] = useState<number>(FILM_IN_PAGE);
  if (promoFilm === null){
    return <NavLink to={AppRoute.NotFound} />;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList buttonClickHandler={() => (changeShowedFilmsCount(FILM_IN_PAGE))}/>

          <div className="catalog__films-list">
            <FilmList films={filteredFilms.slice(0, showedFilmsCount)} />
          </div>

          {filteredFilms.length > showedFilmsCount &&
          <ShowMoreButton buttonClickHandler={() => (changeShowedFilmsCount(showedFilmsCount + FILM_IN_PAGE))}/>}
        </section>

        <Footer />
      </div>
    </>);
}

export default MainScreen;
