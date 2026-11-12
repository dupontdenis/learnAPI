import {render} from "./render.mjs"

console.log("We'll start after we've eaten one 🍕");

const btn = document.querySelector(".btn");

const clickHandler = async () => {
  try {
    console.log("We are eating one 🍕");
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    const randomUser = data.data[Math.floor(Math.random() * data.data.length)];

    document.querySelector("#app").innerHTML = render(randomUser);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

btn.addEventListener("click", clickHandler);
