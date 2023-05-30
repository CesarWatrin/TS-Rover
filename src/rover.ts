import { Orientation } from "@/enums/orientation.enum";

class Rover {
  orientation: Orientation;
  position: { x: number; y: number };

  constructor(
    position: { x: number; y: number } = { x: 0, y: 0 },
    orientation: Orientation = Orientation.NORTH
  ) {
    this.orientation = orientation;
    this.position = position;
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
