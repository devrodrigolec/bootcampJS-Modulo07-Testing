import { Estado } from "./modelo";
import {
  asignarPuntuacionJugador,
  calcularPuntuacion,
  comprobarPartida,
  formatearURLDeCarta,
  mensajeHasGanado,
  obtenerMensajeDeMePlanto,
  obtenerNumerodeCarta,
  obtenerNumeroRandom,
  obtenerPuntuacionJugador,
  reiniciarPuntosJugador,
  sumarPuntuacionJugador,
} from "./motor";

export const puntuacionDiv = document.getElementById("puntuacion-jugador");
export const pedirCartaBoton = document.getElementById("pedir-carta");
export const cartasJugadorDiv = document.getElementById("cartas-jugador");
export const gameOverDiv = document.getElementById("game-over");
export const reiniciarBotonGameOver = document.getElementById(
  "reiniciar-game-over"
);
export const reiniciarBoton = document.getElementById("reiniciar");
export const mePlantoBoton = document.getElementById("me-planto");
export const mensajeJuevoDiv = document.getElementById("mensaje-juego");
export const siHubieraSeguidoDiv = document.getElementById(
  "si-hubieras-seguido"
);
export const siHubierasSeguidoBoton = document.getElementById(
  "si-hubieras-seguido-boton"
);

export const mostrarPuntuacion = (puntuacionJugador: number): void => {
  if (puntuacionDiv && puntuacionDiv instanceof HTMLDivElement) {
    puntuacionDiv.innerHTML = `Puntuación Jugador: ${puntuacionJugador} puntos`;
  }
};

export const crearCartaEnHTML = (URLDeCarta: string, htmlDiv: HTMLElement) => {
  if (cartasJugadorDiv && cartasJugadorDiv instanceof HTMLDivElement) {
    const cartaImg = document.createElement("img");
    cartaImg.src = URLDeCarta;
    cartaImg.alt = "carta del juego";
    cartaImg.classList.add("carta-jugador");
    cartaImg.classList.add("carta");
    cartaImg.classList.add("slide-in-blurred-left");
    if (htmlDiv && htmlDiv instanceof HTMLDivElement) {
      htmlDiv.append(cartaImg);
    }
  }
};

export const mostrarCarta = (carta: number, htmlDiv: HTMLElement): void => {
  const cartaURL = formatearURLDeCarta(carta);
  if (htmlDiv && htmlDiv instanceof HTMLElement) {
    crearCartaEnHTML(cartaURL, htmlDiv);
  }
};

export const MostrarGameOver = (): void => {
  if (gameOverDiv && gameOverDiv instanceof HTMLDivElement) {
    gameOverDiv.classList.remove("hidden");
  }
};

export const ocultarGameOver = (): void => {
  if (gameOverDiv && gameOverDiv instanceof HTMLDivElement) {
    gameOverDiv.classList.add("hidden");
  }
};

export const desactivarBoton = (boton: HTMLButtonElement): void => {
  boton.disabled = true;
};

export const activarBoton = (boton: HTMLButtonElement): void => {
  boton.disabled = false;
};

export const vaciarMesaDeCartas = (): void => {
  if (cartasJugadorDiv && siHubieraSeguidoDiv) {
    cartasJugadorDiv.innerHTML = "";
    siHubieraSeguidoDiv.innerHTML = "";
  }
};

export const gestionarBotonesReiniciarJuego = (): void => {
  if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
    activarBoton(pedirCartaBoton);
  }
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    activarBoton(mePlantoBoton);
  }
  if (
    siHubierasSeguidoBoton &&
    siHubierasSeguidoBoton instanceof HTMLButtonElement
  ) {
    desactivarBoton(siHubierasSeguidoBoton);
  }
};

export const gestionarBotonesMePlanto = (): void => {
  if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
    desactivarBoton(pedirCartaBoton);
  }
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    desactivarBoton(mePlantoBoton);
  }
  if (
    siHubierasSeguidoBoton &&
    siHubierasSeguidoBoton instanceof HTMLButtonElement
  ) {
    activarBoton(siHubierasSeguidoBoton);
  }
};

