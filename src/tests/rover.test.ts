import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {Planet} from "../planet";
import {Position} from "../position";
import {Orientation} from "../orientation";
import {OrientationEnum} from "../enums/orientation.enum";
import {Rover} from "../rover";
import { Obstacle } from '../obstacle';

const PLANET = new Planet(5);
const OBSTACLE_POSITION = new Position(0, 3, PLANET);
const OBSTACLE = new Obstacle(OBSTACLE_POSITION);

let initialPosition = new Position(0, 0, PLANET);
let initialOrientation = new Orientation(OrientationEnum.NORTH);
let rover = new Rover(initialOrientation, initialPosition);

describe('rover', () => {

    beforeEach(() => {
        initialPosition = new Position(0, 0, PLANET);
        initialOrientation = new Orientation(OrientationEnum.NORTH);
        rover = new Rover(initialOrientation, initialPosition);
    });

    afterEach(() => {
        PLANET.removeObstacle();
    });

    it('should move forward', function () {
        rover.moveForward();
        expect(rover.toString()).toBe('0:1 - N');
    });

    it('should cross planet', function () {
        for (let i = 0; i < 6; i++) {
            rover.moveForward();
        }
        expect(rover.toString()).toBe('0:0 - N');
    });

    it('should move backward', function () {
        rover.moveBackward();
        expect(rover.toString()).toBe('0:5 - N');
    });

    it('should cross planet backward', function () {
        for (let i = 0; i < 6; i++) {
            rover.moveBackward();
        }
        expect(rover.toString()).toBe('0:0 - N');
    });

    it('should turn right', function () {
        rover.turnRight();
        expect(rover.toString()).toBe('0:0 - E');
    });

    it('should turn left', function () {
        rover.turnLeft();
        expect(rover.toString()).toBe('0:0 - W');
    });

    it('should turn left and move forward', function () {
        rover.turnLeft();
        rover.moveForward();
        expect(rover.toString()).toBe('5:0 - W');
    });

    it('should turn right and move backward', function () {
        rover.turnRight();
        rover.moveBackward();
        expect(rover.toString()).toBe('5:0 - E');
    });

    it('should stop on obstacle forward on x', function () {
        let obstaclePosition = new Position(3, 0, PLANET);
        let obstacle = new Obstacle(obstaclePosition);
        PLANET.setObstacle(obstacle);
        rover.turnRight();
        for (let i = 0; i < 4; i++) {
            rover.moveForward();
        }
        expect(rover.toString()).toBe('2:0 - E');
    });

    it('should stop on obstacle backward on x', function () {
        let obstaclePosition = new Position(3, 0, PLANET);
        let obstacle = new Obstacle(obstaclePosition);
        PLANET.setObstacle(obstacle);
        rover.turnRight();
        for (let i = 0; i < 8; i++) {
            rover.moveBackward();
        }
        expect(rover.toString()).toBe('4:0 - E');
    });

    it('should stop on obstacle forward on y', function () {
        PLANET.setObstacle(OBSTACLE);
        for (let i = 0; i < 7; i++) {
            rover.moveForward();
        }
        expect(rover.toString()).toBe('0:2 - N');
    });

    it('should stop on obstacle backward on y', function () {
        PLANET.setObstacle(OBSTACLE);
        for (let i = 0; i < 17; i++) {
            rover.moveBackward();
        }
        expect(rover.toString()).toBe('0:4 - N');
    });
});