import { Position } from './position';

export class Obstacle {

  constructor(
    private readonly position: Position
  ) {}

  getPosition(): Position {
    return this.position;
  }

  toString(): string {
    return `Obstacle à la position: ${this.position.toString()}`;
  }
}
