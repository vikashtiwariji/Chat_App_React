import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" },{username:"vikash"}];

const App = () => {
  const [messages,setMessages]=useState([]);

  const onMessage=(username,message)=>{
    const newMessage={
      username:username,
      text:message,
    };
    setMessages(messages.concat([newMessage]));
  };

  return (
    <div className="App">
      
      <div className="container">
     
        {users.map((user)=>(
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessages={onMessage}
            />
        ))}
      </div>
    </div>
  );
};

export default App;
