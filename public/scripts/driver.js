/* eslint-disable no-undef */

// sets up the fish tank object and interacts with the DOM. We will only need to update this code when we add a new object to the fish tank.

$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish, HappyFish, TankPlants);

  let starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

});

