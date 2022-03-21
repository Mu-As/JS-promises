// Promiseler başlangıçta pending durumundadır.
// Resolve olmuşsa fulfill, reject ise reject oluyor.
// Pending'ten resolve veya reject olduysa hepsini döndürür

const promiseAllSettled1 = new Promise((resolve) =>
  setTimeout(resolve, 10000, "PromiseAllSettled1")
);
const promiseAllSettled2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "PromiseAllSettled2")
);
const promiseAllSettled3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "PromiseAllSettled3")
);

Promise.allSettled([
  promiseAllSettled1,
  promiseAllSettled2,
  promiseAllSettled3,
]).then((response) => console.log(response));
