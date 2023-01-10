import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import {Link, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import {useAppSelector} from '../../hooks';
import SignIn from '../../components/sign-in/sign-in';


function AddReviewScreen() {
  const film = useAppSelector((state) => state.currentFilm);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  if (!film){
    return (<Navigate to={AppRoute.NotFound} />);
  }
  else
  {return (
    <section style={{'background': `${film.backgroundColor}`}} className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />

    </section>
  );}
}

export default AddReviewScreen;
