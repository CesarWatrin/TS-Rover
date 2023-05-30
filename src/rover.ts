import { Orientation } from './enums/orientation.enum';
import { Planet } from './planet';

export class Rover {
  orientation: Orientation;
  position: { x: number; y: number };
  planet: Planet;

  constructor(
    position: { x: number; y: number } = { x: 0, y: 0 },
    orientation: Orientation = Orientation.NORTH,
    planet: Planet
  ) {
    this.orientation = orientation;
    this.position = position;
    this.planet = planet;
  }

  moveForward(): void {
    switch (this.orientation) {
      case Orientation.NORTH: {
        this.position.y += 1;
        break;
      }
      case Orientation.EAST: {
        this.position.x += 1;
        break;
      }
      case Orientation.SOUTH: {
        this.position.y -= 1;
        break;
      }
      case Orientation.WEST: {
        this.position.x -= 1;
        break;
      }
      default: {
        break;
      }
    }
  }
  moveBackward(): void {
    console.log(this.orientation);
    switch (this.orientation) {
      case Orientation.NORTH: {
        this.position.y -= 1;
        break;
      }
      case Orientation.EAST: {
        this.position.x -= 1;
        break;
      }
      case Orientation.SOUTH: {
        this.position.y += 1;
        break;
      }
      case Orientation.WEST: {
        this.position.x += 1;
        break;
      }
      default: {
        break;
      }
    }
  }
  turnRight(): void {
    switch (this.orientation) {
      case Orientation.NORTH: {
        this.orientation = Orientation.EAST;
        break;
      }
      case Orientation.EAST: {
        this.orientation = Orientation.SOUTH;
        break;
      }
      case Orientation.SOUTH: {
        this.orientation = Orientation.WEST;
        break;
      }
      case Orientation.WEST: {
        this.orientation = Orientation.NORTH;
        break;
      }
      default: {
        break;
      }
    }
  }
  turnLeft(): void {
    switch (this.orientation) {
      case Orientation.NORTH: {
        this.orientation = Orientation.WEST;
        break;
      }
      case Orientation.EAST: {
        this.orientation = Orientation.NORTH;
        break;
      }
      case Orientation.SOUTH: {
        this.orientation = Orientation.EAST;
        break;
      }
      case Orientation.WEST: {
        this.orientation = Orientation.SOUTH;
        break;
      }
      default: {
        break;
      }
    }
  }
}
