import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchedItems/SearchItem'

const List = () => {


  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [count, setCount] = useState(location.state.count);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);



  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsHeading">Search</h1>
            <div className="lsDestination">
              <label className='lsDeslabel'>Destination</label>
              <input type="text" placeholder={destination} className='lsDesInput' />
            </div>
            <div className="lsDate">
              <label className='lsDeslabel'>Date</label>
              <div className='lsDesInput' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</div>
            </div>
            {openDate && <DateRange
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
            />}
            <div className="lsOptions">
              <h1 className='lsOptionSubHeading'>Options</h1>
              <div className="lsOption">
                <label className='lsOptionLabel'>Min price(per night)</label>
                <input className='lsOptionInput' />
              </div>
              <div className="lsOption">
                <label className='lsOptionLabel'>Max price(per night)</label>
                <input className='lsOptionInput' />
              </div>
              <div className="lsOption">
                <label className='lsOptionLabel'>Adults</label>
                <input className='lsOptionInput' min={1} placeholder={count.adult} />
              </div>
              <div className="lsOption">
                <label className='lsOptionLabel'>Children</label>
                <input className='lsOptionInput' min={0} placeholder={count.children} />
              </div>
              <div className="lsOption">
                <label className='lsOptionLabel'>Rooms</label>
                <input className='lsOptionInput' min={1} placeholder={count.room} />
              </div>
            </div>
            <button className='listButton'>Search</button>
          </div>
          <div className="listView">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>

      </div>
    </div>
  )
}

export default List