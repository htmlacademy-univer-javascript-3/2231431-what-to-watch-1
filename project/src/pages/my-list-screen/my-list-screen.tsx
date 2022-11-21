import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard imgSrc={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
            imgAlt={'Fantastic Beasts: The Crimes of Grindelwald'}
            filmName={'Fantastic Beasts: The Crimes of Grindelwald'}
          />

          <FilmCard imgSrc={'img/bohemian-rhapsody.jpg'}
            imgAlt={'Bohemian Rhapsody'}
            filmName={'Bohemian Rhapsody'}
          />

          <FilmCard imgSrc={'img/macbeth.jpg'}
            imgAlt={'Macbeth'}
            filmName={'Macbeth'}
          />

          <FilmCard imgSrc={'img/aviator.jpg'}
            imgAlt={'Aviator'}
            filmName={'Aviator'}
          />


          <FilmCard imgSrc={'img/we-need-to-talk-about-kevin.jpg'}
            imgAlt={'We need to talk about Kevin'}
            filmName={'We need to talk about Kevin'}
          />

          <FilmCard imgSrc={'img/what-we-do-in-the-shadows.jpg'}
            imgAlt={'What We Do in the Shadows'}
            filmName={'What We Do in the Shadows'}
          />

          <FilmCard imgSrc={'img/revenant.jpg'}
            imgAlt={'Revenant'}
            filmName={'Revenant'}
          />

          <FilmCard imgSrc={'img/johnny-english.jpg'}
            imgAlt={'Johnny English'}
            filmName={'Johnny English'}
          />

          <FilmCard imgSrc={'img/shutter-island.jpg'}
            imgAlt={'Shutter Island'}
            filmName={'Shutter Island'}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
