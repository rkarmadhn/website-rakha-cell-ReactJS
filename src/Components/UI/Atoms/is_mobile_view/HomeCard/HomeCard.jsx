import React, { useState } from 'react'
import './HomeCard.scss'

export default function HomeCard() {
  const [isClick, setIsClick] = useState(false)
  function handleShowText() {
    setIsClick(!isClick)
  }
  return (
    <div className={`is_card_banner ${isClick ? 'is_click' : ''}`}>
        <img src="https://asset.kompas.com/crops/o7GotfNUVZYZrcmCaQJD1TF5084=/92x0:1105x675/750x500/data/photo/2021/11/19/6197114195885.jpg" alt="Iphone 13 Pro Max" />
        <div className='is_card_text' onClick={handleShowText}>
            <h3>Iphone 13 Pro Max</h3>
            <div className='is_card_2nd_text'>
                <p>Harga LCD</p>
                <p>Rp. 1.000.000,-</p>
            </div>
        </div>
    </div>
  )
}
