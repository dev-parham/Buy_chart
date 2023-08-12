let buyChart = 0;

document.getElementById("buyChart").innerHTML = buyChart;

let navBtns = Array.prototype.slice.call(
  document.getElementsByClassName("otherPages")
);
navBtns.map((nav) => {
  nav.addEventListener("click", underConstruction);
});

let cardList = Array.prototype.slice.call(
  document.getElementsByClassName("card")
);
cardList.map((card) => {
  card.children[1].addEventListener("click", plus);
});

let removeBtnList = Array.prototype.slice.call(
  document.getElementsByClassName("toDelete")
);
removeBtnList.map((removeBtn) => {
  removeBtn.addEventListener("click", toDelete);
});

function cart() {
  if (buyChart === 0) {
    document.getElementById("buyChart").innerText = "خالی :";
  }
}

function toDelete(e) {
  let zeroCheck = e.target.parentElement.getElementsByClassName("counter");
  let parsedInt = parseInt(zeroCheck[0].innerHTML);
  let price =
    e.target.parentElement.getElementsByClassName("uniquePrice")[0].innerHTML;
  console.log(zeroCheck[0]);
  if (parsedInt > 0) {
    parsedInt--;
    zeroCheck[0].innerHTML = parsedInt;
    buyChart = buyChart - price;
    document.getElementById("buyChart").innerHTML = buyChart;
    cart();
  }

  // if (zeroCheck[0].innerHTML != "0") {
  //   do {
  //     zeroCheck[0].innerHTML--;
  //     buyChart = buyChart - price;
  //   } while (zeroCheck[0].innerHTML === "0");
  // } else {
  //   console.log("everything is working!");
  // }
}

function plus(e) {
  if (e.target == this) {
    let price = e.target.getElementsByClassName("uniquePrice")[0].innerHTML;
    price = parseInt(price);
    buyChart = price + buyChart;
    document.getElementById(
      "buyChart"
    ).innerText = `${buyChart}\u00A0\u00A0\u00A0`;
    document.getElementById("buyChart").classList.add("priceBolder");
    document.getElementById("clickToAdd").classList.add("hidden");
    e.target.getElementsByClassName("toDelete")[0].classList.remove("hidden");
    e.target.getElementsByClassName("cardCount")[0].innerText++;

    // روش دوم انتخاب
    // console.log(e.target.children[0].children[1].children[0].id);
  }
}

function emptyChart(e) {
  buyChart = 0;
  document.getElementById("buyChart").innerHTML = buyChart;
  cart();
}

function underConstruction(e) {
  document.getElementById("mainPartOfThePage").classList.add("hidden");
  emptyChart(e);
  document.getElementById("underConstruction").classList.remove("hidden");
}
