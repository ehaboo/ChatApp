
class AppConfig {
    public projectId = "";
    public privateKey = "";
    public createChat = "https://api.chatengine.io/users/me/";
    public createUser = "https://api.chatengine.io/users/"; 
    public createFirstChat = "https://api.chatengine.io/chats/";
    
    public username = localStorage.getItem('username');
    public secret = localStorage.getItem('password');

}

export const appConfig = new AppConfig(); 
