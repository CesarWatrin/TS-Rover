import { Rover } from './rover';
import { Event } from './enums/event.enum';

export class Action {
  constructor(private readonly rover: Rover, private events: Event[] = []) {}

  public addEvent(event: Event): void {
    this.events.push(event);
  }
  public clear(): void {
    this.events = [];
  }

  public runEvents(): void {
    for (const event of this.events) {
      switch (event) {
        case Event.MOVE_FORWARD:
          this.rover.moveForward();
          break;
        case Event.MOVE_BACKWARD:
          this.rover.moveBackward();
          break;
        case Event.TURN_LEFT:
          this.rover.turnLeft();
        case Event.TURN_RIGHT:
          this.rover.turnRight();
        default:
          break;
      }
    }
  }
}
