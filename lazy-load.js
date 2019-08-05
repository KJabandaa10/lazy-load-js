// select imgs
const targets = document.querySelectorAll("img");

// main function - fade in on each image
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("working");

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");

        img.setAttribute("src", src);
        img.classList.add("fade");

        // disconnect after image has loaded
        observer.disconnect;
      }
    });
  });

  // link io observer to img
  io.observe(target);
};

// loop through code above for each img
targets.forEach(lazyLoad);

// const targets = document.querySelectorAll("img");

// window.addEventListener("scroll", event => {
//   targets.forEach(img => {
//     console.log("hey");
//     const rect = img.getBoundingClientRect().top;
//     if (rect <= window.innerHeight) {
//       const src = img.getAttribute("data-lazy");
//       img.setAttribute("src", src);
//       img.classList.add("fade");
//     }
//   });
// });
