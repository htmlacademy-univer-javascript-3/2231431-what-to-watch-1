import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to="/">На главную страницу</Link>
    </>);
}
export default NotFoundScreen;
