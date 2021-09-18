const form = document.querySelector("#form");
const ans = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ans.innerText = "";
  const base = this.base.value;
  const height = this.height.value;

  if (base === "" || height === "") {
    ans.innerText = "Enter the values";
  } else if (base < 0 || height < 0) {
    ans.innerText = "Height and Base cannot be negative";
  } else {
    // console.log(base, height);
    const result = hypotenuse(base, height);
    // console.log(result);
    ans.innerText = `The lenght of hypotenuse is ${result}`;
  }
});

const hypotenuse = (base, height) => {
  return Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
};
