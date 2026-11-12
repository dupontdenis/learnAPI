import { render } from "./render.mjs";
import { fetchAPI } from "./api.js";

const btn = document.querySelector(".btn");

let usersPromise;

async function getUsers() {
  if (!usersPromise) {
    console.log("We are eating one 🍕");

    usersPromise = (async () => {
      const pages = await Promise.all([
        fetchAPI("/users?page=1"),
        fetchAPI("/users?page=2"),
      ]);

      return [...pages[0].data, ...pages[1].data];
    })().catch((error) => {
      usersPromise = null;
      throw error;
    });
  }

  return usersPromise;
}

const clickHandler = async () => {
  try {
    const users = await getUsers();

    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];

    document
      .querySelector(".row")
      .insertAdjacentHTML("beforeend", render(randomUser));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

btn.addEventListener("click", clickHandler);
