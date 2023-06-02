import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Planet } from '../planet';
import { Position } from '../position';
import { Orientation } from '../orientation';
import { OrientationEnum } from '../enums/orientation.enum';
import { Rover } from '../rover';
import { Action } from '../action';
import { Event } from '../enums/event.enum';
import { Obstacle } from '../obstacle';

const PLANET = new Planet(5);
const OBSTACLE_POSITION = new Position(0, 3, PLANET);
const OBSTACLE = new Obstacle(OBSTACLE_POSITION);

let initialPosition = new Position(0, 0, PLANET);
let initialOrientation = new Orientation(OrientationEnum.NORTH);
let rover = new Rover(initialOrientation, initialPosition);
let action = new Action(rover);

describe('action', () => {
  beforeEach(() => {
    initialPosition = new Position(0, 0, PLANET);
    initialOrientation = new Orientation(OrientationEnum.NORTH);
    rover = new Rover(initialOrientation, initialPosition);
    action = new Action(rover);
  });

  afterEach(() => {
    action.clear();
    PLANET.removeObstacle();
  });

  it('should move forward', function () {
    action.addEvent(Event.MOVE_FORWARD);
    action.runEvents();
    expect(rover.toString()).toBe('0:1 - N');
  });

  it('should move backward', function () {
    action.addEvent(Event.MOVE_BACKWARD);
    action.runEvents();
    expect(rover.toString()).toBe('0:5 - N');
  });

  it('should turn right', function () {
    action.addEvent(Event.TURN_RIGHT);
    action.runEvents();
    expect(rover.toString()).toBe('0:0 - E');
  });

  it('should turn left', function () {
    action.addEvent(Event.TURN_LEFT);
    action.runEvents();
    expect(rover.toString()).toBe('0:0 - W');
  });

  it('should run sequence of events', function () {
    action.addEvent(Event.MOVE_FORWARD);
    action.addEvent(Event.MOVE_BACKWARD);
    action.addEvent(Event.TURN_LEFT);
    action.addEvent(Event.MOVE_BACKWARD);
    action.addEvent(Event.MOVE_BACKWARD);
    action.runEvents();
    expect(rover.toString()).toBe('2:0 - W');
  });

  it('should stop when obstacle is found', function () {
    PLANET.setObstacle(OBSTACLE);
    for (let i = 0; i < 7; i++) {
      action.addEvent(Event.MOVE_FORWARD);
    }
    action.runEvents();
    expect(rover.toString()).toBe('0:2 - N');
  });

  it('should run sequence of events on class creation', function () {
    action = new Action(rover, [
      Event.MOVE_FORWARD,
      Event.MOVE_BACKWARD,
      Event.TURN_LEFT,
      Event.MOVE_BACKWARD,
      Event.MOVE_BACKWARD,
    ]);
    action.runEvents();
    expect(rover.toString()).toBe('2:0 - W');
  });

  it('should only run events until obstacle', function () {
    PLANET.setObstacle(OBSTACLE);
    for (let i = 0; i < 7; i++) {
      action.addEvent(Event.MOVE_BACKWARD);
    }
    const numberOfActionsExecuted = action.runEvents();
    expect(rover.toString()).toBe('0:4 - N');
    expect(numberOfActionsExecuted).toEqual(2);
  });
});
