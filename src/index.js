import {registerImg} from "./lazy"

const button = document.querySelector("button.p-4");
const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()*(max - min)) + min

const createImageNode = () => {
    const div = document.createElement("div");
    div.className = "p-4";
    const image = document.createElement("img");
    image.className = "mx-auto my-4 w-60";
    image.src = `https://randomfox.ca/images/${random()}.jpg`;
    div.append(image)
    return div
}

const addImages = () => {
    const newImage = createImageNode();
    const montNode = document.querySelector("#images")
    montNode.append(newImage);
    registerImg(newImage)
}
addImages()
button.addEventListener("click", addImages)

