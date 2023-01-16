import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="loader-wrapper" data-testid="spinner">
      <div className="loader" />
    </div>);
}

export default Spinner;
