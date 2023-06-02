import { Planet } from './planet';

export class Position {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly planet: Planet
  ) {}

  public incrementX(): Position {
    let newPosition = new Position(this.x + 1, this.y, this.planet);
    if (this.x === this.planet.getSize()) {
      newPosition = new Position(0, this.y, this.planet);
    }
    return this.planet.checkObstacle(newPosition)
      ? new Position(this.x, this.y, this.planet)
      : newPosition;
  }

  public decrementX(): Position {
    let newPosition = new Position(this.x - 1, this.y, this.planet);
    if (this.x === 0) {
      newPosition = new Position(this.planet.getSize(), this.y, this.planet);
    }
    return this.planet.checkObstacle(newPosition)
      ? new Position(this.x, this.y, this.planet)
      : newPosition;
  }

  public incrementY(): Position {
    let newPosition = new Position(this.x, this.y + 1, this.planet);
    if (this.y === this.planet.getSize()) {
      newPosition = new Position(this.x, 0, this.planet);
    }
    return this.planet.checkObstacle(newPosition)
      ? new Position(this.x, this.y, this.planet)
      : newPosition;
  }

  public decrementY(): Position {
    let newPosition = new Position(this.x, this.y - 1, this.planet);
    if (this.y === 0) {
      newPosition = new Position(this.x, this.planet.getSize(), this.planet);
    }
    return this.planet.checkObstacle(newPosition)
      ? new Position(this.x, this.y, this.planet)
      : newPosition;
  }

  public toString(): string {
    return `${this.x}:${this.y}`;
  }
}
