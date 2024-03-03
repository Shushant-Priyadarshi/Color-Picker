import { useState } from "react";

export default function Colorpicker(){
    let[color,setColor] =useState("#FFFFFF");

    const handleColor=(e)=>{
        setColor(e.target.value);
    }
    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p><b>{color}</b></p>
            </div>

            <label form="color" >Select your color</label>
            <input type="color" id="color" value={color} onChange={handleColor}></input>
        </div>
    );
}   