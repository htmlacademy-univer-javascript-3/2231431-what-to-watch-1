import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getIsAuthorizationInProgress} from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorizationInProgress = useAppSelector(getIsAuthorizationInProgress);

  if (isAuthorizationInProgress) {
    return (<Spinner/>);
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
