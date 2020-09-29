const TelegramBot = require('node-telegram-bot-api');
const assert = require('assert'); 
const { setTimeout } = require('timers');
const { strict } = require('assert');
const spawn = require('child_process').spawn;
const supportTelegramID = 965044805;
require("./mydbconnection.js");
require("./mylanguages.js");
require("./botcommandslib.js");
require("./helpInfoBtn.js");

const bot = new TelegramBot(token, {polling: true});
//var userpreferences = {};

var HELPBTNEVENTS = [
    "HELPBTN1_BTN1CLICKED","HELPBTN1_BTN2CLICKED","HELPBTN1_BTN3CLICKED","HELPBTN1_BTN4CLICKED","HELPBTN1_BTN5CLICKED","HELPBTN1_BTN6CLICKED","HELPBTN1_BTN7CLICKED",
    "HELPBTN2_BTN1CLICKED","HELPBTN2_BTN2CLICKED","HELPBTN2_BTN3CLICKED","HELPBTN2_BTN4CLICKED","HELPBTN2_BTN5CLICKED","HELPBTN2_BTN6CLICKED","HELPBTN2_BTN7CLICKED",
    "HELPBTN3_BTN1CLICKED","HELPBTN3_BTN2CLICKED","HELPBTN3_BTN3CLICKED","HELPBTN3_BTN4CLICKED", "HELPBTN3_BTN5CLICKED", "HELPBTN3_BTN6CLICKED", "HELPBTN3_BTN7CLICKED",
    "HELPBTN4_BTN1CLICKED", "HELPBTN4_BTN2CLICKED","HELPBTN4_BTN3CLICKED","HELPBTN4_BTN4CLICKED", "HELPBTN4_BTN5CLICKED","HELPBTN4_BTN6CLICKED", "HELPBTN4_BTN7CLICKED",
    "HELPBTN5_BTN1CLICKED", "HELPBTN5_BTN2CLICKED", "HELPBTN5_BTN3CLICKED", "HELPBTN5_BTN4CLICKED"
];
//////////
getUsers();
/////////
bot.onText(/(.+)$/, function (msg, match) {      
    var PREFLANGOBJ;    
    console.log("$$$$$$$$$ MSG $$$$$$$$$$",msg.text);
    //userpreferences[msg.from.id] = {"SELECTLANG": 'EN'};
    if(userpreferences[msg.from.id] === undefined){
        userpreferences[msg.from.id] = {"SELECTLANG": 'EN'};  
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("HAS Property .....",userpreferences[msg.from.id]);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    //userpreferences[msg.from.id] = {"SELECTLANG": 'EN'};
    PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);    
    console.log(":::::: PREFLANGOBJ::::::", PREFLANGOBJ);   
    console.log(msg.text);
    if((msg.text.indexOf("Language selection") > -1) || (msg.text.includes(PREFLANGOBJ.LANGSETTINGS))){        
        console.log("<<<<<<<<<<<<<<<<<<<<< LANG SELECTION >>>>>>>>>>>>>>>>>>>>>");  
        PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);          
        LangButtonPallete(msg.from.id, msg.chat.id, msg.message_id);
    }
    
    var LANG = userpreferences[msg.from.id]["SELECTLANG"];          
    let qxtemp = JSON.parse(JSON.stringify(helpInfoBtn[LANG+"_ASKQUE_CLICKED"]));         

    if(msg.hasOwnProperty('reply_to_message')){
        //console.log(">>>>>>>>>> HAS Property >>>>>>>>>",msg.reply_to_message.text);
        if(msg.reply_to_message.text.indexOf(qxtemp) > -1){
            // Lets send message to the support staff !!!!    
            //console.log(">>>>>>>>>> HAS Property >>>>>>>>>",msg);
            var userQueries = JSON.stringify({ userTelegramID: msg.from.id, User: msg.from.first_name+" "+msg.from.last_name, UserQueries: msg.text });
            console.log("<<<<<<< USER QUERIES >>>>>>>",msg.from.first_name, msg.from.last_name);
            bot.sendMessage(supportTelegramID, userQueries);
        }
    }
    if(msg.text.includes("/start")){
        PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);    
        firstButtonPallet(msg.from.id, PREFLANGOBJ);
    }
    //'📩A response to your query has arrived!',
    if(msg.text.indexOf(PREFLANGOBJ.start) > 0){
        console.log(">>>>>>>>>>>>>>>>>>##### LINE 60 #####<<<<<<<<<<<<<<<<<<<");
        //console.log(msg.text);
        //console.log(msg.text.indexOf(PREFLANGOBJ.start));                
        //console.log(PREFLANGOBJ.REGISTRATION);
        PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);    
        firstButtonPallet(msg.from.id, PREFLANGOBJ);
    }else if((msg.text.indexOf(PREFLANGOBJ.Back) > 0)|| (msg.text.indexOf(PREFLANGOBJ.BACKTOMAINMENU) > -1)){ 
        //console.log( "HEY I AM HERE >>>>>>>>>");
        PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);           
        firstButtonPallet(msg.from.id, PREFLANGOBJ);
    }else if((msg.text.indexOf(PREFLANGOBJ.BTNPersonalAccount) > 0) || (msg.text.includes(PREFLANGOBJ.PERSONALACCOUNT))){ 
        //console.log("^^^^^^^^^ @@@@@@ ^^^^^^^^^");
        PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);                 
        PersonalAccountButtonPallet(msg.from.id, PREFLANGOBJ, msg.from.username);          
    }else{                        
        //console.log("<<<<<:::::INDEX:::::>>>>>",msg.text);  
        //console.log(" >>>>>>>>>>>>>>>>>>>>>",PREFLANGOBJ.REGISTRATION);      
        //console.log(" >>>>>>>>>>>>>>>>>>>>>",EN.REGISTRATION);
        if((msg.text.indexOf(PREFLANGOBJ.REGISTRATION) > -1) || (msg.text.indexOf(EN.REGISTRATION) > -1)){            
            //console.log(">>>########>>>MSG TEXT<<##########<<",msg.text);
            PREFLANGOBJ = eval(userpreferences[msg.from.id]["SELECTLANG"]);    
            RegestrationButtonPallet(msg.from.id, PREFLANGOBJ);
        }                
    }        
    ////////////////////
    if(msg.text.includes(PREFLANGOBJ.INFORMATIONHELP)){     
        console.log("@@@<<<<< MSG >>>>>>",msg);     
        HelpInformationBtn(PREFLANGOBJ, msg.chat.id, msg.from.id);  
        // SHOW main down Keyboard BUTTON 
        //🔙 Back to the main menu
        var backMenuMenu = PREFLANGOBJ.BACKTOMAINMENU;
        let BackToMainMenuOpt = {
            chat_id: msg.chat.id,
            reply_markup: JSON.stringify({
                keyboard:[
                    [
                        {
                            text: PREFLANGOBJ.BACKTOMAINMENU
                        }
                    ]
                ],
                resize_keyboard: true                       
            })
        } 
        bot.sendMessage(msg.from.id, backMenuMenu, BackToMainMenuOpt);        
    }    
    
    ////////////////// SCOCIAL NETWORK /////////////
    if(msg.text.includes(PREFLANGOBJ.SOCIALNETWORK)){
        var SocialNetworkOpt = {
            chat_id: msg.chat.id,
            message_id: msg.message_id,            
            reply_markup: JSON.stringify({
                inline_keyboard:[
                    [
                        {
                            text: PREFLANGOBJ.SOCIAL_TELEGRAM,
                            url: "https://t.me/smartpeoplechat"
                        },
                    ],
                    [
                        {
                            text: PREFLANGOBJ.SOCIAL_YOUTUBE,
                            url: "https://www.youtube.com/channel/UCIw_BhcSHA0Gf-z9PAPTSRQ"
                        },
                    ],
                    [
                        {
                            text: PREFLANGOBJ.SOCIAL_INSTAGRAM,
                            url: "https://www.instagram.com/forsage.io.official/"
                        },
                    ]
                ]
            })
        }
        bot.sendMessage(msg.from.id, PREFLANGOBJ.SOCIAL_NETWORK_TEXT, SocialNetworkOpt);        
    }
});

