const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    image.src = url;
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