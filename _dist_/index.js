import h from "../_snowpack/pkg/hyperscript.js"
import {registerImg} from "./lazy.js"

const button = document.querySelector("button.main-btn");
const clearButton = document.querySelector(".clear");
const montNode = document.querySelector("#images")
const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()*(max - min)) + min

const createImageNode = () => {
    const image = h("img.mx-auto.w-60", {
        "data-src": `https://randomfox.ca/images/${random()}.jpg`
    })
    const div = h("div.my-4.p-4", image)
    const imgWrap = h("div.w-60.bg-gray-400.min-h-full.p-2")
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