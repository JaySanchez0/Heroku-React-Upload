import React, { useState } from 'react';
import './Index.css'
import MainBar from './MainBar/MainBar';
import Slider from './Silder/Slider';
export default function Index(){
    const [dat,setDat] = useState(0);
    var li = [{text:"Crea nuevas actividades",imagen:"img"},{text:"Crea Appp",imagen:"img"}]
    return(<div>
        <MainBar/>
        <Slider data={li[Math.abs(dat%2)]} 
            onLeftClick={()=> setDat(dat-1)}
            onRightClick = {()=>setDat(dat+1)}
            />
    </div>)
}