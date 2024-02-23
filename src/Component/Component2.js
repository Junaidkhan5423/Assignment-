import React, { useRef, useState } from "react";
import ToastManager from "./ToastManager";

const Component2 = () => {
  const toastManagerRef = useRef()
  const triggerToast = () => {
    const newMessage = { id: Date.now(), message: Date.now()+ "new message" };
    toastManagerRef.current.addMessage(newMessage);
  };
 

  return (
    <div style={{display:"flex", justifyContent:'center',alignItems:'center',marginTop:'200px'}}>
      
   
      <button onClick={() => triggerToast()}>Show Toast</button>
      <ToastManager ref={toastManagerRef} />

    </div>
  );
};

export default Component2;
