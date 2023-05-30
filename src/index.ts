import { Orientation } from './enums/orientation.enum';
import { Planet } from './planet';
import { Rover } from './rover';
import { prompt } from 'enquirer';

async function main() {
  let planet = new Planet(10);
  let rover = new Rover({ x: 0, y: -9 }, Orientation.NORTH, planet);
  let isRunning = true;
  while (isRunning) {
    const response = await prompt<{ value: string }>({
      name: 'value',
      message: 'Que faire?',
      type: 'select',
      choices: [
        'avancer',
        'reculer',
        'tourner à droite',
        'tourner à gauche',
        'quitter',
      ],
    });

    switch (response.value) {
      case 'avancer':
        rover.moveForward();
        break;
      case 'reculer':
        rover.moveBackward();
        break;
      case 'tourner à droite':
        rover.turnRight();
        break;
      case 'tourner à gauche':
        rover.turnLeft();
        break;
      default:
        isRunning = false;
        break;
    }
  }
}
main();
