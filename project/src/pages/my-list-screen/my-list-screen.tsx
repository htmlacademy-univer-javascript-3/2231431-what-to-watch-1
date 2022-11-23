import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import FilmType from '../../types/film-type';
import FilmList from '../../components/film-list/film-list';


type MyListScreenProps = {
  films: FilmType[];
}

function MyListScreen(props: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{props.films.length}</span></h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={props.films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
