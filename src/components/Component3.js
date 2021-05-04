import React from 'react'
import {Image} from 'react-bootstrap'
import image1 from './images/image1.png'
import FadeIn from 'react-fade-in'
import '../App.js'
import Fade from 'react-reveal/Fade';
const Component3 = () => {
    return (
        <div>
             <Fade>
             <Image id='img1' src={image1} alt='pic' fluid width={950}/>
            </Fade>
            
        </div>
    )
}

export default Component3
