const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    this.angle1.value === "" ||
    this.angle2.value === "" ||
    this.angle3.value === ""
  ) {
    result.innerText = "Enter all the angles ";
  } else if (
    this.angle1.value < 1 ||
    this.angle2.value < 1 ||
    this.angle3.value < 1
  ) {
    result.innerText = "All angles should be greater than zero ";
  } else {
    const a = parseInt(this.angle1.value);
    const b = parseInt(this.angle2.value);
    const c = parseInt(this.angle3.value);

    // console.log(a + b + c);

    checkTraingle(a, b, c);
  }
});

const checkTraingle = (a, b, c) => {
  if (a + b + c === 180) {
    result.innerText = "Yay, the angles form a triangle!!!";
  } else {
    result.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
};
