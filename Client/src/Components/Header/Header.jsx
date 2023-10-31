import { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCab,
  faCalendarDay,
  faCity,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);
  const [destination, setDestination] = useState("");
  const [count, setCount] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });
  const navigate=useNavigate();

  const handleOption = (name, operation) => {
    setCount((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? count[name] + 1 : count[name] - 1,
      };
    });
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSubmit=()=>{
      navigate("/hotels", {state : {destination,date,count}})
  }


  return (
    <div className="header">
      <div className={type=="list" ? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCab} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCity} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && 
          <>
            <h1 className="headerTitle">
              A Lifetime of Discounts? It's Special
            </h1>
            <p className="headerDescription">
              Get rewards for your travels-unlock instant saving od 10% or more
              with a free Hotel_Booking account.
            </p>
            <button className="headerButton">Register Here</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchDate"
                >{`${format(date[0].startDate, "MM-dd-yyyy")} to ${format(
                  date[0].endDate,
                  "MM-dd-yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenAcc(!openAcc)}
                  className="headerSearchText"
                >
                  {`${count.adult}-adult ,${count.children}-children,${count.room}-room`}
                </span>
                {openAcc && (
                  <div className="accomodation">
                    <div className="searchSelectOption">
                      <span>Adult</span>
                      <div className="searchSelectOptionButtonBox">
                        <button
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                        {count.adult}
                        <button
                          disabled={count.adult <= 1}
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="searchSelectOption">
                      <span>Children</span>
                      <div className="searchSelectOptionButtonBox">
                        <button
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                        {count.children}
                        <button
                          disabled={count.children <= 1}
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="searchSelectOption">
                      <span>Rooms</span>
                      <div className="searchSelectOptionButtonBox">
                        <button
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                        {count.room}
                        <button
                          disabled={count.room <= 1}
                          className="searchSelectOptionButtons"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSubmit}>Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
