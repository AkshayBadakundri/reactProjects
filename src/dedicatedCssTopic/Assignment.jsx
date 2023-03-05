import React from 'react'
import STYLE from "./Assignment.module.css"
const Assignment = () => {
  return (
    <>
    <div className={STYLE.flipkart}>
        <div className={STYLE.nav1111}>
       <h1 className={STYLE.nav1}>Flipkart</h1>
       <h2 className={STYLE.nav11}>Explore<span className={STYLE.na}> Plus +</span></h2>
       </div>
       <div class={STYLE.nav123}>
        <ul>
        <li><input type="text" placeholder='Search for the item'/></li>
        <li><button>Login</button></li>
        <li><a href="">Become a Seller</a></li>
        <li><a href="">More</a></li>
        <li><a href="">Cart</a></li>
        </ul>
       </div>

    </div>
    <br />  
 


    <div className={STYLE.Amazon}>
        <div className={STYLE.nav2}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyEHz_X4xmX_8jf_wRxuKYsO0irnfmPdOSA&usqp=CAU" alt="" />
       </div>
       <div className={STYLE.nav22}> 
        <ul>
            <li><a href=""> Amazon miniTv</a></li>
            <li><a href="">Best sellars</a></li>
            <li><a href="">Mobiles</a></li>
            <li><a href="">Customer Services</a></li>
            <li><a href="">Today's Deal</a></li>  
           
        </ul>
       </div>
    </div>
    <br />

    <div className={STYLE.meesho}>
        <div className={STYLE.nav3}>
          <h1>meesho</h1>
           <div/>          
       <div className={STYLE.nav33}> 
        <ul>
            <li> <input typeplaceholder='Try Saree,Kurti or Search by product'/></li>
            <li><a href="">Download  App</a></li>
            <li><a href="">Become a supplier</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Cart</a></li>  
            
        </ul>
       </div>
    </div>
   
    </div>
    <br />


    <div className={STYLE.myntra}>
        <div className={STYLE.nav4}>
           <h1>Myntra</h1>
            </div>
       <div className={STYLE.nav44}> 
        <ul>
            <li><a href="">Men </a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Home & Living</a></li>
            <li><a href="">Beauty</a></li> 
            <li><a href="">Studio</a></li>
           
        </ul>
       </div>
    </div>
    <br />

    <div className={STYLE.nav555}>
     <h1>Ajio</h1>
       <div className={STYLE.nav55}> 
        <ul>
            <li><a href="">Men </a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kids</a></li>
            <li><a href="">Indie</a></li>
            <li><a href="">home and Kitchen</a></li> 
            
           
        </ul>
       </div>
    </div>
    </>
  )
}

export default Assignment;