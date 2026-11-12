# LearnAPI

A simple JavaScript app that fetches a random user from the ReqRes API and renders that user in a Bootstrap card.

## Features

- Click a button to load a random user
- Fetches data from `https://reqres.in/api/users`
- Renders the user avatar, full name, and email
- Built with vanilla JavaScript and Bootstrap

## Project files

- `index.html` — app structure
- `script.mjs` — fetches data and handles click events
- `render.mjs` — builds the HTML card for the user
- `style.css` — app styling

## Run locally

Because this project uses ES modules, it is best served over a local web server instead of opening the file directly.

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This project is a small learning example for working with:

- fetch requests
- ES modules
- DOM manipulation
- rendering dynamic HTML from API data
