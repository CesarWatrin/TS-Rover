import { Planet } from "./planet";

export class Position {

  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly planet: Planet
  ) {}

  incrementX(): Position {
    if (this.x === this.planet.getSize()) {
      return new Position(0, this.y, this.planet);
    }
    return new Position(this.x + 1, this.y, this.planet);
  }

  decrementX(): Position {
    if (this.x < 0) {
      return new Position(this.planet.getSize(), this.y, this.planet);
    }
    return new Position(this.x - 1, this.y, this.planet);
  }

  incrementY(): Position {
    if (this.y === this.planet.getSize()) {
      return new Position(this.x, 0, this.planet);
    }
    return new Position(this.x, this.y + 1, this.planet);
  }

  decrementY(): Position {
    if (this.y < 0) {
      return new Position(this.x, this.planet.getSize(), this.planet);
    }
    return new Position(this.x, this.y - 1, this.planet);
  }

  toString(): string {
    return `${this.x}:${this.y}`;
  }
}