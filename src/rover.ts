import { Orientation } from './orientation';
import { Position } from "./position";

export class Rover {

  constructor(
    private orientation: Orientation,
    private position: Position,
  ) {}

  turnLeft(): void {
    this.orientation = this.orientation.turnLeft();
  }

  turnRight(): void {
    this.orientation = this.orientation.turnRight();
  }

  moveForward(): void {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.position = this.position.incrementY();
        break;
      case Orientation.EAST:
        this.position = this.position.incrementX()
        break;
      case Orientation.SOUTH:
        this.position = this.position.decrementY();
        break;
      default:
        this.position = this.position.decrementX();
        break
    }
  }
  moveBackward(): void {
    switch (this.orientation) {
      case Orientation.NORTH:
        this.position = this.position.decrementY();
        break;
      case Orientation.EAST:
        this.position = this.position.decrementX()
        break;
      case Orientation.SOUTH:
        this.position = this.position.incrementY();
        break;
      default:
        this.position = this.position.incrementX();
        break
    }
  }

  toString(): string {
    return `${this.position.toString()} - ${this.orientation.toString()}`;
  }
}
