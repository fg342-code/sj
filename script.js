const scene = document.querySelector(".scene");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const instruction = document.getElementById("instruction");
const tanggal = document.getElementById("tanggal");

tanggal.textContent = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

openButton.addEventListener("click", () => {
  if (!scene.classList.contains("open")) {
    // Tahap pertama: buka amplop dan keluarkan surat.
    scene.classList.add("open");
    instruction.textContent = "Suratnya sudah terbuka. Tekan tombol Baca Surat untuk membacanya.";
    openButton.textContent = "Baca Surat";
  } else {
    // Tahap kedua: tampilkan isi surat agar bisa dibaca dan digulir.
    scene.classList.add("reading");
    instruction.textContent = "Selamat membaca pesan Jumat penuh berkah.";
    openButton.hidden = true;
    closeButton.hidden = false;
  }
});

closeButton.addEventListener("click", () => {
  scene.classList.remove("reading", "open");
  instruction.textContent = "Ada surat untukmu. Tekan tombol di bawah untuk membukanya.";
  openButton.textContent = "✉ Buka Surat";
  openButton.hidden = false;
  closeButton.hidden = true;
});
