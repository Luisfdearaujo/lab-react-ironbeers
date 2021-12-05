import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RandomBeerPage() {
  const [RandomBeer, setRandomBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { beerId } = useParams();
  const navigate = useNavigate();

  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/random`); //getting data from the API
      const oneBeerData = response.data;

      setRandomBeer(oneBeerData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading)
    return (
      <img
        src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
        alt="spinner"
      />
    );

  return (
    <div>
      <h2>Beer Details</h2>

      <img
        src={RandomBeer.image_url}
        alt=""
        style={{ height: '100px', overflow: 'scroll' }}
      />
      <h2> {RandomBeer.name} </h2>
      <h4> {RandomBeer.tagline} </h4>
      <p>
        <b>{RandomBeer.first_brewed}</b>
      </p>
      <h4> {RandomBeer.attenuation_level} </h4>
      <h4> {RandomBeer.description} </h4>
      <p>{RandomBeer.contributed_by}</p>

      <button onClick={() => navigate(-1)}> Back</button>
    </div>
  );
}

export default RandomBeerPage;
