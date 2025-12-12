// SLIDER
let index = 0;

function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;

  index += step;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

// WhatsApp
function sendWhatsApp(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const wa = document.getElementById('wa').value;
  const pesan = document.getElementById('pesan').value;

  const tujuan = "6289642224222"; // Nomor tujuan (bisa diganti)

  const text = `Halo, saya ${nama}%0ANo HP: ${wa}%0APesan: ${pesan}`;
  const url = `https://wa.me/${tujuan}?text=${text}`;

  window.open(url, '_blank');
}
