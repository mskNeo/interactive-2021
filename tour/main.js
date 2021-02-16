const nodes = document.querySelectorAll('.node');
const modal = document.querySelector('.modal');
const originalImg = document.querySelector('.full-img');
const padding = 20;

nodes.forEach(node => {
  let xPos = Math.random() * (window.innerWidth - padding);
  let yPos = Math.random() * (window.innerHeight - padding);

  node.style.top = `${yPos}px`;
  node.style.left = `${xPos}px`;

  node.addEventListener('click', event => {
    modal.classList.add("modal-open");
    originalImg.classList.add("img-open");
    
    const id = event.target.id;
    originalImg.src = `assets/pic${id}.jpg`;
  });
});

// exit full-screen view of photo
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
      modal.classList.remove("modal-open");
      originalImg.classList.remove("img-open");
  }
});