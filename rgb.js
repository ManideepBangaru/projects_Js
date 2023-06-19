const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();
  rgbColor = `rgba(${r}, ${g}, ${b})`
  console.log(`rgba(${r}, ${g}, ${b})`)
  document.body.style.backgroundColor = rgbColor;
  color.textContent = rgbColor
});

getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
}