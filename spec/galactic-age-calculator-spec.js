import { PlanetCalc } from './../src/planet.js';

describe('Planet age', function() {
  let earthYear;
  beforeEach(function(){
    earthYear = new PlanetCalc(37);
  });

  it('should capture a persons age based off of how old they are on Earth', function (){
    expect(earthYear.planetEarth()).toEqual(37);
  });

  it('should return a persons age if they were on Mercury', function (){
    expect(earthYear.planetMercury()).toEqual(154.17);
  });

  it('should return a persons age if they were on Venus', function (){
    expect(earthYear.planetVenus()).toEqual(60.06);
  });

  it('should return a persons age if they were on Mars', function (){
    expect(earthYear.planetMars()).toEqual(19.68);
  });

  it('should return a persons age if they were on Jupiter', function (){
    expect(earthYear.planetJupiter()).toEqual(3.12);
  });

  it('should return a persons age if they were on Saturn', function (){
    expect(earthYear.planetSaturn()).toEqual(1.26);
  });

  it('should return a persons age if they were on Uranus', function (){
    expect(earthYear.planetUranus()).toEqual(0.44);
  });

  it('should return a persons age if they were on Neptune', function (){
    expect(earthYear.planetNeptune()).toEqual(0.22);
  });

  it('should return a persons age if they were on Pluto', function (){
    expect(earthYear.planetPluto()).toEqual(0.149);
  });
  
});
