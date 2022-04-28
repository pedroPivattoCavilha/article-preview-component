const share = document.querySelector(".open-share")
const shareBtn = document.querySelector(".icon")
const removeShareBtn = document.querySelector(".icon-open")

shareBtn.addEventListener("click", () => {
    share.classList.toggle("clicked")
})

removeShareBtn.addEventListener("click", () => {
    share.classList.remove("clicked")
})

