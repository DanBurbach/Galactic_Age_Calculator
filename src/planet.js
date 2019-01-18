class PlanetCalc {

  constructor(name, birthday, estimated, actual) {
    this.name = name;
    this.birthday = birthday;
    this.estimated = estimated;
    this.actual = actual;
  }

  yourName() {
    let name = this.name;
    return name;
  }

  planetEarth() {
    let age;
    let dateToday = new Date();
    let entryDate = new Date(this.birthday);
    return age = parseInt((dateToday - entryDate)/(1000*60*60*24)/365.26);
  }

  planetMercury() {
    let age = (this.planetEarth() / 0.24);
    return parseFloat(age.toFixed(2));
  }

  planetVenus() {
    let age = (this.planetEarth() / 0.616);
    return parseFloat(age.toFixed(2));
  }

  planetMars() {
    let age = (this.planetEarth() / 1.88);
    return parseFloat(age.toFixed(2));
  }

  planetJupiter() {
    let age = (this.planetEarth() / 11.86);
    return parseFloat(age.toFixed(2));
  }

  planetSaturn() {
    let age = (this.planetEarth() / 29.457);
    return parseFloat(age.toFixed(2));
  }

  planetUranus() {
    let age = (this.planetEarth() / 84.078);
    return parseFloat(age.toFixed(2));
  }

  planetNeptune() {
    let age = (this.planetEarth() / 164.8);
    return parseFloat(age.toFixed(2));
  }

  planetPluto() {
    let age = (this.planetEarth() / 248.11);
    return parseFloat(age.toFixed(2));
  }

// checking age of person in planet years to how many years remaining. return planet years

  actualMercury() {
    let age = ((this.actual / 0.24) - this.planetMercury());
    return parseFloat(age.toFixed(2));
  }

  actualVenus() {
    let age = ((this.actual / 0.616) - this.planetVenus());
    return parseFloat(age.toFixed(2));
  }

  actualMars() {
    let age = (this.lifeActual()/1.88) - this.planetMars());
    return parseFloat(age.toFixed(2));
  }

  actualJupiter() {
    let age = (this.lifeActual()/11.86) - this.planetJupiter());
    return parseFloat(age.toFixed(2));
  }

  actualSaturn() {
    let age = (this.lifeActual()/29.457) - this.planetSaturn());
    return parseFloat(age.toFixed(2));
  }

  actualUranus() {
    let age = (this.lifeActual()/84.078) - this.planetUranus());
    return parseFloat(age.toFixed(2));
  }

  actualNeptune() {
    let age = (this.lifeActual()/164.8) - this.planetNeptune());
    return parseFloat(age.toFixed(2));
  }

  actualPluto() {
    let age = (this.lifeActual()/248.11) - this.planetPluto());
    return parseFloat(age.toFixed(2));
  }

  lifeExpectancy() {
    return this.estimated;
  }

  lifeActual() {
    return this.actual;
  }

  remainingAge() {
    return Math.abs(this.lifeActual() - this.planetEarth());
  }

  overtheHill() {
    if (this.planetEarth() > this.lifeActual()) {
      return "You are " + Math.abs(this.remainingAge()) + " years past your guess!";
    } else if (this.planetEarth() == this.lifeActual()) {
      return "You are living right at your guess!";
    } else if (this.planetEarth() < this.lifeActual()) {
      return "You still have an estimated " + Math.abs(this.remainingAge()) + " years to go. Get out and enjoy them!";
    }
  }
}

export { PlanetCalc };
