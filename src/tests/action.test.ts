import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Planet } from '../planet';
import { Position } from '../position';
import { Orientation } from '../orientation';
import { OrientationEnum } from '../enums/orientation.enum';
import { Rover } from '../rover';
import { Obstacle } from '../obstacle';
import { Action } from '../action';
import { Event } from '../enums/event.enum';

const PLANET = new Planet(5);

let initialPosition = new Position(0, 0, PLANET);
let initialOrientation = new Orientation(OrientationEnum.NORTH);
let rover = new Rover(initialOrientation, initialPosition);
let action = new Action(rover);

describe('rover', () => {
  beforeEach(() => {
    initialPosition = new Position(0, 0, PLANET);
    initialOrientation = new Orientation(OrientationEnum.NORTH);
    rover = new Rover(initialOrientation, initialPosition);
    action = new Action(rover);
  });

  afterEach(() => {
    action.clear();
  });

  it('should move forward', function () {
    action.addEvent(Event.MOVE_FORWARD);
    action.runEvents();
    expect(rover.toString()).toBe('0:1 - N');
  });

  it('should cross planet', function () {
    action.addEvent(Event.MOVE_FORWARD); //0:1
    action.addEvent(Event.MOVE_BACKWARD); //0:0
    action.addEvent(Event.TURN_LEFT); //0:0 W
    action.addEvent(Event.MOVE_BACKWARD); //0:5 W
    action.addEvent(Event.MOVE_BACKWARD); //0:4 W
    action.runEvents();
    expect(rover.toString()).toBe('0:4 - W');
  });
});
