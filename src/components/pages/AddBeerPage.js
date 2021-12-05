import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBreweres_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleFirstBrewed = (e) => setFirst_brewed(e.target.value);
  const handleBreweresTips = (e) => setBreweres_tips(e.target.value);
  const handleAtennuationLevel = (e) => setAttenuation_level(e.target.value);
  const handleContributedBy = (e) => setContributed_by(e.target.value);

  const handleSubmit = async (e) => {
    try {
      // prevent page reload on submit
      e.preventDefault();

      const newBeer = {
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by,
      };

      await axios.post(`${apiURL}/new`, newBeer);

      // Clear the inputs
      setName('');
      setTagline('');
      setFirst_brewed('');
      setBreweres_tips('');
      setAttenuation_level('');
      setContributed_by('');

      navigate('/'); // Navigate to the home page
    } catch (error) {
      setErrorMessage('Something went wrong. Try again');
      setTimeout(() => setErrorMessage(undefined), 2000);
    }
  };

  return (
    <div className="AddBeerPage">
      {errorMessage && <p>{errorMessage}</p>}
      <h3>Add New Beer</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />

        <label>Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBreweresTips}
        />

        <label>Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAtennuationLevel}
        />

        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedBy}
        />

        <button type="submit"> Create Beer </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
