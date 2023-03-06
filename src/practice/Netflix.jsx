import React from 'react'
import STYLE from './netflix.module.css'
 function netflix() {
  return (
    <div className={STYLE.nav1}>
        <ul>
            <li>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP01-fehkOLzF5I5xYl9VdurQqqGPjes7jg&usqp=CAU" alt="" />
            </li>
            <li><a href=""> Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Contects</a></li>
            <li><input type="search" placeholder='search' /></li>
            <li><button>Signup</button></li>
            <li><button>login</button></li>
        </ul>
    </div>
  )
}
export default netflix;