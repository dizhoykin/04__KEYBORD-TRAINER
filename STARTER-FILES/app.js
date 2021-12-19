const keys = document.querySelectorAll(".key");

const keyboardToggler = (evt) => {
  const jigglingKey = document.querySelector(".jiggle");
  console.log(jigglingKey.attributes[1].value);

  const jigglingKeyToggler = () => {
    jigglingKey.classList.remove("jiggle");
    const nextJigglingKey = keys[Math.floor(Math.random()*keys.length)];
    nextJigglingKey.classList.add("jiggle");
  };

  if (evt.key) {
    if (evt.key.toUpperCase() === jigglingKey.attributes[1].value) {
      jigglingKeyToggler();
    }
  } else if (evt.target) {
    if (evt.target.innerHTML === jigglingKey.attributes[1].value) {
      jigglingKeyToggler();
    }
  }
};

keys.forEach(key => {
  key.addEventListener("click", (evt) => {
    keyboardToggler(evt);
  });
});

document.addEventListener("keydown", (evt) => {
  keyboardToggler(evt);
});
