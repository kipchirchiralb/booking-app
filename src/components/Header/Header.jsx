import './Header.css'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faPlane,faPerson, faCar, faTaxi, faUmbrellaBeach, faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Header( {type} ) {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        rooms: 1,
    })

    const handleOption = (name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]: operation === "i" ? options[name]+1 : options[name]-1
        }})
        
    }
      
  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxi</span>
                </div>
            </div>

            {type !=="list" &&
            <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account.</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSeacrhItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText" >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}  </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                        
                    </div>
                    <div className="headerSeacrhItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText" >{`${options.adults} adult . ${options.children} children . ${options.rooms} rooms`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adults <= 1} className="optionCounterButton" onClick={()=>handleOption("adults", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adults}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adults", "i")}>+</button> 
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton"onClick={()=>handleOption("children", "i")}>+</button> 
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button disabled={options.rooms<=1} className="optionCounterButton" onClick={()=>handleOption("rooms", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.rooms}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("rooms", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}
