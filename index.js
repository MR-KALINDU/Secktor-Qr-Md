let express = require('express') 
const puppeteer = require('puppeteer');
const { createCanvas, loadImage, registerFont } = require('canvas');
const GIFEncoder = require('gifencoder');
const P = require('pino')
let path = require('path')
const axios = require("axios");
let qrcode = require('qrcode')
let qrcoded = require("qr-image");
const fs = require('fs-extra')
var _huh = false
registerFont(path.join(__dirname, 'tmp', 'Flick Bold Hollow.ttf'), { family: 'Flick Bold Hollow' });
const port = process.env.PORT || 8080
const {
	exec,
	spawn,
	execSync
} = require("child_process")
let app  = express()
const PORT = process.env.PORT||3030
const makeWASocket = require("@adiwajshing/baileys").default
const pino = require('pino')
const router = express.Router()
const { delay ,Browsers,MessageRetryMap,fetchLatestBaileysVersion,useMultiFileAuthState,makeInMemoryStore } = require("@adiwajshing/baileys")
const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
 app.use(express.static(path.join(__dirname, "/public")));
const delfiles = async () => {
        const commandFiles = fs.readdirSync(`./public`).filter((file) => file.endsWith('.json'));
        for (const file of commandFiles) {
            await fs.unlinkSync(`public/${file}`)
        }
}

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/announcement", (req, res) => {
let data = `{
 "announcement": true,
 "status": 200,
 "developers": "MR-KALINDU",
 "version": 0.0.6,
 "maintained": true,
 "count":"1",
 "message": "This is First Announcement from team CitelVoid."
}`
  res.send(data)
});
app.get("/main", (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});
app.get("/id", (req, res) => {
  res.sendFile(__dirname+"/public/qr-session.html");
});
app.get("/test2", (req, res) => {
  res.send("All system are in optimal condition");
});
app.get("/repl", (req, res) => {
res.redirect(301, 'https://replit.com/@kalidugaweshana/MR-KALINDU-BOT'); //
});
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});
 app.get("/session", async(req, res) => {
  if (fs.existsSync(__dirname+'/auth_info_baileys')) {
    fs.emptyDirSync(__dirname+'/auth_info_baileys');
    require('child_process').execSync('rm -rf auth_info_baileys')
        require('child_process').exec('rm -r qrlogo.png')
    }
  const { state, saveCreds } = await useMultiFileAuthState(__dirname+'/auth_info_baileys')
  const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
  const { version, isLatest } = await fetchLatestBaileysVersion();
  async function Secktor() {
     try {
       let session = makeWASocket({
         auth: state,
         defaultQueryTimeoutMs: undefined,
         logger: pino({ level: "silent" }),
         browser: Browsers.macOS('Desktop'),
         version: [2,2323,4],
       });
       session.ev.on("connection.update", async (s) => {
         if (s.qr) {
           const QRLogo = require('qr-with-logo');
 const data = JSON.stringify(s.qr)
 await QRLogo.generateQRWithLogo(data.replace(/"/g,''), "logo.png", {}, "Base64", "qrlogo.png", async function(b64) {
             _huh = b64
   //console.log(b64)
 });
         }
         const { connection, lastDisconnect } = s;
         if (connection == "open") {
     await delay(800);
           setTimeout(async() => {
 
   fs.emptyDirSync(__dirname+'/auth_info_baileys');
             require('child_process').exec('rm -r qrlogo.png')
             process.send('reset');
 
 }, 20000)
          try{
          let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')
         //  await session.sendMessage(session.user.id, {text: 'MR-KALINDU;;;'+btoa(data)});   
           await delay(800)
          const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
          let c = output.data.split('/')[3]
           await session.sendMessage(session.user.id, {text: 'MR-KALINDU;;;'+c});	
          let cc = `
🛸 *ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴄʜᴏᴏꜱɪɴɢ ᴍʀ-ᴋᴀʟɪɴᴅᴜ-ʙᴏᴛ* 🛸\n\n🍀 *Qʀ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ*🍀\n\n🇱🇰 *ʏᴏᴜ ᴄᴏᴍᴘʟᴇᴀᴛᴇᴅ ꜰɪʀꜱᴛ ꜱᴛᴇᴘ ᴏꜰ ᴄʀᴇᴀᴛɪɴɢ ᴍʏ ʙᴏᴛ* 🇱🇰\n\n♨️ *ᴀꜱ ꜱᴏᴏɴ ᴀꜱ ʏᴏᴜ ꜱᴄᴀɴ ᴛʜᴇ Qʀ ᴄᴏᴅᴇ,ʏᴏᴜ ᴡɪʟʟ ʙᴇ ᴀᴅᴅᴇᴅ ᴛᴏ ᴏᴜʀ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ. ᴘʟᴇᴀꜱᴇ ᴅᴏ ɴᴏᴛ ʟᴇᴀᴠᴇ ᴛʜᴇ ɢʀᴏᴜᴘ* ♨️\n\n🐝 *ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ. ᴏᴛʜᴇʀᴡɪꜱᴇ ᴄᴀɴ ᴀᴄᴄꜱᴇꜱ ʏᴏᴜ ᴀᴄᴄᴏᴜɴᴛ* 🐝\n\n🙄 *ᴅᴏɴᴛ ᴛʀʏ ᴄʀᴇᴀᴛᴇ Qʀ ꜰᴏʀ ᴜꜱɪɴɢ ᴍʏ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴄᴏᴅᴇ* 🙄\n\n🐞 *ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴜᴍʙᴇʀ* 🐞\n\n̸ͪ⫷_________________________⫸\n+94758179948\n⫷_________________________⫸`
          await session.sendMessage(session.user.id, {text: cc});
          } catch (e) {
            console.log(e)
           await fs.emptyDirSync(__dirname+'/auth_info_baileys');
          require('child_process').exec('rm -rf auth_info_baileys')
            require('child_process').exec('rm -r qrlogo.png')
          process.send('reset');;   
          }
          await delay(3000)
          await fs.emptyDirSync(__dirname+'/auth_info_baileys');
          require('child_process').exec('rm -rf auth_info_baileys')
          require('child_process').exec('rm -r qrlogo.png')
          process.send('reset');;
         }
         session.ev.on ('creds.update', saveCreds)
         if (
           connection === "close" &&
           lastDisconnect &&
           lastDisconnect.error &&
           lastDisconnect.error.output.statusCode != 401
         ) {
           Secktor().catch(async(err) => {
             console.log(err)
 await fs.emptyDirSync(__dirname+'/auth_info_baileys');
 await require('child_process').exec('rm -rf auth_info_baileys')
 process.send('reset');; 
 });
         }
       });
     } catch (err) {
       console.log(
         err + "Unknown Error Occured Please report to Owner and Stay tuned"
       );
       fs.emptyDirSync(__dirname+'/auth_info_baileys');
       require('child_process').exec('rm -rf auth_info_baileys')
       process.send('reset');;
     }
   }
 
 Secktor().catch(async(err) => {
   console.log(err)
 await fs.emptyDirSync(__dirname+'/auth_info_baileys');
 await require('child_process').exec('rm -rf auth_info_baileys')
 process.send('reset');;
 });
   if(_huh){
     var img = Buffer.from(_huh, 'base64')
   return res.end(img)
   }
 });

