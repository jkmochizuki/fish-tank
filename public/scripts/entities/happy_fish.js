// Subclass of Fish

class HappyFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/happy-fish.png';
    this.surgeSecondsLeft = 0;
    this.maxSurge = 2.0;
    this.surgMult = 1.0;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * 2);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  onClick(event) {
    this.makeNewVelocity(80);
  }
}
