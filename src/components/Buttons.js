import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({label, fontIcon}) => {
    const [ariaPressed, setAriaPressed] = useState(false); 
    const [faIcon, setFaIcon]           = useState(fontIcon);
    const buttonRef = useRef(null);


        //enter button events
const onButtonClick = () => {
    if (ariaPressed === false){
        setAriaPressed(true); 
        setFaIcon(<FontAwesomeIcon icon={faThumbsUp} />);
        setTimeout(() => {
            setAriaPressed(false);
            setFaIcon(fontIcon);
        }, 1555);
 console.log("button clicked");
    } else {
        setAriaPressed(false);
        setFaIcon(fontIcon);
    }
}
    return (
        <div className="button-section">
        <button className={label} ref={buttonRef} onClick={onButtonClick} type="button" aria-pressed={ariaPressed}>{faIcon}{label}{faIcon}</button>
        </div>
            );
}

export default Buttons;