export const reiniciarJuego = (): void => {
  reiniciarPuntosJugador();
  mostrarPuntuacion(obtenerPuntuacionJugador());
  vaciarMesaDeCartas();
  gestionarBotonesReiniciarJuego();
  if (mensajeJuevoDiv && mensajeJuevoDiv instanceof HTMLDivElement) {
    mostrarMensajeAJugador("");
  }
};



export const gestionarPartida = (estado : Estado): void => {
  if (estado === 'HA_GANADO') {
    const mensajeAJugador: string = mensajeHasGanado();
    mostrarMensajeAJugador(mensajeAJugador);
    if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
      desactivarBoton(pedirCartaBoton);
    }
    if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
      desactivarBoton(mePlantoBoton);
    }
  }
  if (estado === 'HA_PERDIDO') {
    MostrarGameOver();
  }

  if(estado === undefined) return;
};

const mostrarMensajeAJugador = (mensaje: string): void => {
  if (mensajeJuevoDiv && mensajeJuevoDiv instanceof HTMLDivElement) {
    mensajeJuevoDiv.innerHTML = mensaje;
  }
};

export const pedirCarta = (): void => {
  const numeroRandom: number = obtenerNumeroRandom();
  const carta: number = obtenerNumerodeCarta(numeroRandom);
  const puntuacion = calcularPuntuacion(carta);
  const puntuacionSumada = sumarPuntuacionJugador(puntuacion);
  asignarPuntuacionJugador(puntuacionSumada);
  mostrarPuntuacion(obtenerPuntuacionJugador());
  if (cartasJugadorDiv && cartasJugadorDiv instanceof HTMLDivElement) {
    mostrarCarta(carta, cartasJugadorDiv);
  }
  const estadoPartida = comprobarPartida()
  gestionarPartida(estadoPartida);
};

export const mePlanto = (): void => {
  gestionarBotonesMePlanto();
  const mensajeAJugador = obtenerMensajeDeMePlanto(obtenerPuntuacionJugador());
  mostrarMensajeAJugador(mensajeAJugador);
};

export const siHubierasSeguido = (): void => {
  const numeroRandom: number = obtenerNumeroRandom();
  const carta: number = obtenerNumerodeCarta(numeroRandom);
  if (siHubieraSeguidoDiv && siHubieraSeguidoDiv instanceof HTMLDivElement) {
    mostrarCarta(carta, siHubieraSeguidoDiv);
  }
  if (
    siHubierasSeguidoBoton &&
    siHubierasSeguidoBoton instanceof HTMLButtonElement
  ) {
    desactivarBoton(siHubierasSeguidoBoton);
  }
};

export const handlePedirCarta = (): void => {
  if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
    pedirCartaBoton.addEventListener("click", pedirCarta);
  }
};

export const handleMePlanto = (): void => {
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.addEventListener("click", mePlanto);
  }
};

export const handleReiniciarJuego = (): void => {
  if (
    reiniciarBotonGameOver &&
    reiniciarBotonGameOver instanceof HTMLButtonElement
  ) {
    reiniciarBotonGameOver.addEventListener("click", () => {
      ocultarGameOver();
      reiniciarJuego();
    });
  }
  if (reiniciarBoton && reiniciarBoton instanceof HTMLButtonElement) {
    reiniciarBoton.addEventListener("click", reiniciarJuego);
  }
};

export const handleSiHubierasSeguido = () => {
  if (
    siHubierasSeguidoBoton &&
    siHubierasSeguidoBoton instanceof HTMLButtonElement
  ) {
    siHubierasSeguidoBoton.addEventListener("click", siHubierasSeguido);
  }
};

export const iniciarPartida = (): void => {
  handlePedirCarta();
  handleMePlanto();
  handleReiniciarJuego();
  handleSiHubierasSeguido();
};
