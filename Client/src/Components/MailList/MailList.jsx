import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mailListContainer">
      <div className="mailListHeading">Save Time,Save Money!</div>
      <div className="mailListContent">
        Sign up! We will send you the best deals
      </div>
      <div className="mailBox">
        <input className="mailBoxInput" placeholder="Your email" />
        <button className="mailBoxButton">Subscribe</button>
      </div>
      <div className="mailListCheckboxContainer">
        <label>
          <input type="checkbox"  className="mailListCheckbox"/>
          Send me a link to get the freeBooking.com app!
        </label>
      </div>
    </div>
  );
};

export default MailList;