async function getUserData(userid){
   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
        var dbo = db.db("admin");
        var query = { telegramID: userid.toString() };
        dbo.collection("forsageUsers").find(query).toArray(function(err,result){                                                    
            var x = JSON.parse(JSON.stringify(result[0]));
            userpreferences[x.telegramID] = {"SELECTLANG": x.userLang};     
            console.log("<<<<<<.......ADDING IN THE userPreferences ARRAY.....>>>>>>>");  
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>",userpreferences);                             
            return true;
        });    
        db.close();
    });
}

function insertUserData(userid, userLanguage){    
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    console.log(">>>>><<<<<<");
    var myobj = { "telegramID": userid.toString(), "userLang": userLanguage.toString() };
        dbo.collection("forsageUsers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function insertUpdateUserData(userid, userLanguage){    
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("admin");
        console.log(">>>>><<<<<<");
        var query = {"telegramID": userid.toString()};                                                          
        dbo.collection("forsageUsers").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(":::::::::::: RESULT :::::::::::",result.length);            
            if(result.length > 0){
                updatetUserData(userid, userLanguage)
            }else{
                insertUserData(userid, userLanguage)
            }
            db.close();
        });
    }); 
}

function updatetUserData(userid, userLanguage){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admin");    
    var myquery = {"telegramID": userid.toString()};
    console.log(">>>>><<<<<<");
    var newvalues = { $set: {"userLang": userLanguage.toString() } };
        dbo.collection("forsageUsers").updateOne(myquery, newvalues, function(err, res) {
            console.log(">>>>><<<<<<########");
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
}


function HelpInformationBtn(PREFLANGOBJ, chatid, frmid){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> HELP INFO BTN >>>>>>>>>");
    let myHelpInfoBtn = {
        chat_id: chatid,        
        reply_markup: JSON.stringify({
            inline_keyboard: [                    
                [{ 
                    text: PREFLANGOBJ.FAQ,
                    callback_data: "FAQ_CLICKED"
                }],
                [{ 
                    text: PREFLANGOBJ.ASKAQuestion,
                    callback_data: "ASKQUE_CLICKED"
                }],                                            
            ],
            resize_keyboard: false                           
        })
    };  
    var messageTxt = PREFLANGOBJ.HELPINFOTEXT;
    var msgTxt = PREFLANGOBJ.HELP_INFO_TEXT;
    
    bot.sendMessage(frmid, messageTxt).then(()=>{
        bot.sendMessage(frmid, msgTxt, myHelpInfoBtn);
    });            
}
//( callbackQuery.message.from.id, callbackQuery.message.message_id);           

function HelpInformationMainBtn(PREFLANGOBJ, chatid, message_id){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> HELP INFO BTN >>>>>>>>>");
    var OBJ = eval(PREFLANGOBJ);
    let myHelpInfoBtn = {
        chat_id: chatid,
        message_id: message_id,            
        reply_markup: JSON.stringify({
            inline_keyboard: [                    
                [{ 
                    text: PREFLANGOBJ.FAQ,
                    callback_data: "FAQ_CLICKED"
                }],
                [{ 
                    text: PREFLANGOBJ.ASKAQuestion,
                    callback_data: "ASKQUE_CLICKED"
                }],                                            
            ]                           
        })
    };  
    var messageTxt = OBJ.HELPINFOTEXT;
    var msgTxt = OBJ.HELP_INFO_TEXT;   
    bot.editMessageText(msgTxt, myHelpInfoBtn);          
}

/// Language Button Pallete
function LangButtonPallete(fromid, chatid, message_id){  
    var lang = userpreferences[fromid]["SELECTLANG"]; 
    console.log(">>>>>>> LANG >>>>>>",lang);
    PREFLANGOBJ = eval(userpreferences[fromid]["SELECTLANG"]);
    var MYLANG = JSON.parse(JSON.stringify(LANG[lang])); 
    console.log("<<<<<<    CHAT_ID: >>>>>>>", chatid);   
    console.log("<<<<<< MESSAGE ID: >>>>>>>", message_id);       
    console.log("<<<<<< MYLANG: >>>>>>>", MYLANG);  
    console.log("<<<<<< MYLANG: >>>>>>>", lang);  
    const LANGOpts = {         
                    reply_markup: {
                        inline_keyboard: [
                            [{  text: MYLANG.ENGLISH.toString(), callback_data: "SET_LANG_ENGLISH",}],
                            [{  text: MYLANG.DEUTSCH.toString(), callback_data: "SET_LANG_DEUTSCH",}],
                            [{  text: MYLANG.ESPANOL.toString(), callback_data: "SET_LANG_ESPANOL",}],
                            [{  text: MYLANG.FRANCIS.toString(), callback_data: "SET_LANG_FRANCIS",}],
                            [{  text: MYLANG.ITALIANO.toString(), callback_data: "SET_LANG_ITALIANO",}],
                            [{  text: MYLANG.RUSSIAN.toString(), callback_data: "SET_LANG_RUSSIAN",}],
                            [{  text: MYLANG.AZERBYCAN.toString(), callback_data: "SET_LANG_AZERBYCAN",}],
                            [{  text: MYLANG.HEBREW.toString(), callback_data: "SET_LANG_HEBREW",}],
                            [{  text: MYLANG.TURKCE.toString(), callback_data: "SET_LANG_TURKCE",}],
                            [{  text: MYLANG.ARABIC.toString(), callback_data: "SET_LANG_ARABIC",}],
                        ]
                    }        
    };
    //console.log(">>>>>>", PREFLANGOBJ.LANG_SELECTION_TEXT);    
    bot.sendMessage(fromid, PREFLANGOBJ.LANG_SELECTION_TEXT, LANGOpts);          
}

function firstButtonPallet(fromid, PREFLANGOBJ){  
    PREFLANGOBJ = eval(userpreferences[fromid]["SELECTLANG"]); 
    console.log(">>>><<<<<<>>PREFLANGOBJ>>>>><<<<>>>>",PREFLANGOBJ);            
    const opts = {
        reply_markup: {
            keyboard: [
                    [  
                        {  
                            text: PREFLANGOBJ.LANG_SELECTION_TEXT                            
                        },
                    ],
                    [
                        {  
                            text: PREFLANGOBJ.REGISTRATION
                        },                        
                    ],                       
                    [
                        {  
                            text: PREFLANGOBJ.PERSONALACCOUNT
                        }, 
                    ],
                    [                        
                        {  
                            text: PREFLANGOBJ.INFORMATIONHELP                            
                        },
                        {   
                            text: PREFLANGOBJ.SOCIALNETWORK
                        }
                    ]
            ],            
            resize_keyboard: true
        }
    };
    bot.sendMessage(fromid, PREFLANGOBJ.WELCOMEMSGFORSAGE, opts);   
}

function getData(username){
    console.log("FROM ID >>>>>>....",username);
    // const pythonProcess = spawn('python3',["/home/chetan/forsagedemoNew/forsagebotscript/test5.py", ['ckulthe']]);
    return spawn('python3',["/home/chetan/forsagedemoNew/forsagebotscript/test6.py", [username.toString()]]);    
    //return spawn('python3',["./test6.py", [username.toString()]]);    
}

//TO CHECK USER IN CHANNEL
function checkUserOnChannelOrNot(fromid, PREFLANGOBJ, username){
        console.log("SEARCHING FOR ....",username);
        var x;
        var pythonProcess = getData(username);                 
        pythonProcess.stdout.on('data',
            (data)=>{
                data = data.toString().trim();         
                console.log(" <<<<<<< DATA >>>>>>>>....",data);       
                if(data == "FALSE"){
                    console.log("#######################NOT Exits inChannel");
                    sendOpts(fromid, PREFLANGOBJ, 1);
                }
                if(data == fromid.toString()){
                    //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<");  
                    console.log("#####################USER EXISTS InChannel!! Matched!!!!!!");
                    sendOpts(fromid, PREFLANGOBJ, 0);
                }
            }
        );
        console.log(">>>>><<<<<<");
}

function sendOpts(fromid, PREFLANGOBJ, d){
    var url = "https://t.me/smartpeoplechat";
    console.log("CHECKING")
    console.log(">>>>>>>>ShowUrl: >>>>>>>",d);       
    if(d > 0){
     var myOpt = {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text: PREFLANGOBJ.ForsageTelegramChannel ,                            
                            url: url,
                        },
                    ],
                    [
                        {
                            text: PREFLANGOBJ.HaveSubscribed,
                            callback_data: "NOTSUBSCRIBED",                                            
                        },
                    ],
                ],
                resize_keyboard: true
            }
        }
        bot.sendMessage(fromid, PREFLANGOBJ.PERSONALACCOUNT1, myOpt);
    }else{
        const myOpt = {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text: PREFLANGOBJ.AUTH_FROM_MOB_DEVICE,
                            callback_data: "AUTHMOBDevice"                    
                        },
                    ],
                    [
                        {
                            text: PREFLANGOBJ.AUTH_USING_PC,
                            callback_data: "AUTHUsingPC"                    
                        },
                    ],
                ]
            }
        }
        bot.sendMessage(fromid, PREFLANGOBJ.MSGSelectMethod, myOpt);
        /////
    }  
}

