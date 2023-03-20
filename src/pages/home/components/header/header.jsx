import { IconButton } from '@mui/material'
import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './header.css'

export const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <HighlightOffIcon color='secondary'/>
      </IconButton>
      <div className='header__titleWrap'>
        <h3 className='header__title'>Durger King</h3>
        <p className='header__subtitle'>bot</p>
      </div>
      <IconButton>
        <MoreHorizIcon color='secondary'/>
      </IconButton>
    </div>
  )
}
