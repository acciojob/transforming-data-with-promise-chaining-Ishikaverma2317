const btn = document.getElementById("btn");
const output = document.getElementById("output");
const ip = document.getElementById("ip");

btn.onclick = function () {
  let num = Number(ip.value);
  output.innerText = ""; // clear previous result

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          res = res * 2;
          output.innerText = `Result: ${res}`;
          resolve(res);
        }, 2000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          res = res - 3;
          output.innerText = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          res = res / 2;
          output.innerText = `Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          res = res + 10;
          output.innerText = `Final Result: ${res}`;
          resolve(res);
        }, 1000);
      });
    });
};
