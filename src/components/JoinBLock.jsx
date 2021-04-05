import React from 'react';
import socket from '../socket';

function JoinBlock(){
    return(
        <div className="join__block">
            <input className="join__input" type="text" placeholder="Room ID"/>
            <input className="join__input" type="text" placeholder="Ваше имя"/>
            <button className="btn">Войти</button>
        </div>
    )
}

export default JoinBlock;