import { Estado, partida } from "./modelo";

export const obtenerNumeroRandom = (): number => {
  return Math.ceil(Math.random() * 10);
};

export const obtenerNumerodeCarta = (numeroRandom: number): number => {
  return numeroRandom > 7 ? numeroRandom + 2 : numeroRandom;
};

export const formatearURLDeCarta = (carta: number): string => {
  let cartaString: string = "";
  switch (carta) {
    case 1:
      cartaString = "1_as";
      break;
    case 2:
      cartaString = "2_dos";
      break;
    case 3:
      cartaString = "3_tres";
      break;
    case 4:
      cartaString = "4_cuatro";
      break;
    case 5:
      cartaString = "5_cinco";
      break;
    case 6:
      cartaString = "6_seis";
      break;
    case 7:
      cartaString = "7_siete";
      break;
    case 10:
      cartaString = "10_sota";
      break;
    case 11:
      cartaString = "11_caballo";
      break;
    case 12:
      cartaString = "12_rey";
      break;
    default:
      cartaString = "Error xD";
  }

  const URLdeCarta = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/${cartaString}-copas.jpg`;

  return URLdeCarta;
};

export const calcularPuntuacion = (carta: number): number => {
  const puntuacion = carta > 7 ? 0.5 : carta;
  return puntuacion;
};

export const sumarPuntuacionJugador = (puntuacion: number): number => {
  return partida.puntuacionJugador + puntuacion;
};

export const asignarPuntuacionJugador = (puntuacionSumada: number): void => {
  partida.puntuacionJugador = puntuacionSumada;
};

export const mensajeHasGanado = (): string => {
  return "¡Lo has clavado! ¡Enhorabuena!";
};

export const obtenerMensajeDeMePlanto = (puntuacionJugador: number): string => {
  let mensaje: string = "";
  if (puntuacionJugador <= 4) {
    mensaje = "Has sido muy conservador....";
  }
  if (puntuacionJugador >= 4.5) {
    mensaje = "Te ha entrado el canguelo eh?";
  }
  if (puntuacionJugador >= 6 || puntuacionJugador === 7) {
    mensaje = "Casi, casi ...";
  }

  return mensaje;
};

export const reiniciarPuntosJugador = () : void=> {
  partida.puntuacionJugador = 0;
}

export const obtenerPuntuacionJugador = () : number => {
  return partida.puntuacionJugador;
}

export const comprobarPartida = () : Estado => {
  if(obtenerPuntuacionJugador() === 7.5) {
    return 'HA_GANADO'
  }
  if(obtenerPuntuacionJugador() > 7.5) {
    return 'HA_PERDIDO'
  }
  return undefined
}