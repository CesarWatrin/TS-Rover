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
    this.position = this.position.withForward(this.orientation);
    return this.position.toString() === originalPosition.toString();
  }
  public moveBackward(): boolean {
    const originalPosition = this.position;
    this.position = this.position.withBackward(this.orientation);
    return originalPosition.toString() === this.position.toString();
  }

  public toString(): string {
    return `${this.position.toString()} - ${this.orientation.toString()}`;
  }
}
