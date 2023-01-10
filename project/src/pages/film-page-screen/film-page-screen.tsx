import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import Tabs from '../../components/tabs/tabs';
import RelatedFilms from '../../components/related-films/related-films';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SignIn from '../../components/sign-in/sign-in';
import {loadFilmById, loadReviews, loadSimilarFilms} from '../../store/action';
import {useEffect} from 'react';
import Spinner from '../../components/spinner/spinner';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function FilmPageScreen() {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(loadFilmById(id));
    dispatch(loadReviews(id));
    dispatch(loadSimilarFilms(id));
  }, [id, dispatch]);

  const isFilmLoading = useAppSelector((state) => state.isFilmLoading);
  const isReviewsLoading = useAppSelector((state) => state.isReviewsLoading);
  const isSimilarFilmsLoading = useAppSelector((state) => state.isSimilarFilmsLoading);

  const reviews = useAppSelector((state) => state.reviews);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const film = useAppSelector((state) => state.currentFilm);

  if (isFilmLoading || isReviewsLoading || isSimilarFilmsLoading){
    return <Spinner />;
  }

  if (!film){
    return (<NotFoundScreen/>);
  }

  return (
    <>
      <section style={{'background': `${film.backgroundColor}`}} className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth &&
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>
            <Tabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <RelatedFilms films={similarFilms} currentFilm={film} />
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default FilmPageScreen;
