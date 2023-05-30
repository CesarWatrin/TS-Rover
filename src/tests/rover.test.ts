import { beforeEach, describe, expect, it} from 'vitest';
import { Rover } from "../rover";
import { Planet } from "../planet";
import { Position } from "../position";
import { Orientation } from "../enums/orientation.enum";

const PLANET = new Planet(10);
let initialPosition = new Position(0, 0);
let rover = new Rover(initialPosition, Orientation.NORTH, PLANET);

describe('rover', () => {
    
    beforeEach(() => {
        rover = new Rover(initialPosition, Orientation.NORTH, PLANET);
        initialPosition = new Position(0, 0);
    });

    it('should move forward', function () {
        rover.moveForward();
        expect(rover.getPosition()).toEqual({ x: 0, y: 1});
    });

    it('should move backward', function () {
        rover.moveBackward();
        expect(rover.getPosition()).toEqual({ x: 0, y: -1});
    });

    it('should turn right', function () {
        rover.turnRight();
        expect(rover.getOrientation()).toEqual(Orientation.EAST);
    });

    it('should turn left', function () {
        rover.turnLeft();
        expect(rover.getOrientation()).toEqual(Orientation.WEST);
    });

    it('should check position', function () {
        rover.checkPosition();
        expect(rover.getPosition()).toEqual({ x: 0, y: 0});
    });

    it('should set orientation', function () {
        rover.setOrientation(Orientation.SOUTH);
        expect(rover.getOrientation()).toEqual(Orientation.SOUTH);
    });

    it('should set position', function () {
        rover.setPosition(new Position(2, 1));
        expect(rover.getPosition()).toEqual({ x: 2, y: 1});
    });
});