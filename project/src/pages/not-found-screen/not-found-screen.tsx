import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={AppRoute.Main}>На главную страницу</Link>
    </>);
}
export default NotFoundScreen;
