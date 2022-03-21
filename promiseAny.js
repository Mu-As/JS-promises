// İlk resolve olanı döner.
const promiseAny1 = new Promise((resolve) =>
  setTimeout(resolve, 500, "PromiseAny1")
);
const promiseAny2 = new Promise((resolve, reject) =>
  setTimeout(reject, 3500, "PromiseAny2")
);
const promiseAny3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2500, "PromiseAny3")
);
const promiseAny4 = new Promise((resolve, reject) =>
  setTimeout(reject, 2500, "PromiseAny4")
);

// 1 -> 0.5sn
// 2 -> 3.5sn
// 3 -> 2.5sn
// 4 -> 2.5sn
// 1 döner.
Promise.any([promiseAny1, promiseAny2, promiseAny3, promiseAny4]).then(
  (response) => console.log(response)
);
