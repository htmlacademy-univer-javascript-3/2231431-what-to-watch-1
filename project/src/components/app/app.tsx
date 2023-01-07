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
import ReviewType from '../../types/review-type';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filterFilmsByCurrentGenre} from '../../store/action';
import Spinner from '../spinner/spinner';

type AppProps = {
  reviews: ReviewType[];
}

function App(props: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(filterFilmsByCurrentGenre());
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading) {
    return (<Spinner/>);
  }
  else {
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
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmPageScreen reviews={props.reviews} />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
