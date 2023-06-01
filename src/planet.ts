import { Obstacle } from './obstacle';
import { Position } from './position';

export class Planet {
  constructor(private readonly size: number, private obstacle?: Obstacle) {}

  public getSize(): number {
    return this.size;
  }

  public setObstacle(obstacle: Obstacle): Obstacle {
    return (this.obstacle = obstacle);
  }

  public checkObstacle(position: Position) {
    if (this.obstacle?.getPosition().toString() === position.toString()) {
      console.log(this.obstacle?.getPosition());
      return true;
    }
    return false;
  }
}
