
class AppConfig {
    public projectId = "c8122411-617e-40d1-9a97-6ef8a95255b7";
    public privateKey = "08d0dd24-c81b-4435-8e8a-1816ad2ff1b7";
    public createChat = "https://api.chatengine.io/users/me/";
    public createUser = "https://api.chatengine.io/users/"; 
    public createFirstChat = "https://api.chatengine.io/chats/";
    
    public username = localStorage.getItem('username');
    public secret = localStorage.getItem('password');

}

export const appConfig = new AppConfig(); 