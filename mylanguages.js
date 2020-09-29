const { strict } = require("assert");
const { stringify } = require("querystring");

// MESSAGES ..
global.EN = { 
    "INVALIDADDR": "Invalid Tron address",
    "SELECTLANG": "🌍 Select a language:",
    "WELCOMEMSG": "Hi! I'm a bot. Want to make friends? I was created so that you don't miss any important events in your Forsage account and can make even more money with me!",
    "ADDMESSAGE1": "✏️ Specify the Tron wallet of your Forsage project account in order to instantly receive related event notifications.",    
    "ADDRESSADDEDSUCCESS": "Address added successfully 👌",  
    "ADDREDDEXISTSERR": "Address already exists! ERR-",
    "DELETEMESSAGE": "✏️ Click on the address that you want to delete from the bot :",
    "CONNECTEDACCMESSAGE": "Connected accounts:",
    "NOACCOUNTSMSG": "No accounts connected",
    "Accounts": "Accounts",
    "Settings": "Settings",
    "add": "add",
    "delete": "delete",
    "SETTINGSCHANGED": "settings updated successfully.",

    "REGISTRATION": "📝 Registration (I am not in FORSAGE)",
    "PERSONALACCOUNT": "👤 Personal Account (I am in FORSAGE)",
    "INFORMATIONHELP": "💬 Information and Help",
    "SOCIALNETWORK": "ℹ️ We’re on social networks",
    "LANGSETTINGS": "🌐 Language selection",
    "WELCOMEMSGFORSAGE": "🏠 Welcome to the main menu",
    "BACKTOMAINMENU": "🔙 Back to the main menu",
    "REG1": "🚹 Registering with the FORSAGE project",
    "REG2": "Select a suitable method to register in Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Registering from a mobile device",
    "REGISTRINGUSINGPC": "🖥️ Registering using a PC",    
    "METAMASK_Registration_TEXT": "METAMASK Registration",
    "REG_MANUAL": "Registration(Manual transaction)",
    "SELECTSUITAIBLEMETHOD": "⚠️ You need to select a suitable method",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "I don't have a wallet or the app",
    "REGISTRINGMOBILE12": "I have a wallet and the app",
    "REGISTRINGMOBILE13": "Registration (Manual transaction)",
    "REG_NO_WALLETTEXT": '✅CREATING AN TRX WALLET:1. Download the app in Coinbase Wallet in the AppStore (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) or Play Market (https://play.google.com/store/apps/details?id=org.toshi) \n 2. Open Coinbase Wallet, click on “Create a new wallet”, then “Accept”. Come up with your @username, then click on “Next”. Now think of a password for logging into Coinbase Wallet, then click on the tick and then on the “Back up now” button. Next, save your 12 access words for yourTRXwallet or write them down in a safe place. These access words are very important, so never share them with anyone!\n✅TOPPING UP YOURTRXWALLET:\n1. Copy the address of yourTRXwallet into the Coinbase Wallet app \n2. Use a reliable exchange website, such as bestchange.ru \n3. Log in to the website, select where you’re sending the Tron to and where you’re receiving it from, then select the best rate, follow the instructions, and top up yourTRXwallet by 0.05TRX+ 0.01-0.02TRX(for future commission) or more',
    //"REG_NO_WALLET_NEXT": "1. Copy the link under this message \n 2. Go into the Wallet app and enter this link into the DApp Browser line \n 3. In the window that appears, confirm the transaction in order to register in FORSAGE",
    "REG_NO_WALLET_NEXT":`✅CREATING AN TRON WALLET:
    1. Download the app in TRON Wallet in the AppStore or Play Market
    2. Open TRON Wallet, click on “Create a new wallet”, then “Accept”. Come up with your @username OR Wallet Name, then click on “Next”. Now think of a password for logging into TRON Wallet, then click on the tick and then on the “Back up now” button. Next, save your 12 access words for your TRON wallet or write them down in a safe place. These access words are very important, so never share them with anyone!    
✅TOPPING UP YOUR TRON WALLET:    
    1. Copy the address of your TRX wallet into the TRON Wallet app
    2. Use a reliable exchange website, such as bestchange.ru
    3. Log in to the website, select where you’re sending the TRX to and where you’re receiving it from, then select the best rate, follow the instructions, and top up your TRON wallet by 710TRX   (INCLUDING GAS FEE)`,
    
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Copy the link under this message \n 2. Go into the Wallet app and enter this link into the DApp Browser line \n3. In the window that appears, confirm the transaction in order to register in FORSAGE",
    "REG_MOBILE_WALLET_APP": `✅CREATING AN TRON WALLET:
    1. Download the app in TRON Wallet in the AppStore or Play Market
    2. Open TRON Wallet, click on “Create a new wallet”, then “Accept”. Come up with your @username OR Wallet Name, then click on “Next”. Now think of a password for logging into TRON Wallet, then click on the tick and then on the “Back up now” button. Next, save your 12 access words for your TRON wallet or write them down in a safe place. These access words are very important, so never share them with anyone!    
✅TOPPING UP YOUR TRON WALLET:    
    1. Copy the address of your TRX wallet into the TRON Wallet app
    2. Use a reliable exchange website, such as bestchange.ru
    3. Log in to the website, select where you’re sending the TRX to and where you’re receiving it from, then select the best rate, follow the instructions, and top up your TRON wallet by 710TRX   (INCLUDING GAS FEE)`,

    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Address for the transfer: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 \nTransfer amount: 0.05 \n Upline wallet address (of the person who made the invitation): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ To access your personal account, you need to subscribe to our information channel on Telegram ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Authorisation from a mobile device",
    "AUTH_USING_PC": "🖥️ Authorisation using a PC",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ To authorize and synchronize your Forsage account in this Telegram bot, you need to copy the link and paste it into a mobile app with yourTRXwallet that also has a DApp Browser, such as Coinbase Wallet. \n 2️⃣ After following the link, you need to go to your Forsage personal account, to the very bottom of the page, and copy the generated token to your clipboard. \n 3️⃣ Next, send the copied token to the bot in this conversation",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ To authorize and synchronize your Forsage account in this Telegram bot, you need to click on the “Authorize using a PC” button.\n 2️⃣ After following the link, you need to go to your Forsage personal account, to the very bottom of the page, and copy the generated token to your clipboard.\n 3️⃣ Next, send the copied token to the bot in this conversation ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ We didn’t find your subscription to the channel!", 
    "HELPINFOTEXT": 'Welcome to the “💬 Information and Help” section',     
    "HELP_INFO_TEXT": 'ℹ️ Useful information about FORSAGE\nYou can ask any questions in the “💬 Ask a question” section',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Select a question that interests you",   
    


    "LANG_SELECTION_TEXT": "🌐 Language selection",    
    "SET_LANG": "Choose your language",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉FAQ👈",
    "ASKAQuestion": "💬Ask a question",
    "Back": "Back",
    "BTNPersonalAccount": "Personal Account",
    "BTNRegistration": "Registration",
    "MSGSelectMethod": "Select a suitable method to authorize your Forsage account ⤵️", 
    "start": "start",   
    "ForsageTelegramChannel": "The Forsage project's Telegram channel", 
    "HaveSubscribed": "I have subscribed ✅",  
    "NEXT": "NEXT",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT": "Address for the transfer: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97\nTransfer amount: 0.05\nUpline wallet address (of the person who made the invitation): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",
    
    "SOCIAL_NETWORK_TEXT": "FORSAGE is an international next-gen crowdfunding platform🌐\n We’re on social networks and messengers ⤵️",
    "SOCIAL_TELEGRAM": "TELEGRAM",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 


global.DE = { 
    "INVALIDADDR": "Ungültige Tron-Adresse",
    "SELECTLANG": "🌍 Wähle eine Sprache:",
    "WELCOMEMSG": "Hallo! Ich bin ein Bot. Willst du Freunde finden? Ich wurde erstellt, damit Sie keine wichtigen Ereignisse in Ihrem Forsage-Konto verpassen und mit mir noch mehr Geld verdienen können!",
    "ADDMESSAGE1": "✏️ Geben Sie die Tron-Brieftasche Ihres Forsage-Projektkontos an, um sofort entsprechende Ereignisbenachrichtigungen zu erhalten.",    
    "ADDRESSADDEDSUCCESS": "Adresse erfolgreich hinzugefügt 👌",  
    "ADDREDDEXISTSERR": "Adresse existiert bereits! IRREN-",
    "DELETEMESSAGE": "✏️ Klicken Sie auf die Adresse, die Sie aus dem Bot löschen möchten:",
    "CONNECTEDACCMESSAGE": "Verbundene Konten:",
    "NOACCOUNTSMSG": "Keine Konten verbunden",
    "Accounts": "Konten",
    "Settings": "die Einstellungen",
    "add": "hinzufügen",
    "delete": "löschen",
    "SETTINGSCHANGED": "Einstellungen erfolgreich aktualisiert.",

    "REGISTRATION": "📝 Registrierung (Ich bin nicht in FORSAGE)",
    "PERSONALACCOUNT": "👤 Persönliches Konto (Ich bin in FORSAGE)",
    "INFORMATIONHELP": "💬 Informationen und Hilfe",
    "SOCIALNETWORK": "ℹ️ Wir sind in sozialen Netzwerken",
    "LANGSETTINGS": "🌐 Sprachauswahl",
    "WELCOMEMSGFORSAGE": "🏠 Willkommen im Hauptmenü",
    "BACKTOMAINMENU": "🔙 Zurück zum Hauptmenü",
    "REG1": "🚹 Registrierung beim FORSAGE-Projekt",
    "REG2": "Wählen Sie eine geeignete Methode zur Registrierung in Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Registrierung von einem mobilen Gerät",
    "REGISTRINGUSINGPC": "🖥️ Registrierung mit einem PC",    
    "METAMASK_Registration_TEXT": "METAMASK Registrierung",
    "REG_MANUAL": "Registrierung (manuelle Transaktion)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Sie müssen eine geeignete Methode auswählen",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "Ich habe weder eine Brieftasche noch die App",
    "REGISTRINGMOBILE12": "Ich habe eine Brieftasche und die App",
    "REGISTRINGMOBILE13": "Registrierung (manuelle Transaktion)",
    "REG_NO_WALLETTEXT": '✅ERSTELLEN EINER TRX-BRIEFTASCHE: 1. Laden Sie die App in Coinbase Wallet im AppStore (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) oder im Play Market (https://play.google.com/store/) herunter. apps / details? id = org.toshi) 2. Öffnen Sie die Coinbase-Brieftasche, klicken Sie auf "Neue Brieftasche erstellen" und dann auf \"Akzeptieren\". Überlegen Sie sich Ihren @Benutzernamen und klicken Sie auf "Weiter".  Überlegen Sie sich nun ein Passwort für die Anmeldung bei Coinbase Wallet, klicken Sie auf das Häkchen und dann auf die Schaltfläche \"Jetzt sichern\". Speichern Sie anschließend Ihre 12 Zugriffswörter für Ihre ETH-Brieftasche oder schreiben Sie sie an einem sicheren Ort auf. Diese Zugriffswörter sind sehr wichtig, teilen Sie sie also niemals mit anderen! ✅TOPPPING IHRER ETH-Brieftasche: 1. Kopieren Sie die Adresse Ihrer ETH-Brieftasche in die Coinbase-Brieftaschen-App 2. Verwenden Sie eine zuverlässige Exchange-Website wie bestchange.ru 3. Melden Sie sich auf der Website an, wählen Sie aus, wohin Sie das Tron senden und von wo Sie es erhalten, wählen Sie dann den besten Preis aus, befolgen Sie die Anweisungen und füllen Sie Ihr ETH-Portemonnaie um 0,05TRX+ 0,01-0,02TRXauf (z zukünftige Provision) oder mehr',
    "REG_NO_WALLET_NEXT": "1. Kopieren Sie den Link unter dieser Nachricht. 2. Gehen Sie in die Wallet-App und geben Sie diesen Link in die Zeile DApp Browser ein. 3. Bestätigen Sie im angezeigten Fenster die Transaktion, um sich bei FORSAGE zu registrieren",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Kopieren Sie den Link unter dieser Nachricht. 2. Gehen Sie in die Wallet-App und geben Sie diesen Link in die Zeile DApp Browser ein. 3. Bestätigen Sie im angezeigten Fenster die Transaktion, um sich bei FORSAGE zu registrieren",
    "REG_MOBILE_WALLET_APP": `✅EINE TRON-BRIEFTASCHE ERSTELLEN:\n 1. Laden Sie die App in TRON Wallet im AppStore oder Play Market herunter \n 2. Öffnen Sie die TRON-Brieftasche, klicken Sie auf "Neue Brieftasche erstellen" und dann auf "Akzeptieren". Überlegen Sie sich Ihren @Benutzernamen ODER Brieftaschennamen und klicken Sie auf "Weiter". Überlegen Sie sich nun ein Passwort für die Anmeldung bei TRON Wallet, klicken Sie auf das Häkchen und dann auf die Schaltfläche "Jetzt sichern". Speichern Sie anschließend Ihre 12 Zugriffswörter für Ihre TRON-Brieftasche oder notieren Sie sie an einem sicheren Ort. Diese Zugangswörter sind sehr wichtig, also teile sie niemals mit jemandem!
\n✅TOPPEN SIE IHRE TRON-BRIEFTASCHE:\n  1. Kopieren Sie die Adresse Ihrer TRX-Brieftasche in die TRON-Brieftaschen-App \n 2. Verwenden Sie eine zuverlässige Austauschwebsite wie bestchange.ru  \n 3. Melden Sie sich auf der Website an, wählen Sie aus, wohin Sie den TRX senden und von wo Sie ihn empfangen, wählen Sie dann den besten Preis aus, befolgen Sie die Anweisungen und füllen Sie Ihre TRON-Brieftasche mit 710TRX auf (EINSCHLIESSLICH GASGEBÜHR).`, 
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Adresse für die Übertragung: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 \ nÜbertragungsbetrag: 0,05 \ n Adresse der Upline-Brieftasche (der Person, die die Einladung gesendet hat): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Um auf Ihr persönliches Konto zugreifen zu können, müssen Sie unseren Informationskanal für Telegramm abonnieren ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Autorisierung von einem mobilen Gerät",
    "AUTH_USING_PC": "🖥️ Autorisierung mit einem PC",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Um Ihr Forsage-Konto in diesem Telegramm-Bot zu autorisieren und zu synchronisieren, müssen Sie den Link kopieren und in eine mobile App mit Ihrer ETH-Brieftasche einfügen, die auch über einen DApp-Browser wie Coinbase Wallet verfügt. 2️⃣ Nachdem Sie dem Link gefolgt sind, müssen Sie zu Ihrem persönlichen Forsage-Konto ganz unten auf der Seite gehen und das generierte Token in Ihre Zwischenablage kopieren. 3️⃣ Senden Sie als Nächstes das kopierte Token in dieser Konversation an den Bot",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Um Ihr Forsage-Konto in diesem Telegramm-Bot zu autorisieren und zu synchronisieren, müssen Sie auf die Schaltfläche \"Mit einem PC autorisieren\" klicken. 2️⃣ Nachdem Sie dem Link gefolgt sind, müssen Sie zu Ihrem persönlichen Forsage-Konto ganz unten auf der Seite gehen und das generierte Token in Ihre Zwischenablage kopieren. 3️⃣ Senden Sie als Nächstes das kopierte Token in dieser Konversation an den Bot. ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ Wir haben Ihr Abonnement für den Kanal nicht gefunden!", 
    "HELPINFOTEXT": 'Willkommen im Abschnitt „💬 Informationen und Hilfe“',     
    "HELP_INFO_TEXT": 'ℹ️ Nützliche Informationen zu FORSAGE Sie können im Abschnitt „💬 Frage stellen“ Fragen stellen',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Wählen Sie eine Frage aus, die Sie interessiert",   
    


    "LANG_SELECTION_TEXT": "🌐 Sprachauswahl",    
    "SET_LANG": "Wähle deine Sprache",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉FAQ👈",
    "ASKAQuestion": "💬Stelle eine Frage",
    "Back": "Zurück",
    "BTNPersonalAccount": "Persönliches Konto",
    "BTNRegistration": "Anmeldung",
    "MSGSelectMethod": "Wählen Sie eine geeignete Methode aus, um Ihr Forsage-Konto zu autorisieren ⤵️", 
    "start": "Anfang",   
    "ForsageTelegramChannel": "Der Telegrammkanal des Forsage-Projekts", 
    "HaveSubscribed": "Ich habe abonniert ✅",  
    "NEXT": "NÄCHSTER",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",
    "REG_MANUAL_TRANS_TXT" :"Dirección para la transferencia: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Monto de la transferencia: 0.05 Dirección de billetera en línea ascendente (de la persona que hizo la invitación): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E", 
        
    "SOCIAL_NETWORK_TEXT": "FORSAGE ist eine internationale Crowdfunding-Plattform der nächsten Generation Wir sind in sozialen Netzwerken und Messenger",
    "SOCIAL_TELEGRAM": "TELEGRAMM",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 


// TU
global.TU = { 
    "INVALIDADDR": "Geçersiz eterum adresi",
    "SELECTLANG": "🌍 Bir dil seç:",
    "WELCOMEMSG": "Selam! Ben bir robotum. Arkadaş edinmek ister misin? Forsage hesabınızdaki önemli olayları kaçırmamanız ve benimle daha da fazla para kazanabilmeniz için yaratıldım!",
    "ADDMESSAGE1": "✏️ İlgili olay bildirimlerini anında almak için Forsage proje hesabınızın Tron cüzdanını belirtin.",    
    "ADDRESSADDEDSUCCESS": "Adres başarıyla eklendi 👌",  
    "ADDREDDEXISTSERR": "Adres zaten var! ERR-",
    "DELETEMESSAGE": "✏️ Bottan silmek istediğiniz adrese tıklayın:",
    "CONNECTEDACCMESSAGE": "Bağlı hesaplar:",
    "NOACCOUNTSMSG": "Bağlı hesap yok",
    "Accounts": "Hesaplar",
    "Settings": "Ayarlar",
    "add": "Ekle",
    "delete": "sil",
    "SETTINGSCHANGED": "ayarlar başarıyla güncellendi.",

    "REGISTRATION": "📝 Kayıt (FORSAGE konumunda değilim)",
    "PERSONALACCOUNT": "👤 Kişisel Hesap (FORSAGE içindeyim)",
    "INFORMATIONHELP": "💬 Bilgi ve Yardım",
    "SOCIALNETWORK": "ℹ️ Sosyal ağlardayız",
    "LANGSETTINGS": "🌐 Dil seçimi",
    "WELCOMEMSGFORSAGE": "🏠 Ana menüye hoş geldiniz",
    "BACKTOMAINMENU": "🔙 Ana menüye dön",
    "REG1": "🚹 FORSAGE projesine kaydolma",
    "REG2": "Forsage'a kaydolmak için uygun bir yöntem seçin 👇🏻",
    "REGISTRINGMOBILE": "📱 Mobil cihazdan kaydolma",
    "REGISTRINGUSINGPC": "🖥️ PC kullanarak kayıt",    
    "METAMASK_Registration_TEXT": "METAMASK Kaydı",
    "REG_MANUAL": "Kayıt (Manuel işlem)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Uygun bir yöntem seçmeniz gerekiyor",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "Cüzdanım veya uygulamam yok",
    "REGISTRINGMOBILE12": "Cüzdanım ve uygulamam var",
    "REGISTRINGMOBILE13": "Kayıt (Manuel işlem)",
    "REG_NO_WALLETTEXT": "✅ BİR TRX CÜZDAN OLUŞTURMA:1. Uygulamayı, AppStore'daki () veya Play Market'teki () Coinbase Wallet'tan indirin \n 2. Coinbase Cüzdan'ı açın, -Yeni bir cüzdan oluştur- ve ardından -Kabul Et- seçeneğine tıklayın. @ Kullanıcı adınızı bulun ve ardından -İleri- ye tıklayın. Şimdi Coinbase Cüzdanına giriş yapmak için bir şifre düşünün, ardından onay işaretine ve ardından -Şimdi yedekle- düğmesine tıklayın. Ardından, 12 erişim kelimeniziTRXcüzdanınız için kaydedin veya güvenli bir yere yazın. Bu erişim kelimeleri çok önemlidir, bu yüzden onları asla kimseyle paylaşmayın! \n 1.TRXcüzdanınızın adresini Coinbase Cüzdan uygulamasına kopyalayın \n 2. bestchange.ru gibi güvenilir bir değişim web sitesi kullanın \n 3. Web sitesinde oturum açın, Tron'u nereye göndereceğinizi ve nereden aldığınızı seçin, ardından en iyi oranı seçin, talimatları izleyin veTRXcüzdanınıza 0,05TRX+ 0,01-0,02TRXkadar yükleme yapın (gelecekteki komisyon için) veya daha fazlası",
    
    "REG_NO_WALLET_NEXT": "1. Bu mesajın altındaki bağlantıyı kopyalayın \n 2. Cüzdan uygulamasına gidin ve bu bağlantıyı DApp Tarayıcı satırına girin \n 3. Görünen pencerede, FORSAGE'a kaydolmak için işlemi onaylayın.",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Bu mesajın altındaki bağlantıyı kopyalayın \n 2. Cüzdan uygulamasına gidin ve bu bağlantıyı DApp Tarayıcı satırına girin \n 3. Görünen pencerede, FORSAGE'a kaydolmak için işlemi onaylayın.",
    "REG_MOBILE_WALLET_APP" : `TRON CÜZDAN OLUŞTURMA:
1. Uygulamayı AppStore'da veya Play Market'te TRON Wallet'ta indirin
2. TRON Cüzdan'ı açın, “Yeni bir cüzdan oluştur” ve ardından “Kabul Et” seçeneğine tıklayın. @ Kullanıcı adınızı VEYA Cüzdan Adınızı bulun ve ardından "İleri" yi tıklayın. Şimdi TRON Cüzdan'da oturum açmak için bir şifre düşünün, ardından onay işaretine ve ardından "Şimdi yedekle" düğmesine tıklayın. Ardından, 12 erişim kelimenizi TRON cüzdanınız için kaydedin veya güvenli bir yere yazın. Bu erişim kelimeleri çok önemlidir, bu nedenle bunları asla kimseyle paylaşmayın!

TRON CÜZDANINIZI YÜKSELTMEK:
1. TRX cüzdanınızın adresini TRON Cüzdan uygulamasına kopyalayın
2. bestchange.ru gibi güvenilir bir değişim web sitesi kullanın
3. Web sitesinde oturum açın, TRX'i nereye göndereceğinizi ve nereden alacağınızı seçin, ardından en iyi oranı seçin, talimatları izleyin ve TRON cüzdanınıza 710TRX (GAZ ÜCRETİ DAHİL) doldurun`,

    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Transfer adresi: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Transfer miktarı: 0.05 \n Üst hat cüzdan adresi (daveti yapan kişinin): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Kişisel hesabınıza erişmek için Telegram'daki bilgi kanalımıza abone olmanız gerekir. ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Mobil cihazdan yetkilendirme",
    "AUTH_USING_PC": "🖥️ PC kullanarak yetkilendirme",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": '1️⃣ Forsage hesabınızı bu Telegram botunda yetkilendirmek ve senkronize etmek için, bağlantıyı kopyalamanız ve Coinbase Wallet gibi bir DApp Tarayıcısı olanTRXcüzdanınızla bir mobil uygulamaya yapıştırmanız gerekir. \n2️⃣ Bağlantıyı takip ettikten sonra, Forsage kişisel hesabınıza, sayfanın en altına gitmeniz ve oluşturulan jetonu panonuza kopyalamanız gerekir. \n 3️⃣ Ardından, kopyalanan jetonu bu görüşmede bota gönderin',
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": '"1️⃣ Forsage hesabınızı bu Telegram botunda yetkilendirmek ve senkronize etmek için, \"Bilgisayar kullanarak yetkilendir\" düğmesine tıklamanız gerekir. \n 2️⃣ Bağlantıyı izledikten sonra, Forsage kişisel hesabınıza, en altına gitmeniz gerekir. sayfasına gidin ve oluşturulan jetonu panonuza kopyalayın. \n 3️⃣ Ardından, kopyalanan jetonu bu görüşmedeki bota gönderin ⤵️"',    
    "NO_SUBSCRIPTION_FOUND": "❎ Kanala aboneliğinizi bulamadık!", 
    "HELPINFOTEXT": '"💬 Bilgi ve Yardım" bölümüne hoş geldiniz',     
    "HELP_INFO_TEXT": 'ℹ️ FORSAGE hakkında faydalı bilgiler \n "💬 Soru sorun" bölümünde istediğiniz soruyu sorabilirsiniz',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Sizi ilgilendiren bir soru seçin",   
    
    "LANG_SELECTION_TEXT": "🌐 Dil seçimi",    
    "SET_LANG": "Dilinizi seçin",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉SSS👈",
    "ASKAQuestion": "💬Bir soru sor",
    "Back": "Geri",
    "BTNPersonalAccount": "Kişisel hesap",
    "BTNRegistration": "Kayıt",
    "MSGSelectMethod": "Forsage hesabınızı yetkilendirmek için uygun bir yöntem seçin ⤵️", 
    "start": "Başlat",   
    "ForsageTelegramChannel": "Forsage projesinin Telegram kanalı", 
    "HaveSubscribed": "Abone oldum ✅",  
    "NEXT": "SONRAKİ",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Aktarım adresi: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Aktarım miktarı: 0.05. Üst hat cüzdan adresi (daveti yapan kişinin): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "SOCIAL_NETWORK_TEXT": "FORSAGE, uluslararası bir yeni nesil kitle fonlaması platformudur🌐\n Sosyal ağlar ve haberciler kullanıyoruz ⤵️",
    "SOCIAL_TELEGRAM": "TELGRAF",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 


///SPANISH 
global.ES = { 
    "INVALIDADDR": "Dirección de Tron no válida",
    "SELECTLANG": "🌍 Selecciona un idioma:",
    "WELCOMEMSG": "¡Hola! Soy un bot. ¿Quieres hacer amigos? ¡Fui creado para que no te pierdas ningún evento importante en tu cuenta de Forsage y puedas ganar aún más dinero conmigo!",
    "ADDMESSAGE1": "✏️ Especifique la billetera Tron de su cuenta de proyecto de Forsage para recibir instantáneamente notificaciones de eventos relacionados.",    
    "ADDRESSADDEDSUCCESS": "Dirección agregada correctamente 👌",  
    "ADDREDDEXISTSERR": "¡La dirección ya existe! ERRAR-",
    "DELETEMESSAGE": "✏️ Haga clic en la dirección que desea eliminar del bot:",
    "CONNECTEDACCMESSAGE": "Cuentas conectadas:",
    "NOACCOUNTSMSG": "No hay cuentas conectadas",
    "Accounts": "Cuentas",
    "Settings": "Configuraciones",
    "add": "añadir",
    "delete": "Eliminar",
    "SETTINGSCHANGED": "la configuración se actualizó correctamente.",

    "REGISTRATION": "📝 Registro (no estoy en FORSAGE)",
    "PERSONALACCOUNT": "👤 Cuenta personal (estoy en FORSAGE)",
    "INFORMATIONHELP": "💬 Información y ayuda",
    "SOCIALNETWORK": "ℹ️Nosotras estamos en las redes sociales",
    "LANGSETTINGS": "🌐 Selección de idioma",
    "WELCOMEMSGFORSAGE": "🏠 Bienvenida al menu principal",
    "BACKTOMAINMENU": "🔙 Volver al menú principal",
    "REG1": "🚹 Registrarse en el proyecto FORSAGE",
    "REG2": "Seleccione un método adecuado para registrarse en Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Registrarse desde un dispositivo móvil",
    "REGISTRINGUSINGPC": "🖥️ Registro usando una PC",    
    "METAMASK_Registration_TEXT": "Registro de METAMASK",
    "REG_MANUAL": "Registro (transacción manual)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Debes seleccionar un método adecuado",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "No tengo billetera ni la aplicación",
    "REGISTRINGMOBILE12": "Tengo una billetera y la aplicación",
    "REGISTRINGMOBILE13": "Registro (transacción manual)",
    "REG_NO_WALLETTEXT": '✅CREANDO UNA BILLETERA TRX: 1. Descargue la aplicación en Coinbase Wallet en AppStore (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) o Play Market (https://play.google.com/store/ apps / details? id = org.toshi) 2. Abra Coinbase Wallet, haga clic en "Crear una nueva billetera" y luego en "Aceptar". Ingrese su @nombre de usuario, luego haga clic en "Siguiente". Ahora piense en una contraseña para iniciar sesión en Coinbase Wallet, luego haga clic en la marca y luego en el botón "Hacer copia de seguridad ahora". A continuación, guarde sus 12 palabras de acceso para su billeteraTRXo escríbalas en un lugar seguro. Estas palabras de acceso son muy importantes, ¡así que nunca las comparta con nadie! Copie la dirección de su billeteraTRXen la aplicación Coinbase Wallet. 2. Utilice un sitio web de intercambio confiable, como bestchange.ru 3. Inicie sesión en el sitio web, seleccione a dónde envía el Tron y de dónde lo recibe , luego seleccione la mejor tarifa, siga las instrucciones y recargue su billeteraTRXpor 0.05TRX+ 0.01-0.02TRX(para comisiones futuras) o más',
    "REG_NO_WALLET_NEXT": "1.Copie el enlace debajo de este mensaje 2. Vaya a la aplicación Wallet e ingrese este enlace en la línea del navegador DApp 3. En la ventana que aparece, confirme la transacción para registrarse en FORSAGE",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Copie el enlace debajo de este mensaje 2. Vaya a la aplicación Wallet e ingrese este enlace en la línea del navegador DApp 3. En la ventana que aparece, confirme la transacción para registrarse en FORSAGE",
    "REG_MOBILE_WALLET_APP": `✅CREAR UNA CARTERA TRON:
    1. Descargue la aplicación en TRON Wallet en AppStore o Play Market
    2. Abra TRON Wallet, haga clic en "Crear una nueva billetera" y luego en "Aceptar". Ingrese su @nombre de usuario O el nombre de la billetera, luego haga clic en "Siguiente". Ahora piense en una contraseña para iniciar sesión en TRON Wallet, luego haga clic en la marca y luego en el botón "Hacer copia de seguridad ahora". A continuación, guarde sus 12 palabras de acceso para su billetera TRON o escríbalas en un lugar seguro. Estas palabras de acceso son muy importantes, ¡así que nunca las comparta con nadie!
✅ RECIBIR SU CARTERA TRON:    
    1. Copie la dirección de su billetera TRX en la aplicación TRON Wallet
    2. Utilice un sitio web de intercambio confiable, como bestchange.ru
    3. Inicie sesión en el sitio web, seleccione a dónde envía el TRX y de dónde lo recibe, luego seleccione la mejor tarifa, siga las instrucciones y recargue su billetera TRON antes del 710TRX (INCLUYE LA TARIFA DE GAS)`,    
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Dirección para la transferencia: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Importe de la transferencia: 0,05. Dirección de billetera en línea ascendente (de la persona que hizo la invitación): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Para acceder a su cuenta personal, debe suscribirse a nuestro canal de información en Telegram ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Autorización desde un dispositivo móvil",
    "AUTH_USING_PC": "🖥️ Autorización mediante PC",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Para autorizar y sincronizar su cuenta de Forsage en este bot de Telegram, debe copiar el enlace y pegarlo en una aplicación móvil con su billeteraTRXque también tiene un navegador DApp, como Coinbase Wallet. 2️⃣ Después de seguir el enlace, debe ir a su cuenta personal de Forsage, al final de la página, y copiar el token generado en su portapapeles. 3️⃣ A continuación, envíe el token copiado al bot en esta conversación.",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Para autorizar y sincronizar su cuenta de Forsage en este bot de Telegram, debe hacer clic en el botón \"Autorizar usando una PC\". 2️⃣ Después de seguir el enlace, debe ir a su cuenta personal de Forsage, al final de la página, y copiar el token generado en su portapapeles. 3️⃣ A continuación, envíe el token copiado al bot en esta conversación ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ ¡No encontramos tu suscripción al canal!", 
    "HELPINFOTEXT": 'Bienvenido a la sección "💬 Información y ayuda"',     
    "HELP_INFO_TEXT": 'ℹ️ Información útil sobre FORSAGE Puede hacer cualquier pregunta en la sección \"💬 Hacer una pregunta\"',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Seleccione una pregunta que le interese",   
    


    "LANG_SELECTION_TEXT": "🌐 Selección de idioma",    
    "SET_LANG": "Elige tu idioma",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉Preguntas más frecuentes👈",
    "ASKAQuestion": "💬Hacer una pregunta",
    "Back": "Espalda",
    "BTNPersonalAccount": "Cuenta personal",
    "BTNRegistration": "Registro",
    "MSGSelectMethod": "Seleccione un método adecuado para autorizar su cuenta de Forsage ⤵️", 
    "start": "comienzo",   
    "ForsageTelegramChannel": "El canal de Telegram del proyecto Forsage", 
    "HaveSubscribed": "Me he suscrito ✅",  
    "NEXT": "SIGUIENTE",
    "ONE_OF_FIVE": "",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Dirección para la transferencia: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Importe de la transferencia: 0,05, Dirección de billetera en línea ascendente (de la persona que hizo la invitación): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "SOCIAL_NETWORK_TEXT": "FORSAGE es una plataforma internacional de financiación colectiva de próxima generación🌐 \n Estamos en redes sociales y mensajería ⤵️",
    "SOCIAL_TELEGRAM": "TELEGRAMA",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 


global.FR = { 
    "INVALIDADDR": "Adresse étherum non valide",
    "SELECTLANG": "🌍 Sélectionnez une langue:",
    "WELCOMEMSG": "Salut! Je suis un robot. Envie de vous faire des amis? J'ai été créé pour que vous ne manquiez aucun événement important sur votre compte Forsage et que vous puissiez gagner encore plus d'argent avec moi!",
    "ADDMESSAGE1": "✏️ Spécifiez le portefeuille Tron de votre compte de projet Forsage afin de recevoir instantanément les notifications d'événements associées.",    
    "ADDRESSADDEDSUCCESS": "Adresse ajoutée avec succès 👌",  
    "ADDREDDEXISTSERR": "L'adresse existe déjà! ERR-",
    "DELETEMESSAGE": "✏️ Cliquez sur l'adresse que vous souhaitez supprimer du bot:",
    "CONNECTEDACCMESSAGE": "Comptes connectés:",
    "NOACCOUNTSMSG": "Aucun compte connecté",
    "Accounts": "Comptes",
    "Settings": "Paramètres",
    "add": "ajouter",
    "delete": "supprimer",
    "SETTINGSCHANGED": "paramètres mis à jour avec succès.",

    "REGISTRATION": "📝 Inscription (je ne suis pas à FORSAGE)",
    "PERSONALACCOUNT": "👤 Compte personnel (je suis dans FORSAGE)",
    "INFORMATIONHELP": "💬 Informations et aide",
    "SOCIALNETWORK": "ℹ️ Nous sommes sur les réseaux sociaux",
    "LANGSETTINGS": "🌐 Sélection de la langue",
    "WELCOMEMSGFORSAGE": "🏠 Bienvenue dans le menu principal",
    "BACKTOMAINMENU": "🔙 Retour au menu principal",
    "REG1": "🚹 Inscription au projet FORSAGE",
    "REG2": "Sélectionnez une méthode appropriée pour vous inscrire à Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Inscription depuis un appareil mobile",
    "REGISTRINGUSINGPC": "🖥️ Enregistrement à l'aide d'un PC",    
    "METAMASK_Registration_TEXT": "Enregistrement METAMASK",
    "REG_MANUAL": "Inscription (transaction manuelle)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Vous devez sélectionner une méthode appropriée",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "Je n'ai pas de portefeuille ni d'application",
    "REGISTRINGMOBILE12": "J'ai un portefeuille et l'application",
    "REGISTRINGMOBILE13": "Inscription (transaction manuelle)",
    "REG_NO_WALLETTEXT": "✅CRÉER UN PORTEFEUILLE TRX: 1. Téléchargez l'application dans Coinbase Wallet dans l'AppStore () ou Play Market ()  2. Ouvrez Coinbase Wallet, cliquez sur «Créer un nouveau portefeuille», puis sur «Accepter». Trouvez votre @ nom d'utilisateur, puis cliquez sur «Suivant». Pensez maintenant à un mot de passe pour vous connecter à Coinbase Wallet, puis cliquez sur la coche puis sur le bouton `` Sauvegarder maintenant ''. Ensuite, enregistrez vos 12 mots d'accès pour votre portefeuilleTRXou notez-les dans un endroit sûr. Ces mots d'accès sont très importants, alors ne les partagez jamais avec personne! 1. Copiez l'adresse de votre portefeuilleTRXdans l'application Coinbase Wallet 2. Utilisez un site Web d'échange fiable, tel que bestchange.ru 3. Connectez-vous au site Web, sélectionnez où vous envoyez l'Tron et d'où vous le recevez, puis sélectionnez le meilleur tarif, suivez les instructions et rechargez votre portefeuilleTRXde 0,05TRX+ 0,01-0,02 ETH. (pour une future commission) ou plus",
    "REG_NO_WALLET_NEXT": "1. Copiez le lien sous ce message. 2. Allez dans l'application Wallet et entrez ce lien dans la ligne DApp Browser. 3. Dans la fenêtre qui apparaît, confirmez la transaction afin de vous inscrire à FORSAGE",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Copiez le lien sous ce message. 2. Allez dans l'application Wallet et entrez ce lien dans la ligne DApp Browser. 3. Dans la fenêtre qui apparaît, confirmez la transaction afin de vous inscrire à FORSAGE",
    "REG_MOBILE_WALLET_APP": `✅ CRÉER UN PORTEFEUILLE TRON:
1. Téléchargez l'application dans TRON Wallet dans l'AppStore ou Play Market
2. Ouvrez TRON Wallet, cliquez sur «Créer un nouveau portefeuille», puis sur «Accepter». Trouvez votre nom d'utilisateur OU votre nom de portefeuille, puis cliquez sur «Suivant». Pensez maintenant à un mot de passe pour vous connecter à TRON Wallet, puis cliquez sur la coche puis sur le bouton «Sauvegarder maintenant». Ensuite, enregistrez vos 12 mots d'accès pour votre portefeuille TRON ou notez-les dans un endroit sûr. Ces mots d'accès sont très importants, alors ne les partagez jamais avec personne!
✅MISE EN PLACE DE VOTRE PORTEFEUILLE TRON:
1. Copiez l'adresse de votre portefeuille TRX dans l'application TRON Wallet
2. Utilisez un site Web d'échange fiable, tel que bestchange.ru
3. Connectez-vous au site Web, sélectionnez où vous envoyez le TRX et d'où vous le recevez, puis sélectionnez le meilleur tarif, suivez les instructions et rechargez votre portefeuille TRON par 710TRX (Y COMPRIS LES FRAIS DE GAZ)`,
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Adresse pour le transfert: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Montant du transfert: 0,05. Adresse du portefeuille en amont (de la personne qui a fait l'invitation): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Pour accéder à votre compte personnel, vous devez vous abonner à notre chaîne d'information sur Telegram ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Autorisation depuis un appareil mobile",
    "AUTH_USING_PC": "🖥️ Autorisation via un PC",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Pour autoriser et synchroniser votre compte Forsage dans ce bot Telegram, vous devez copier le lien et le coller dans une application mobile avec votre portefeuilleTRXqui dispose également d'un navigateur DApp, tel que Coinbase Wallet.2️⃣ Après avoir suivi le lien, vous devez vous rendre sur votre compte personnel Forsage, tout en bas de la page, et copier le jeton généré dans votre presse-papiers. 3️⃣ Ensuite, envoyez le jeton copié au bot dans cette conversation",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Pour autoriser et synchroniser votre compte Forsage dans ce bot Telegram, vous devez cliquer sur le bouton `` Autoriser à l'aide d'un PC ''. 2️⃣ Après avoir suivi le lien, vous devez vous rendre sur votre compte personnel Forsage, tout en bas de la page, et copier le jeton généré dans votre presse-papiers. 3️⃣ Ensuite, envoyez le jeton copié au bot dans cette conversation ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ Nous n'avons pas trouvé votre abonnement à la chaîne!", 
    "HELPINFOTEXT": 'Bienvenue dans la section «💬 Informations et aide»',     
    "HELP_INFO_TEXT": 'ℹ️ Informations utiles sur FORSAGE \ nVous pouvez poser toutes vos questions dans la section «💬 Poser une question»',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Sélectionnez une question qui vous intéresse",   
    
    "LANG_SELECTION_TEXT": "🌐 Sélection de la langue",    
    "SET_LANG": "Choisissez votre langue",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉FAQ👈",
    "ASKAQuestion": "💬 poser une question",
    "Back": "Arrière",
    "BTNPersonalAccount": "Compte personnel",
    "BTNRegistration": "enregistrement",
    "MSGSelectMethod": "Sélectionnez une méthode appropriée pour autoriser votre compte Forsage ⤵️", 
    "start": "début",   
    "ForsageTelegramChannel": "La chaîne Telegram du projet Forsage", 
    "HaveSubscribed": "Je me suis abonné ✅",  
    "NEXT": "SUIVANTE",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Adresse pour le transfert: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Montant du transfert: 0,05 Adresse du portefeuille en amont (de la personne qui a fait l'invitation): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",


    "SOCIAL_NETWORK_TEXT": "FORSAGE est une plateforme internationale de financement participatif nouvelle génération🌐 \n Nous sommes sur les réseaux sociaux et les messagers ⤵️",
    "SOCIAL_TELEGRAM": "TÉLÉGRAMME",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 


// ITALIANO
global.IT = { 
    "INVALIDADDR": "Indirizzo Tron non valido",
    "SELECTLANG": "🌍 Seleziona una lingua:",
    "WELCOMEMSG": "Ciao! Sono un bot. Vuoi fare amicizia? Sono stato creato per non perdere nessun evento importante nel tuo account Forsage e puoi guadagnare ancora di più con me!",
    "ADDMESSAGE1": "✏️ Specifica il portafoglio Tron del tuo account del progetto Forsage per ricevere immediatamente le notifiche degli eventi correlati.",    
    "ADDRESSADDEDSUCCESS": "Indirizzo aggiunto con successo 👌",  
    "ADDREDDEXISTSERR": "L'indirizzo esiste già! ERR-",
    "DELETEMESSAGE": "✏️ Fare clic sull'indirizzo che si desidera eliminare dal bot:",
    "CONNECTEDACCMESSAGE": "Account collegati:",
    "NOACCOUNTSMSG": "Nessun account collegato",
    "Accounts": "Conti",
    "Settings": "impostazioni",
    "add": "Inserisci",
    "delete": "Elimina",
    "SETTINGSCHANGED": "impostazioni aggiornate con successo.",

    "REGISTRATION": "📝 Registrazione (non sono in FORSAGE)",
    "PERSONALACCOUNT": "👤 Account personale (sono in FORSAGE)",
    "INFORMATIONHELP": "💬 Informazioni e aiuto",
    "SOCIALNETWORK": "ℹ️ Siamo sui social network",
    "LANGSETTINGS": "🌐 Selezione della lingua",
    "WELCOMEMSGFORSAGE": "🏠 Benvenuto nel menu principale",
    "BACKTOMAINMENU": "🔙 Torna al menu principale",
    "REG1": "🚹 Registrazione al progetto FORSAGE",
    "REG2": "Seleziona un metodo adatto per registrarti in Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Registrazione da un dispositivo mobile",
    "REGISTRINGUSINGPC": "🖥️ Registrazione utilizzando un PC",    
    "METAMASK_Registration_TEXT": "Registrazione METAMASK",
    "REG_MANUAL": "Registrazione (transazione manuale)",
    "SELECTSUITAIBLEMETHOD": "⚠️ È necessario selezionare un metodo adatto",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "Non ho un portafoglio o l'app",
    "REGISTRINGMOBILE12": "Ho un portafoglio e l'app",
    "REGISTRINGMOBILE13": "Registrazione (transazione manuale)",
    "REG_NO_WALLETTEXT": '✅CREAZIONE DI UN PORTAFOGLIO TRX: 1. Scarica l\'app in Coinbase Wallet nell\'AppStore (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) o Play Market (https://play.google.com/store/apps/details?id=org.toshi) 2. Apri Coinbase Wallet, fai clic su \"Crea un nuovo portafoglio", quindi \"Accetta\". Trova il tuo @username, quindi fai clic su \"Avanti\". Ora pensa a una password per accedere a Coinbase Wallet, quindi fai clic sul segno di spunta e poi sul pulsante \"Esegui backup adesso\". Quindi, salva le tue 12 parole di accesso per il tuo portafoglioTRXo annotale in un luogo sicuro. Queste parole di accesso sono molto importanti, quindi non condividerle mai con nessuno! ✅ RIMUOVERE IL TUO PORTAFOGLIO ETH: 1. Copia l\'indirizzo del tuo portafoglioTRXnell\'app Coinbase Wallet 2. Utilizza un sito web di scambio affidabile, come bestchange.ru 3. Accedi al sito web, seleziona dove stai inviando Tron e da dove lo stai ricevendo , quindi seleziona la tariffa migliore, segui le istruzioni e ricarica il tuo portafoglioTRXdi 0,05TRX+ 0,01-0,02TRX(per commissioni future) o più',
    "REG_NO_WALLET_NEXT": "1. Copia il link sotto questo messaggio 2. Vai nell'app Wallet e inserisci questo link nella riga DApp Browser 3. Nella finestra che appare, conferma la transazione per registrarti in FORSAGE",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
//  "REG_MOBILE_WALLET_APP": "1. Copia il link sotto questo messaggio 2. Accedi all'app Wallet e inserisci questo link nella riga DApp Browser 3. Nella finestra che appare, conferma la transazione per registrarti in FORSAGE",
    "REG_MOBILE_WALLET_APP":`✅CREAZIONE DI UN PORTAFOGLIO TRON:
    1. Scarica l'app in TRON Wallet nell'AppStore o nel Play Market
    2. Apri TRON Wallet, fai clic su "Crea un nuovo portafoglio", quindi "Accetta". Trova il tuo @username OPPURE il nome del portafoglio, quindi fai clic su "Avanti". Ora pensa a una password per accedere a TRON Wallet, quindi fai clic sul segno di spunta e poi sul pulsante "Esegui backup adesso". Quindi, salva le tue 12 parole di accesso per il tuo portafoglio TRON o annotale in un luogo sicuro. Queste parole di accesso sono molto importanti, quindi non condividerle mai con nessuno!
✅ RIPRENDERE IL PORTAFOGLIO TRON:
    1. Copia l'indirizzo del tuo portafoglio TRX nell'app TRON Wallet
    2. Utilizzare un sito Web di scambio affidabile, come bestchange.ru
    3. Accedi al sito Web, seleziona dove stai inviando il TRX e da dove lo stai ricevendo, quindi seleziona la tariffa migliore, segui le istruzioni e ricarica il tuo portafoglio TRON con 710TRX (INCLUSO GAS FEE)`,
  
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Indirizzo per il trasferimento: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Importo del trasferimento: 0,05 Indirizzo del wallet upline (della persona che ha effettuato l'invito): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅Per accedere al tuo account personale, devi iscriverti al nostro canale informativo su Telegram ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Autorizzazione da un dispositivo mobile",
    "AUTH_USING_PC": "🖥️ Autorizzazione tramite PC",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Per autorizzare e sincronizzare il tuo account Forsage in questo bot di Telegram, devi copiare il link e incollarlo in un'app mobile con il tuo portafoglioTRXche ha anche un browser DApp, come Coinbase Wallet. 2️⃣ Dopo aver seguito il collegamento, devi andare al tuo account personale di Forsage, in fondo alla pagina, e copiare il token generato negli appunti. 3️⃣ Quindi, invia il token copiato al bot in questa conversazione.",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Per autorizzare e sincronizzare il tuo account Forsage in questo bot di Telegram, devi fare clic sul pulsante \"Autorizza utilizzando un PC\". 2️⃣ Dopo aver seguito il collegamento, devi andare al tuo account personale di Forsage, in fondo alla pagina, e copiare il token generato negli appunti. 3️⃣ Quindi, invia il token copiato al bot in questa conversazione ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ Non abbiamo trovato la tua iscrizione al canale!", 
    "HELPINFOTEXT": 'Benvenuti nella sezione \"💬 Informazioni e aiuto\"',     
    "HELP_INFO_TEXT": 'ℹ️ Informazioni utili su FORSAGE Puoi porre qualsiasi domanda nella sezione \“💬 Fai una domanda\”',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Seleziona una domanda che ti interessa",   
    

    "LANG_SELECTION_TEXT": "🌐 Selezione della lingua",    
    "SET_LANG": "scegli la tua LINGUA",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉FAQ👈",
    "ASKAQuestion": "💬Fai una domanda",
    "Back": "Indietro",
    "BTNPersonalAccount": "Account personale",
    "BTNRegistration": "Registrazione",
    "MSGSelectMethod": "Seleziona un metodo adatto per autorizzare il tuo account Forsage ⤵️", 
    "start": "inizio",   
    "ForsageTelegramChannel": "Il canale Telegram del progetto Forsage", 
    "HaveSubscribed": "Mi sono iscritto ✅",  
    "NEXT": "IL PROSSIMO",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Indirizzo per il trasferimento: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Importo del trasferimento: 0,05. Indirizzo del portafoglio upline (della persona che ha effettuato l'invito): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",


    "SOCIAL_NETWORK_TEXT": "FORSAGE è una piattaforma internazionale di crowdfunding di nuova generazione🌐 \n Siamo sui social network e sui messenger ⤵️",
    "SOCIAL_TELEGRAM": "TELEGRAMMA",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 

//RUSSIAN
global.RU = { 
    "INVALIDADDR": "Неверный адрес Tron",
    "SELECTLANG": "🌍 Выберите язык:",
    "WELCOMEMSG": "Здравствуй! Я бот. Хотите подружиться? Я создан для того, чтобы вы не пропустили ни одного важного события в своем аккаунте Forsage и могли зарабатывать со мной еще больше!",
    "ADDMESSAGE1": "✏️ Укажите кошелек Tron в своей учетной записи проекта Forsage, чтобы мгновенно получать уведомления о связанных событиях.",    
    "ADDRESSADDEDSUCCESS": "Адрес успешно добавлен 👌",  
    "ADDREDDEXISTSERR": "Адрес уже существует! ERR-",
    "DELETEMESSAGE": "✏️ Нажмите на адрес, который хотите удалить из бота:",
    "CONNECTEDACCMESSAGE": "Подключенные аккаунты:",
    "NOACCOUNTSMSG": "Нет подключенных аккаунтов",
    "Accounts": "Счета",
    "Settings": "Настройки",
    "add": "Добавить",
    "delete": "Удалить",
    "SETTINGSCHANGED": "настройки успешно обновлены.",    

    "REGISTRATION": "📝 Регистрация (я не в FORSAGE)",
    "PERSONALACCOUNT": "👤 Личный кабинет (я в FORSAGE)",
    "INFORMATIONHELP": "💬 Информация и помощь",
    "SOCIALNETWORK": "ℹ️ Мы в социальных сетях",
    "LANGSETTINGS": "🌐 Выбор языка",
    "WELCOMEMSGFORSAGE": "🏠 Добро пожаловать в главное меню",
    "BACKTOMAINMENU": "🔙 Вернуться в главное меню",
    "REG1": "🚹 Регистрация в проекте FORSAGE",
    "REG2": "Выберите подходящий способ регистрации в Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 Регистрация с мобильного устройства",
    "REGISTRINGUSINGPC": "🖥️ Регистрация с помощью ПК",    
    "METAMASK_Registration_TEXT": "Регистрация в МЕТАМАСКЕ",
    "REG_MANUAL": "Регистрация (ручная транзакция)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Вам необходимо выбрать подходящий метод",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "У меня нет кошелька или приложения",
    "REGISTRINGMOBILE12": "У меня есть кошелек и приложение",
    "REGISTRINGMOBILE13": "Регистрация (ручная транзакция)",
    "REG_NO_WALLETTEXT": '✅СОЗДАНИЕ КОШЕЛЬКА TRX: 1. Загрузите приложение в кошелек Coinbase в AppStore (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) или в Play Market (https://play.google.com/store/ apps / details? id = org.toshi) \ n 2. Откройте кошелек Coinbase, нажмите «Создать новый кошелек», затем «Принять». Придумайте свое @username, затем нажмите «Далее». Теперь придумайте пароль для входа в кошелек Coinbase, затем нажмите на галочку, а затем на кнопку «Создать резервную копию сейчас». Затем сохраните 12 слов доступа для своего кошелька TRX или запишите их в надежном месте. Эти слова доступа очень важны, поэтому никогда не сообщайте их никому! ✅ЗАГРУЗКА ВАШЕГО КОШЕЛЬКА TRX: \ n1. Скопируйте адрес своего кошелька TRX в приложение Coinbase Wallet 2. Используйте надежный обменный веб-сайт, например bestchange.ru 3. Войдите на веб-сайт, выберите, куда вы отправляете Tron и откуда вы его получаете. , затем выберите лучшую ставку, следуйте инструкциям и пополните свой кошелек TRX на 0,05 TRX + 0,01-0,02 TRX (для будущей комиссии) или более',
    "REG_NO_WALLET_NEXT": "1. Скопируйте ссылку под этим сообщением. 2. Войдите в приложение Wallet и введите эту ссылку в строку браузера DApp. 3. В появившемся окне подтвердите транзакцию, чтобы зарегистрироваться в FORSAGE.",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Скопируйте ссылку под этим сообщением. 2. Войдите в приложение Wallet и введите эту ссылку в строку браузера DApp. 3. В появившемся окне подтвердите транзакцию, чтобы зарегистрироваться в FORSAGE.",
    "REG_MOBILE_WALLET_APP":`✅ СОЗДАНИЕ КОШЕЛЬКА TRON:
    1. Загрузите приложение в кошелек TRON в AppStore или Play Market.
    2. Откройте кошелек TRON, нажмите «Создать новый кошелек», затем «Принять». Введите свое @username ИЛИ Имя кошелька, затем нажмите «Далее». Теперь придумайте пароль для входа в кошелек TRON, затем нажмите на галочку, а затем на кнопку «Создать резервную копию сейчас». Затем сохраните свои 12 слов доступа для своего кошелька TRON или запишите их в надежном месте. Эти слова доступа очень важны, поэтому никогда не сообщайте их никому!
✅ЗАГРУЗКА КОШЕЛЬКА TRON:
    1. Скопируйте адрес своего кошелька TRX в приложение TRON Wallet.
    2. Используйте надежный обменный сайт, например bestchange.ru.
    3. Войдите на веб-сайт, выберите, куда вы отправляете TRX и откуда вы его получаете, затем выберите лучшую ставку, следуйте инструкциям и пополните свой кошелек TRON на 710TRX (ВКЛЮЧАЯ ПЛАТУ за газ)`,
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Адрес для перевода: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Сумма перевода: 0,05 Адрес кошелька Upline (лица, отправившего приглашение): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Для входа в личный кабинет вам необходимо подписаться на наш информационный канал в Telegram. ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Авторизация с мобильного устройства",
    "AUTH_USING_PC": "🖥️ Авторизация с помощью ПК",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Чтобы авторизовать и синхронизировать свою учетную запись Forsage в этом боте Telegram, вам необходимо скопировать ссылку и вставить ее в мобильное приложение с вашим кошельком TRX, в котором также есть браузер DApp, например кошелек Coinbase. 2️⃣ После перехода по ссылке вам необходимо перейти в личный кабинет Forsage в самый низ страницы и скопировать сгенерированный токен в буфер обмена. 3️⃣ Затем отправьте скопированный токен боту в этом разговоре",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Чтобы авторизовать и синхронизировать свою учетную запись Forsage в этом боте Telegram, вам необходимо нажать кнопку «Авторизоваться с помощью ПК». 2️⃣ После перехода по ссылке вам необходимо перейти в личный кабинет Forsage в самый низ страницы и скопировать сгенерированный токен в буфер обмена. 3️⃣ Затем отправьте скопированный токен боту в этом разговоре ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ Мы не нашли вашу подписку на канал!", 
    "HELPINFOTEXT": 'Добро пожаловать в раздел «💬 Информация и помощь»',     
    "HELP_INFO_TEXT": 'ℹ️ Полезная информация о FORSAGE Любые вопросы вы можете задать в разделе «💬 Задайте вопрос»',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Выберите интересующий вас вопрос",   
    
    "LANG_SELECTION_TEXT": "🌐 Выбор языка",    
    "SET_LANG": "Выберите ваш язык",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉Вопросы-Ответы👈",
    "ASKAQuestion": "💬Задайте вопрос",
    "Back": "Назад",
    "BTNPersonalAccount": "Персональный аккаунт",                        
    "BTNRegistration": "Постановка на учет",
    "MSGSelectMethod": "Выберите подходящий способ авторизации вашей учетной записи Forsage ⤵️", 
    "start": "Начало",   
    "ForsageTelegramChannel": "Telegram-канал проекта Forsage", 
    "HaveSubscribed": "Я подписался ✅",  
    "NEXT": "СЛЕДУЮЩИЙ",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Адрес для перевода: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Сумма перевода: 0,05. Верхний адрес кошелька (того, кто сделал приглашение): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "SOCIAL_NETWORK_TEXT": "FORSAGE - это международная краудфандинговая платформа нового поколения🌐 \n Мы в социальных сетях и мессенджерах ⤵️",
    "SOCIAL_TELEGRAM": "ТЕЛЕГРАММА",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 

//AZƏRBAYCAN -Azerbyjan
global.AZ = { 
    "INVALIDADDR": "Tron ünvanı səhvdir",
    "SELECTLANG": "🌍 Dil seçin:",
    "WELCOMEMSG": "Salam! Mən bot. Dost olmaq istəyirsiniz? Forsaj hesabınızdakı heç bir vacib hadisəni qaçırmayın və mənimlə daha çox pul qazana bilmək üçün yaradılmışam!",
    "ADDMESSAGE1": "✏️ Əlaqədar hadisə bildirişlərini dərhal almaq üçün Forsage layihə hesabınızın Tron cüzdanını göstərin.",    
    "ADDRESSADDEDSUCCESS": "Ünvan uğurla əlavə edildi 👌",  
    "ADDREDDEXISTSERR": "Ünvan artıq mövcuddur! ERR-",
    "DELETEMESSAGE": "✏️ Botdan silmək istədiyiniz ünvana vurun:",
    "CONNECTEDACCMESSAGE": "Bağlı hesablar:",
    "NOACCOUNTSMSG": "Hesab bağlı deyil",
    "Accounts": "Hesablar",
    "Settings": "Parametrlər",
    "add": "əlavə edin",
    "delete": "silin",
    "SETTINGSCHANGED": "parametrlər uğurla yeniləndi.",

    "REGISTRATION": "📝 Qeydiyyat (FORSAGE-də deyiləm)",
    "PERSONALACCOUNT": "👤 Fərdi Hesab (Mən FORSAGE-dəyəm)",
    "INFORMATIONHELP": "💬 Məlumat və kömək",
    "SOCIALNETWORK": "ℹ️ Sosial şəbəkələrdəyik",
    "LANGSETTINGS": "🌐 Dil seçimi",
    "WELCOMEMSGFORSAGE": "🏠 Əsas menyuya xoş gəlmisiniz",
    "BACKTOMAINMENU": "🔙 Əsas menyuya qayıdın",
    "REG1": "🚹 FORSAGE layihəsinə qeydiyyatdan keçin",
    "REG2": "Forsajda qeydiyyatdan keçmək üçün uyğun bir metod seçin 👇🏻",
    "REGISTRINGMOBILE": "📱 Mobil cihazdan qeydiyyatdan keçmək",
    "REGISTRINGUSINGPC": "🖥️ PC istifadə edərək qeydiyyat",    
    "METAMASK_Registration_TEXT": "METAMASK Qeydiyyatı",
    "REG_MANUAL": "Qeydiyyat (Manual əməliyyat)",
    "SELECTSUITAIBLEMETHOD": "⚠️ Uyğun bir üsul seçməlisiniz",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "Cüzdanım və ya tətbiqim yoxdur",
    "REGISTRINGMOBILE12": "Cüzdanım və tətbiqim var",
    "REGISTRINGMOBILE13": "Qeydiyyat (Manual əməliyyat)",
    "REG_NO_WALLETTEXT": "✅TRX Cüzdanın yaradılması: 1. AppStore'dan Coinbase Cüzdanından tətbiqini yükləyin (https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8) və ya Play Market (https://play.google.com/store/apps/details?id=org.toshi) 2. Coinbase Cüzdanını açın, \“Yeni cüzdan yaradın\”, sonra \“Qəbul et\” düyməsini basın. @ İstifadəçi adınızla gəlin, sonra \"İleri\" yə vurun. İndi Coinbase Cüzdanına giriş üçün bir parol düşünün, sonra gənə vurun və sonra \"İndi yedəkləyin\" düyməsini basın. Sonra, 12 giriş sözünüzü TRX cüzdanınız üçün saxlayın və ya etibarlı bir yerə yazın. Bu giriş sözləri çox vacibdir, buna görə onları heç vaxt heç kimlə bölüşməyin! TRX cüzdanınızın ünvanını Coinbase Wallet tətbiqinə kopyalayın. Bestchange.ru kimi etibarlı mübadilə veb saytından istifadə edin. 3. Veb saytına daxil olun, Tron'u hara göndərdiyinizi və haradan aldığınızı seçin. , sonra ən yaxşı dərəcəni seçin, təlimatları izləyin və TRX cüzdanınızı 0.05 TRX + 0.01-0.02 TRX (gələcək komissiya üçün) və ya daha çox ilə doldurun",
    "REG_NO_WALLET_NEXT": "1. Bu mesajın altındakı linki kopyalayın \n 2. Cüzdan tətbiqinə daxil olun və bu linki DApp Brauzer xəttinə daxil edin \n 3. Görünən pəncərədə, FORSAGE-də qeydiyyatdan keçmək üçün əməliyyatı təsdiqləyin",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. Bu mesajın altındakı linki kopyalayın \n 2. Cüzdan tətbiqinə daxil olun və bu linki DApp Brauzer xəttinə daxil edin \n 3. Görünən pəncərədə, FORSAGE-də qeydiyyatdan keçmək üçün əməliyyatı təsdiqləyin",
    "REG_MOBILE_WALLET_APP": `✅Tron cüzdanının yaradılması:
    1. Proqramı AppStore və ya Play Marketdə TRON Wallet-də yükləyin
    2. TRON Cüzdanını açın, "Yeni cüzdan yaradın", sonra "Qəbul et" düyməsini basın. @ İstifadəçi adınız və ya cüzdan adınızla gəlin, sonra "Next" düyməsinə vurun. İndi TRON Cüzdana daxil olmaq üçün bir parol düşünün, sonra gənə vurun və sonra "İndi yedəkləyin" düyməsini basın. Sonra TRON cüzdanınız üçün 12 giriş sözünüzü qeyd edin və ya etibarlı bir yerə yazın. Bu giriş sözləri çox vacibdir, buna görə onları heç vaxt heç kimlə paylaşmayın!
✅Tron cüzdanınızı dayandırmaq:
    1. TRX cüzdanınızın ünvanını TRON Cüzdan tətbiqinə kopyalayın
    2. bestchange.ru kimi etibarlı mübadilə veb saytından istifadə edin
    3. Veb saytına daxil olun, TRX-i hara göndərdiyinizi və haradan aldığınızı seçin, sonra ən yaxşı dərəcəni seçin, təlimatlara əməl edin və TRON cüzdanınızı 710TRX-ə qədər doldurun (QAZ ÖDƏNİSİ İLƏ)`,
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "Köçürmə ünvanı: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 Transfer məbləği: 0.05 Çevik cüzdan ünvanı (dəvəti edən şəxsin): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ Şəxsi hesabınıza daxil olmaq üçün Telegramdakı məlumat kanalımıza abunə olmalısınız ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 Mobil cihazdan icazə",
    "AUTH_USING_PC": "🖥️ PC istifadə edərək icazə",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ Forsaj hesabınızı bu Telegram botunda təsdiqləmək və sinxronlaşdırmaq üçün əlaqəni kopyalayıb TRX cüzdanınızla Coinbase Cüzdan kimi bir DApp Brauzeri olan bir mobil tətbiqə yapışdırmalısınız. \n 2️⃣ Linki izlədikdən sonra Forsage şəxsi hesabınıza, səhifənin ən alt hissəsinə keçməlisiniz və yaradılan jetonu panoya köçürməlisiniz. \n 3️⃣ Sonra, bu söhbətdə kopyalanan jetonu bota göndərin",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ Bu Telegram botunda Forsage hesabınıza icazə vermək və sinxronizasiya etmək üçün “PC istifadə edərək icazə ver” düyməsini basmalısınız. \n 2️⃣ Linki izlədikdən sonra Forsage şəxsi hesabınıza, səhifənin ən alt hissəsinə keçməlisiniz və yaradılan jetonu panoya köçürməlisiniz. \n 3️⃣ Sonra, bu söhbətdə kopyalanan jetonu bota göndərin ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ Kanala abunəliyinizi tapmadıq!", 
    "HELPINFOTEXT": '“💬 Məlumat və Yardım” bölməsinə xoş gəlmisiniz',     
    "HELP_INFO_TEXT": 'ℹ️ FORSAGE haqqında faydalı məlumatlar "💬 Sual ver" bölməsində istənilən sualı verə bilərsiniz',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "Sizi maraqlandıran bir sual seçin",   
    

    "LANG_SELECTION_TEXT": "🌐 Dil seçimi",    
    "SET_LANG": "Dilinizi seçin",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉Suallar👈",
    "ASKAQuestion": "💬Sual ver",
    "Back": "Geri",
    "BTNPersonalAccount": "Şəxsi Hesab",
    "BTNRegistration": "Qeydiyyat",
    "MSGSelectMethod": "Forsaj hesabınıza icazə vermək üçün uyğun bir metod seçin ⤵️", 
    "start": "başlamaq",   
    "ForsageTelegramChannel": "Forsaj layihəsinin Telegram kanalı", 
    "HaveSubscribed": "Abunə oldum ✅",  
    "NEXT": "SONRA",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"Köçürmə ünvanı: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. Transfer məbləği: 0.05. Çevik cüzdan ünvanı (dəvəti edən şəxsin): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "SOCIAL_NETWORK_TEXT": "FORSAGE beynəlxalq yeni nəsil kraudfandinq platformasıdır🌐 \n Sosial şəbəkələrdə və messencerlərdəyik ⤵️",
    "SOCIAL_TELEGRAM": "TELEQRAM",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "INSTAGRAM",
}; 

/// HEBREW
global.HE = { 
    "INVALIDADDR": "כתובת אתר לא חוקית",
    "SELECTLANG": "🌍 בחר שפה:",
    "WELCOMEMSG": "היי! אני רובוט. רוצים להכיר חברים? נוצרתי כך שלא תפספס אף אירוע חשוב בחשבון Forsage ותוכל להרוויח עוד יותר כסף איתי!",
    "ADDMESSAGE1": "✏️ ציין את ארנק Tron של חשבון פרויקט Forsage שלך ​​על מנת לקבל מייד התראות בנושא אירועים.",    
    "ADDRESSADDEDSUCCESS": "הכתובת נוספה בהצלחה 👌",  
    "ADDREDDEXISTSERR": "הכתובת כבר קיימת! לִטְעוֹת-",
    "DELETEMESSAGE": "✏️ לחץ על הכתובת שברצונך למחוק מהבוט:",
    "CONNECTEDACCMESSAGE": "חשבונות מחוברים:",
    "NOACCOUNTSMSG": "אין חשבונות מחוברים",
    "Accounts": "חשבונות",
    "Settings": "הגדרות",
    "add": "לְהוֹסִיף",
    "delete": "לִמְחוֹק",
    "SETTINGSCHANGED": "ההגדרות עודכנו בהצלחה.",

    "REGISTRATION": "📝 הרשמה (אני לא ב- FORSAGE)",
    "PERSONALACCOUNT": "👤 חשבון אישי (אני ב- FORSAGE)",
    "INFORMATIONHELP": "💬 מידע ועזרה",
    "SOCIALNETWORK": "ℹ️ אנחנו ברשתות חברתיות",
    "LANGSETTINGS": "🌐 בחירת שפה",
    "WELCOMEMSGFORSAGE": "🏠 ברוכים הבאים לתפריט הראשי",
    "BACKTOMAINMENU": "🔙 חזרה לתפריט הראשי",
    "REG1": "🚹 נרשם לפרויקט FORSAGE",
    "REG2": "בחר שיטה מתאימה לרישום ב- Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 הרשמה ממכשיר נייד",
    "REGISTRINGUSINGPC": "🖥️ הרשמה באמצעות מחשב אישי",    
    "METAMASK_Registration_TEXT": "רישום METAMASK",
    "REG_MANUAL": "הַרשָׁמָה (עסקה ידנית)",
    "SELECTSUITAIBLEMETHOD": "⚠️ עליך לבחור שיטה מתאימה",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "אין לי ארנק או אפליקציה",
    "REGISTRINGMOBILE12": "יש לי ארנק ואפליקציה",
    "REGISTRINGMOBILE13": "רישום (עסקה ידנית)",
    /////////////////////   
    "REG_NO_WALLETTEXT": "✅ יצירת ארנק TRX: \n 1. הורד את האפליקציה בארנק Coinbase ב- AppStore () או ב- Play Market () \n 2. פתח את ארנק Coinbase, לחץ על-צור ארנק חדש- ואז -קבל-. העלה את שם המשתמש שלך ולחץ על -הבא-. עכשיו חשבו על סיסמה להתחברות לארנק Coinbase, ואז לחצו על הסימון ואז על כפתור -הגבה עכשיו-. לאחר מכן שמור את 12 מילות הגישה שלך לארנק TRX שלך או רשום אותן במקום בטוח. מילות גישה אלה חשובות מאוד, אז לעולם אל תשתף אותן עם אף אחד! \n 1. העתק את כתובת ארנק ה- TRX שלך לאפליקציית Coinbase Wallet. \n 2. השתמש באתר חילופי אמין, כגון bestchange.ru \n 3. היכנס לאתר, בחר לאן אתה שולח את הטרון ומאיפה אתה מקבל אותו, ואז בחר את התעריף הטוב ביותר, עקוב אחר ההוראות, והעלה את ארנק ה- TRX שלך ב -0.05 TRX + 0.01-0.02 TRX ( לעמלה עתידית) או יותר",
    "REG_NO_WALLET_NEXT": "1. העתק את הקישור מתחת להודעה זו\n 2. היכנסו לאפליקציית הארנק והכנסו קישור זה לשורת הדפדפן DApp\n3. בחלון שמופיע, אשר את העסקה על מנת להירשם ל- FORSAGE",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. העתק את הקישור מתחת להודעה זו\n 2. היכנסו לאפליקציית הארנק והכנסו קישור זה לשורת הדפדפן DApp\n 3. בחלון שמופיע, אשר את העסקה על מנת להירשם ל- FORSAGE",
    "REG_MOBILE_WALLET_APP":`✅ יצירת ארנק טרון:
    1. הורידו את האפליקציה בארנק TRON באפסטור או ב- Play Market
    2. פתח את ארנק TRON, לחץ על "צור ארנק חדש" ואז על "קבל". בוא עם @ username או שם הארנק שלך, ואז לחץ על "הבא". עכשיו חשוב על סיסמה להתחברות לארנק TRON, ואז לחץ על הסימון ואז על כפתור "גבה עכשיו". לאחר מכן שמור את 12 מילות הגישה שלך לארנק TRON שלך או רשום אותן במקום בטוח. מילות גישה אלה חשובות מאוד, אז לעולם אל תשתף אותן עם אף אחד!
OP איסוף ארנק הטרון שלך:
    1. העתק את כתובת ארנק ה- TRX שלך לאפליקציית ארנק TRON
    2. השתמש באתר חילופי אמין, כגון bestchange.ru
    3. היכנס לאתר, בחר לאן אתה שולח את ה- TRX ומהיכן אתה מקבל אותו, ואז בחר את התעריף הטוב ביותר, עקוב אחר ההוראות, והעלה את ארנק ה- TRON שלך עד 710TRX (כולל דמי גז)`,
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "כתובת להעברה: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 סכום העברה: 0.05 \n כתובת הארנק בתפריט (של מי שהגיש את ההזמנה): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ כדי לגשת לחשבון האישי שלך, עליך להירשם לערוץ המידע שלנו בטלגרם ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 אישור ממכשיר נייד",
    "AUTH_USING_PC": "🖥️ אישור באמצעות מחשב אישי",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ כדי לאשר ולסנכרן את חשבון Forsage שלך ​​בבוט Telegram זה, עליך להעתיק את הקישור ולהדביק אותו באפליקציה סלולרית עם ארנק ה- TRX שלך שיש בו גם דפדפן DApp, כגון ארנק Coinbase.\n 2️⃣ לאחר שעברתם את הקישור, עליכם לעבור לחשבון האישי שלכם ב- Forsage, לתחתית העמוד ולהעתיק את האסימון שנוצר ללוח.\n3️⃣ לאחר מכן, שלח את האסימון המועתק לבוט בשיחה זו",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": '1️⃣ כדי לאשר ולסנכרן את חשבון Forsage שלך ​​בבוט Telegram זה, עליך ללחוץ על כפתור "אשר באמצעות מחשב אישי".2️⃣ לאחר שעברתם את הקישור, עליכם לעבור לחשבון האישי שלכם ב- Forsage, לתחתית העמוד ולהעתיק את האסימון שנוצר ללוח.3️⃣ לאחר מכן, שלח את האסימון המועתק לבוט בשיחה זו ⤵️',    
    "NO_SUBSCRIPTION_FOUND": "❎ לא מצאנו את המנוי שלך לערוץ!", 
    "HELPINFOTEXT": 'ברוך הבא לקטע "💬 מידע ועזרה"',     
    "HELP_INFO_TEXT": 'ℹ️ מידע שימושי על FORSAGE תוכל לשאול כל שאלה בסעיף "💬 שאל שאלה"',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "בחר שאלה שמעניינת אותך",   
    

    "LANG_SELECTION_TEXT": "🌐 בחירת שפה",    
    "SET_LANG": "בחר את השפה שלך",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉שאלות נפוצות👈",
    "ASKAQuestion": "💬שאל שאלה",
    "Back": "חזור",
    "BTNPersonalAccount": "חשבון אישי",
    "BTNRegistration": "הַרשָׁמָה",
    "MSGSelectMethod": "בחר שיטה מתאימה לאישור חשבון Forsage שלך ⤵️", 
    "start": "הַתחָלָה",   
    "ForsageTelegramChannel": "ערוץ הטלגרם של פרויקט Forsage", 
    "HaveSubscribed": "נרשמתי ✅",  
    "NEXT": "הַבָּא",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT": "כתובת להעברה: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. סכום העברה: 0.05.    כתובת הארנק בתפריט (של מי שהגיש את ההזמנה): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",


    "SOCIAL_NETWORK_TEXT": "FORSAGE היא פלטפורמת מימון המונים בינלאומית מהדור הבא🌐     אנחנו ברשתות חברתיות ושליחים ⤵️",
    "SOCIAL_TELEGRAM": "מִברָק",
    "SOCIAL_YOUTUBE": "YOUTUBE",
    "SOCIAL_INSTAGRAM": "אינסטגרם",
}; 

global.AR = { 
    "INVALIDADDR": "عنوان Tron غير صالح",
    "SELECTLANG": "🌍 اختر لغة:",
    "WELCOMEMSG": "مرحبا! أنا بوت. تريد تكوين صداقات؟ لقد تم إنشاؤها حتى لا تفوتك أي أحداث مهمة في حساب Forsage الخاص بك ويمكنك جني المزيد من المال معي!",
    "ADDMESSAGE1": "✏️ حدد محفظة Tron لحساب مشروع Forsage الخاص بك لتلقي إشعارات الأحداث ذات الصلة على الفور.",    
    "ADDRESSADDEDSUCCESS": "تمت إضافة العنوان بنجاح 👌",  
    "ADDREDDEXISTSERR": "العنوان موجود بالفعل! خطأ-",
    "DELETEMESSAGE": "✏️ انقر فوق العنوان الذي تريد حذفه من الروبوت:",
    "CONNECTEDACCMESSAGE": "الحسابات المرتبطة:",
    "NOACCOUNTSMSG": "لا حسابات مرتبطة",
    "Accounts": "حسابات",
    "Settings": "الإعدادات",
    "add": "أضف",
    "delete": "حذف",
    "SETTINGSCHANGED": "تم تحديث الإعدادات بنجاح.",

    "REGISTRATION": "📝 التسجيل (لست في FORSAGE)",
    "PERSONALACCOUNT": "👤 الحساب الشخصي (أنا في FORSAGE)",
    "INFORMATIONHELP": "💬 المعلومات والمساعدة",
    "SOCIALNETWORK": "ℹ️ نحن على الشبكات الاجتماعية",
    "LANGSETTINGS": "🌐 اختيار اللغة",
    "WELCOMEMSGFORSAGE": "🏠 مرحبا بكم في القائمة الرئيسية",
    "BACKTOMAINMENU": "🔙 العودة إلى القائمة الرئيسية",
    "REG1": "🚹 التسجيل في مشروع FORSAGE",
    "REG2": "حدد طريقة مناسبة للتسجيل في Forsage 👇🏻",
    "REGISTRINGMOBILE": "📱 التسجيل من جهاز محمول",
    "REGISTRINGUSINGPC": "🖥️ التسجيل باستخدام جهاز كمبيوتر",    
    "METAMASK_Registration_TEXT": "تسجيل METAMASK",
    "REG_MANUAL": "التسجيل (معاملة يدوية)",
    "SELECTSUITAIBLEMETHOD": "⚠️ تحتاج إلى تحديد طريقة مناسبة",
    "MetaMaskURL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/", 
    "REGISTRINGMOBILE11": "ليس لدي محفظة أو التطبيق",
    "REGISTRINGMOBILE12": "لدي محفظة والتطبيق",
    "REGISTRINGMOBILE13": "التسجيل (معاملة يدوية)",
    "REG_NO_WALLETTEXT": '✅إنشاء محفظة TRX: 1. قم بتنزيل التطبيق في Coinbase Wallet في AppStore () أو Play Market () \n 2. افتح Coinbase Wallet ، وانقر فوق -Create a new wallet- ، ثم -Accept. تعال مع اسم المستخدم الخاص بك ، ثم انقر فوق التالي. فكر الآن في كلمة مرور لتسجيل الدخول إلى Coinbase Wallet ، ثم انقر فوق علامة التجزئة ثم على الزر -Back up now-. بعد ذلك ، قم بحفظ 12 كلمة وصول لمحفظة TRX الخاصة بك أو قم بتدوينها في مكان آمن. كلمات الوصول هذه مهمة جدًا ، لذا لا تشاركها أبدًا مع أي شخص!    1. انسخ عنوان محفظة TRX الخاصة بك في تطبيق Coinbase Wallet \n 2. استخدم موقع صرف موثوق به ، مثل bestchange.ru \n  3. قم بتسجيل الدخول إلى موقع الويب ، وحدد المكان الذي ترسل إليه Tron وأين تتلقى منه ، ثم حدد أفضل سعر ، واتبع التعليمات ، وقم بتعبئة محفظة TRX الخاصة بك بواسطة 0.05 TRX + 0.01-0.02 TRX (للعمولة المستقبلية) أو أكثر',
    
    "REG_NO_WALLET_NEXT": "1- انسخ الرابط الموجود أسفل هذه الرسالة\n 2. انتقل إلى تطبيق Wallet وأدخل هذا الرابط في خط متصفح DApp \n 3. في النافذة التي تظهر ، قم بتأكيد المعاملة من أجل التسجيل في FORSAGE",
    "REG_NO_WALLET_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    //"REG_MOBILE_WALLET_APP": "1. انسخ الرابط الموجود أسفل هذه الرسالة. \n 2. انتقل إلى تطبيق Wallet وأدخل هذا الرابط في خط متصفح DApp. \n 3. في النافذة التي تظهر ، قم بتأكيد المعاملة من أجل التسجيل في FORSAGE",
    "REG_MOBILE_WALLET_APP": `✅ إنشاء محفظة ترون:
    1. قم بتنزيل التطبيق في TRON Wallet في AppStore أو Play Market
    2. افتح محفظة TRON ، وانقر على "إنشاء محفظة جديدة" ، ثم "قبول". ابتكر اسم المستخدم @ أو اسم المحفظة ، ثم انقر على "التالي". فكر الآن في كلمة مرور لتسجيل الدخول إلى محفظة TRON ، ثم انقر فوق العلامة ثم على زر "النسخ الاحتياطي الآن". بعد ذلك ، قم بحفظ 12 كلمة وصول لمحفظة TRON الخاصة بك أو قم بتدوينها في مكان آمن. كلمات الوصول هذه مهمة جدًا ، لذا لا تشاركها أبدًا مع أي شخص!
✅ تشغيل محفظتك TRON:
    1. انسخ عنوان محفظة TRX في تطبيق TRON Wallet
    2. استخدم موقع صرف موثوق به ، مثل bestchange.ru
    3. قم بتسجيل الدخول إلى موقع الويب ، وحدد المكان الذي ترسل إليه TRX وأين تتلقى منه ، ثم حدد أفضل سعر ، واتبع الإرشادات ، وقم بتعبئة محفظة TRON الخاصة بك بمقدار 710TRX (بما في ذلك رسوم الغاز)`,
    "REG_MOBILE_WALLET_APP_URL": "https://lk.forsage.io/service/payment/fea9936507280d33ca3a0738d5180323/",
    "REG_MANUAL_TRAN": "عنوان النقل: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97. مبلغ التحويل: 0.05.000 عنوان محفظة الإرسال (للشخص الذي أرسل الدعوة): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",

    "PERSONALACCOUNT1": "✅ للوصول إلى حسابك الشخصي ، تحتاج إلى الاشتراك في قناة المعلومات الخاصة بنا على Telegram ⤵️",

    "AUTH_FROM_MOB_DEVICE": "📱 إذن من جهاز محمول",
    "AUTH_USING_PC": "🖥️ إذن باستخدام جهاز كمبيوتر",
    "AUTH_USING_PC_URL": "https://lk.forsage.io/auth/secure/",

    "AUTHFROM_MOB_CLICK_TEXT": "1️⃣ لتفويض ومزامنة حساب Forsage الخاص بك في روبوت Telegram هذا ، تحتاج إلى نسخ الرابط ولصقه في تطبيق جوال باستخدام محفظة TRX التي تحتوي أيضًا على متصفح DApp ، مثل Coinbase Wallet. 2️⃣ بعد اتباع الرابط ، تحتاج إلى الانتقال إلى حسابك الشخصي في Forsage ، أسفل الصفحة ، ونسخ الرمز المميز الذي تم إنشاؤه إلى الحافظة الخاصة بك.3️⃣ بعد ذلك ، أرسل الرمز المنسوخ إلى الروبوت في هذه المحادثة",
    "AUTHFROM_MOB_CLICK_TEXT_LINK": "https://lk.forsage.io/user/connect/telegram/",
    "AUTHUING_PC_CLICK_TEXT": "1️⃣ لتفويض ومزامنة حساب Forsage الخاص بك في برنامج Telegram bot ،  تحتاج إلى النقر فوق الزر       ترخيص باستخدام جهاز كمبيوتر.  2️⃣ بعد اتباع الرابط ، تحتاج إلى الانتقال إلى حسابك الشخصي في Forsage ، أسفل الصفحة ، ونسخ الرمز المميز الذي تم إنشاؤه إلى الحافظة الخاصة بك.    3️⃣ بعد ذلك ، أرسل الرمز المنسوخ إلى الروبوت في هذه المحادثة ⤵️",    
    "NO_SUBSCRIPTION_FOUND": "❎ لم نجد اشتراكك في القناة!", 
    "HELPINFOTEXT": 'مرحبًا بكم في قسم "المعلومات والمساعدة"',     
    "HELP_INFO_TEXT": 'ℹ️ معلومات مفيدة حول FORSAGE \ n يمكنك طرح أي أسئلة في قسم "💬 طرح سؤال"',
    "FAQ_CLICKED": "FAQ_CLICKED",
    "ASKQUE_CLICKED": "ASKQUE_CLICKED",      
    "SELECT_INTEREST": "حدد السؤال الذي يثير اهتمامك",   
    


    "LANG_SELECTION_TEXT": "🌐 اختيار اللغة",    
    "SET_LANG": "اختر لغتك",
    /// NEW ADDED 7 SEPT 2020
    "FAQ": "👉التعليمات👈",
    "ASKAQuestion": "💬طرح سؤال",
    "Back": "عودة",
    "BTNPersonalAccount": "حساب شخصي",
    "BTNRegistration": "التسجيل",
    "MSGSelectMethod": "حدد طريقة مناسبة لتفويض حساب Forsage الخاص بك ⤵️", 
    "start": "بداية",   
    "ForsageTelegramChannel": "قناة Telegram الخاصة بمشروع Forsage", 
    "HaveSubscribed": "لقد اشتركت ✅",  
    "NEXT": "التالى",
    "ONE_OF_FIVE": "1/5",
    "TWO_OF_FIVE": "2/5",
    "THREE_OF_FIVE": "3/5",
    "FOUR_OF_FIVE": "4/5",
    "FIVE_OF_FIVE": "5/5",               
    "REG_MANUAL_TRANS_TXT" :"عنوان التحويل: 0x5acc84a3e955Bdd76467d3348077d003f00fFB97 مبلغ التحويل: 0.05 عنوان المحفظة الرئيسية (للشخص الذي أرسل الدعوة): 0x81CA1e4DE24136EBcf34CA518af87F18FD39D45E",


    "SOCIAL_NETWORK_TEXT": "FORSAGE هي منصة تمويل جماعي دولية من الجيل التالي.    نحن على الشبكات الاجتماعية والمراسلين ⤵️",
    "SOCIAL_TELEGRAM": "برقية",
    "SOCIAL_YOUTUBE": "موقع YOUTUBE",
    "SOCIAL_INSTAGRAM": "انستغرام",
}; 




///////// ************************* FOR LANGUAGES SETTINGS BUTTONS  *********************//////
///////// ENGLISH,DEUTSCH,ESPANOL,FRANCIS,ITALINO,RUSSIAN,AZERBYCAN,HEBREW,TURKEY,ARABIC //////
global.LANG = { 
    EN: {
        "ENGLISH": "English",
        "DEUTSCH": "Deutsch",
        "ESPANOL": "Espanol",
        "FRANCIS": "Francis",
        "ITALIANO": "Italiano",
        "RUSSIAN": "Russian",
        "AZERBYCAN": "Azerbycan",
        "HEBREW": "Hebrew",
        "TURKCE": "Turkce",
        "ARABIC": "Arabic"
    },
    DE: {
        "ENGLISH": "ENGLISCH",
        "DEUTSCH": "DEUTSCH",
        "ESPANOL": "ESPANOL",
        "FRANCIS": "FRANCIS",
        "ITALIANO": "ITALIANO",
        "RUSSIAN": "RUSSISCH",
        "AZERBYCAN": "AZERBYKAN",
        "HEBREW": "HEBRÄISCH",
        "TURKCE": "TURKCE",
        "ARABIC": "ARABISCH"
    },
    ES: {
        "ENGLISH": "INGLÉS",
        "DEUTSCH": "DEUTSCH",
        "ESPANOL": "ESPAÑOL",
        "FRANCIS": "FRANCIS",
        "ITALIANO": "ITALIANO",
        "RUSSIAN": "RUSO",
        "AZERBYCAN": "AZERBYCAN",
        "HEBREW": "HEBREO",
        "TURKCE": "TURKCE",
        "ARABIC": "ÁRABE"
    },
    FR: {
        "ENGLISH": "Anglaise",
        "DEUTSCH": "Deutsch",
        "ESPANOL": "Espanol",
        "FRANCIS": "Francis",
        "ITALIANO": "Italiano",
        "RUSSIAN": "russe",
        "AZERBYCAN": "Azerbaïdjan",
        "HEBREW": "Hébreue",
        "TURKCE": "Turkce",
        "ARABIC": "arabe"
    },
    IT: {
        "ENGLISH": "INGLESE",
        "DEUTSCH": "TEDESCO",
        "ESPANOL": "ESPANOLO",
        "FRANCIS": "FRANCESCO",
        "ITALIANO": "ITALIANO",
        "RUSSIAN": "RUSSO",
        "AZERBYCAN": "AZERBICANO",
        "HEBREW": "EBRAICO",
        "TURKCE": "TURKCE",
        "ARABIC": "ARABO"
    },
    RU: {
        "ENGLISH": "АНГЛИЙСКИЙ",
        "DEUTSCH": "Немецкий",
        "ESPANOL": "ЭСПАНОЛ",
        "FRANCIS": "ФРАНСИС",
        "ITALIANO": "ИТАЛЬЯНСКИЙ",
        "RUSSIAN": "РУССКИЙ",
        "AZERBYCAN": "АЗЕРБЫКАНСКИЙ",
        "HEBREW": "ИВРЕЙСКИЙ",
        "TURKCE": "ТУРЦИЯ",
        "ARABIC": "АРАБСКИЙ"
    },
    AZ: {
        "ENGLISH": "İNGİLİZ",
        "DEUTSCH": "DEUTSCH",
        "ESPANOL": "ESPANOL",
        "FRANCIS": "FRANCIS",
        "ITALIANO": "İTALYA",
        "RUSSIAN": "RUS",
        "AZERBYCAN": "AZƏRBAYCAN",
        "HEBREW": "İBRƏN",
        "TURKCE": "TÜRKCƏ",
        "ARABIC": "ARAB"
    },
    HE: {
        "ENGLISH": "אנגלית",
        "DEUTSCH": "דויטש",
        "ESPANOL": "ESPANOL",
        "FRANCIS": "פרנסיס",
        "ITALIANO": "איטלקי",
        "RUSSIAN": "רוּסִי",
        "AZERBYCAN": "אזרבייקאן",
        "HEBREW": "עִברִית",
        "TURKCE": "טורקיה",
        "ARABIC": "עֲרָבִית"
    },
    TU: {
        "ENGLISH": "İNGİLİZCE",
        "DEUTSCH": "DEUTSCH",
        "ESPANOL": "ESPANOL",
        "FRANCIS": "FRANCIS",
        "ITALIANO": "İTALYANO",
        "RUSSIAN": "RUSÇA",
        "AZERBYCAN": "AZERBAYCAN",
        "HEBREW": "İBRANİCE",
        "TURKCE": "TÜRK",
        "ARABIC": "ARAPÇA"
    },
    AR: {
        "ENGLISH": "الإنجليزية",
        "DEUTSCH": "الألمانية",
        "ESPANOL": "ESPANOL",
        "FRANCIS": "فرانسيس",
        "ITALIANO": "ايطالي",
        "RUSSIAN": "الروسية",
        "AZERBYCAN": "أذربيجان",
        "HEBREW": "اللغة العبرية",
        "TURKCE": "تركيا",
        "ARABIC": "عربى"
    }
};