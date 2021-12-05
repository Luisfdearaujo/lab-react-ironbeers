import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../../assets/beers.png';
import randomBeerImg from '../../assets/random-beer.png';
import newBeerImg from '../../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/beers">
          <div>
            <img src={beersImg} alt="" />
            <h2>All Beers</h2>
            <p>
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              id architecto similique. Possimus rem illo illum perspiciatis
              sapiente pariatur similique ad aliquid, quae ratione sequi
              voluptatibus? Deleniti voluptates eum illum!{' '}
            </p>
          </div>
        </Link>
      </div>

      <div className="second-part">
        <Link to="/random-beer">
          <div>
            <img src={randomBeerImg} alt="random" />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              ad adipisci repellat, nobis, temporibus explicabo ea officia
              quaerat ipsam aut perferendis rem eaque aliquam cum porro modi
              fuga odit eos.
            </p>
          </div>
        </Link>
      </div>

      <div className="second-part">
        <Link to="/new-beer">
          <div>
            <img src={newBeerImg} alt="random" />
            <h2>New Beer</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              assumenda fugit consectetur molestias ducimus! Dignissimos,
              voluptas delectus deleniti vero quos minima architecto
              exercitationem sint nulla excepturi earum rem, sunt ullam!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
