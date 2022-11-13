import {registerImg} from "./lazy"

const button = document.querySelector("button.p-4");
const clearButton = document.querySelector(".clear");
const montNode = document.querySelector("#images")
const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()*(max - min)) + min

const createImageNode = () => {
    const div = document.createElement("div");
    div.className = "my-4";
    const image = document.createElement("img");
    image.className = "mx-auto w-60";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    const imgWrap = document.createElement("div");
    imgWrap.className = "w-60 bg-gray-400 min-h-full p-2";
    imgWrap.style.minHeight = "100px"
    imgWrap.style.display = "inline-block";
    imgWrap.appendChild(image);
    div.appendChild(imgWrap)

    appendedImgs++;
    consolePrint();

    return div
}

const addImages = () => {
    const newImage = createImageNode();
    montNode.append(newImage);
    registerImg(newImage)
}
addImages()
button.addEventListener("click", addImages)

//clear all foxes
const deleteImages = () => {
    montNode.innerHTML = "";
}
clearButton.addEventListener("click", deleteImages)