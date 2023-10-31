import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    
    <div className="propertyList">
      <div className="PopertyEach">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="propertyImg"
        />
        <h1 className="propertyH1">Hotels</h1>
        <h2 className="propertyH2">244 Hotels</h2>
      </div>
      <div className="PopertyEach">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="propertyImg"
        />
        <h1 className="propertyH1">Apartments</h1>
        <h2 className="propertyH2">244 Apartments</h2>
      </div>
      <div className="PopertyEach">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="propertyImg"
        />
        <h1 className="propertyH1">Cabin</h1>
        <h2 className="propertyH2">244 Cabins</h2>
      </div>
      <div className="PopertyEach">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="propertyImg"
        />
        <h1 className="propertyH1">HomeStay</h1>
        <h2 className="propertyH2">244 Homestays</h2>
      </div>
      <div className="PopertyEach">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="propertyImg"
        />
        <h1 className="propertyH1">Villa</h1>
        <h2 className="propertyH2">244 Villas</h2>
      </div>
    </div>
  );
};

export default PropertyList;
