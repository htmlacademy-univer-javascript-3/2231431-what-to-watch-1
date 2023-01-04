import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmPageScreen from '../../pages/film-page-screen/film-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import FilmType from '../../types/film-type';
import ReviewType from '../../types/review-type';
import {useAppDispatch} from "../../hooks";
import {fillFilms, filterFilmsByCurrentGenre} from "../../store/action";

type AppProps = {
  films: FilmType[];
  reviews: ReviewType[];
}

function App(props: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fillFilms(props.films))
  dispatch(filterFilmsByCurrentGenre())

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen films={props.films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPageScreen films={props.films} reviews={props.reviews} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen films={props.films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={props.films} />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
