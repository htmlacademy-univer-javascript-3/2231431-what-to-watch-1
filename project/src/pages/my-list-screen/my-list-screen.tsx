import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import FilmList from '../../components/film-list/film-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms, getIsFavoriteFilmsLoading} from '../../store/films-process/selectors';
import {loadFavoriteFilms} from '../../store/action';
import Spinner from '../../components/spinner/spinner';
import {useEffect} from 'react';


function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFavoriteFilms());
  }, [dispatch]);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);
  const films = useAppSelector(getFavoriteFilms);

  if (isFavoriteFilmsLoading) {
    return (<Spinner/>);
  }
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
