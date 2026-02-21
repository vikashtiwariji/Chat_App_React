import PropTypes from "prop-types";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

const ChatWindow = ({user, messages,onMessages}) =>{
    const handleOnMessage=(message)=>{
        onMessages(user.username,message);
    };
    return (
        <div className="chat-window">
            <h1>Super Awesome chat</h1>
            <div className="name sender">{user.username}</div>
            <MessageHistory messages={messages} user={user} />
            <AddMessage onMessage={handleOnMessage}/>
        </div>
    );
};

ChatWindow.propTypes={
    user:PropTypes.object.isRequired,
    messages:PropTypes.array.isRequired,
    onMessages:PropTypes.func.isRequired,
}

export default ChatWindow;
