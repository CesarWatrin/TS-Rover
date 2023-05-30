import { Planet } from "./planet";

export class Position {
  private x: number;
  private y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  setX(x: number): void {
    this.x = x;
  }

  getX(): number {
    return this.x;
  }

  setY(y: number): void {
    this.y = y;
  }

  getY(): number {
    return this.y;
  }

  checkPosition(size: number, planet: Planet): void {
      switch (this.y) {
          case planet.getSize() + 1: {
              this.y = -planet.getSize();
              break;
          }
          case -planet.getSize() - 1: {
              this.y = planet.getSize();
              break;
          }
          default: {
              break;
          }
      }
      switch (this.x) {
          case planet.getSize() + 1: {
              this.x = -planet.getSize();
              break;
          }
          case -planet.getSize() - 1: {
              this.x = planet.getSize();
              break;
          }
          default: {
              break;
          }
      }
      console.log(this.x, this.y)
  }
}