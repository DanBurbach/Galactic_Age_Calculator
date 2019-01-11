class Age {

  constructor(month, day, year) {
    this.month = month;
    this.day = day;
    this.year = year;
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
}
export { Age };
