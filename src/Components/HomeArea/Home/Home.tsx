import { appConfig } from "../../../Utils/AppConfig";
import LoginForm from "../../AuthArea/LoginForm/LoginForm";
import "./Home.css";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow  } from "react-chat-engine-advanced";



function Home(): JSX.Element {
    let chatProps = useMultiChatLogic(appConfig.projectId, appConfig.username, appConfig.secret);
        console.log(chatProps);
        
    const isChatActive = chatProps.activeChatId  ? true : false; 
    chatProps = {
        ...chatProps,
        isChatFeedLoading: !isChatActive,
        isChatSettingsLoading: !isChatActive,
        isChatListLoading: !isChatActive
    }
    
    if( !isChatActive || !appConfig.username ) return <LoginForm />

    const handelClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    
    return (
        <>
            <div className="logout">
                <span>Hello {appConfig.username},</span>
                <button onClick={handelClick} className="logoutBtn">Logout</button>
            </div>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '91vh'}}/>
       </>
    );
}

export default Home;
