import React, { useEffect, useReducer } from 'react';

import socket from './socket';
import JoinBlock from './components/JoinBlock';
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer,{
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) =>{
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    socket.emit('ROOM:JOIN', obj);
  }

  useEffect(()=>{
    socket.on('ROOM:JOINED', (users)=>{
      console.log('Новый пользователь ', users);
    });
  }, []);
  

  window.socket = socket;

  return (
    <div className="wrapper">
      {!state.joined && <JoinBlock onLogin={onLogin}/>}
    </div>
  )
}

export default App;
