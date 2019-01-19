import { PlanetCalc } from './../src/planet.js';
// import { Age } from './../src/age.js'

// User Age ------------------------------------

describe('User age', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Dan Burbach', '04/06/1982', 85, 80 );
  });

  it('should return a users name when entered', function() {
    expect(astronaut.yourName()).toEqual('Dan Burbach');
  })

  it('should capture a persons age based off of their birthday on Earth', function() {
    expect(astronaut.planetEarth()).toEqual(36);
  });

  it('should return an estimated life expectancy given by the user', function() {
    expect(astronaut.lifeExpectancy()).toEqual(85);
  });

  it('should return a given life expectancy given by the program', function() {
    expect(astronaut.lifeActual()).toEqual(80);
  });

  it('should return an answer telling the user if they have surpassed the average given life expectancy', function() {
    expect(astronaut.overtheHill()).toEqual('You still have an estimated 44 years to go. Get out and enjoy them!');
  });

});

// Keith Richards age test ----------------------------

describe('Keith Richards age test', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Keith Richards', '12/18/1943', 60, 70);
  });

  it('should return the number of years they have lived past their life expectancy if they have', function() {
    expect(astronaut.remainingAge()).toEqual(5);
  });

});

// Planetary Age ---------------------------------

describe('Planet age', function() {
  let astronaut;
  beforeEach(function() {
    astronaut = new PlanetCalc('Dan Burbach', '04/06/1982', 85, 80);
  });

  it('should return a persons age if they were on Mercury', function() {
    expect(astronaut.planetMercury()).toEqual(150);
  });

  it('should return a persons age if they were on Venus', function() {
    expect(astronaut.planetVenus()).toEqual(58.44);
  });

  it('should return a persons age if they were on Mars', function() {
    expect(astronaut.planetMars()).toEqual(19.15);
  });

  it('should return a persons age if they were on Jupiter', function() {
    expect(astronaut.planetJupiter()).toEqual(3.04);
  });

  it('should return a persons age if they were on Saturn', function() {
    expect(astronaut.planetSaturn()).toEqual(1.22);
  });

  it('should return a persons age if they were on Uranus', function() {
    expect(astronaut.planetUranus()).toEqual(0.43);
  });

  it('should return a persons age if they were on Neptune', function() {
    expect(astronaut.planetNeptune()).toEqual(0.22);
  });

  it('should return a persons age if they were on Pluto', function() {
    expect(astronaut.planetPluto()).toEqual(0.15);
  });

// Remaining Years left for a user in planet years ----------------------------

  it('should return how many planet years a person has left on Mercury', function(){
    expect(astronaut.actualMercury()).toEqual(1);
  });

  it('should return how many planet years a person has left on Venus', function(){
    expect(astronaut.actualVenus()).toEqual(1);
  });

  it('should return how many planet years a person has left on Mars', function(){
    expect(astronaut.actualMars()).toEqual(1);
  });

  it('should return how many planet years a person has left on Jupiter', function(){
    expect(astronaut.actualJupiter()).toEqual(1);
  });

  it('should return how many planet years a person has left on Saturn', function(){
    expect(astronaut.actualSaturn()).toEqual(1);
  });

  it('should return how many planet years a person has left on Uranus', function(){
    expect(astronaut.actualUranus()).toEqual(1);
  });

  it('should return how many planet years a person has left on Neptune', function(){
    expect(astronaut.actualNeptune()).toEqual(1);
  });

  it('should return how many planet years a person has left on Pluto', function(){
    expect(astronaut.actualPluto()).toEqual(1);
  });

});
