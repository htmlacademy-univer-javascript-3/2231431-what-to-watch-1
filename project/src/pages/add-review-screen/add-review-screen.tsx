import SignOut from '../../components/sign-out/sign-out';
import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SignIn from '../../components/sign-in/sign-in';
import {getCurrentFilm, getIsFilmLoading} from '../../store/film-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useEffect} from 'react';
import {loadFilmById} from '../../store/action';
import Spinner from '../../components/spinner/spinner';


function AddReviewScreen() {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(loadFilmById(id));
  }, [id, dispatch]);

  const film = useAppSelector(getCurrentFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  if (isFilmLoading){
    return <Spinner />;
  }

  if (!film){
    return (<NotFoundScreen />);
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
