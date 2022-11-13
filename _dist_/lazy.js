const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const action = (entry) => {
    console.log("buenas")
}
const watcher = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})

export const registerImg = (img) => {
    watcher.observe(img)
}