import React, { useRef, useState } from "react";
import Slide from "./Slide";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({label, fontIcon, ariaButton, onEvent}) => {
    return (
        <div className="button-section">
        <button onClick={onEvent} className={label} aria-pressed={ariaButton} type="button">{fontIcon}{label}{fontIcon}</button>
        </div>
            );
}


const App = () => {
    const [touched, setTouched] = useState('');
    const galleryRef            =   useRef();
//button hooks
    const [ariaPressed, setAriaPressed] = useState(false); 
    const [faIconNext, setFaIconNext]           = useState(<FontAwesomeIcon icon={faForward} />);
    const [faIconPrev, setFaIconPrev]           = useState(<FontAwesomeIcon icon={faBackward} />);

const onMainTouchStart = () => {
    setTouched('touched');
}
const scrollNext = () => {
    galleryRef.current.scrollBy({
        top: 0,
        left: 625,
        behavior: 'smooth'
      });
}
const scrollPrev = () => {
    galleryRef.current.scrollBy({
        top: 0,
        left: -585,
        behavior: 'smooth'
      });
}

//next click
const onButtonNextClick = () => {
    scrollNext();
   if (ariaPressed === false){
        setAriaPressed(true); 
       setFaIconNext(<FontAwesomeIcon icon={faThumbsUp} />);
       setTimeout(() => {
        setAriaPressed(false);
        setFaIconNext(<FontAwesomeIcon icon={faForward} />);
     }, 600);
     console.log("button clicked");
     
   } else {
      setAriaPressed(false);
      setFaIconNext(<FontAwesomeIcon icon={faForward} />);
}
}
//prev click
const onButtonPrevClick = () => {
        scrollPrev();
    if (ariaPressed === false){
         setAriaPressed(true); 
        setFaIconPrev(<FontAwesomeIcon icon={faThumbsUp} />);
        setTimeout(() => {
         setAriaPressed(false);
         setFaIconPrev(<FontAwesomeIcon icon={faBackward} />);
      }, 600);
  console.log("button clicked");
    } else {
       setAriaPressed(false);
       setFaIconPrev(<FontAwesomeIcon icon={faBackward} />);
 }
 }

    return ( 
<div className="wrapper">
<main onTouchStart={onMainTouchStart} className={`carousel ${touched}`}>
    <h1><a href="https://unsplash.com/developers" title="to unsplash devs page" target="_blank" rel="noreferrer">Unspash</a> Artists Accessible Carousel</h1>
    <div ref={galleryRef} role="region" aria-labelledby="gallery-label" tabIndex="0" aria-describedby="focus">
        <span id="gallery-label" aria-hidden="true" className="visually-hidden">Gallery</span>
        <ul>
            <Slide url="https://images.unsplash.com/photo-1640645295770-9b4adb646677" desctiption="none" user="http://juliansilvermanphotography.com" caption="Julian Silverman" />
            <Slide url="https://images.unsplash.com/photo-1642094538644-52a1b91f1184" desctiption="none" user="https://brandtilt.co/" caption="Glenna Haug" />
            <Slide loading="lazy" url="https://images.unsplash.com/photo-1642365585811-17521651de66" desctiption="none" user="http://instagram.com/ngilfanov" caption="Nail Gilfanov" />
            <Slide loading="lazy" url="https://images.unsplash.com/photo-1642692747121-08a5fc74a553" desctiption="none" user="https://api.unsplash.com/users/rihatsu/portfolio" caption="Tiziano Barbieri" />
            <Slide loading="lazy" url="https://images.unsplash.com/photo-1642967710458-c0940f6dc5ed" desctiption="none" user="https://api.unsplash.com/users/gibaydulllina/portfolio" caption="Karina Gibaidullina" />
        </ul>
    </div>
    <div className="instructions">
        <p id="hover">use buttons or scroll left or right for more</p>
        <p id="focus">use buttons, tab, or your left and right arrow keys for more</p>
    </div>
    <ul aria-label="gallery controls">
        <li>
        <Buttons ariaButton={ariaPressed} onEvent={onButtonPrevClick} fontIcon={faIconPrev} label="previous" />
        </li>
        <li>
        <Buttons ariaButton={ariaPressed} onEvent={onButtonNextClick} fontIcon={faIconNext} label="next" />
        </li>
    </ul>
</main>
    <Footer/>
    </div>
    );
};

export default App;