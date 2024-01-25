interface Partida {
  puntuacionJugador : number
}

export const partida : Partida = {
  puntuacionJugador : 0
}

export type Estado = 'HA_GANADO' | 'HA_PERDIDO' | undefined;