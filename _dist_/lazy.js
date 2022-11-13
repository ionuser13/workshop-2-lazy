const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const action = (entry) => {
    const node = entry.target;
    console.log("buenas");
    watcher.unobserve(node)
}
const watcher = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})

export const registerImg = (img) => {
    watcher.observe(img)
}