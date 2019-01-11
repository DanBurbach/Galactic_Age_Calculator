class PlanetCalc {

  constructor(name, age, estimated, actual) {
    this.name = name;
    this.age = age;
    this.estimated = estimated;
    this.actual = actual;
  }

  yourName() {
    let name = this.name;
    return name;
  }

  planetEarth() {
    let age = this.age;
    return age;
  }

  planetMercury() {
    let age = (this.age / 0.24);
    return parseFloat(age.toFixed(2));
  }

  planetVenus() {
    let age = (this.age / 0.616);
    return parseFloat(age.toFixed(2));
  }

  planetMars() {
    let age = (this.age / 1.88);
    return parseFloat(age.toFixed(2));
  }

  planetJupiter() {
    let age = (this.age / 11.86);
    return parseFloat(age.toFixed(2));
  }

  planetSaturn() {
    let age = (this.age / 29.457);
    return parseFloat(age.toFixed(2));
  }

  planetUranus() {
    let age = (this.age / 84.078);
    return parseFloat(age.toFixed(2));
  }

  planetNeptune() {
    let age = (this.age / 164.8);
    return parseFloat(age.toFixed(2));
  }

  planetPluto() {
    let age = (this.age / 248.11);
    return parseFloat(age.toFixed(2));
  }

  lifeExpectancy() {
    return this.estimated;
  }

  lifeActual() {
    return this.actual;
  }

  remainingAge() {
    return Math.abs(this.lifeActual() - this.age);
  }

  overtheHill() {
    if (this.age > this.lifeActual()) {
      return "You are " + Math.abs(this.remainingAge()) + " years past your guess!";
    } else if (this.age == this.lifeActual()) {
      return "You are living right at your guess!";
    } else if (this.age < this.lifeActual()) {
      return "You still have an estimated " + Math.abs(this.remainingAge()) + " years to go. Get out and enjoy them!";
    }
  }
}

export { PlanetCalc };
