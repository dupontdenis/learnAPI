import { render } from "./render.mjs";

console.log("We'll start after we've eaten one 🍕");

const btn = document.querySelector(".btn");

const clickHandler = async () => {
  try {
    console.log("We are eating one 🍕");

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

    const users = [...pages[0].data, ...pages[1].data];

    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];

    btn.insertAdjacentHTML("beforeend", `<span> id=${randomUser.id}, </span>`);

    document
      .querySelector(".row")
      .insertAdjacentHTML("beforeend", render(randomUser));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

btn.addEventListener("click", clickHandler);
