import { OrientationEnum } from './src/enums/orientation.enum';
import { Orientation } from './src/orientation';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { Position } from './src/position';

(async function main() {
  const PLANET = new Planet(5);
  const INITIAL_POSITION = new Position(0, 0, PLANET);
  const INITIAL_ORIENTATION = new Orientation(OrientationEnum.NORTH);
  const ROVER = new Rover(INITIAL_ORIENTATION, INITIAL_POSITION);

  console.log(ROVER.toString()); //expect 0:0 - N

  //all commands
  ROVER.moveForward(); //expect 0:1 - N
  ROVER.moveBackward(); //expect 0:0 - N
  ROVER.turnRight(); //expect 0:0 - E
  ROVER.turnLeft(); //expect 0:0 - N

  console.log(ROVER.toString());
})();
