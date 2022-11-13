const apiFox = "https://randomfox.ca/floof/";
const button = document.querySelector("button.p-4");
const container = document.querySelector("#images");

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = response.json();
        renderImg(data.image)
    }
    catch (error) {
        console.error(error);
    }
}
async function renderImg(urlImage) {
    const div = document.createElement("div");
    div.className = "p-4";
    const image = document.createElement("img");
    image.src = urlImage;
    image.className = "mx-auto w-32";
    div.append(image);
    container.append(div);
}

async function generateImage() {
    const img = await fetchData(apiFox);
}
button.addEventListener("click", generateImage)

