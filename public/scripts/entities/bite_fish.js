// Subclass of Fish

class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.png';
    this.bite();
  }

  bite() {
    setInterval(() => {
      const proximateAllFishes = window.fishtank.getProximateDenizens(this.  position, 80); // proximate fishes around Bite Fish
      for (const item of proximateAllFishes) {
        if ((item instanceof Fish && !(item instanceof BiteFish))) {
          item.kill();
        }
      }
    }, 1000);
  }

}





