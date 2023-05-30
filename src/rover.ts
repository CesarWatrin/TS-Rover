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

  moveForward() {
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
  moveBackward() {
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
  turnRight() {
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
  turnLeft() {
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

enum Orientation {
  NORTH = 'N',
  EAST = 'E',
  WEST = 'W',
  SOUTH = 'S',
}
