class PlanetCalc {

  constructor(age, estimated, sex, ethnicity, home, education, smoking) {
    this.age = age;
    this.estimated = estimated;
    this.sex = sex;
    this.ethnicity = ethnicity;
    this.home = home;
    this.education = education;
    this.smoking = smoking;
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


  // lifeEstimate() {
  //   let age = this.age;
  //   let sex = this.sex;
  //   let ethnicity = this.ethnicity;
  //   let home = this.home;
  //   let eduction = this.education;
  //   let smoking = this.smoking;
  //
  //   let expectancy;
  //
  //   if (0 =< age =< 20) {
  //
  //   }
  //
  //   else if (21 =< age =< 45){
  //
  //   }
  //
  //   else if (46 =< age =< 65){
  //
  //   }
  //
  //   else if (66 =< age =< 85) {
  //
  //   }
  //
  //   else if (age >= 86) {
  //
  //   }
  // }

  lifeExpectancy() {
    let estimatedlife = this.estimated;
    return parseFloat(estimatedlife.toFixed(2));
  }

  remainingAge() {
    this.lifeExpectancy()
  }
}

export { PlanetCalc };
