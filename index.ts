import { Orientation } from './src/enums/orientation.enum';
import { Event } from './src/enums/event.enum';
import { Planet } from './src/planet';
import { Rover } from './src/rover';
import { Obstacle } from './src/obstacle';
import { prompt } from 'enquirer';
import { Position } from './src/position';

(async function main() {
  const PLANET = new Planet(10);
  const INITIAL_POSITION = new Position(0, 0);
  const OBSTACLE_POSITION = new Position(0, 10);
  const OBSTACLE = new Obstacle(OBSTACLE_POSITION);
  const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
  let isRunning = true;
  let isRunningArray = false;

  let arrayEvent: string[] = [];

  const runAllEvent = (): void => {
    for (const event of arrayEvent) {
      switch (event) {
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
          break;
      }
      if (ROVER.checkObstacle(OBSTACLE)) {
        break;
      }
    }
    arrayEvent = [];
    isRunningArray = false;
  };

  console.log('Bienvenue sur Mars !');
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
        Event.ARRAY_EVENT,
        Event.EXIT,
      ],
    });

    if (RESPONSE.value === Event.ARRAY_EVENT) {
      isRunningArray = true;
      while (isRunningArray) {
        const ARRAY_EVENT = await prompt<{ value: string }>({
          name: 'value',
          message: 'Entrez une suite de commande',
          type: 'select',
          choices: [
            Event.MOVE_FORWARD,
            Event.MOVE_BACKWARD,
            Event.TURN_RIGHT,
            Event.TURN_LEFT,
            'Valider la suite',
          ],
        });

        switch (ARRAY_EVENT.value) {
          case Event.MOVE_FORWARD:
            arrayEvent.push(Event.MOVE_FORWARD);
            break;
          case Event.MOVE_BACKWARD:
            arrayEvent.push(Event.MOVE_BACKWARD);
            break;
          case Event.TURN_RIGHT:
            arrayEvent.push(Event.TURN_RIGHT);
            break;
          case Event.TURN_LEFT:
            arrayEvent.push(Event.TURN_LEFT);
            break;
          default:
            runAllEvent();
            break;
        }
      }
    } else {
      switch (RESPONSE.value) {
        case Event.MOVE_FORWARD:
          ROVER.moveForward();
          if (ROVER.checkObstacle(OBSTACLE)) {
            ROVER.moveBackward();
          }
          break;
        case Event.MOVE_BACKWARD:
          ROVER.moveBackward();
          if (ROVER.checkObstacle(OBSTACLE)) {
            ROVER.moveForward();
          }
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
    }
    ROVER.checkPosition();
  }
})();
