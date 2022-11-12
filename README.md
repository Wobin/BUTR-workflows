## Steam Workflow
If Steam Guard is used, you need the `STEAM_AUTH_CODE` secret. Follow this url as a guide:  
https://github.com/SteamTimeIdler/stidler/wiki/Getting-your-%27shared_secret%27-code-for-use-with-Auto-Restarter-on-Mobile-Authentication#getting-shared-secret-from-ios-windows  
You need to either switch to Steam Desktop Authenticator or extract the Shared Key secret from your phone's files.  
If Steam Guard is not used, `STEAM_LOGIN` and `STEAM_PASSWORD` will be enough.

## NexusMods Workflow
Use Firefox and login to NexusMods. F12 and go to Network tab. Find any XHR method to nexusmods.com and copy the Cookies header. This is our `NEXUSMODS_COOKIES` secret.  
Do not use other browser, their headers do not work with the workflow!
