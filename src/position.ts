import { Planet } from "./planet";

export class Position {

  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly planet: Planet
  ) {}

  public incrementX(): Position {
    if (this.x === this.planet.getSize()) {
      return new Position(0, this.y, this.planet);
    }
    return new Position(this.x + 1, this.y, this.planet);
  }

  public decrementX(): Position {
    if (this.x === 0) {
      return new Position(this.planet.getSize(), this.y, this.planet);
    }
    return new Position(this.x - 1, this.y, this.planet);
  }

  public incrementY(): Position {
    if (this.y === this.planet.getSize()) {
      return new Position(this.x, 0, this.planet);
    }
    return new Position(this.x, this.y + 1, this.planet);
  }

  public decrementY(): Position {
    if (this.y === 0) {
      return new Position(this.x, this.planet.getSize(), this.planet);
    }
    return new Position(this.x, this.y - 1, this.planet);
  }

  public toString(): string {
    return `${this.x}:${this.y}`;
  }
}