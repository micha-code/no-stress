import React, { useRef } from 'react';
import './style.css';
import database from '../Database/Database.js';
import { countries } from '../Data/countries';

const AddNew = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(form.current);

    database
      .collection('Places')
      .add({
        name: data.get('name'),
        country: data.get('country'),
        latitude: Number(data.get('latitude')),
        longitude: Number(data.get('longitude')),
        category: data.get('category'),
        text: data.get('text'),
        link: data.get('link'),
        map: data.get('map'),
      })
      .then(function (docRef) {
        console.log('document with ID', docRef.id);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <div className="icon-bar">
        <a
          href="https://www.facebook.com/nostresstravelguide"
          className="facebook"
        >
          <img
            src="images/fb.svg"
            width="30"
            height="30"
            className="icon"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/nostresstravelguide/"
          className="instagram"
        >
          <img
            src="images/instagram.svg"
            width="30"
            height="30"
            className="icon"
            alt="Instagram"
          />
        </a>
        <a href="mailto:nostresstravelguide@gmail.com " className="email">
          <img
            src="images/email.svg"
            width="30"
            height="30"
            className="icon"
            alt="email"
          />
        </a>
      </div>

      <h1>Add new!</h1>
      <p className="intro">
        Are you an avid traveller? Do you know about any hidden gem in a remote
        region? Or maybe you have a favorite cafe in your home town, that you
        wish to support and where fellow adventurous girls would appreciate a
        visit? Now it is your time to shine! Share your tips, tricks and
        recommendations with others!
      </p>

      <form className="form" ref={form} onSubmit={handleSubmit}>
        <div>
          <label>
            ADD NAME <br></br>
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            SELECT CATEGORY:
            <br />
            <select name="category">
              <option value="meTime">Me Time</option>
              <option value="mustDo">Must Do</option>
              <option value="restaurant">Food/Drinks</option>
              <option value="accomodation">Accomodation</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            ADD DESCRIPTION<br></br>
            <input type="text" name="text" />
          </label>
        </div>
        <div>
          <label>
            ADD WEBSITE<br></br>
            <input type="url" name="link" />
          </label>
        </div>
        <div>
          <label>
            SELECT COUNTRY<br></br>
            <select name="country">
              {countries.map((country) => (
                <option key={country.country} value={country.country}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            ADD ADDRESS, please insert link to Google map <br></br>
            <input type="url" name="map" />
          </label>
        </div>
        <div>
          <label>
            ADD LATITUDE<br></br>
            <input type="text" name="latitude" />
          </label>
          <br></br>
          <label>
            ADD LONGTUDE<br></br>
            <input type="text" name="longitude" />
          </label>
        </div>
        <div>
          <button className="submit__btn" type="submit">
            SUBMIT
            <img
              src="images/submit.svg"
              alt="SUBMIT"
              width="16"
              className="submit"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNew;
