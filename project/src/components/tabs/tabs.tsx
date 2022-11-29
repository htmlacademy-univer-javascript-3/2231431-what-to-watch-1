import FilmType from "../../types/film-type";
import Overview from "../overview/overview";
import {useState} from "react";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import ReviewType from "../../types/review-type";

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
          <li className={`film-nav__item ${selectedTab === TabNames.Overview && 'film-nav__item--active'}`}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Overview)}>Overview</a>
          </li>
          <li className={`film-nav__item ${selectedTab === TabNames.Details && 'film-nav__item--active'}`}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Details)}>Details</a>
          </li>
          <li className={`film-nav__item ${selectedTab === TabNames.Reviews && 'film-nav__item--active'}`}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Reviews)}>Reviews</a>
          </li>
        </ul>
      </nav>

      {selectedTab === TabNames.Overview && <Overview film={props.film} />}
      {selectedTab === TabNames.Details && <Details film={props.film} />}
      {selectedTab === TabNames.Reviews && <Reviews reviews={props.reviews} />}

    </div>
  );
}

export default Tabs;
