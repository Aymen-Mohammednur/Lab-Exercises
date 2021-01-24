/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const reloadIcon = document.querySelector(".fa");
const answer = document.querySelectorAll(".badge");
const href = answer[0], protocol = answer[1], host = answer[2], port = answer[3], hostName = answer[4], pathName = answer[5], Hash = answer[6];
const appName = answer[7], appVersion = answer[8], platform = answer[9], language = answer[10], cookieEnabled = answer[11], userAgent = answer[12], geoLocation = answer[13];
const height = answer[14], width = answer[15], pixelDepth = answer[16], colorDepth = answer[17];
const Length = answer[18], state = answer[19], scrollRest = answer[20];

// Adding Event Listeners
reloadIcon.addEventListener('click', reloadPage);

// Function Definitions
function reloadPage() {
    location.reload();
}

// Display the BOM Information on the innerHTML of the elements
href.innerHTML = location.href;
protocol.innerHTML = location.protocol;
host.innerHTML = location.host;
port.innerHTML = location.port;
hostName.innerHTML = location.hostname;
pathName.innerHTML = location.pathname;
Hash.innerHTML = location.hash;

appName.innerHTML = navigator.appName;
appVersion.innerHTML = navigator.appVersion;
platform.innerHTML = navigator.platform;
language.innerHTML = navigator.language;
cookieEnabled.innerHTML = navigator.cookieEnabled;
userAgent.innerHTML = navigator.userAgent;
geoLocation.innerHTML = navigator.geolocation;

height.innerHTML = screen.height;
width.innerHTML = screen.width;
pixelDepth.innerHTML = screen.pixelDepth;
colorDepth.innerHTML = screen.colorDepth;

Length.innerHTML = window.history.length;
state.innerHTML = window.history.state;
scrollRest.innerHTML = window.history.scrollRestoration;