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
const locationInfo = document.querySelectorAll(".collection")[0];
const browserInfo = document.querySelectorAll(".collection")[1];
const screenInfo = document.querySelectorAll(".collection")[2];
const historyInfo = document.querySelectorAll(".collection")[3];

// Adding Event Listeners
reloadIcon.addEventListener('click', reloadPage);

// Function Definitions
function reloadPage() {
    location.reload();
}

// Display the BOM Information on the innerHTML of the elements

locationInfo.children[0].firstElementChild.textContent = location.href;
locationInfo.children[1].firstElementChild.textContent = location.protocol;
locationInfo.children[2].firstElementChild.textContent = location.host;
locationInfo.children[3].firstElementChild.textContent = location.port;
locationInfo.children[4].firstElementChild.textContent = location.hostname;
locationInfo.children[5].firstElementChild.textContent = location.pathname;
locationInfo.children[6].firstElementChild.textContent = location.hash;

browserInfo.children[0].firstElementChild.textContent = navigator.appName;
browserInfo.children[1].firstElementChild.textContent = navigator.appVersion;
browserInfo.children[2].firstElementChild.textContent = navigator.platform;
browserInfo.children[3].firstElementChild.textContent = navigator.language;
browserInfo.children[4].firstElementChild.textContent = navigator.cookieEnabled;
browserInfo.children[5].firstElementChild.textContent = navigator.userAgent;
browserInfo.children[6].firstElementChild.textContent = navigator.geolocation;

screenInfo.children[0].firstElementChild.textContent = screen.height;
screenInfo.children[1].firstElementChild.textContent = screen.width;
screenInfo.children[2].firstElementChild.textContent = screen.pixelDepth;
screenInfo.children[3].firstElementChild.textContent = screen.colorDepth;

historyInfo.children[0].firstElementChild.textContent = window.history.length;
historyInfo.children[1].firstElementChild.textContent = window.history.state;
historyInfo.children[2].firstElementChild.textContent = window.history.scrollRestoration;