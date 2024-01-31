import React, { useState } from 'react'
import './style.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Grid = ({ coin,isWatchlistPage}) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h<0 && 'grid-container-red'}`} style={{display:isWatchlistPage&&!added && 'none'}}>
      <div className='info-flex'>
        <img src={coin.image} className='coin-logo' alt=''/>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      <IconButton className='ico'
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
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
      </div>

        {coin.price_change_percentage_24h>0?(<div className='chip-flex'>
          <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
        <div className='icon-chip'><TrendingUpIcon/></div>
        </div>)
        :<div className='chip-flex'>
        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
        <div className='icon-chip chip-red'><TrendingDownIcon/></div>
      </div>}
      <div className='info-container'>
        <h3 className='coin-price coin-price-mobile' style={{color:coin.price_change_percentage_24h>0?'var(--green)':'var(--red)'}}>${coin.current_price.toLocaleString()}</h3>
      </div>
      <p className='total_volume'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
      <p className='total_volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
    </div>
    </Link>
  )
}

export default Grid
