setTimeout(() => {
  myBox.classList.add("bigger");
  setTimeout(() => {
    myBox.classList.add("circle");
    setTimeout(() => {
      myBox.classList.add("move");
      setTimeout(() => {
        myBox.classList.add("beRed");
        setTimeout(() => {
          myBox.classList.remove("beRed");
          setTimeout(() => {
            myBox.classList.remove("move");
            setTimeout(() => {
              myBox.classList.remove("circle");
              setTimeout(() => {
                myBox.classList.remove("bigger");
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);

let loading = false;

new Promise((resolve, reject) => {
  // işlem bitmiş ve başarılı
  resolve({
    name: "Mu",
    surname: "As",
    age: 26,
  });

  // işlem başarısız

  reject("Başarısız");

  loading = true;
})

  // resolve -> then
  .then((data) => {
    console.log(data);
    return data;
    // return bir sonraki yakalamak isteyen için veriyi paylaşır.
  })
  .then((data) => {
    console.log(data);
  })

  // reject -> catch
  .catch((data) => {
    console.log(data);
  })
  .finally(() => {
    loading = false;
    // console.log("İşlem başarılı veya başarısız sonuçlandı.");
  });
