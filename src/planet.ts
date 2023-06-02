import { Obstacle } from './obstacle';
import { Position } from './position';

export class Planet {
  private obstacle: Obstacle | undefined;

  constructor(private readonly size: number) {}

  public getSize(): number {
    return this.size;
  }

  public setObstacle(obstacle: Obstacle) {
    this.obstacle = obstacle;
  }

  public removeObstacle() {
    this.obstacle = undefined;
  }

  public checkObstacle(position: Position): boolean {
    return this.obstacle?.getPosition().toString() === position.toString();
  }
}
