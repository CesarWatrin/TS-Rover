import { Rover } from './rover';
import { Event } from './enums/event.enum';

export class Action {
  private eventCount: number = 0;
  constructor(private readonly rover: Rover, private events: Event[] = []) {}

  public addEvent(event: Event): void {
    this.events.push(event);
  }
  public clear(): void {
    this.events = [];
  }

  public runEvents(): number {
    let stopLoop = false;
    for (const event of this.events) {
      switch (event) {
        case Event.MOVE_FORWARD:
          stopLoop = this.rover.moveForward();
          break;
        case Event.MOVE_BACKWARD:
          stopLoop = this.rover.moveBackward();
          break;
        case Event.TURN_LEFT:
          this.rover.turnLeft();
          break;
        case Event.TURN_RIGHT:
          this.rover.turnRight();
          break;
        default:
          break;
      }
      if (stopLoop) {
        this.clear();
        break;
      }
      this.eventCount++;
    }
    return this.eventCount;
  }
}
