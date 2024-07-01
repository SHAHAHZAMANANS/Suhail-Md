const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923263278727";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "92363278727";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923263278727";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_53_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1R0FaODUwV01tRWo3Y0NuVXBwZ0ptOGYzNjFPMi9vaThEZ1RYV0l1Ujc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwamlyLVRaNFI5dV9KNlJ2ODBjb2R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1YjYyNTk5LWEyY2MtNDg3NS04MmVlLWNjZjg4NzZiM2VhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDIwLFxuICAgICAgOTksXG4gICAgICA4NixcbiAgICAgIDQwLFxuICAgICAgOTksXG4gICAgICAyMDIsXG4gICAgICAyMDQsXG4gICAgICAxMzIsXG4gICAgICAzOSxcbiAgICAgIDEwOSxcbiAgICAgIDEzNyxcbiAgICAgIDEzNCxcbiAgICAgIDM4LFxuICAgICAgMTQ0LFxuICAgICAgMzEsXG4gICAgICA5NCxcbiAgICAgIDIzLFxuICAgICAgMTUzLFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDE2NSxcbiAgICAgIDExOSxcbiAgICAgIDk1LFxuICAgICAgNTgsXG4gICAgICAyMzYsXG4gICAgICA4LFxuICAgICAgMTAzLFxuICAgICAgNDEsXG4gICAgICAxMDQsXG4gICAgICAyMzQsXG4gICAgICAyMzQsXG4gICAgICAxNzgsXG4gICAgICAxOCxcbiAgICAgIDEwNSxcbiAgICAgIDE3NCxcbiAgICAgIDIwLFxuICAgICAgMjM2LFxuICAgICAgMTU4LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFBMSEZTUDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2MzI3ODcyNzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDE1MzIzMzM4MTM5OTA6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmlHdk5vSEVLR3VqTFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1RWNXanBrVGZJYTIxSWhHczhKNkczbUUvekNXS3lPZzdlRVl1OFdWd1RvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFudHF2L2JBNzVNcnYrQTJhTU0rZndYN1NMbGYzY1NBQ1VsRFFIVUR4SjczTkpWVTNQVUtmeEFRak1GNGRTdkttY3JsRzFXU1pCT2JObURld1lmcERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVqamFBWE5UY1RpUE1vVERGT0Z0SERlalU5VEJPVnZKTmQ5MXFHaUVKT2MrZEVVQkhvY2ErYWF2YjhtTlMyYjlmTDI2NjV0UHUxSEZxK1FlcHByekRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI2MzI3ODcyNzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODY3MTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSE1kXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOT1FFYlg3eTV4R0pPYzFzQUZub0J3Zkx0SEFCYlF6dGljdkxuZFU3RitvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjg3NzU3MDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyNTE1NDUzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᑭOᗯᗴᖇᗴᗪ ᗷY ᘔᗩᗰᗩᑎ²²¹-ᕼ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ᒍOIᑎ ᘜᖇOᑌᑭ』*\n https://chat.whatsapp.com/J3n9BFqCkcs6gpQQXZiFpn"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ZAMAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ᘔᗩᗰᗩᑎ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
