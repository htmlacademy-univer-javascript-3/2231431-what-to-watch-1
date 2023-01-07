import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import FilmList from '../../components/film-list/film-list';
import {useAppSelector} from '../../hooks';


function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);
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
