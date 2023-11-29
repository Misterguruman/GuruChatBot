import { StaticAuthProvider } from '@twurple/auth';
// import { ApiClient } from '@twurple/api';
import { ChatClient, ChatMessage, ChatSubInfo, UserNotice } from '@twurple/chat';


const clientId = Bun.env.CLIENT_ID;
const clientSecret = Bun.env.CLIENT_SECRET;
const accessToken = Bun.env.ACCESS_TOKEN;


if (!clientId || !clientSecret || !accessToken) {
    console.log("Unable to get Authenticated, exiting...")
    process.exit(1);
} 

const authProvider = new StaticAuthProvider(clientId, accessToken, ['chat:read', 'chat:edit']);

const chatClient = new ChatClient({ authProvider, channels: ['thicccuts'] });
chatClient.connect();

chatClient.onConnect(() => { console.log("Successfully connected!") })

chatClient.onResub((channel:string, user:string, subInfo:ChatSubInfo, msg:UserNotice) => {
    chatClient.say(channel, `@${user} thiccc28HYPE thiccc28W thiccc28HYPE thiccc28W thiccc28HYPE thiccc28W `)
        .then(() => {console.log("Auto Hyped Resub")})
        .catch((reason) => {console.log(`Unable to send chat: ${reason}`)})
})

chatClient.onMessage(async (channel: string, user: string, text: string, msg: ChatMessage) => {
    console.log(`${user}: ${text}`)
});

// const authProvider = new AppTokenAuthProvider(clientId, clientSecret);
// const apiClient = new ApiClient({ authProvider });

// const broadcaster = await apiClient.users.getUserByName("thicccuts");
// if (!broadcaster) {
//     console.log("Unable to find Broadcaster")
//     process.exit(1);
// }



// https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=lehs6ng2xxxi25y6uhf86wx7l22i3o&redirect_uri=http://localhost&scope=chat%3Aread+chat%3Aedit
// 
// https://twurple.js.org/reference/chat/classes/ChatClient.html
// https://dev.twitch.tv/docs/api/ 