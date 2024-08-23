
import { obtenerEstadoPartida } from "./motor";
import { Estado } from "./model";

// Pruebas unitarias para comprobar si un jugador ha ganado el juego o no.

describe("obtenerEstadoPartida", () => {
  it('Debería mostrar "CLAVADO" cuando los puntos son 7.5', () => {

    const puntos =  7.5;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('CLAVADO');
   
  });

  it('Debería mostrar "PASADO" cuando los puntos son 8', () => {

    const puntos =  8;

    const resultado : Estado = obtenerEstadoPartida(puntos);

    expect(resultado).toBe('PASADO');
  });
});
