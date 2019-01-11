class PlanetCalc {

  constructor(year) {
    this.year = year;
  }

  planetEarth() {
    let age = this.year;
    return age;
  }

  planetMercury() {
    let age = (this.year / 0.24);
    return parseFloat(age.toFixed(2));
  }

  planetVenus() {
    let age = (this.year / 0.616);
    return parseFloat(age.toFixed(2));
  }

  planetMars() {
    let age = (this.year / 1.88);
    return parseFloat(age.toFixed(2));
  }

  planetJupiter() {
    let age = (this.year / 11.86);
    return parseFloat(age.toFixed(2));
  }

  planetSaturn() {

  }

  planetUranus() {

  }

  planetNeptune() {

  }

  planetPluto() {

  }
}

export { PlanetCalc };
