function calculate() {
  fetch("items.json").then(res => console.log(res))
}

calculate()