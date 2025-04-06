# Role Applicant

Discord bot that will give users a role "unverified" when they join. Once this user receives the an other role "verified" the unverified role is removed

## Config

In `./.env` there are three values

### DISCORD_TOKEN

See [discord.js guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token) or [Discord Dev Documentation](https://discord.com/developers/docs/quick-start/getting-started#step-1-creating-an-app) for more info

### UNVERIFIED_ROLE_ID

This value is the Role Id of the role to be given to members as they join and will be remove if the user is verified

### VERIFIED_ROLE_ID

This value is the Role Id of the role to be given to members once they are verified
