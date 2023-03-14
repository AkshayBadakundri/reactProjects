import React from 'react'

const Table=(props)=> {
    let data1 =props.data;
  return (
    <div>
        <table border='2px' >
            <tr>
            <th>stdphoto</th>
            <th>stdname</th>
            <th>college</th>               
            <th>Qualification</th>
            <th>location</th>
            <th>branch</th>
            <th>number</th>
            </tr>

            {data1.map((x)=>{
                return <tr>
                    <td><img src={x.stdphoto} alt="" style={{height:"50px",width:"50px"}} /></td>
                    <td>{x.stdname}</td>
                    <td>{x.collage}</td>
                    <td>{x.Qualification}</td>
                    <td>{x.location}</td>
                    <td>{x.branch}</td>
                    <td>
                        <ol>
                            {x.numbe.map((x)=>{
                                return <li>{x}</li>
                            })}
                        </ol>
                    </td>
                </tr>
            })}
        </table>
    </div>
  )
}

export default Table;
