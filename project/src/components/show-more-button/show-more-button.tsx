type ShowMoreButtonProps = {
  buttonClickHandler: () => void;
}

function ShowMoreButton(props: ShowMoreButtonProps){
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.buttonClickHandler}>Show more</button>
    </div>);
}

export default ShowMoreButton;
