/*
* "Jangan modal nama doang bro!!!"
* (Scriptnya BARXNL)
* jangan ubah semuanya kecuali nama bot instagram yt itu ajah yg lain jangan!!!
* hargai pembuat skrip woy!!!
*/
const XPTN = 'BARXNL'; // Nama Bot Whatsapp
const instagram = 'https://instagram.com/barxnl'; // Nama Instagramlu cok
const nomer = 'https://Wa.me/+6282198571732'; // Nomor whatsapplu cok
const aktif = 'Tergantung jaringan'; // Kapan bot lu aktif
const groupwa = 'https://instagram.com/barxnl'; // OFFICIAL GRUP LU 1
const youtube = 'https://www.youtube.com/channel/UCMiQsqzWvj-zKxNlFlG_Wiw'; // OFFICIAL GRUP LU 2
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");                                                                                                                        const imageToBase64 = require('image-to-base64');
const xp = require("./lib/xp.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const xp1 = require("./lib/xp1.js");
const xp2 = require("./lib/xp2.js");
const xp3 = require("./lib/xp3.js");
const xp4 = require("./lib/xp4.js");
const xp5 = require("./lib/xp5.js");
const xp6 = require("./lib/xp6.js");
const readTextInImage = require('./lib/ocr')
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n'
            + 'FN:Akbar Gans\n' // full name
            + 'ORG:Owner BARXNL-BOT;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6282198571732:+62 821-9857-1732\n' // WhatsApp ID + phone number
            + 'END:VCARD'
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   GroupSettingChange,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Muhammad Akbar Ready scan now!`);
});                                                                                                                                                    
conn.on('credentials-updated', () =>                                                                                                                   {
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @barxnl`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @barxnl`)
})                                                                                                                                                     
conn.on('message-new', async(m) =>
{
   var owner = '6282198571732@s.whatsapp.net'
   var isAdmin = m.participant === owner
   var admin = '6282198571732@s.whatsapp.net'
   var isBotAdmin = m.participant === admin
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF XP-TN
if(text.includes(".cek")){                                                                                                                             var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat XP-TN
else if (text == 'assalamualaikum'){
conn.sendMessage(id, '3aalaikumsalam, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}else if (text == '.creator'){
conn.sendMessage(id, 'Owner BARXNL wa.me/+6282198571732' ,MessageType.text);
}
else if (text == 'Akbar'){
conn.sendMessage(id, 'Akbar lagi sibuk, Mending kau rakit Pc:D' ,MessageType.text);
}
else if (text == 'Lindy'){
conn.sendMessage(id, 'pacar owner ihh' ,MessageType.text);
}
else if (text == 'Bangsat'){
conn.sendMessage(id, 'toxic terdeteksi' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik .help' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == '.ttp'){                                                                                                                              conn.sendMessage(id, ' *COMMAND PREMIUM CHAT WA https://wa.me/6282198571732* ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == '.frendsowner'){
conn.sendMessage(id, 'kawan1 wa.me/+6282198571732' ,MessageType.text);
}
else if (text == '.coowner'){
conn.sendMessage(id, 'kawan2 testing script wa.me/+6282198571732' ,MessageType.text);
}
else if (text == '.groupbot'){
conn.sendMessage(id, 'Blom ada' ,MessageType.text);
}
else if (text == '.tools1'){
conn.sendMessage(id, ' *Menampilkan Fitur tools1!!!* ' ,MessageType.text);
}
else if (text == '.tools2'){
conn.sendMessage(id, ' *Menampilkan Fitur tools2!!!* ' ,MessageType.text);
}
else if (text == '.tools3'){
conn.sendMessage(id, ' *Menampilkan Fitur tools3!!!* ' ,MessageType.text);
}
else if (text == '.tools4'){
conn.sendMessage(id, ' *Menampilkan Fitur tools4!!!* ' ,MessageType.text);
}
else if (text == '.tools5'){
conn.sendMessage(id, ' *Menampilkan Fitur tools5!!!* ' ,MessageType.text);
}
else if (text == '.tools6'){
conn.sendMessage(id, ' *Menampilkan Fitur tools6!!!* ' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

// Fitur

if (text.includes('.nulis2')){
  var teks = text.replace(/.nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.tts2')){
  var teks = text.replace(/.tts2 /, '')
    axios.get('http://scrap.terhambar.com/tts?kata=${teks}')
    .then((res) => {
      audioToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.audio)
        })
    })
}

if (text.includes(".say")){
  const teks = text.replace(/.say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes(".ytmp5")){
const teks = text.replace(/.ytmp5 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\n>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('.ping2')) {
    conn.sendMessage(`from, ${processTime}(_Second_, MessageType.text`)
}
if (text.includes('.texthunder')){
  var teks = text.replace(/.texthunder /, '')
    axios.get('http://jojo-api-doc.herokuapp.com/api/thunder?text='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.nomorsend')){
conn.sendMessage(id, from, `*Neh Mhank Link Nomor Wa Lu ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}*\n\n*Atau*\n\n*api.whatsapp.com/se>
}
if (text.includes('.urltoimg')){
  var teks = text.replace(/.urltoimg /, '')
    axios.get(`https://mhankbarbar.herokuapp.com/api/url2image?url=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.randomkis')){
  var teks = text.replace(/.randomkis /, '')
    axios.get('https://tobz-api.herokuapp.com/api/kiss')
    .then((res) => {
      imagegifToBase64(res.data.result)                                                                                                                        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.imagegif)
        })
    })
}
if (text.includes('.quotemaker')){
var gh = text.split(".quotemaker ")[1];
    var quote = gh.split("|")[0];
    var wm = gh.split("|")[1];
    var bg = gh.split("|")[2];
    axios.get(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[ WAIT ] Sedang diproses⏳ silahkan tunggu sebentar', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { caption: 'Nih Anjim', quoted: m })
        })
    })
}
if (text.includes('.nulis')){
  var teks = text.replace(/.nulis /, '')
    axios.get(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, 'Bot Lagi Nulis 📝', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.ttp2')){
  var teks = text.replace(/%ttp /, '')
    axios.get(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".yt")){
const teks = text.replace(/.yt /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
    let hasil = `Video telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n\n\nJudul: ${res.data.title}\n\nUkuran video: ${re>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".nekopoi2")){
const teks = text.replace(/.nekopoi2 /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/nekopoi?url=${teks}&apikey=YJgk853Hbai`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('.hidetag')){
var value = text.replace(text.split(' ')[0], '')
var group = await conn.groupMetadata(id)
var member = group['participants']
var ids = []
member.map( async adm => {
    ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
    text: value,
    contextInfo: { mentionedJid: ids },
    quoted: m
}
if (!isAdmin) conn.sendMessage(id, 'Ini Cuma Untuk Owner! Awokawok', MessageType.text, { quoted: m })
else conn.sendMessage(id, options, MessageType.text)
}
if (text.includes('.randomhentai2')){
  var teks = text.replace(/.randomhentai2 /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/hentai`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

if (text.includes(".quotesanime")){
const teks = text.replace(/.quotesanime /, "")
axios.get(`https://animechanapi.xyz/api/quotes?anime=${teks}`).then((res) => {
    let hasil = `quotesanime\n\n${res.data.quote} *character* \n${res.data.character} *anime* \n${res.data.anime}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('.tagme')) {
 var nomor = m.participant
 const options = {
       text: `@${nomor.split("@s.whatsapp.net")[0]} tagged!`,
       contextInfo: { mentionedJid: [nomor] }
 }
 conn.sendMessage(id, options, MessageType.text)
}
if (text.includes(".harinasional")){
const teks = text.replace(/.harinasional /, "")
axios.get(`https://api.haipbis.xyz/harinasional?tanggal=${teks}`).then((res) => {
    let hasil = `➸  *Tanggal : ${res.data.tanggal}*\n\n➸ keterangan : ${res.data.keterangan}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes('.cooltext')){
  var teks = text.replace(/.cooltext /, '')
    axios.get('https://api.haipbis.xyz/randomcooltext?text='+teks)
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.randomcry')){
  var teks = text.replace(/.randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.map')){
  var teks = text.replace(/.map /, '')
    axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
    .then((res) => {
      imageToBase64(res.data.gambar)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
else if (text == '.quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".setname")){
const teks = text.replace(/.setname /, "")
    let nama = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgrup, nama);
conn.sendMessage(id, 'Succes Change Name Group' ,MessageType.text, { quoted: m } );

}
if (text.includes(".setdesc")){
const teks = text.replace(/.setdesc /, "")
    let desk = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
conn.sendMessage(id, 'Succes Change Description Group' ,MessageType.text, { quoted: m } );

}
if (text.includes('.owner')){
conn.sendMessage(id, {displayname: "Jeff", vcard: vcard}, MessageType.contact)
conn.sendMessage(id, 'Ingin masukin Bot ke group?, chat Owner :D', MessageType.text)
}
if (text.includes(".bitly")){
const teks = text.replace(/.bitly /, "")
axios.get(`https://api.haipbis.xyz/bitly?url=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `nih kak :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('.fakename')) {
const teks = text.replace(/.fakename /, "")
axios.get(`https://xptnbotapi.herokuapp.com/api/v1/fakename?country=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` \n  name : ${res.data.name} \n birthday : ${res.data.birthday} \n adress : ${res.data.adress} \n phone_number : ${res.data.phone_num>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
else if (text == '.opengc'){
let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   conn.groupSettingChange (hasil, GroupSettingChange.messageSend, false);
conn.sendMessage(id, 'SUCCES, GRUP TELAH DIBUKA' ,MessageType.text, { quoted: m } );
}
else if (text == '.closegc'){
 let hasil = `${id.split("@s.whatsapp.net")[0]}`;
   conn.groupSettingChange (hasil, GroupSettingChange.messageSend, true);
conn.sendMessage(id, 'SUCCES, GRUP TELAH DITUTUP' ,MessageType.text, { quoted: m } );
}
if (text.includes('.textimage')){
const teks = text.replace(/.textimage /, "")
axios.get(`https://api.haipbis.xyz/randomcooltext?text=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `Text Image Succes :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".wikien")){
const teks = text.replace(/.wikien /, "")
axios.get(`https://arugaz.herokuapp.com/api/wikien?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *👩💻According to Wikipedia:👩💻* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".nekonime")) {
  const teks = text.replace(/.nekonime /, "")
  axios.get(`https://st4rz.herokuapp.com/api/nekonime`).then((res) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih animenya :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil, MessageType.text);
  })
}
if (text.includes('.wetzodiak')) {
const teks = text.replace(/.wetzodiak /, "")
axios.get(`https://arugaz.herokuapp.com/api/getzodiak?nama=aruga&tgl-bln-thn=${teks}`).then((res) => {
    let hasil = `➡️ Lahir : ${res.data.lahir}*\n➡ ️ultah : ${res.data.ultah}\n➡ ️usia : ${res.data.usia}\n➡ zodiak : ${res.data.zodiak}️`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes('.namajenis')) {
const teks = text.replace(/.namajenis /, "")
axios.get(`https://api.terhambar.com/nama?jenis=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `namajeniskalian\n nama : {res.data.nama}\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".coronainfoall")){
const teks = text.replace(/.coronainfoall /, "")
axios.get(`https://api.terhambar.com/negara/World`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `info corona all \n\n *negara* : _${res.data.negara}_ \n *total* : _${res.data.total}_ \n *kasus_baru* : _${res.data.kasus_baru}_ \n *>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".dewabatch")){
const teks = text.replace(/.dewabatch /, "")
axios.get(`https://alfians-api.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `Anime Nya nih :) \n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".gay")){
const teks = text.replace(/.gay /, "")
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` ${res.data.desc} \n\n *Persen Gay Lo!!!* _${res.data.persen}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!")){
const teks = text.replace(/! /, "")
axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".puisi1")){
const teks = text.replace(/.puisi1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".puisi2")){
const teks = text.replace(/.puisi2 /, "")
axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Puisinya Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".cerpen")){
const teks = text.replace(/.cerpen /, "")
axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cerpen Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".cersex1")){
const teks = text.replace(/.cersex1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/cersex2`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cersex Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".cersex2")){
const teks = text.replace(/.cersex2 /, "")
axios.get(`https://arugaz.herokuapp.com/api/cersex1`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih cersex Kak :)*\n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}if (text.includes(".quotes")){
const teks = text.replace(/.quotes1 /, "")
axios.get(`https://arugaz.herokuapp.com/api/randomquotes`).then((res) => {
conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Nih Quotes Kak :)*\n\n *Author* : _${res.data.author}_ \n\n *Quotes* : _${res.data.quotes}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".infoanime")){
const teks = text.replace(/.infoanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO ANIME ${teks} :* \n\n _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".otakudesu")){
const teks = text.replace(/.otakudesu /, "")
const animes =  axios.get(`https://mhankbarbar.herokuapp.com/api/otakudesu?q=${teks}&apiKey=F0Zuy3oCaQogy9MOt3tk`).then((res) => {
    let hasil = ` *Nih Anime Nya :)*\n\n _${animes.data.title}\n\n${animes.data.info}\n\n${animes.data.sinopsis}_ `;
    conn.sendMessage(from, animes.data.thumb, 'otakudesu.jpg', hasil, MessageType.text);
})
}
if (text.includes(".spamcall")){
const teks = text.replace(/.spamcall /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamcall?no=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO SPAM CALL* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".bucin")){
const teks = text.replace(/.bucin /, "")
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` _${res.data.desc}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".spamsms")){
const teks = text.replace(/#spamsms /, "")
axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${teks}&jum=20`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *INFO SPAM SMS 20 PESAN* \n\n _${res.data.logs}_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".indohot")){
const teks = text.replace(/.indohot /, "")
axios.get(`https://arugaz.herokuapp.com/api/indohot`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Tobat Bosq* \n\n *Judul* _${res.data.result.judul}_ \n\n *Status* _${res.data.result.genre}_ \n\n *Durasi* _${res.data.result.duras>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
 if (text.includes('.icon')){
  var teks = text.replace(/%icon /, '')
    axios.get('https://api.haipbis.xyz/flaticon?q='+teks)
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".filmanime")){
const teks = text.replace(/.filmanime /, "")
axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Proses...❗', MessageType.text)
    let hasil = ` *Film Anime ${teks} :* \n\n *Judul* _${res.data.result.title}_ \n\n *Rating* _${res.data.result.rating}_ \n\n *Info* _${res.data.res>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".infoig")){
  const teks = text.replace(/.infoig /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
  let hasil = `BIODATA INSTAGRAM ATAS NAMA _${teks}_ \n\n *Username✍️* : _${res.data.Username}_ \n *Nama✍️* : _${res.data.Name}_ \n *Jumlah Followers✍️* >
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(".infogempa")){
  const teks = text.replace(/.infogempa /, "")
  axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
  let hasil = ` *INFO GEMPA* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman✍️* : _${res.data.kedalaman}_ \n *Koordinat✍️* : _${res.data.koordinat}_ \>
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes(".fakta")){
const teks = text.replace(/.fakta /, "")
axios.get(`https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt${teks}`).then((res) => {
    let hasil = `fakta tersedia\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\fakta Tersedia: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".katabijak")){
const teks = text.replace(/.katabijak /, "")
axios.get(`https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt${teks}`).then((res) => {
    let hasil = `katabijak tersedia\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\katabijak Tersedia: ${res.data.filesize}\n\nLink: ${res.data.res>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".chord")){
const teks = text.replace(/.chord /, "")
axios.get(`https://arugaz.herokuapp.com/api/chord?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = `*Nih Cord Lagu ${teks} kak* \n\nCord: _${res.data.result}_ `;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}


if (text.includes(".ytmp6")){
const teks = text.replace(/.ytmp6 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...⏳', MessageType.text)
    let hasil = ` *Judul:* ${res.data.title}\n\n *Tipe:* ${res.data.ext}\n\n *Resolution:* ${res.data.resolution}\n\n *Zize:* ${res.data.filesize}\n\n>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".twt")){
const teks = text.replace(/.twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `âœ…Berhasil$ silahkan klik link di bawah untuk mendownload hasilnya$\nKlik link dibawahðŸ—¡ï¸\n\nSize: ${res.data.filesize}\n\nLink: >
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".tts")){
const teks = text.replace(/.tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    conn.sendMessage(id, gtts ,MessageType.text);
}

if (text.includes(".tiktok")) {
const tictoc = text.replace(/.tiktok /, "")
axios.get(`http://scrap.terhambar.com/tiktokfull?link=${tictoc}`).then((res) => {
         conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
     let titoe = `âœ…Berhasil$$$ Silahkan klik link dibawah ini untuk mendownload hasilnya$ \nKlik link dibawahðŸ—¡ï¸\n\nJudul: ${res.data.deskripsi} >
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes(".fb")){
const teks = text.replace(/.fb /, "")
axios.get(`https://arugaz.herokuapp.com/api/fb?url=${teks}`).then((res) => {
    let hasil = `Download sendiri melalui link dibawah ya, takut servernya down xixi..\n\nJudul: ${res.data.title}\n\nSize: ${res.data.filesize}\n\nLi>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".ig")){
const teks = text.replace(/.ig /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Dwonload sendiri,link\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".wiki")){
const teks = text.replace(/.wiki /, "")
axios.get(`https://arugaz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `ðŸ“Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".sholat")){
  const teks = text.replace(/.sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\nâš¡Imsyak : ${res.data.Imsyak}\nâš¡Subuh : ${res.data.Subuh} WIB\nâš¡Dzuhur : ${res.data.Dz>
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes('.apakah')){
const teks = text.replace(/./, '')
const truth =[
'Iya',
'Tidak',
'Bisa Jadi',
'Coba Ulangi']
const ttrth = truth[Math.floor(Math.random() * truth.length)]
conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
}

if (text.includes('.bisakah')){
const teks = text.replace(/./, '')
const truth =[
'Bisa',
'Tidak Bisa',
'Coba Ulangi']
const ttrth = truth[Math.floor(Math.random() * truth.length)]
conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
}

if (text.includes('.kapankah')){
const teks = text.replace(/./, '')
const truth =[
'Besok',
'Lusa',
'Tadi',
'4 Hari Lagi',
'5 Hari Lagi',
'6 Hari Lagi',
'1 Minggu Lagi',
'2 Minggu Lagi',
'3 Minggu Lagi',
'1 Bulan Lagi',
'2 Bulan Lagi',
'3 Bulan Lagi',
'4 Bulan Lagi',
'5 Bulan Lagi',
'6 Bulan Lagi',
'1 Tahun Lagi',
'2 Tahun Lagi',
'3 Tahun Lagi',
'4 Tahun Lagi',
'5 Tahun Lagi',
'6 Tahun Lagi',
'1 Abad lagi',
'3 Hari Lagi']
const ttrth = truth[Math.floor(Math.random() * truth.length)]
conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
}
else if (text == '.quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".resep")){
const teks = text.replace(/.resep /, "")
axios.get(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = ` *Judul:* ${results.title}\n*Penulis:* ${results.author.user}\n*Rilis:* ${results.author.datePublished}\n*Level:* ${results.dificulty>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".namaninja")){
const teks = text.replace(/.namaninja /, "")
axios.get(`https://api.terhambar.com/ninja?nama=${teks}`).then((res) => {
        conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
    let hasil = `Nama Ninja kamu🙂:\n\n${res.data.result.ninja}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '.help'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp.xp(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools1'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp1.xp1(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools2'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp2.xp2(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools3'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp3.xp3(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools4'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp4.xp4(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools5'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp5.xp5(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
if (text == '.tools6'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, xp6.xp6(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, XPTN, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, XPTN, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, XPTN, corohelp, tampilTanggal, tampilWaktu, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) ,MessageType.text);
}
else if (text == '.foto'){
conn.sendMessage(id, 'kirim .foto cewek/cowok\n\nContoh: .foto cewek' ,MessageType.text);
}
else if (text == '.help'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *BARXNL* , Follow Instagram Mimin Yah😻 : https://instagram.com/barxnl' ,MessageType.text);
}
else if (text == '.tools1'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.menu'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.tool2'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.tools3'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.tools4'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.tools5'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
else if (text == '.tools6'){
conn.sendMessage(id, ' _🗣️Thanks Telah Menggunakan BOT *👾XP-TNNBOT👾* , Follow Instagram Mimin Yah😻 : https://instagram.com/@mragung23' ,MessageType.>
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '.sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '.pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }
   }
   if (text.includes(".covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`🔎DATA WABAH COVID-19 TERBARU DI INDONESIA🔍\n\n📈Positif ==> ${positif} \n📉Sembuh ==> ${sembuh} \n📋Meninggal ==> ${meningg>
}
   if (text.includes(".katabijak"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
_${kata}_


        *~${author}*
         `, MessageType.text
            );

         });
   }

   if (text.includes(".hentai"))
   {
    var items = ["nsfwneko","anime hentai"];
    var anim = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.computerfreaker.cf/v1/";

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var anim =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(anim) // Path to the image
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64'); // Ta-da
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }



   if (text.includes(".loli"))
   {
    var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    });
    }

   if (text.includes(".shota"))
   {
    var items = ['shota anime', 'anime shota'];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    });
    }

if (text.includes(".pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    });
    }

   else if (text.includes(".nama"))
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari nama *${nama}* adalah

❉──────────❉

         Nama _*${nama}*_ _${h}_

❉──────────❉

`,
 MessageType.text);
  });
  }
  else if (text.includes(".pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

❉──────────❉

 *Kecocokan berdasarkan nama*


 _${d}_


❉──────────❉
    `, MessageType.text);
  });
  }
   if (text.includes(".foto cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
        var buf = Buffer.from(response, 'base64'); // Ta-da
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }

   if (text.includes(".foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
        var buf = Buffer.from(response, 'base64'); // Ta-da
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }

   if (text.includes(".foto cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;

    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok)
        .then(
            (response) => {
  conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
  var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    });
    }

if (text.includes(".fotoanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
        .then(
            (response) => {
    conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
        var buf = Buffer.from(response, 'base64');
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )

    });
    }

if (text.includes(".lirik")){
        const teks = text.split(".lirik")[1]
        axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
             conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
                let hasil = `🎶lirik🎶 lagu ${teks} \n\n\n ${res.data.result.lirik}`
        conn.sendMessage(id, hasil, MessageType.text)
        })
}
if (text.includes(".randomhentai"))
   {
    var items = ["nsfwhentai", "anime hentai", "hentai", "nsfwneko"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64'); // Ta-da
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }
if (text.includes(".meme"))
   {
    var items = ["funny meme", "meme", "meme 2020"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
        var buf = Buffer.from(response, 'base64'); // Ta-da
              conn.sendMessage(
            id,
              buf,MessageType.image)

            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )

    });
    }
      if (text.includes(".chord2")){
const teks = text.replace(/.chord3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/chord?q=${teks}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
else if (text == '.pesankosong'){
conn.sendMessage(id, '͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏ ͏͏͏͏' ,MessageType.text);
}
  if (text.includes(".hostsearch")){
const teks = text.replace(/.hostsearch /, "")
axios.get(`https://api.banghasan.com/domain/hostsearch/${teks}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes('.text3d')){
  var teks = text.replace(/.text3d /, '')
    axios.get('http://jojo-api-doc.herokuapp.com/api/text3d?text={text}')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.waifu2')){
  var teks = text.replace(/.waifu2 /, '')
    axios.get(`https://docs-jojo.herokuapp.com/api/waifu2`).then((res) => {
      imageToBase64(res.data.img)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".cuaca")){
const teks = text.replace(/.cuaca /, "")
axios.get(`https://mhankbarbars.herokuapp.com/api/cuaca?q=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
    let hasil = `Tempat : ${res.data.result.tempat}\nCuaca : ${res.data.result.cuaca}\nAngin : ${res.data.result.angin}\nSuhu : ${res.data.result.suhu>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".renungan")){
const teks = text.replace(/.renungan /, "")
axios.get(`https://docs-jojo.herokuapp.com/api/renungan`).then((res) => {
    let hasil = `Isi : ${res.data.Isi} \njudul : ${res.data.judul} \npesan : ${res.data.pesan}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".joox")){
const teks = text.replace(/.joox /, "")
axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}`).then((res) => {
    let hasil = `\n*judul* : ${res.data.judul} \n*mp3* :${res.data.mp3}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '.dare'){
       imageToBase64('https://i.ibb.co/Y8VhLsB/Bot-20201216-065810.jpg')
        .then(
          (ress) => {
            const dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini >
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah >
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
         const ddare = dare[Math.floor(Math.random() * (dare.length))]
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, { caption: ddare, quoted: m })
        })
}
if (text.includes('.gltext')){
var gh = text.split(".gltext ")[1];
    var teks1 = gh.split("|")[0];
    var teks2 = gh.split("|")[1];
    axios.get(`http://inyourdream.herokuapp.com/glitch?kata1=${teks1}&kata2=${teks2}`).then((res) => {
      imageToBase64(res.data.status)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[ WAIT ] Sedang diproses⏳ silahkan tunggu sebentar', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { quoted: m });
        })
    })
}
if (text.includes('.gaming2')){
  var teks = text.replace(/.gaming2 /, '')
    axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${teks}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".animesearch")){
const teks = text.replace(/.animesearch /, "")
axios.get(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${teks}`).then((res) => {
    let hasil = `title : ${res.data.title} \n *thumb* : ${res.data.result.thumb} \n *link* : ${res.data.result.link}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".jadwaltvnow")){
const teks = text.replace(/.jadwalTV /, "")
axios.get(`https://api.haipbis.xyz/jadwaltvnow`).then((res) => {
    let hasil = `Jam : ${res.data.jam}\n\n${res.data.jadwalTV}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes(".ytmp4"))
   {
      const url = text.replace(/.ytmp4 /, "");
      const exec = require('child_process').exec;

      var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

      const ytdl = require("ytdl-core")
      if (videoid != null)
      {
         console.log("video id = ", videoid[1]);
      }
      else
      {
         conn.sendMessage(id, "maaf, link yang anda kirim tidak valid", MessageType.text)
      }
      ytdl.getInfo(videoid[1]).then(info =>
      {
         if (info.length_seconds > 1000)
         {
            conn.sendMessage(id, " videonya kepanjangan", MessageType.text)
         }
         else
         {

            console.log(info.length_seconds)

            function os_func()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise((resolve, reject) =>
                  {
                     exec(cmd, (error, stdout, stderr) =>
                     {
                        if (error)
                        {
                           reject(error);
                           return;
                        }
                        resolve(stdout)
                     });
                  })
               }
            }
            var os = new os_func();

            os.execCommand('ytdl ' + url + ' -q highest -o mp4/' + videoid[1] + '.mp4').then(res =>
            {
                const buffer = fs.readFileSync("mp4/"+ videoid[1] +".mp4")
               conn.sendMessage(id, buffer, MessageType.video)
            }).catch(err =>
            {
               console.log("os >>>", err);
            })

         }
      });

   }











if (text.includes('.profileig')){
  var teks = text.replace(/%profileig /, '')
    axios.get('https://arugaz.herokuapp.com/api/stalk?username='+teks)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.ssweb')){
  var teks = text.replace(/.ssweb /, '')
    axios.get('https://api.haipbis.xyz/ssweb?url='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
  if (text.includes('.waifu')){
  var teks = text.replace(/.waifu /, '')
    axios.get('https://st4rz.herokuapp.com/api/waifu')
    .then((res) => {
      imageToBase64(res.data.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.ytmp3')){
  var teks = text.replace(/.ytmp3 /, '')
    axios.get('https://st4rz.herokuapp.com/api/yta2?url='+teks)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] SEDANG DIPROSES', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".ytmp3")){
const teks = text.replace(/.ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul : ${res.data.title}\n\>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes('/igstalk')){
  var teks = text.replace(/.igstalk /, '')
    axios.get('https://arugaz.herokuapp.com/api/stalk?username='+teks)
    .then((res) => {
      imageToBase64(res.data.Profile_pic)
        .then(
          (ress) => {
           let hasil = `User Ditemukan!!\n\n*➸ Nama :* ${res.data.Name}\n*➸ Username :* ${res.data.Username}\n*➸ Followers :* ${res.data.Jumlah_Follow>
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, { caption: hasil, quoted: m })
        })
    })
}
if (text.includes('.samehadaku')){
  var teks = text.replace(/.samehadaku /, '')
    axios.get(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${teks}`).then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.blackpink')){
  var teks = text.replace(/.blackpink /, '')
    axios.get(`https://docs-jojo.herokuapp.com/api/blackpink?text=${teks}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes(".nekopoi")){
const teks = text.replace(/.nekopoi /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/nekopoi?url=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) =>{
    let hasil = `➸ *nekopoi link tersedia* : ${res.data.judul}\n*result* : ${res.data.result} \n*dilihat* : ${res.data.dilihat}\n*tumbnail* : ${res.da>
    conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes('.memecreate')){
  var teks = text.replace(/.memecreate /, '')
    axios.get(`https://mnazria.herokuapp.com/api/create-meme?text-atas=${teks}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('.pornhub')){
var porn = text.split(".pornhub ")[1];
    var text1 = porn.split("|")[0];
    var text2 = porn.split("|")[1];
    axios.get(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${text1}&text2=${text2}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[ WAIT ] Sedang diproses⏳ silahkan tunggu sebentar', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { quoted: m });
        })
    })
}
if (text.includes(".ytmp4")){
const teks = text.replace(/.ytmp4 /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv2?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul : ${res.data.title}\n\>
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".ping")){
const teks = text.replace(/.ping /, "")
axios.get(`https://api.banghasan.com/domain/nping/${teks}`).then((res) => {
    let hasil = `*query : ${res.data.query}*\n\nhasil : ${res.data.hasil}`;
    conn.sendMessage(id, hasil ,MessageType.text);
  })
 }
if (text.includes('.ttp')){
  var teks = text.replace(/.ttp /, '')
    axios.get(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=N2Ws9kp3KTDYtry5Jjyz`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

else if (text == '.hello1'){
let hasil = fs.readFileSync('mp3/' + 'PTT' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
if (text.includes("Test")){
let err = fs.readFileSync('mp3/' + 'test' + '.mav')
 conn.sendMessage(id, err, MessageType.audio, { quoted: m })
}
if (text.includes("Salam")){
let err = fs.readFileSync('mp3/' + 'salam' + '.mp3')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true })
}
if (text.includes("Tariksis")){
let err = fs.readFileSync('mp3/' + 'tariksis' + '.wav')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true, quoted: m })
}
if (text.includes('Bot')) {
 var nomor = m.participant
 const options = {
       text: `apa manggil manggil tinggal ketik .help @${nomor.split("@s.whatsapp.net")[0]}`,
       contextInfo: { mentionedJid: [nomor] }
 }
 conn.sendMessage(id, options, MessageType.text, { quoted: m })
}
if (text.includes('bot')) {
 var nomor = m.participant
 const options = {
       text: `apa manggil manggil tinggal ketik .help @${nomor.split("@s.whatsapp.net")[0]}`,
       contextInfo: { mentionedJid: [nomor] }
 }
 conn.sendMessage(id, options, MessageType.text, { quoted: m })
}
if (text.includes("Desah")){
let err = fs.readFileSync('mp3/' + 'desah' + '.wav')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true, quoted: m })
}
if (text.includes("iri")){
let err = fs.readFileSync('mp3/' + 'iri' + '.mp3')
 conn.sendMessage(id, err, MessageType.audio, { ptt: true, quoted: m })
}
else if (text == 'Bot'){
let hasil = fs.readFileSync('mp3/' + 'baka' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
else if (text == 'Ptt'){
let hasil = fs.readFileSync('mp3/' + 'pttt' + '.pttt')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
else if (text == 'Goblok'){
let hasil = fs.readFileSync('mp3/' + 'goblok' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
else if (text == '.help'){
let hasil = fs.readFileSync('mp3/' + 'baka' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
else if (text == 'Ohayo'){
let hasil = fs.readFileSync('mp3/' + 'hehe' + '.wav')
 conn.sendMessage(id, hasil, MessageType.audio, { quoted: m } )
}
if (text.includes(".alay")){
        const alay = text.split(".alay")[1]
        axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
                { let hasil = `${res.data.text}`
                conn.sendMessage(id, hasil, MessageType.text)
        })
}

//Tolonglah bro jangan di ubah ubah BARXNL


})
