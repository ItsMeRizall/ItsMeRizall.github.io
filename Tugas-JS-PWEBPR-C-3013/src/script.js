document.getElementById("yes-btn").addEventListener("click", () => {
    document.getElementById("title").innerText = "Anda Berbohong!"
    document.getElementById("img-profession").src = "./src/assets/teknisi.png"
    document.getElementById("card").style.backgroundColor = "red"
    document.getElementById("text-confirmation").innerText = "Anda adalah seorang Teknisi"
    document.getElementById("btn-box").style.visibility = "hidden"
})
document.getElementById("no-btn").addEventListener("click", () => {
    document.getElementById("title").innerText = "Anda Benar!"
    document.getElementById("img-profession").src = "./src/assets/mahasiswa.png"
    document.getElementById("card").style.backgroundColor = "#6FD240"
    document.getElementById("text-confirmation").innerText = "Anda adalah seorang Mahasiswa"
    document.getElementById("btn-box").style.visibility = "hidden"
})