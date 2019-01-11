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

  }

  planetJupiter() {

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