function PersonalAccountButtonPallet(fromid, PREFLANGOBJ, username){ 
    var ShowUrl = checkUserOnChannelOrNot(fromid, PREFLANGOBJ, username);          
}

function RegestrationButtonPallet(fromid, PREFLANGOBJ){    
    PREFLANGOBJ = eval(userpreferences[fromid]["SELECTLANG"]);    
    bot.sendMessage(fromid, PREFLANGOBJ.REG1);
    setTimeout(()=>{}, 1500);                      
        
    const backopts = {
        reply_markup: JSON.stringify({            
            keyboard: [
                    [      
                        text= PREFLANGOBJ.BACKTOMAINMENU
                    ],                       
            ],
            resize_keyboard: true
        })
    };    
    bot.sendMessage(fromid, PREFLANGOBJ.BACKTOMAINMENU, backopts);     

    const opts = {
        reply_markup: {
            inline_keyboard: [
                    [
                        { 
                             text: PREFLANGOBJ.REGISTRINGMOBILE,
                             callback_data: "REGISTRINGMOBILE"
                        },                        
                    ],                       
                    [
                        {  
                            text: PREFLANGOBJ.REGISTRINGUSINGPC,
                            callback_data: "REGISTRINGUSINGPC" 
                        }, 
                    ]
            ],            
            resize_keyboard: true
        }
    };
    bot.sendMessage(fromid, PREFLANGOBJ.REG2, opts);     
}

