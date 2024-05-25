## Steam Workflow
If Steam Guard is used, you need the `STEAM_AUTH_CODE` secret. Follow this url as a guide:  
https://github.com/SteamTimeIdler/stidler/wiki/Getting-your-%27shared_secret%27-code-for-use-with-Auto-Restarter-on-Mobile-Authentication#getting-shared-secret-from-ios-windows  
You need to either switch to Steam Desktop Authenticator or extract the Shared Key secret from your phone's files.  
If Steam Guard is not used, `STEAM_LOGIN` and `STEAM_PASSWORD` will be enough.

## NexusMods Workflow
Use any broswe and login to NexusMods. F12 and go to Application tab. Find the Cookie tab in the Storage section. Copy the value of the `nexusmods_session` cookie. This is our `NEXUSMODS_SESSION_COOKIE` secret.  
