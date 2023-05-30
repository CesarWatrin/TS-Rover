import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import { Rover } from "../rover";
import { Planet } from "../planet";
import { Position } from "../position";
import { Orientation } from "../enums/orientation.enum";

const INITIAL_POSITION = new Position(0, 0);
const PLANET = new Planet(10);

describe('rover', () => {

    it('should move forward', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.moveForward();
        expect(ROVER.getPosition()).toEqual({ x: 0, y: 1});
    });

    it('should move backward', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.moveBackward();
        expect(ROVER.getPosition()).toEqual({ x: 0, y: -1});
    });

    it('should turn right', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.turnRight();
        expect(ROVER.getOrientation()).toEqual(Orientation.EAST);
    });

    it('should turn left', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.turnLeft();
        expect(ROVER.getOrientation()).toEqual(Orientation.WEST);
    });

    it('should check position', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.checkPosition();
        expect(ROVER.getPosition()).toEqual({ x: 0, y: 0});
    });

    it('should set orientation', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.setOrientation(Orientation.SOUTH);
        expect(ROVER.getOrientation()).toEqual(Orientation.SOUTH);
    });

    it('should set position', function () {
        const ROVER = new Rover(INITIAL_POSITION, Orientation.NORTH, PLANET);
        ROVER.setPosition(new Position(2, 1));
        expect(ROVER.getPosition()).toEqual({ x: 2, y: 1});
    });
});