bot.on("polling_error", (err)=>{console.log(err)});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {    
    console.log("Query###1234::::",callbackQuery);    
    console.log("<<<<<DATA....",callbackQuery.data);            
    PREFLANGOBJ = eval(userpreferences[callbackQuery.from.id]["SELECTLANG"]);               
    console.log("##### >>>> ###### <<<< #####");
    if(callbackQuery.data.includes("SET_LANG_")){
       console.log("<<<<<<<<<<<..... SETTING LANGUAGE .....>>>>>>>>>>>>>");
       console.log(userpreferences[callbackQuery.from.id]);
       var newLang = callbackQuery.data.split("SET_LANG_")[1][0]+callbackQuery.data.split("SET_LANG_")[1][1];
       userpreferences[callbackQuery.from.id]["SELECTLANG"] = newLang.toString();
       // reload user  ...
       PREFLANGOBJ = eval(userpreferences[callbackQuery.from.id]["SELECTLANG"]);               
       insertUpdateUserData(callbackQuery.from.id, newLang);
       console.log(">>>>>>>>>>> PREFLANGOBJ >>>>>>>>>>",PREFLANGOBJ);
       firstButtonPallet(callbackQuery.from.id, PREFLANGOBJ);
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>",userpreferences[callbackQuery.from.id]["SELECTLANG"]);    
    var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"] ? LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"] : 'EN';           
    var OBJ = eval(LANG); 
    //MAINHELPOPT
    if(callbackQuery.data == "BACK_TO_MAIN_HELPOPT"){
        //HelpInformationBtn(PREFLANGOBJ, msg.chat.id, msg.from.id);                   
        HelpInformationMainBtn(OBJ, callbackQuery.message.chat.id, callbackQuery.message.message_id);           
    }
    
    if(callbackQuery.data == "BACK_TO_HELP_OPT"){
        HelpInformationBtn(PREFLANGOBJ, callbackQuery.message.chat.id, callbackQuery.from.id);     
    }    

    if(callbackQuery.data == "REG_MANUAL_TRAN"){
        bot.sendMessage(callbackQuery.from.id, OBJ.REG_MANUAL_TRAN);
    }    

    if(callbackQuery.data == "REGISTRINGUSINGPC"){  
        console.log(callbackQuery);     
        let myopt2 = {            
            reply_markup: JSON.stringify({
                inline_keyboard: [                    
                    [{ 
                        text: OBJ.METAMASK_Registration_TEXT,                        
                        url: OBJ.MetaMaskURL
                    }],
                    [{ 
                        text: OBJ.REG_MANUAL,
                        callback_data: "REGISTRATION_MANUAL_TRANSACTION",
                    }],                                                  
                ]                           
            }) 
        };       
        bot.sendMessage(callbackQuery.message.chat.id, OBJ.SELECTSUITAIBLEMETHOD, myopt2).catch(e => console.log(e));        
    }

    if(callbackQuery.data == "REGISTRATION_MANUAL_TRANSACTION"){
        //var mtext = "Address for the transfer: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97\nTransfer amount: 0.05\nUpline wallet address (of the person who made the invitation): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E";
        bot.sendMessage(callbackQuery.message.chat.id, OBJ.REG_MANUAL_TRANS_TXT).catch(e => console.log(e));        
    }

    if(callbackQuery.data == "REGISTRINGMOBILE_NO_WALLET"){
       //console.log("DONT HAVE WALLET");
       //console.log(callbackQuery);
       //console.log({ chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id });      
        var myopt1 = {
            reply_markup: {
                inline_keyboard: [
                    [
                        { 
                             text: OBJ.NEXT,
                             callback_data: "REGISTRINGMOBILE_NEXT"
                        },                        
                    ]                     
                ],            
                resize_keyboard: true
            } 
        };
        var photo ='./images/tokenPocket.png';
        //var photo ='./images/image2.jpg';
        bot.answerCallbackQuery(callbackQuery.id)
        .then( () => bot.sendPhoto( callbackQuery.message.chat.id, photo)
           .then( () => setTimeout( ()=>{ bot.sendMessage(callbackQuery.from.id, OBJ.REG_MOBILE_WALLET_APP) }, 200))
           // .then( () => setTimeout( ()=>{ bot.sendMessage(callbackQuery.from.id, OBJ.REG_MOBILE_WALLET_APP, myopt1) }, 200))
        );
    }
    
    if(callbackQuery.data == "REGISTRINGMOBILE_NEXT"){
        //REG_NO_WALLET_NEXT
        console.log(">>>>>>>>>>>>>>>>>>>>")
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.editMessageText(OBJ.REG_NO_WALLET_NEXT,{ 
            chat_id: callbackQuery.message.chat.id, 
            message_id: callbackQuery.message.message_id            
         }));
         bot.sendMessage(callbackQuery.from.id, OBJ.REG_NO_WALLET_URL);
    }

    if(callbackQuery.data == "REGISTRINGMOBILE_WALLET_APP"){
        console.log(">>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<");               
        //var photo ='/home/chetan/forsagedemo/images/image1.jpg';
        var photo = './images/dappBrowser.png';
        //var photo ='./images/image1.jpg';
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendPhoto( callbackQuery.message.chat.id, photo));  
        setTimeout(()=>{
            bot.sendMessage(callbackQuery.from.id, OBJ.REG_MOBILE_WALLET_APP)                        
        },2500);       
        setTimeout(()=>{
            bot.sendMessage(callbackQuery.from.id, OBJ.REG_MOBILE_WALLET_APP_URL)
        },2800);
    }
    

    if(callbackQuery.data == "REGISTRINGMOBILE"){         
        console.log(">>>>> data >>>>>",callbackQuery);
        var message_id = callbackQuery.message.message_id;
        var chat_id = callbackQuery.message.chat.id;        
        //bot.editMessageText(OBJ.SELECTSUITAIBLEMETHOD,{ chat_id: chat_id, message_id: message_id });
        const myopts = {
            chat_id: chat_id,
            message_id: message_id,
            reply_markup: {
                inline_keyboard: [
                        [
                            { 
                                 text: OBJ.REGISTRINGMOBILE11,
                                 callback_data: "REGISTRINGMOBILE_NO_WALLET"
                            },                        
                        ],                       
                        [
                            {  
                                text: OBJ.REGISTRINGMOBILE12,
                                callback_data: "REGISTRINGMOBILE_WALLET_APP" 
                            }, 
                        ],
                        [
                            {  
                                text: OBJ.REGISTRINGMOBILE13,
                                callback_data: "REG_MANUAL_TRAN" 
                            }, 
                        ]
                ],
                resize_keyboard: true
            }
        };
        bot.answerCallbackQuery(callbackQuery.id)
            .then(() => bot.editMessageText(OBJ.SELECTSUITAIBLEMETHOD, myopts));  
    }
    
    if(callbackQuery.data == "CHANNELBTNCLICKED"){  
        const myOpt = {
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text: OBJ.AUTH_FROM_MOB_DEVICE,
                            callback_data: "AUTHMOBDevice"                    
                        },
                    ],
                    [
                        {
                            text: OBJ.AUTH_USING_PC,
                            callback_data: "AUTHUsingPC"                    
                        },
                    ],
                ]
            }
        }
        bot.sendMessage(callbackQuery.from.id, OBJ.MSGSelectMethod , myOpt);
    }
    
    if(callbackQuery.data == "AUTHMOBDevice"){       
        var photo = '/home/chetan/forsagedemoNew/forsagebotscript/images/image3.jpg';
        //var photo = './images/image3.jpg';
        bot.sendPhoto(callbackQuery.from.id, photo)        
        .then( () => setTimeout( ()=>{
               bot.sendMessage(callbackQuery.from.id, OBJ.AUTHFROM_MOB_CLICK_TEXT);
               bot.sendMessage(callbackQuery.from.id, OBJ.AUTHFROM_MOB_CLICK_TEXT_LINK);
        }, 100));        
    }
    
    if(callbackQuery.data == "AUTHUsingPC"){
        var photo = '/home/chetan/forsagedemoNew/forsagebotscript/images/image4.jpg';        
        //var photo = './images/image4.jpg';        
        // call one more link button here
        let myPCAuthOpt = {
            chat_id: callbackQuery.message.chat.id,            
            reply_markup: JSON.stringify({
                inline_keyboard: [                    
                    [{ 
                        text: OBJ.AUTH_USING_PC,                        
                        url: OBJ.AUTH_USING_PC_URL
                    }]                                             
                ]                           
            }) 
        };      

        bot.sendPhoto(callbackQuery.from.id, photo)         
        .then( ()=> setTimeout( () => {
             bot.sendMessage(callbackQuery.from.id, OBJ.AUTHUING_PC_CLICK_TEXT, myPCAuthOpt);             
        }, 100) );   
    }

    if(callbackQuery.data == "FAQ_CLICKED"){
        //let temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN1));   
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN2 = "helpInfoBtn."+LANG+"_"+"HELPBTN1";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN2)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");

        var q = [];
        console.log("<<<<<<<<<<<<< callbackQuery >>>>>>>>>>>>",callbackQuery.message.message_id);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>",callbackQuery.message.chat.id);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>",callbackQuery.message.message_id);        
        for(i=1;i<=temp.TOTALBTN;i++){            
            var key = "BTN"+i.toString();
            var w = [{"text": temp[key], callback_data: "HELPBTN1"+"_"+key+"CLICKED"}]; 
            q.push(w);                        
        }   
                                
        var backBTN = [{"text": "Back", callback_data: "BACK_TO_HELP_OPT"}];        
        var back_outof_frontBTN = [{"text": "<", callback_data: "BTN_CLICKED_BACK_GO1"},{"text": "1/5", callback_data: "BACK_outof_1of5"},{"text": ">", callback_data: "BTN_CLICKED_GO_FRONT2"}];
        q.push(back_outof_frontBTN);
        q.push(backBTN);
        var helpBTN = {   
            chat_id: callbackQuery.message.chat.id,         
            message_id: callbackQuery.message.message_id,
            reply_markup: JSON.stringify({
                inline_keyboard: 
                    q,
            })
        };        
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN).catch( (e)=>console.log("EEEEEEEE",e));       
    }

    if(callbackQuery.data.indexOf("GONOWHERE") > -1){
        console.log("GONOWHERE");
    }

    if(callbackQuery.data.indexOf("BTN_CLICKED_BACK_GO1") > -1){        
        var GOBACK_BTN = "GONOWHERE";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT2";
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN1";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        //var temp = JSON.parse(JSON.stringify(eval(helpInfoBtn.HELPBTN1)));        
        var OUT_OF = OBJ.ONE_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN1");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);   
    }

    if(callbackQuery.data.indexOf("BTN_CLICKED_BACK_GO2") > -1){
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO1";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT3";
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN2";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN2));        
        var OUT_OF = OBJ.TWO_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN2");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);   
    }

    if(callbackQuery.data.indexOf("BTN_CLICKED_BACK_GO3") > -1){
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO2";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT4";
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN3));        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN3";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.THREE_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN3");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);    
    }

    if(callbackQuery.data.indexOf("BTN_CLICKED_BACK_GO4") > -1){
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO3";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT5";
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN4));        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN4";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.FOUR_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN4");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);    
    }

    /// FORNT BUTTONS //////
    if(callbackQuery.data == "BTN_CLICKED_GO_FRONT2"){        
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO1";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT3";
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN2));        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN2";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.TWO_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN2");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);   
    }


    if(callbackQuery.data == "BTN_CLICKED_GO_FRONT3"){        
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO2";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT4";
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN3));        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN3";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.THREE_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN3");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);    
    }

    if(callbackQuery.data == "BTN_CLICKED_GO_FRONT4"){        
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO3";
        var GOBACK_FRONT = "BTN_CLICKED_GO_FRONT5";
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN4));                
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN4";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.FOUR_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN4");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);           
    }

    if(callbackQuery.data == "BTN_CLICKED_GO_FRONT5"){        
        var GOBACK_BTN = "BTN_CLICKED_BACK_GO4";
        var GOBACK_FRONT = "GONOWHERE";        
        //var temp = JSON.parse(JSON.stringify(helpInfoBtn.HELPBTN5));        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];
        var helpBTN = "helpInfoBtn."+LANG+"_"+"HELPBTN5";         
        var temp = JSON.parse(JSON.stringify(eval(helpBTN)));
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        console.log(temp);        
        console.log("==@@@@====#####=======@@@@====#####=======@@@@====#####=====");
        var OUT_OF = OBJ.FIVE_OF_FIVE;
        var helpBTN = getHelpBTNs(temp, GOBACK_BTN, GOBACK_FRONT, OUT_OF, callbackQuery.message.chat.id, callbackQuery.message.message_id, "HELPBTN5");    
        bot.editMessageText(OBJ.SELECT_INTEREST, helpBTN);           
    }

    if(callbackQuery.data == "NOTSUBSCRIBED"){      
        bot.sendMessage(callbackQuery.from.id, OBJ.NO_SUBSCRIPTION_FOUND);        
    }

    if(callbackQuery.data == "ASKQUE_CLICKED"){
        let temp = JSON.parse(JSON.stringify(helpInfoBtn));  
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"];      
        var txt = temp[LANG+"_ASKQUE_CLICKED"];  
        //var txt = temp.ASKQUE_CLICKED;  
        var chatid =  callbackQuery.message.message_id;        
        var fromid = callbackQuery.from.id;
        var opt = {            
            reply_markup: JSON.stringify({ 
                "force_reply": true
            })
        };
        bot.sendMessage(fromid, txt, opt).then((e)=>{
            //console.log("EEEEEEEEZSEEEESSEEEE:::::",e);
            //console.log("REPLY MESSAGE::::",e.reply_to_message);
        });      
        console.log("I am done!!!");
    }   

    if(HELPBTNEVENTS.indexOf(callbackQuery.data) > -1){    
        console.log("##### LINE # 830 ####");
        console.log(callbackQuery.data);
        var q = callbackQuery.data.split("_");        
        var LANG = userpreferences[callbackQuery.from.id]["SELECTLANG"]; 
        var temp = JSON.parse(JSON.stringify(helpInfoBtn[LANG+"_"+q[0]]));                        
        var EventText = temp[callbackQuery.data];   
        console.log("EventText:::::",EventText);     
        var backBTN = [{"text": OBJ.Back, callback_data: "BACK_TO_HELP_OPT"}];        

        bot.editMessageText(EventText,{
            chat_id: callbackQuery.message.chat.id, 
            message_id: callbackQuery.message.message_id,
            reply_markup: {                
                inline_keyboard: [
                    [
                        {
                            text: OBJ.Back,
                            callback_data: "BACK_TO_HELP_OPT",
                        }
                    ]
                ],
            },
            resize_keyboard: true
        }).catch(e =>{ console.log(e); });        
    }
});

