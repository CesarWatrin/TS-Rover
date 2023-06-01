import { OrientationEnum } from './src/enums/orientation.enum';
import { Orientation } from "./src/orientation";
import { Event } from './src/enums/event.enum';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { prompt } from 'enquirer';
import { Position } from "./src/position";

(async function main() {
  const PLANET = new Planet(10);
  const INITIAL_POSITION = new Position(0, 0, PLANET);
  const INITIAL_ORIENTATION = new Orientation(OrientationEnum.NORTH);
  const ROVER = new Rover(INITIAL_ORIENTATION, INITIAL_POSITION);

  ROVER.moveForward();

  console.log(ROVER.toString());
})();
