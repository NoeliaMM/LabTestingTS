
import { vi } from "vitest";
import { obtenerEstadoPartida , calcularNumeroCarta,obtenerPuntosCarta} from "./motor";
import { Estado,partida } from "./model";

// Pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

describe("obtenerEstadoPartida", () => {
  it('Debería mostrar "CLAVADO" cuando los puntos son 7.5', () => {

    const puntos =  7.5;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('CLAVADO');
   
  });

  it('Debería mostrar "CONSERVADOR" cuando los puntos son 4 o menos', () => {

    const puntos =  3;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('CONSERVADOR');
  });

  it('Debería mostrar "CANGUELO" cuando los puntos están entre 4 y 5', () => {

    const puntos =  5;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('CANGUELO');
  });

  it('Debería mostrar "CASI" cuando los puntos están entre 5 y 7.5', () => {

    const puntos =  7;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('CASI');
  });

  it('Debería mostrar "PASADO" cuando los puntos son 8', () => {

    const puntos =  8;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('PASADO');
  });

  it('Debería mostrar "ERROR" cuando los puntos son menos que 0.5', () => {

    const puntos: number = -1;
    // vi.spyOn(partida, "puntos", "get").mockReturnValue(1); 

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('ERROR');
  });

});

// Test para comprobar que calcularNumeroCarta devuelve las cartas de la baraja excepto 8 y 9


describe('calcularNumeroCarta', () => {

  it('Debe devolver una carta con valor 1 al 7 y 10,11,12', () => {
    const resultado = calcularNumeroCarta();
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThan(8);
    expect(resultado).toBeLessThan(9);
    expect(resultado).toBeLessThanOrEqual(12); 
  });

});

// Test para comprobar que la función obtenerPuntosCarta devuelve el valor de la carta
describe('obtenerPuntosCarta', () => {

  it('Si el numero obtenido es entre 1 y 7 el resultado debe ser el valor corresponidiente', () => {
  
   vi.spyOn(partida, 'carta','get').mockReturnValue(3);   

   const resultado = obtenerPuntosCarta(partida.carta);
    expect(resultado).toBe(3); 

  });

  it('Si el numero obtenido es mayor que 7 el resultado debe ser 0.5', () => {
  
    vi.spyOn(partida, 'carta','get').mockReturnValue(8);   
 
    const resultado = obtenerPuntosCarta(partida.carta);
     expect(resultado).toBe(0.5); 
 
   });

});