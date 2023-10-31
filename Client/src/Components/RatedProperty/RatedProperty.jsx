import React from "react";
import "./RatedProperty.css";

const RatedProperty = () => {
  return (
    <div className="ratedPropertyContainer">
      <div className="ratedPropertyBox">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="ratedPropertyImg"
        />
        <h4>The Patio Barcelona</h4>
        <h1>Starting from 2,100$</h1>
        <div className="propertySubCategory">
          <div className="propertyRating">9.5</div>
          <p className="propertyComment">comments</p>
          <p className="propetyReviews">33 reviews</p>
        </div>
      </div>
      <div className="ratedPropertyBox">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="ratedPropertyImg"
        />
        <h4>The kara Bluten of Rome</h4>
        <h1>Starting from 2,100$</h1>
        <div className="propertySubCategory">
          <div className="propertyRating">8.5</div>
          <p className="propertyComment">comments</p>
          <p className="propetyReviews">73 reviews</p>
        </div>
      </div>
      <div className="ratedPropertyBox">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="ratedPropertyImg"
        />
        <h4>The Lunar CP</h4>
        <h1>Starting from 2,100$</h1>
        <div className="propertySubCategory">
          <div className="propertyRating">7.5</div>
          <p className="propertyComment">comments</p>
          <p className="propetyReviews">33 reviews</p>
        </div>
      </div>
      <div className="ratedPropertyBox">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="ratedPropertyImg"
        />
        <h4>The baggio Brazil</h4>
        <h1>Starting from 2,100$</h1>
        <div className="propertySubCategory">
          <div className="propertyRating">9.0</div>
          <p className="propertyComment">comments</p>
          <p className="propetyReviews">33 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default RatedProperty;
