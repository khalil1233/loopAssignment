let imgs = document.getElementById("imgSlide").children;

let changeImg = (i) => {
  imgs[i % imgs.length].classList.add("hidden");
  imgs[(i + 1) % imgs.length].classList.remove("hidden");

  setTimeout(() => changeImg((i + 1) % imgs.length), 3000);
};

changeImg(0);
