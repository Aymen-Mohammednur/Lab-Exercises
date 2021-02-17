let galleryDiv = document.getElementById("gallery");

document.addEventListener("DOMContentLoaded", () => {
    loadGallery();
});

function loadGallery() {
    fetch("https://picsum.photos/v2/list?page=10&limit=5")
    .then(function (res) {
        return res.json();
    })
    .then(function (myImages) {
        let output = ``;
        for (let i = 0; i < myImages.length; i++) {
            if (i == 0) {
                output += `<div class="carousel-item active" data-bs-interval="1500">
                <img width="100%" height="937px" src="${myImages[i].download_url}" class="d-block w-100" alt="...">
              </div>`;
            }
            output += `<div class="carousel-item" data-bs-interval="1500">
            <img width="100%" height="937px" src="${myImages[i].download_url}" class="d-block w-100" alt="...">
          </div>`
            
        }
        output += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>`
        galleryDiv.innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}