import { Client, Events, GatewayIntentBits } from 'discord.js';

// Check is kickRoleId is undefined

if (!process.env.UNVERIFIED_ROLE_ID) throw Error('env.UNVERIFIED_ROLE_ID is undefined');
if (!process.env.VERIFIED_ROLE_ID) throw Error('env.VERIFIED_ROLE_ID is undefined');


const unverifiedRoleId = process.env.UNVERIFIED_ROLE_ID;
const verifiedRoleId = process.env.VERIFIED_ROLE_ID;


// Create Client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
});

// Event triggers when bot is ready
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.username}`);
});

// added role when user joins
client.on(Events.GuildMemberAdd, async (member) => {

    void member.roles.add(unverifiedRoleId, 'User Joined the server').catch(console.error);

});

// removes unverified role when verified role is added
client.on(Events.GuildMemberUpdate, async (oldMember, newMember) => {

    if (newMember.roles.cache.has(verifiedRoleId)) void newMember.roles.remove(unverifiedRoleId, 'User was Verified').catch(console.error);

});

client.login(process.env.DISCORD_TOKEN);