
const letters = document.querySelectorAll('div');

const animation = (ele) => {
  const choice = Math.floor(Math.random() * 4);
  let animation;

  if (choice == 0) animation = 'down 2s linear infinite alternate';
  if (choice == 1) animation = 'up 2s linear infinite alternate';
  if (choice == 2) animation = 'left 2s linear infinite alternate';
  if (choice == 3) animation = 'right 2s linear infinite alternate';

  ele.style.animation = animation;

  const delay = Math.random() * 5;
  ele.style.animationDelay = `${delay}s`;
}

letters.forEach(letter => {
  setTimeout(animation(letter), 3000);
});
