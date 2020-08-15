import React from 'react';
import './Slider.css';

export default function Slider(props){
    return (<div className="slider">
        <div id="left" onClick={()=>props.onLeftClick()}><span className="material-icons">keyboard_arrow_left</span></div>
        <div id="center">{props.data.text}</div>
        <div id="right" onClick={()=>props.onRightClick()}><span className="material-icons"> keyboard_arrow_right</span></div>
    </div>)
}