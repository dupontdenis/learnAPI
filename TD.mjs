import { render } from "./render.mjs";

const btn = document.querySelector(".btn");

let usersPromise;

async function getUsers() {
  if (!usersPromise) {
    console.log("We are eating one 🍕");

    usersPromise = (async () => {
      const responses = await Promise.all([
        fetch("https://reqres.in/api/users?page=1"),
        fetch("https://reqres.in/api/users?page=2"),
      ]);

      if (!responses.every((response) => response.ok)) {
        throw new Error("Erreur HTTP");
      }

      const pages = await Promise.all(
        responses.map((response) => response.json()),
      );

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
