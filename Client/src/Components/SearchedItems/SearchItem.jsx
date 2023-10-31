import React from 'react';
import "./SearchItem.css"

const SearchItem = () => {
    return (
        <div className="listViewCard">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt=""
                className='listViewCardIMG'
            />
            <div className="viewCardInfo">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="viewCardDetails">
                <div className="viewCardDetailsRating">
                    <span className="RatingRemark">Excellent</span>
                    <span className="ratingMark">8.7</span>
                </div>
                <div className="hotelCost">
                    <div className="cost">$112</div>
                    <div className="hotelTax">Includes Taxes and Fees</div>
                </div>
                <button className="detailsButton">See availablity</button>
            </div>
        </div>
    )
}

export default SearchItem