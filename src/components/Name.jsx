import { useState } from 'react';
import './Name.css';

function Name(){
    const [hovered, setHovered] = useState(null);

    console.log(hovered);
    
    return(
        <div className='name'>
            <div className='toyoshima'
            onMouseEnter={() => setHovered("index")} // マウスが要素に入ったとき
            onMouseLeave={() => setHovered(null)}
            >
                <h1>
                    "Yutaka<br></br>
                    &nbsp;&nbsp;Toyoshima"
                </h1>
                <p>"豊島&nbsp;豊"</p>
            </div>
        </div>
    )
}

export default Name;