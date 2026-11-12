import { render } from "./render.mjs";

const btn = document.querySelector(".btn");

const clickHandler = async () => {
  try {
    const randomId = Math.floor(Math.random() * 12) + 1;

    const response = await fetch(`https://reqres.in/api/users/${randomId}`);

    if (!response.ok) {
      throw new Error("Erreur HTTP");
    }

    const data = await response.json();

    document
      .querySelector(".row")
      .insertAdjacentHTML("beforeend", render(data.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

btn.addEventListener("click", clickHandler);
