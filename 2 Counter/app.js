let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// event function

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // value color change

    if (count > 0) {
      value.style.color = "green";
    }
    if (count > 10) {
      value.style.color = "darkgreen";
    }
    if (count < 0) {
      value.style.color = "orangered";
    }
    if (count < -10) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "rgba(7, 56, 71)";
    }
    value.textContent = count;
  });
});
