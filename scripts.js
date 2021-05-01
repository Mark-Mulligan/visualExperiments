console.log("this works");
const rellax = new Rellax(".rellax");

/* anime({
  targets: '.ripple',
  rotate: (360),
  duration: 2000,
  easing: 'easeInOutExpo',
  delay: anime.stagger(100) // increase delay by 100ms for each elements.
});  */

/* anime({
  targets: '.ripple',
  scale: [
    {value: 0.1, easing: 'easeInSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1000},
  ],
  delay: anime.stagger(200, {grid: [8, 8]})
}); */

var timeline = anime.timeline({ loop: true });

// Add children
timeline
  .add(
    {
      targets: ".ripple-col0",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "+=100"
  )
  .add(
    {
      targets: ".ripple-col1",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col2",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col3",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col4",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col5",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col6",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col7",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col8",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col8",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "+=1000"
  )
  .add(
    {
      targets: ".ripple-col7",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col6",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col5",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col4",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col3",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col2",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col1",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  )
  .add(
    {
      targets: ".ripple-col0",
      opacity: [
        { value: 0.6, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
      scale: [
        { value: 0.95, easing: "easeInSine", duration: 400 },
        { value: 1, easing: "easeInOutQuad", duration: 900 },
      ],
    },
    "-=1000"
  );
