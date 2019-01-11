import { PlanetCalc } from './../src/planet.js';
import { Age } from './../src/age.js'



describe('User age', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Neil Armstrong', 37, 85, 80 );
  });

// User Age ------------------------------------

  it('should return a users name when entered', function() {
    expect(astronaut.yourName()).toEqual('Neil Armstrong');
  })

  it('should capture a persons age based off of how old they are on Earth', function() {
    expect(astronaut.planetEarth()).toEqual(37);
  });

  it('should return an estimated life expectancy given by the user', function() {
    expect(astronaut.lifeExpectancy()).toEqual(85);
  });

  it('should return a given life expectancy given by the program', function() {
    expect(astronaut.lifeActual()).toEqual(80);
  });

  it('should return an answer telling the user if they have surpassed the average given life expectancy', function() {
    expect(astronaut.overtheHill()).toEqual('You still have an estimated 43 years to go. Get out and enjoy them!');
  });

});

// Keith Richards age test ----------------------------

describe('Keith Richards age test', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Keith Richards', 75, 60, 70 );
  });

  it('should return the number of years they have lived past in a life expectancy if they have', function() {
    expect(astronaut.remainingAge()).toEqual(5);
  });

});

// Planetary Age ---------------------------------

describe('Planet age', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Neil Armstrong', 37, 85, 80 );
  });

  it('should return a persons age if they were on Mercury', function() {
    expect(astronaut.planetMercury()).toEqual(154.17);
  });

  it('should return a persons age if they were on Venus', function() {
    expect(astronaut.planetVenus()).toEqual(60.06);
  });

  it('should return a persons age if they were on Mars', function() {
    expect(astronaut.planetMars()).toEqual(19.68);
  });

  it('should return a persons age if they were on Jupiter', function() {
    expect(astronaut.planetJupiter()).toEqual(3.12);
  });

  it('should return a persons age if they were on Saturn', function() {
    expect(astronaut.planetSaturn()).toEqual(1.26);
  });

  it('should return a persons age if they were on Uranus', function() {
    expect(astronaut.planetUranus()).toEqual(0.44);
  });

  it('should return a persons age if they were on Neptune', function() {
    expect(astronaut.planetNeptune()).toEqual(0.22);
  });

  it('should return a persons age if they were on Pluto', function() {
    expect(astronaut.planetPluto()).toEqual(0.15);
  });

});


// describe('User age', function(){
//   let enteredAge;
//   beforeEach(function(){
//     enteredAge = new Age('4/11/1982');
//   });
//
//   it('should capture a given birthday and return an age of the user', function(){
//     expect(enteredAge.getAge()).toEqual(36);
//   });
//
// });
