const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

// function wait(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// }

wait(500)
  .then(() => {
    console.log("Animasyon başladı.");
  })
  .then(() => {
    myBox.classList.add("bigger");
    return wait(500);
  })
  .then(() => {
    myBox.classList.add("circle");
    return wait(500);
  })
  .then(() => {
    myBox.classList.add("move");
    return wait(500);
  })
  .then(() => {
    myBox.classList.add("beRed");
    return wait(500);
  })
  .then(() => {
    myBox.classList.remove("beRed");
    return wait(500);
  })
  .then(() => {
    myBox.classList.remove("move");
    return wait(500);
  })
  .then(() => {
    myBox.classList.remove("circle");
    return wait(500);
  })
  .then(() => {
    myBox.classList.remove("bigger");
    return wait(500);
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
    console.log("Animasyon bitti.");
  });
