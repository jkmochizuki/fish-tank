
class TankPlants extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/plant.png';
    this.maxSwimSpeed = 50;
    this.makeNewVelocity();
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    let newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * 2);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S * 3;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(10);
  }

}

