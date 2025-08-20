import React, { useState } from "react";
import { Tooltip, Grow, Button } from "@mui/material"
import { watchlist } from "../data/data"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistAction(true);
  }
  const handleMouseLeave = (e) => {
    setShowWatchlistAction(true);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>
        <div className="itemInfo">
          <span className="percent">
            {stock.percent}
          </span>
          {stock.isDown ? (<KeyboardArrowDownIcon className="down" />) : (<KeyboardArrowUpIcon className="up" />)}
          <span className="price">
            {stock.price}
          </span>
        </div>
      </div>
      {showWatchlistAction && <WatchListActions uid={stock.name}/>}  
    </li>
  );


};

const WatchListActions = ({ uid }) => {

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
            <Button className="action"><BarChartOutlinedIcon /></Button>
          
        </Tooltip>
        <Tooltip
          title="More" placement="top" arrow TransitionComponent={Grow}>
          <Button className="action"><MoreHoriz /></Button>
        </Tooltip>
      </span>
    </span>
  );

}
