const API_URL = "https://reqres.in/api";
const API_KEY = "reqres_b6f668fa90664930a7647383a8c1db8c";

export async function fetchAPI(path) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Erreur HTTP ${response.status} : ${message}`);
  }

  return response.json();
}
