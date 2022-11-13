const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const loadImage = (entry) => {
    const container = entry.target;
    const imageWrap = container.firstChild;
    const image = imageWrap.firstChild;
    const url = image.dataset.src;
    image.src = url;
    loadedImgs++
    consolePrint()
    watcher.unobserve(container);
}
const watcher = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImg = (img) => {
    watcher.observe(img)
}