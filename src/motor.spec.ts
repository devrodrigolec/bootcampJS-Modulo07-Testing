import { vi } from "vitest";
import { calcularPuntuacion, comprobarPartida, obtenerNumeroDeCarta, obtenerNumeroRandom, obtenerPuntuacionJugador } from "./motor";
import { Estado, partida } from "./modelo";

describe("obtenerPuntuacionJugador", () => {
  it("Devuelve la puntuación actualizada del jugador", () => {
    //Arrange
    vi.spyOn(partida, "puntuacionJugador", "get").mockReturnValue(5);
    const puntuacionEsperada : number = 5;
    //Act
    const resultado = obtenerPuntuacionJugador();
    //Assert
    expect(resultado).toBe(puntuacionEsperada);
  });
});

describe('comprobarPartida', () => {
  it('Deberia devolver HA_GANADO si la puntuacionJugador es igual a 7.5', () => {
    //Arrange
    vi.spyOn(partida, 'puntuacionJugador', 'get').mockReturnValue(7.5);
    const estadoEsperado : Estado = 'HA_GANADO';
    //Act
    const resultado = comprobarPartida();
    //Assert
    expect(resultado).toBe(estadoEsperado);
  })

  it('Deberia devolver HA_PERDIDO si la puntuacionJugador es mayor a 7.5', () => {
    //Arrange
    vi.spyOn(partida, 'puntuacionJugador', 'get').mockReturnValue(8);
    const estadoEsperado : Estado = 'HA_PERDIDO';
    //Act
    const resultado = comprobarPartida();
    //Assert
    expect(resultado).toBe(estadoEsperado);
  })

  it('Debería devolver SIGUE_JUGANDO si la puntuacion del jugador es menor a 7.5', () => {
    //Arrange
    vi.spyOn(partida, 'puntuacionJugador', 'get').mockReturnValue(7);
    const estadoEsperado : Estado = 'SIGUE_JUGANDO';
    //Act
    const resultado = comprobarPartida()
    //Assert
    expect(resultado).toBe(estadoEsperado);
  })
})

describe('obtenerNumeroRandom', () => {
  it('Debe devolver el número 0', () => {
    //Arrange
    const numeroEsperado : number = 0;
    vi.spyOn(global.Math, 'random').mockReturnValue(0);
    //Act
    const resultado = obtenerNumeroRandom();
    //Assert
    expect(resultado).toBe(numeroEsperado);
    })

    it('Debe devolver el número 10', () => {
      //Arrange
      const numeroEsperado : number = 10;
      vi.spyOn(global.Math, 'random').mockReturnValue(0.99999)
      //Act
      const resultado = obtenerNumeroRandom();
      //Assert
      expect(resultado).toBe(numeroEsperado);
    })
})

describe('obtenerNumeroDeCarta', () => {
  it('Deberia devolver el numero + 2 si el numero es mayor que 7', () => {
    //Arrange
    const numeroRandom : number = 8;
    const numeroEsperado : number = 10;
    //Act
    const resultado = obtenerNumeroDeCarta(numeroRandom);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  })

  it('Debería devolver el mismo numero si el número es menor o igual a 7', () => {
    //Arrange
    const numeroRandom : number = 5;
    const numeroEsperado : number = 5;
    //Act
    const resultado = obtenerNumeroDeCarta(numeroRandom);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  })
})

describe('calcularPuntuacion', () => {
  it('Si la carta es mayor que 7, debe retornar 0.5', () => {
    //Arrange
    const carta : number = 10;
    const puntuacionEsperada = 0.5;
    //Act
    const resultado = calcularPuntuacion(carta);
    //Assert
    expect(resultado).toBe(puntuacionEsperada);
  })

  it('Si la carta es menor o igual a 7, debe retornar el mismo valor de la carta', () => {
    //Arrange
    const carta : number = 6;
    const puntuacionEsperada : number = 6;
    //Act
    const resultado = calcularPuntuacion(carta);
    //Assert
    expect(resultado).toBe(puntuacionEsperada);
  })
})
