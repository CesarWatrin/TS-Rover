import { Orientation } from './enums/orientation.enum';
import { Planet } from './planet';
import { Rover } from './rover';

function main() {
  let planet = new Planet(10);
  let rover = new Rover({ x: 0, y: 0 }, Orientation.NORTH, planet);
  rover.moveBackward();
  rover.turnLeft();
  rover.moveForward();
  rover.moveForward();
  rover.moveForward();
  rover.moveBackward();
}
main();
