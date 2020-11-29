import React from 'react';
import './style.css';

const AddNew = () => {
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
        <a href="nostresstravelguide@gmail.com " className="email">
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis tempore
        dolor, maxime iure eos impedit veritatis. Eveniet optio obcaecati quos
        impedit error magnam voluptatem perferendis consequuntur similique illo!
        Rerum debitis dolorum quo beatae rem at velit, omnis maxime ipsam
        necessitatibus non, harum minima nostrum impedit autem, ut voluptas
        corrupti! Ipsum.
      </p>

      <form>
        <div>
          <label>
            ADD NAME
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
            ADD DESCRIPTION
            <input type="text" name="text" />
          </label>
        </div>
        <div>
          <label>
            ADD WEBSITE
            <input type="url" name="link" />
          </label>
        </div>
        <div>
          <label>
            ADD ADDRESS
            <input type="url" name="map" />
          </label>
        </div>
        <div>
          <label>
            ADD LATITUDE
            <input type="number" name="latitude" />
          </label>
          <label>
            ADD LONGTUDE
            <input type="number" name="longitude" />
          </label>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      <footer className="footer">Czechitas project 2020</footer>
    </>
  );
};

export default AddNew;
