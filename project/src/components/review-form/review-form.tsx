import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addReview} from '../../store/action';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getCurrentFilm} from '../../store/film-process/selectors';

function ReviewForm() {
  const [reviewData, setReviewData] = useState({rating: 1, text: '',});

  const dispatch = useAppDispatch();

  const film = useAppSelector(getCurrentFilm);

  if (!film){
    return (<Navigate to={AppRoute.NotFound} />);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addReview({comment: reviewData.text, filmId: film.id, rating: reviewData.rating}));
  };

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setReviewData({...reviewData, [name]: value});
  };

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((rating) => (
              <Fragment key={rating}>
                <input className="rating__input"
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  onChange={fieldChangeHandle}
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </Fragment>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea required className="add-review__textarea"
            name="text"
            id="review-text"
            placeholder="Review text"
            value={reviewData.text}
            onChange={fieldChangeHandle}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
