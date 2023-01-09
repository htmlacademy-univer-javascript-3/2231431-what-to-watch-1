import {useAppDispatch, useAppSelector} from '../../hooks';
import {logout} from '../../store/action';

function SignOut() {
  const dispatch = useAppDispatch();
  const avatarImage = useAppSelector((state) => state.user?.avatarUrl);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatarImage} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <button onClick={() => dispatch(logout())} className="user-block__link reset-default-button-style">Sign out</button>
      </li>
    </ul>
  );
}

export default SignOut;
