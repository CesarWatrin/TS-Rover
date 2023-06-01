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
    switch (this.orientation) {
      case OrientationEnum.NORTH:
        return new Orientation(OrientationEnum.WEST);
      case OrientationEnum.EAST:
        return new Orientation(OrientationEnum.NORTH);
      case OrientationEnum.SOUTH:
        return new Orientation(OrientationEnum.EAST);
      default:
        return new Orientation(OrientationEnum.SOUTH);
    }
  }

  public turnRight(): Orientation {
    switch (this.orientation) {
      case OrientationEnum.NORTH:
        return new Orientation(OrientationEnum.EAST);
      case OrientationEnum.EAST:
        return new Orientation(OrientationEnum.SOUTH);
      case OrientationEnum.SOUTH:
        return new Orientation(OrientationEnum.WEST);
      default:
        return new Orientation(OrientationEnum.NORTH);
    }
  }

  public toString(): string {
      return this.orientation;
  }
}