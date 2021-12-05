import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { beerId } = useParams();
  const navigate = useNavigate();

  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/${beerId}`); //getting data from the API
      const oneBeerData = response.data;

      setBeer(oneBeerData);
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
        src={beer.image_url}
        alt=""
        style={{ height: '100px', overflow: 'scroll' }}
      />
      <h2> {beer.name} </h2>
      <h4> {beer.tagline} </h4>
      <p>
        <b>{beer.first_brewed}</b>
      </p>
      <h4> {beer.attenuation_level} </h4>
      <h4> {beer.description} </h4>
      <p>{beer.contributed_by}</p>

      <button onClick={() => navigate(-1)}> Back</button>
    </div>
  );
}

export default BeerDetailsPage;
