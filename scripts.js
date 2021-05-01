console.log("this works");
const rellax = new Rellax(".rellax");


//animation
var timeline = anime.timeline({ loop: true });

timeline.add({
  targets: '.ripple',
  opacity: [
    { value: 0.6, easing: "easeInSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1000 },
  ],
  scale: [
    {value: 0.94, easing: 'easeInSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1000},
  ],
  loop: true,
  delay: anime.stagger(150, {grid: [7, 7]})
}).add({
  targets: '.ripple',
  opacity: [
    { value: 0.6, easing: "easeInSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1000 },
  ],
  scale: [
    {value: 0.94, easing: 'easeInSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1000},
  ],
  loop: true,
  delay: anime.stagger(150, {grid: [7, 7], from: 'last'})
});

/* window.setTimeout(() => {
  const developerTitle = document.querySelector('.developer');
  developerTitle.style.zIndex = "2";
}, 2000) */



