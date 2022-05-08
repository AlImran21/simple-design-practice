import React from 'react';
import PopUpLogo from '../../../images/404-tick.png';
import './PopUp.Module.css';


const PopUp = () => {

    let popup = document.getElementById('popup');
    const handleSubmitButton = () => {
        popup.classList.add('open-popup');
    }

    const handleOkButton = () => {
        popup.classList.remove('open-popup');
    }


    return (
        <div className='container'>
            <button type='submit' className='submit-btn' onClick={handleSubmitButton}>Submit</button>
            <div className="pop-up" id='popup'>
                <img src={PopUpLogo} alt="" />
                <h2>Thank You!</h2>
                <p>Your details has been successfully submitted. Thanks!</p>
                <button type='button' onClick={handleOkButton}>Ok</button>
            </div>
        </div>
    );
};

export default PopUp;