app.get("/deployment", (req, res) => {
 res.sendFile(__dirname+"/public/index-button.html");
});
app.get("/deploy", (req, res) => {
  res.sendFile(__dirname+"/public/deploy.html");

app.get("/editor", (req, res) => {
  res.sendFile(__dirname+"/public/editor.html"); 
});
app.get("/modules", (req, res) => {
  res.sendFile(__dirname+"/public/module.html");
});
// app.get('/koyeb', (req, res) => {
// res.redirect(301, 'https://app.koyeb.com/apps/deploy?type=docker&image=quay.io/sampandey001/koyeb:latest&env[SESSION_ID]&env[OWNER_NUMBER]&env[MONGODB_URI]&&env[OWNER_NAME]&env[PREFIX]=.&env[THUMB_IMAGE]=https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png&env[email]=sam@secktor.live&env[global_url]=instagram.com&env[FAKE_COUNTRY_CODE]=92&env[READ_MESSAGE]=false&env[DISABLE_PM]=false&env[ANTI_BAD_WORD]=fuck&env[WORKTYPE]=public&env[THEME]=SECKTOR&env[PACK_INFO]=Sam;Pandey&name=secktorbot&env[KOYEB_NAME]=sampandey001&env[ANTILINK_VALUES]=chat.whatsapp.com&env[PORT]=8000');
// });
app.get('/heroku', (req, res) => {
res.redirect(301, 'https://dashboard.heroku.com/new?button-url=https%3A%2F%2Fgithub.com%2F&template=https%3A%2F%2Fgithub.com%2FMR-KALINDU%2FROWDY-BABY-MD');
});
app.get('/developer github', (req, res) => {
res.redirect(301, 'https://github.com/MR-KALINDU'); 
});
app.get('/support', (req, res) => {
res.redirect(301, 'https://chat.whatsapp.com/LkP8QZqdhXUKxmc0hUPip5');
});
app.get('/mongo', (req, res) => {
res.redirect(301, 'https://www.youtube.com/watch?v=WWrpBCBlyuo');
});
app.get('/wiki', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md/wiki');
});
app.get('/repo', (req, res) => {
res.redirect(301, 'https://github.com/MR-KALINDU/ROWDY-BABY-MD');
});
//--------------------- ttp Start By SUHAIL ----------------------------------
app.get('/ttp/:text', async (req, res) => {
  const text = req.params.text;
  console.log("Text For TTP : " + text);
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Set text properties
  const fontSize = 30;
  const fontFamily = 'Flick Bold Hollow';
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = 'white';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const words = text.split(' ');
  const maxWidth = canvas.width * 0.8;
  let lines = [];
  let line = '';
  let y = centerY;
  for (const word of words) {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth) {
      lines.push(line.trim());
      line = word + ' ';
    } else { line = testLine; }
  }
  lines.push(line.trim());
  const totalTextHeight = lines.length * fontSize;
  const firstLineY = centerY - totalTextHeight / 2;
  lines.forEach((line, index) => {
    const lineY = firstLineY + index * fontSize;
    ctx.fillText(line, centerX, lineY);
  });
  // Convert the canvas to a PNG image
  const imagePath = path.join(__dirname, 'tmp', 'ttp.png');
  const out = fs.createWriteStream(imagePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => {
    const image = fs.readFileSync(imagePath);
    res.writeHead(200, { 'Content-Type': 'image/png','Content-Length': image.length,});
    res.end(image);
  });
});
//--------------------- ATTP START -----------------------------------
app.get('/attp/:text', async (req, res) => {
  const text = req.params.text;
  console.log("Text For ATTP : " + text);
  const frameDuration = 40;
  const gifDuration = 1000; 
  const encoder = new GIFEncoder(300, 300);
  encoder.start();
  encoder.setRepeat(0); // 0 for repeat indefinitely
  encoder.setDelay(frameDuration);
  encoder.setQuality(10); // Adjust as needed
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const colors = [[255, 0, 0],[0, 255, 0],[0, 0, 255]];
  const numFrames = Math.ceil(gifDuration / frameDuration);
  const colorIndexStep = Math.ceil(numFrames / colors.length);
  for (let frameIndex = 0; frameIndex < numFrames; frameIndex++) {
    const colorIndex = Math.floor(frameIndex / colorIndexStep);
    const currentColor = colors[colorIndex % colors.length];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgb(${currentColor.join(',')})`;
    const words = text.split(' ');
    const maxLineWidth = 180; // Maximum width allowed for text in pixels
    let line = '';
    let lines = [];
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxLineWidth && i > 0) {
        lines.push(line);
        line = words[i] + ' ';
      } else {  line = testLine;}
    }
    lines.push(line);
    const lineHeight = 40; // Height of each line in pixels
    const textHeight = lines.length * lineHeight;
    const startY = centerY - textHeight / 2;

    for (let i = 0; i < lines.length; i++) {
      const lineY = startY + i * lineHeight;
      ctx.fillText(lines[i], centerX, lineY);
    }
    encoder.addFrame(ctx);
  }

  encoder.finish();
  const gifBuffer = encoder.out.getData();
  const gifPath = path.join(__dirname, 'tmp', 'attp.gif');
  fs.writeFileSync(gifPath, gifBuffer);
  fs.readFile(gifPath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while reading the GIF file.');
    } else {
     res.writeHead(200, {'Content-Type': 'image/gif','Content-Length': data.length, });
      res.end(data);
    }
  });
  
});

//--------------------- ATTP END -------------------------------------
app.listen(port, () => console.log(`app listening on port ${port}!`));
