import FilmType from '../../types/film-type';
import FilmOverview from '../film-overview/film-overview';
import {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import ReviewType from '../../types/review-type';

type TabsProps = {
  film : FilmType;
  reviews : ReviewType[];
}

enum TabNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

function Tabs(props: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(TabNames.Overview);

  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={selectedTab === TabNames.Overview ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <button className="reset-default-button-style film-nav__link" onClick={() => setSelectedTab(TabNames.Overview)}>Overview</button>
          </li>
          <li className={selectedTab === TabNames.Details ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <button className="reset-default-button-style film-nav__link" onClick={() => setSelectedTab(TabNames.Details)}>Details</button>
          </li>
          <li className={selectedTab === TabNames.Reviews ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <button className="reset-default-button-style film-nav__link" onClick={() => setSelectedTab(TabNames.Reviews)}>Reviews</button>
          </li>
        </ul>
      </nav>

      {selectedTab === TabNames.Overview && <FilmOverview film={props.film} />}
      {selectedTab === TabNames.Details && <FilmDetails film={props.film} />}
      {selectedTab === TabNames.Reviews && <FilmReviews reviews={props.reviews} />}

    </div>
  );
}

export default Tabs;
