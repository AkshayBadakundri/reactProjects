import React from 'react'

const Fetch = (props) => {
  return (
    <div className='maindata'>
        <div className='data1'>
            <img src={props.details[0].stdPhoto} alt="" />
            <h1>{props.details[0].stdName}</h1>
            <h2>{props.details[0].college}</h2>
            <h2>{props.details[0].Qualification}</h2>
            <h2>{props.details[0].location}</h2>
            <h2>{props.details[0].brnch}</h2>
            <h2>{props.details[0].course}</h2>
        </div>
        <div className='data1'>
            <img src={props.details[1].stdPhoto} alt="" />
            <h1>{props.details[1].stdName}</h1>
            <h2>{props.details[1].college}</h2>
            <h2>{props.details[1].Qualification}</h2>
            <h2>{props.details[1].location}</h2>
            <h2>{props.details[1].brnch}</h2>
            <h2>{props.details[1].course}</h2>
        </div>

         <div className='data1'>
            <img src={props.details[2].stdPhoto} alt="" />
            <h1>{props.details[2].stdName}</h1>
            <h2>{props.details[2].college}</h2>
            <h2>{props.details[2].Qualification}</h2>
            <h2>{props.details[2].location}</h2>
            <h2>{props.details[2].brnch}</h2>
            <h2>{props.details[2].course}</h2>
        </div>
        <div className='data1'>
            <img src={props.details[3].stdPhoto} alt="" />
            <h1>{props.details[3].stdName}</h1>
            <h2>{props.details[3].college}</h2>
            <h2>{props.details[3].Qualification}</h2>
            <h2>{props.details[3].location}</h2>
            <h2>{props.details[3].brnch}</h2>
            <h2>{props.details[3].course}</h2>
        </div>
        <div className='data1'>
            <img src={props.details[1].stdPhoto} alt="" />
            <h1>{props.details[1].stdName}</h1>
            <h2>{props.details[1].college}</h2>
            <h2>{props.details[1].Qualification}</h2>
            <h2>{props.details[1].location}</h2>
            <h2>{props.details[1].brnch}</h2>
            <h2>{props.details[1].course}</h2>
        </div>
        <div className='data1'>
            <img src={props.details[1].stdPhoto} alt="" />
            <h1>{props.details[1].stdName}</h1>
            <h2>{props.details[1].college}</h2>
            <h2>{props.details[1].Qualification}</h2>
            <h2>{props.details[1].location}</h2>
            <h2>{props.details[1].brnch}</h2>
            <h2>{props.details[1].course}</h2>
        </div>
    </div>
  )
}

export default Fetch
