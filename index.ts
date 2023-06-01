import { OrientationEnum } from './src/enums/orientation.enum';
import { Orientation } from "./src/orientation";
import { Event } from './src/enums/event.enum';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { prompt } from 'enquirer';
import { Position } from "./src/position";

(async function main() {
  const PLANET = new Planet(5);
  const INITIAL_POSITION = new Position(0, 0, PLANET);
  const INITIAL_ORIENTATION = new Orientation(OrientationEnum.NORTH);
  const ROVER = new Rover(INITIAL_ORIENTATION, INITIAL_POSITION);

  ROVER.moveForward(); //expect 0:1 - N
  ROVER.moveForward(); //expect 0:2 - N
  ROVER.moveForward(); //expect 0:3 - N
  ROVER.moveForward(); //expect 0:4 - N
  ROVER.moveForward(); //expect 0:5 - N
  ROVER.moveForward(); //expect 0:0 - N
  ROVER.turnRight(); //expect 0:0 - E
  ROVER.moveForward(); //expect 1:0 - E
  ROVER.moveForward(); //expect 2:0 - E
  ROVER.moveForward(); //expect 3:0 - E
  ROVER.moveForward(); //expect 4:0 - E
  ROVER.moveForward(); //expect 5:0 - E
  ROVER.moveForward(); //expect 0:0 - E

  console.log(ROVER.toString());
})();
