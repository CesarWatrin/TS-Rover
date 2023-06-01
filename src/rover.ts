import { Orientation } from './enums/orientation.enum';
import { Obstacle } from './obstacle';
import { Planet } from './planet';
import { Position } from './position';

export class Rover {
  private orientation: Orientation;
  private position: Position;
  private planet: Planet;

  constructor(
    position: Position,
    orientation: Orientation = Orientation.NORTH,
    planet: Planet
  ) {
    this.orientation = orientation;
    this.position = position;
    this.planet = planet;
  }

  setOrientation(orientation: Orientation): void {
    this.orientation = orientation;
  }

  getOrientation(): Orientation {
    return this.orientation;
  }

  setPosition(position: Position): void {
    this.position = position;
  }

  getPosition(): Position {
    return this.position;
  }

  checkPosition(obstacle: Obstacle): void {
    const obstacleY = obstacle.getPosition().getY();
    const obstacleX = obstacle.getPosition().getX();
    if (
      this.position.getY() === obstacleY &&
      this.position.getX() === obstacleX
    ) {
      obstacle.toString();
    }

    switch (this.position.getY()) {
      case this.planet.getSize() + 1: {
        this.position.setY(-this.planet.getSize());
        break;
      }
      case -this.planet.getSize() - 1: {
        this.position.setY(this.planet.getSize());
        break;
      }
      default: {
        break;
      }
    }
    switch (this.position.getX()) {
      case this.planet.getSize() + 1: {
        this.position.setX(-this.planet.getSize());
        break;
      }
      case -this.planet.getSize() - 1: {
        this.position.setX(this.planet.getSize());
        break;
      }
      default: {
        break;
      }
    }
    console.log(this.position, this.orientation);
  }

  moveForward(): void {
    switch (this.orientation) {
      case Orientation.NORTH: {
        this.position.setY(this.position.getY() + 1);
        break;
      }
      case Orientation.EAST: {
        this.position.setX(this.position.getX() + 1);
        break;
      }
      case Orientation.SOUTH: {
        this.position.setY(this.position.getY() - 1);
        break;
      }
      case Orientation.WEST: {
        this.position.setX(this.position.getX() - 1);
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
        this.position.setY(this.position.getY() - 1);
        break;
      }
      case Orientation.EAST: {
        this.position.setX(this.position.getX() - 1);
        break;
      }
      case Orientation.SOUTH: {
        this.position.setY(this.position.getY() + 1);
        break;
      }
      case Orientation.WEST: {
        this.position.setX(this.position.getX() + 1);
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
