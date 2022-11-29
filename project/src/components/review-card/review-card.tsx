type ReviewProps = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  }
}

function getShortDateString(dateString: string) {
  const date = new Date(dateString);
  return(`${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`)
}

function getLongDateString(dateString: string) {
  const date = new Date(dateString);
  return(`${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`)
}

function ReviewCard(props:ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{props.user.name}</cite>
          <time className="review__date" dateTime={getShortDateString(props.date)}>{getLongDateString(props.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.rating}</div>
    </div>
  )
}

export default ReviewCard;
