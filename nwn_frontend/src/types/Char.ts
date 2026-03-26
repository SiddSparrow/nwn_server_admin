export interface Player {
  id: number;
  account_name: string | null;
}

export interface Char {
  id: number;
  name: string;
  level: number;
  race: number;
  xp: number;
  class_1: number;
  is_on: number;
  player: Player | null;
}
