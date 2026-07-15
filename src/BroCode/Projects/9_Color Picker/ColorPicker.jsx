import React, {useState} from "react"
React

function ColorPicker () {

    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{background: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )

}

export default ColorPicker