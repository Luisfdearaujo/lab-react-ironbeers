import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers`); //getting data from the API
      try {
        const beersData = response.data;
        console.log(beersData); //to check the information

        setBeers(beersData);
      } catch (error) {
        console.log('ERROR:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <img
        src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
        alt=""
      />
      <h3>List of Beers</h3>
      {beers &&
        beers.map((beer) => {
          return (
            <div className="card">
              <div>
                <img
                  src={beer.image_url}
                  alt=""
                  style={{ height: '100px', overflow: 'scroll' }}
                />
              </div>

              <div className="text-description">
                <Link to={'/beers/' + beer._id}>
                  <h2> {beer.name} </h2>
                </Link>
                <h4> {beer.tagline} </h4>
                <p>{beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
