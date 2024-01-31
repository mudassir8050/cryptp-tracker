import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
import { IconButton, Tooltip } from "@mui/material";
import {convertNumbers} from '../../../functions/convertNumbers'
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";

const List = ({ coin,isWatchlistPage }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row" style={{ display: isWatchlistPage && !added && "none" }}>
        <Tooltip title='Coin Logo' placement="bottom-start">
      <td className="td-image">
        <img src={coin.image} className="coin-logo" alt="" />
      </td>
      </Tooltip>
      <Tooltip title='Coin Info'placement="bottom-start">
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      
      <Tooltip title='Price Change in 24hr'placement="bottom-start">
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex chip-flex-mobile">
          <div className="price-chip price-chip-desktop">
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpIcon />
          </div>
        </td>
        
      ) : (
        <td className="chip-flex chip-flex-mobile">
          <div className="price-chip price-chip-desktop chip-red">
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownIcon />
          </div>
        </td>
      )}
      </Tooltip>
      <Tooltip title='Current Price'placement="bottom">
      <td>
        <h3
          className="coin-price td-center-align"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      </Tooltip>
      <Tooltip title='Market Cap'placement="bottom">
      <td className="desktop-td-market">
      <p className="total_volume td-right-align">
          ${coin.market_cap.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <Tooltip title='Market Cap'placement="bottom">
      <td className="mobile-td-market">
      <p className="total_volume td-right-align">
          ${convertNumbers(coin.market_cap)}
        </p>
      </td>
      </Tooltip>
      <Tooltip title='Total Volume'placement="bottom">
      <td className="totalvol">
        <p className="total_volume td-right-align td-volume">
          ${coin.total_volume.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <td>
      <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                console.log("Removing from watchlist:", coin.id);
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                console.log("Adding to watchlist:", coin.id);
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
      </td>
    </tr>
    </Link>
  );
};

export default List;
