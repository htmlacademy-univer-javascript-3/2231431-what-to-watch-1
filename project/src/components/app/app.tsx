import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  nameFilm: string;
  genreFilm: string;
  releaseYearFilm: number;
}

function App(props: AppProps): JSX.Element {
  return <MainScreen {...props}/>;
}

export default App;
