import React from 'react'
import './HomeCard.scss'

export default function HomeCard() {
  return (
    <div className='is_card_banner'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqY-LUauRatjhhXPfWpjlgpbiCpM-BhWiLQ&usqp=CAU" alt="" />
        <div className='is_card_text'>
            <h3>Iphone 13 Pro Max</h3>
            <div className='is_card_2nd_text'>
                <p>Harga LCD</p>
                <p>Rp. 1.000.000,-</p>
            </div>
            <div className='is_before_card'></div>
        </div>
    </div>
  )
}
