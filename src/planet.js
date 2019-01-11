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
    let age = (this.year / 29.457);
    return parseFloat(age.toFixed(2));
  }

  planetUranus() {
    let age = (this.year / 84.078);
    return parseFloat(age.toFixed(2));
  }

  planetNeptune() {
    let age = (this.year / 164.8);
    return parseFloat(age.toFixed(2));
  }

  planetPluto() {

  }
}

export { PlanetCalc };
