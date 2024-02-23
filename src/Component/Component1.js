import React, { useRef, useState } from "react";
import ToastNotification from "./ToastNotification";
import ToastManager from "./ToastManager";

const Component1 = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage]= useState('')
const toastManagerRef = useRef()
  const triggerToast = () => {
    const newMessage = { id: Date.now(), message: message };
    toastManagerRef.current.addMessage(newMessage);
  };
  return (
    <>
      <div style={{display:"flex", justifyContent:'center',alignItems:'center',marginTop:'200px'}}>
        <input type="number" value={message} onChange={(e)=> setMessage(e.target.value)} />
      </div>
      <div style={{display:"flex", justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
        <button style={{backgroundColor:'skyblue',border:'none',padding:'10px 25px',color:'whitesmoke'}} onClick={(()=>triggerToast())}>Submit</button>
      </div>
      <ToastManager ref={toastManagerRef} />
    </>
  );
};

export default Component1;
