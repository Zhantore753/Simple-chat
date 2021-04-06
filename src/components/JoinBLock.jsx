import React, { useState } from 'react';
import axios from 'axios';

function JoinBlock({onLogin}){
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const onEnter = async () => {
        if(!roomId || !userName){
            return alert('Все поля должны быть заполнены');
        }
        const obj = {
            roomId,
            userName
        }
        setLoading(true);
        await axios.post('/rooms', obj);
        onLogin(obj);
    };

    return(
        <div className="join__block">
            <input 
                className="join__input" 
                type="text" 
                placeholder="Room ID" 
                value={roomId} 
                onChange={e => setRoomId(e.target.value)}
            />
            <input 
                className="join__input" 
                type="text" 
                placeholder="Ваше имя" 
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <button disabled={isLoading} onClick={onEnter} className="btn">
                {isLoading ? 'Вход...': 'Войти'}
            </button>
        </div>
    )
}

export default JoinBlock;