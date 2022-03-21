// ilk sonuçlananın resolve yada reject olması önemli değil
// birden fazla farklı yerde aynı işlemi yaptırıp, hangisi daha hızlı dönüş sağladığı durumlarda kullanılabilir.
const promiseRace1 = new Promise((resolve) => setTimeout(resolve, 500, "PromiseRace1"));
const promiseRace2 = new Promise((resolve,reject) =>
  setTimeout(reject, 3500, "PromiseRace2")
);
const promiseRace3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2500, "PromiseRace3")
);
const promiseRace4 = new Promise((resolve, reject) => setTimeout(reject, 2500, "PromiseRace4"))

Promise.race([promiseRace1, promiseRace2, promiseRace3,promiseRace4])
    .then(response => console.log(response))

// 1 ve 3 resolve, 2 ve 4 reject oluyor. 2 ve 4 gösterilmez
// 1 ve 3 arasında 1 0.5sn, 3 ise 2.5 saniyede resolve oluyor.
// Bundan dolayı PromiseRace1 yazılır..
