import { Orientation } from './src/enums/orientation.enum';
import { Event } from './src/enums/event.enum';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { prompt } from 'enquirer';

(async function main() {
  const planet = new Planet(10);
  const rover = new Rover({ x: 0, y: -9 }, Orientation.NORTH, planet);
  let isRunning = true;

  console.log('Bienvenue sur Mars !')
  console.log('Votre position initiale est :', rover.position);

  while (isRunning) {
    const response = await prompt<{ value: string }>({
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

    switch (response.value) {
      case Event.MOVE_FORWARD:
        rover.moveForward();
        break;
      case Event.MOVE_BACKWARD:
        rover.moveBackward();
        break;
      case Event.TURN_RIGHT:
        rover.turnRight();
        break;
      case Event.TURN_LEFT:
        rover.turnLeft();
        break;
      default:
        isRunning = false;
        break;
    }

    rover.checkPosition();
  }
})();
