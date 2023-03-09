import React from "react";
// import Nav from './components/Nav';
import './global.css';
// import Login from './ClassBasedComponentes/Login';
// import Signup from './ClassBasedComponentes/Signup';
// import Cancel from './ClassBasedComponentes/Cancel';
// import Logout from './ClassBasedComponentes/Logout';
// import Like from './ClassBasedComponentes/Like';
// import Dp from './ClassBasedComponentes/Dp';
// import Profile from './ClassBasedComponentes/Profile';
// import Story from './ClassBasedComponentes/Story';
// import Comments from './ClassBasedComponentes/Comments';
// import Submit from './ClassBasedComponentes/Submit';
// import Send from './FunctionBasedComponents/Send';
// import Post from './FunctionBasedComponents/Post';
// import Block from './FunctionBasedComponents/Block';
// import Delete from './FunctionBasedComponents/Delete';
// import Friends from './FunctionBasedComponents/Friends';
// import Follow from './FunctionBasedComponents/Follow';
// import Msg from './FunctionBasedComponents/Msg';
// import Reels from './FunctionBasedComponents/Reels';
// import Save from './FunctionBasedComponents/Save';
// import Mention from './FunctionBasedComponents/Mention';
// import Assignment from './dedicatedCssTopic/Assignment';
// import Netflix from './practice/Netflix';
// import Nav1 from './dedicatedCssTopic/props/Nav1';
import Img from './props/Img';
import photo from './shiva.jpg'
function App() {
  return(
    <>
    {/* class based components */}
    {/* <Nav/>
   <Login/>
   <Signup/>
   <Submit/>
  <Cancel/>
  <Logout/>
  <Like/>
  <Dp/>
  <Profile/>
  <Story/>
  <Comments/>*/}
  {/* function based components */}
  {/*<Send/>
  <Post/>
  <Block/>
  <Delete/>
  <Friends/>
  <Follow/>
  <Msg/>
  <Reels/>
  <Save/>
  <Mention/> */}
{/* ***********assignment 4/3/2023******** */}
{/* <Assignment/> */}


  {/* //*******************practice******************* */}
  {/* <Netflix/> */}

{/* *********props ************* */}
{/* <Nav1 data="akshay"  /> */}

{/* image insertion */}
<Img data={photo}/>
   </>
    )
  
}

export default App;
