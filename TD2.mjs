import { render } from "./render.mjs";
import { fetchAPI } from "./api.js";

const btn = document.querySelector(".btn");

const clickHandler = async () => {
  try {
    const randomId = Math.floor(Math.random() * 12) + 1;

    const data = await fetchAPI(`/users/${randomId}`);

    document
      .querySelector(".row")
      .insertAdjacentHTML("beforeend", render(data.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

btn.addEventListener("click", clickHandler);
