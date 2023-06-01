import { OrientationEnum } from "./enums/orientation.enum";
export class Orientation {
  static NORTH = new Orientation(OrientationEnum.NORTH);
  static SOUTH: Orientation = new Orientation(OrientationEnum.SOUTH);
  static EAST: Orientation = new Orientation(OrientationEnum.EAST);
  static WEST: Orientation = new Orientation(OrientationEnum.WEST);

  constructor(
    private orientation: OrientationEnum
  ){}

  public turnLeft(): Orientation {
    switch (this) {
      case Orientation.NORTH:
        return Orientation.WEST;
      case Orientation.EAST:
        return Orientation.NORTH;
      case Orientation.SOUTH:
        return Orientation.EAST;
      default:
        return Orientation.SOUTH;
    }
  }

  public turnRight(): Orientation {
    switch (this) {
      case Orientation.NORTH:
        return Orientation.EAST;
      case Orientation.EAST:
        return Orientation.SOUTH;
      case Orientation.SOUTH:
        return Orientation.WEST;
      default:
        return Orientation.NORTH;
    }
  }

  public toString(): string {
      return this.orientation;
  }
}