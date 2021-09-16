const form = document.querySelector("#form");
const result = document.querySelector("#score");
const reset = document.querySelector("#reset");
var radioButton = document.querySelectorAll("input:checked");
// console.log(radioButton);
const correctAns = {
  1: "90",
  2: "right",
  3: "one right angle",
  4: "12, 16, 20",
  5: "Equilateral Triangle",
  6: "100",
  7: "30",
  8: "a+b+c",
  9: "no",
  10: "45",
};

const formElements = [
  form.q1,
  form.q2,
  form.q3,
  form.q4,
  form.q5,
  form.q6,
  form.q7,
  form.q8,
  form.q9,
  form.q10,
];

// console.log(correctAns);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userAns = {
    1: this.q1.value,
    2: this.q2.value,
    3: this.q3.value,
    4: this.q4.value,
    5: this.q5.value,
    6: this.q6.value,
    7: this.q7.value,
    8: this.q8.value,
    9: this.q9.value,
    10: this.q10.value,
  };

  radioButton = document.querySelectorAll("input:checked");
  //   console.log(radioButton);

  //   console.log(userAns);

  for (let i = 0; i < formElements.length; i++) {
    for (let j = 0; j < 3; j++) {
      formElements[i][j].setAttribute("disabled", true);
    }
  }

  ansCheck(correctAns, userAns);
});

const ansCheck = (correctAns, userAns) => {
  let score = 0;
  for (let i = 1; i <= Object.keys(correctAns).length; i++) {
    if (correctAns[i] === userAns[i]) {
      score += 1;
    } else {
      score += 0;
    }
  }

  result.innerText = `Your score is ${score}/${Object.keys(correctAns).length}`;
};

reset.addEventListener("click", function () {
  resetAll();
  //   radioButton.checked = false;
  //   console.dir(radioButton);
});

const resetAll = () => {
  for (let i = 0; i < formElements.length; i++) {
    for (let j = 0; j < 3; j++) {
      formElements[i][j].removeAttribute("disabled");
      // formElements[i][j].checked = "false"
      result.innerText = "";
    }
  }

  //   console.log(radioButton);
  for (radio of radioButton) {
    // console.log(radio);
    radio.checked = false;
  }
};
