const nodes = document.querySelectorAll('.node');
const modal = document.querySelector('.modal');
const origImg = document.querySelector('.full-img');
const map = document.querySelector('#map');
const svgNS = map.namespaceURI;
const padding = 20;

let nodesClicked = [];

nodes.forEach(node => {
  let xPos = Math.random() * (window.innerWidth - padding);
  let yPos = Math.random() * (window.innerHeight - padding);

  node.style.top = `${yPos}px`;
  node.style.left = `${xPos}px`;

  node.addEventListener('click', event => {
    modal.classList.add("modal-open");
    origImg.classList.add("img-open");

    nodesClicked = nodesClicked.concat({xPos, yPos});
    
    const id = event.target.id;
    origImg.src = `assets/pic${id}.jpg`;
  });
});

// exit full-screen view of photo
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
      modal.classList.remove("modal-open");
      origImg.classList.remove("img-open");
  }
  if (nodesClicked.length >= 2) {
    const line = document.createElementNS(svgNS,'line');
    line.setAttribute('x1', nodesClicked[nodesClicked.length - 2].xPos + 5);
    line.setAttribute('y1', nodesClicked[nodesClicked.length - 2].yPos + 5);
    line.setAttribute('x2', nodesClicked[nodesClicked.length - 1].xPos + 5);
    line.setAttribute('y2', nodesClicked[nodesClicked.length - 1].yPos + 5);
    line.setAttribute('stroke', 'black');
    // line.setAttribute('width', 2);

    map.append(line);
  }
});