import axios from "axios"
import { appConfig } from "../Utils/AppConfig";
import { UserAuthHeaders } from "react-chat-engine-advanced";

class AuthService {

    public async getUser(authObject:UserAuthHeaders):Promise<void> {
        await axios.get(appConfig.createChat, {headers:authObject});
    }

    public async createUser(user:any):Promise<void>{
        
        await axios.post(appConfig.createUser ,user, {headers:{"PRIVATE-KEY": appConfig.privateKey}});
      
    }

    public async createChat(authObject:UserAuthHeaders):Promise<void> {
        await axios.post(appConfig.createFirstChat, {
            "title": authObject["User-Name"],
            "is_direct_chat": false
        }, {headers:authObject})
    }
}

const authService = new AuthService();
export default authService; 