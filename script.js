// Data karya
const dataKarya = [
  {
    id: 1,
    title: "ssshbhhhhvhv",
    shortDesc: "lorem ipsum dolor sit amet",
    fullDesc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: ""
  },
  {
    id: 2,
    title: "",
    shortDesc: "",
    fullDesc: "",
    img: ""
  },
  {
    id: 3,
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