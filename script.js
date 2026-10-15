// Data karya
const dataKarya = [
  {
    id: 1,
    title: "Transportasi Tradisional",
    shortDesc: "Becak motor merupakan kendaraan tradisional.",
    fullDesc: "Kendaraan beroda tiga yang biasa disebut becak yang biasanya ada di Jalan Malioboro. Kendaraan tersebut menggambarkan perkembangan transportasi tradisional becak motor dalam mendukung mobilitas masyarakat.",
    img: "assets/gambar-karya/karya1.jpg"
  },
  {
    id: 2,
    title: "Pembangunan Selokan Mataram",
    shortDesc: "Selokan Mataram merupakan saluran irigasi yang dibangun pada masa pendudukan Jepang di Yogyakarta.",
    fullDesc: "Pembangunan Selokan Mataram diprakarsai oleh Sri Sultan Hamengkubuwono IX. Tujuan dari pembangunan Selokan Mataram adalah menjaga masyarakat Yogyakarta tetap bekerja di daerahnya sendiri sebagai petani, sehingga tidak dikirim untuk menjadi romusha atau pekerja paksa di luar daerah.",
    img: "assets/gambar-karya/karya2.jpg"
  },
  {
    id: 3,
    title: "Mesin Ketik Si Raja Mogok",
    shortDesc: "Mesin ketik peninggalan dari pejuangan kemerdekaan Indonesia.",
    fullDesc: "Pemilik dari mesin ketik tersebut ialah Raden Mas Surjopranoto, seorang bangsawan dari Puro Pakualaman Yogyakarta. Mesin ketik ini digunakan untuk menulis teks, selebaran, dan ujaran yang mengobarkan semangat perjuangan kaum buruh untuk melawan perusahaan-perusahaan kolonial.",
    img: "assets/gambar-karya/karya3.jpg"
  },
  {
    id: 4,
    title: "Mata Uang Zaman Dulu",
    shortDesc: "Mata uang yang terbit pada zaman penjajahan jepang.",
    fullDesc: "Mata uang ini dikeluarkan pada tahun 1943 yang diterbitkan oleh pemerintah militer Jepang semasa menduduki wilayah Indonesia. Penulisan uang kertas tersebut menggunakan aksara Latin yang bertuliskan Dai Nippon Teikoku Seihu yang terlihat jelas di bagian tengah uang.",
    img: "assets/gambar-karya/karya4.jpg"
  },
  {
    id: 5,
    title: "Pelatihan Kemiliteran Pada Masa Kedudukan Jepang",
    shortDesc: "Pelatihan militer pada masa penjajahan Jepang merupakan strategi Jepang.",
    fullDesc: "Jepang memanfaatkan pelatihan militer untuk manfaatkan pribumi demi menghadapi Sekutu dalam Perang Asia Pasifik. Jepang melatih pemuda Yogyakarta melalui berbagai organisasi resmi yaitu,PETA, Heiho, dan Gakukotai. Keterampilan militer yang diperoleh para pemuda kemudian berbalik untuk melucuti senjata tentara Jepang.",
    img: "assets/gambar-karya/karya5.jpg"
  },
  {
    id: 6,
    title: "",
    shortDesc: "",
    fullDesc: "",
    img: ""
  }
];

// Deklarasi
const karyaGrid = document.getElementById('karya-grid');
const modal = document.getElementById('modal-karya');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalMedia = document.getElementById('modal-media');

// Fungsi
function renderCards() {
  karyaGrid.innerHTML = '';

  dataKarya.forEach(item => {
    const card = document.createElement('div');
    card.className = 'karya-card';
    card.onclick = () => openModal(item);

    const imageContent = item.img 
      ? `<img src="${item.img}" alt="${item.title}">` 
      : `<span>Pratinjau [16:9]</span>`;

    card.innerHTML = `
      <div class="thumb-ratio">
        ${imageContent}
      </div>
      <div class="info-area">
        <h4 class="karya-title">${item.title}</h4>
        <p class="karya-desc-short">${item.shortDesc}</p>
      </div>
    `;
    karyaGrid.appendChild(card);
  });
}

// Buka
function openModal(item) {
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.fullDesc;
  
  modalMedia.innerHTML = item.img 
    ? `<img src="${item.img}" alt="${item.title}">` 
    : `<div class="thumb-ratio" style="height:100%;">Pratinjau [16:9]</div>`;

  modal.classList.add('active');
}

// Tutup
modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

renderCards();
