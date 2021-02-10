// UI Vars 
const postDiv2 = document.getElementById('myPosts');

//load multiple posts function 
function loadPosts() {
    const xhr = new XMLHttpRequest();

    // change file URL up on your location
    
    xhr.open('GET','././asset/jsonData/posts.json', true);


    xhr.onload = function() {
        if (this.status === 200) {
            const posts = JSON.parse(this.responseText);

            let output = '';

            posts.forEach(post => {
                output += `
                <div class="item">
                    <div class="image"> <img src="${post.image}"> </div>
                    <div class="content">
                            <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
                            <div class="meta">
                                <span id="bDate">${post.date} </span>
                                <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                            </div>
                            <div class="description">  <p id="bDesc">  ${post.postText} </p>  </div>
                            <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                    </div>
                </div>`;
            });

            postDiv2.innerHTML = output
        }
    }

    xhr.send();

}

// const search2 = document.getElementById("search");
// search2.addEventListener("keyup", userSearch);

// function userSearch() {
//     const xhr = new XMLHttpRequest();

//     // change file URL up on your location
    
//     xhr.open('GET','././asset/jsonData/posts.json', true);


//     xhr.onload = function() {
//         if (this.status === 200) {
//             const posts = JSON.parse(this.responseText);

//             let objArr = Array();
//             posts.forEach(function(post) {
//                 objArr.push({title:post.postTitle.toUpperCase(), name: post.name, text: post.Text});
//             });

//             let output = '';

//             for (let i = 0; i < objArr.length; i++) {
//                 const userInput = search.value.toUpperCase();
                
//                 if (objArr[i].title.toUpperCase().indexOf(userInput) > -1) {
//                     output += `
//                 <div class="item">
//                     <div class="image"> <img src="${objArr[i].image}"> </div>
//                     <div class="content">
//                             <a class="header" href="#" id="bTitle"> ${objArr[i].postTitle} </a>
//                             <div class="meta">
//                                 <span id="bDate">${objArr[i].date} </span>
//                                 <span>By: <a href="#" id="bAuthor"> ${objArr[i].name}</a></span>
//                             </div>
//                             <div class="description">  <p id="bDesc">  ${objArr[i].postText} </p>  </div>
//                             <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
//                     </div>
//                 </div>`;
//                 }
//             }
            
//             postDiv2.innerHTML = output
//         }
//     }

//     xhr.send();
// }