interface Partida {
  carta:number,
  puntos:number,
  cartasGastadas: Array<number>
}
export const partida:Partida = {
  carta: 0,
  puntos:0,
  cartasGastadas:[]
}

export const min: number = 1;
export const max: number = 10;


export type Estado =
  | "CONSERVADOR"
  | "CANGUELO"
  | "CASI"
  | "CLAVADO"
  | "PASADO"
  | "GAME_OVER"
  | "ERROR";