function getHelpBTNs(_HLPBTN, _GOBACK_BTN, _GOBACK_FRONT, OUT_OF, chatid, message_id, HELPBTN){
    let temp = JSON.parse(JSON.stringify(_HLPBTN));        
    var q = [];    
    for(i=1;i<=temp.TOTALBTN;i++){            
        var key = "BTN"+i.toString();
        var w = [{"text": temp[key], callback_data: HELPBTN+"_"+key+"CLICKED"}]; 
        q.push(w);                        
    }   
    var BCK = "BTN_CLICKED_GO_FRONT5";
    if(HELPBTN == "HELPBTN4"){
        BCK = "BTN_CLICKED_GO_FRONT4";
    }
    if(HELPBTN == "HELPBTN3"){
        BCK = "BTN_CLICKED_GO_FRONT3";
    }
    if(HELPBTN == "HELPBTN2"){
        BCK = "BTN_CLICKED_GO_FRONT2";
    }
    if(HELPBTN == "HELPBTN1"){
        BCK = "GONOWHERE";
    }
    //BTN_CLICKED_GO_FRONT5
    var backBTN = [{"text": "Back", callback_data: "BACK_TO_HELP_OPT"}];        
    var back_outof_frontBTN = [
        {"text": "<", callback_data: _GOBACK_BTN},
        {"text": OUT_OF, callback_data: "BACK_outof_1of5"},
        {"text": ">", callback_data: _GOBACK_FRONT}
    ];
    q.push(back_outof_frontBTN);
    q.push(backBTN);        
    var helpBTN = {   
        chat_id: chatid,         
        message_id: message_id,
        reply_markup: JSON.stringify({
            inline_keyboard: 
                q
        })
    };                     
    return helpBTN;
}


async function getUsers() {
    try{
        let p = new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("admin");      
                dbo.collection("forsageUsers").find({}).toArray(function(err,result){                                                                
                    console.log("RESULT.....");            
                    for(i=0;i<result.length;i++){
                        var x = JSON.parse(JSON.stringify(result[i]));                
                        userpreferences[x.telegramID] = { "SELECTLANG": x.userLang };
                    }  
                    resolve(userpreferences);                      
                });        
                db.close();            
            });    
        });
        let r = await p;
        //console.log(r);
    }catch(e){
        console.log("EEEEE",e);
    }
}

//ASK a Question response
//Thank you! Your question has been sent to a Forsage specialist. You can expect an answer soon!