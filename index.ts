import { Orientation } from './src/enums/orientation.enum';
import { Event } from './src/enums/event.enum';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { prompt } from 'enquirer';
import { Position } from "./src/position";

(async function main() {
  const PLANET = new Planet(10);
  const INITIAL_POSITION = new Position(0, 0);
  const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
  let isRunning = true;

  console.log('Bienvenue sur Mars !')
  console.log('Votre position initiale est :', INITIAL_POSITION);

  while (isRunning) {
    const RESPONSE = await prompt<{ value: Event }>({
      name: 'value',
      message: 'Que faire ?',
      type: 'select',
      choices: [
        Event.MOVE_FORWARD,
        Event.MOVE_BACKWARD,
        Event.TURN_RIGHT,
        Event.TURN_LEFT,
        Event.EXIT,
      ],
    });

    switch (RESPONSE.value) {
      case Event.MOVE_FORWARD:
        ROVER.moveForward();
        break;
      case Event.MOVE_BACKWARD:
        ROVER.moveBackward();
        break;
      case Event.TURN_RIGHT:
        ROVER.turnRight();
        break;
      case Event.TURN_LEFT:
        ROVER.turnLeft();
        break;
      default:
        isRunning = false;
        break;
    }

    ROVER.checkPosition();
  }
})();
