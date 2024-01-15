// 

const accessKey = "cvbkoEp2z92lqvA51uwmAO6I5mspYnGyqW6FF27Z6aE";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value ;

    if (!keyword) {
        console.error("Lütfen geçerli bir anahtar kelime girin.");
        return;
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API'den veri alınamadı.");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Hata:", error.message);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
