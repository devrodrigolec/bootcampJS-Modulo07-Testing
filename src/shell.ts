import { partida } from "./modelo";

import { mostrarPuntuacion, iniciarPartida } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntuacion(partida.puntuacionJugador);
  iniciarPartida();
});
