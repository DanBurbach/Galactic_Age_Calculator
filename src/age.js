class Age {

  constructor(birthday) {
    this.birthday = birthday;
  }

  getAge(birthday) {
    let today = new Date();
    let thisYear = 0;
    if (today.getMonth() < birthday.getMonth()) {
      thisYear = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
      thisYear = 1;
    }
    let age = today.getFullYear() - birthday.getFullYear() - thisYear;
    return age;
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

}
export { Age };
