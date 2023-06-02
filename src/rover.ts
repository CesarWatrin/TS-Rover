import { Orientation } from './orientation';
import { Position } from './position';

export class Rover {
  constructor(private orientation: Orientation, private position: Position) {}

  public turnLeft(): void {
    this.orientation = this.orientation.turnLeft();
  }

  public turnRight(): void {
    this.orientation = this.orientation.turnRight();
  }

  public moveForward(): boolean {
    const originalPosition = this.position;
    switch (this.orientation.toString()) {
      case Orientation.NORTH.toString():
        this.position = this.position.incrementY();
        break;
      case Orientation.EAST.toString():
        this.position = this.position.incrementX();
        break;
      case Orientation.SOUTH.toString():
        this.position = this.position.decrementY();
        break;
      default:
        this.position = this.position.decrementX();
        break;
    }
    return originalPosition.toString() === this.position.toString();
  }
  public moveBackward(): boolean {
    const originalPosition = this.position;
    switch (this.orientation.toString()) {
      case Orientation.NORTH.toString():
        this.position = this.position.decrementY();
        break;
      case Orientation.EAST.toString():
        this.position = this.position.decrementX();
        break;
      case Orientation.SOUTH.toString():
        this.position = this.position.incrementY();
        break;
      default:
        this.position = this.position.incrementX();
        break;
    }
    return originalPosition.toString() === this.position.toString();
  }

  public toString(): string {
    return `${this.position.toString()} - ${this.orientation.toString()}`;
  }
}
