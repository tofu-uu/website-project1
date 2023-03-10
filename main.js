document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  var isCorrect = 0;
  var questionNum = 4;
  if (q1 === "4") {
    document.getElementById("q1").className = "right";
    document.getElementById("rw").className = "correct";
    document.getElementById("rw").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q1").className = "wrong";
    document.getElementById("rw").className = "incorrect";
    document.getElementById("rw").innerHTML = "Wrong, the correct answer is 4.";
  }

  if (q2 === "no") {
    document.getElementById("q2").className = "right";
    document.getElementById("rw2").className = "correct";
    document.getElementById("rw2").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q2").className = "wrong";
    document.getElementById("rw2").className = "incorrect";
    document.getElementById("rw2").innerHTML =
      "Wrong, the correct answer is no.";
  }

  if (
    q3 === "passive" ||
    q3 === "neutral" ||
    q3 === "hostile" ||
    q3 === "boss"
  ) {
    document.getElementById("q3").className = "right";
    document.getElementById("rw3").className = "correct";
    document.getElementById("rw3").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q3").className = "wrong";
    document.getElementById("rw3").className = "incorrect";
    document.getElementById("rw3").innerHTML =
      "Wrong, the correct answer either passive, neutral, hostile, or boss.";
  }

  if (q4 === "pink") {
    document.getElementById("q4").className = "right";
    document.getElementById("rw4").className = "correct";
    document.getElementById("rw4").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q4").className = "wrong";
    document.getElementById("rw4").className = "incorrect";
    document.getElementById("rw4").innerHTML =
      "Wrong, the correct answer is pink.";
  }
  return isCorrect;
}
