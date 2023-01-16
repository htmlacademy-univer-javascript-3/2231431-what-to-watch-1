import {useAppDispatch, useAppSelector} from '../../hooks';
import {logout} from '../../store/action';
import {getUser} from '../../store/user-process/selectors';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function SignOut() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const avatarImage = user?.avatarUrl;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={avatarImage} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <button onClick={() => dispatch(logout())} className="user-block__link reset-default-button-style">Sign out</button>
      </li>
    </ul>
  );
}

export default SignOut;
