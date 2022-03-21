// hepsi resolve olursa çalışır.

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "Promise1"));
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 1500, "Promise2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2500, "Promise3")
);

Promise.all([promise1, promise2, promise3])
  .then(([promise1, promise2, promise3]) =>
    console.log(promise1, promise2, promise3)
  )
  .catch((err) => console.log(err));
// Hepsi resolve dönerse .then çalışır, aksi halde .catch çalışır
// promise1 ve promise2 resolve, promise3 reject döndüğü için error olarak promise3'teki
// değeri konsola basıyor.
