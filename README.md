# Galactic Age Calculator

#### Calculates a users age based off of what planet they are on.

#### By Daniel Burbach

## Description

This program takes a numeric input of the age of a user. This returns the age they are on each planet in our solar system. Given the users entered demograph, it will also return the number of years left to "live" that they might have. If they have exceeded this estimated time left, it will return how far beyond this that they have lived.

### Specifications:

#### Spec: return users name when entered;
- [x] ** Expect: ** yourName('Dan Burbach') === "Dan Burbach";

#### Spec: return an age based off of their birthday on Earth ;
- [x] ** Expect: ** planetEarth('04/06/1982') === "36";

#### Spec: return an estimated life expectancy given by the user;
- [x] ** Expect: ** lifeExpectancy('85') === "85";

#### Spec: return a given life expectancy given by the program;
- [x] ** Expect: ** lifeActual('80') === "80";

#### Spec: return an answer telling the user if they have surpassed the average given life expectancy;
- [x] ** Expect: ** overtheHill(36) === "You still have an estimated 44 years to go. Get out and enjoy them!";

#### Spec: return the number of years they have lived their life expectancy if they have ;
- [x] ** Expect: ** remainingAge(75) === "5";

#### Spec: for Earth age 36 (April 6, 1982) on Mercury;
- [x] ** Expect: ** planetMercury(37) === "150";

#### Spec: for Earth age 36 (April 6, 1982) on Venus;
- [x] ** Expect: ** planetVenus(36) === "58.44";

#### Spec: for Earth age 36 (April 6, 1982) on Mars;
- [x] ** Expect: ** planetMars(36) === "19.15";

#### Spec: for Earth age 36 (April 6, 1982) on Jupiter;
- [x] ** Expect: ** planetJupiter(36) === "3.04";

#### Spec: for Earth age 36 (April 6, 1982) on Saturn;
- [x] ** Expect: ** planetSaturn(36) === "1.22";

#### Spec: for Earth age 36 (April 6, 1982) on Uranus;
- [x] ** Expect: ** planetUranus(36) === "0.43";

#### Spec: for Earth age 36 (April 6, 1982) on Neptune;
- [x] ** Expect: ** planetNeptune(36) === "0.22";

#### Spec: for Earth age 36 (April 6, 1982) on Pluto;
- [x] ** Expect: ** planetPluto(36) === "0.15";

#### Spec: for Earth age 36 (April 6, 1982) on Mercury, return the number of years remaining in Mercury Years;
- [x] ** Expect: ** actualMercury(36) === "33.33";

#### Spec: for Earth age 36 (April 6, 1982) on Venus, return the number of years remaining in Venus Years;
- [x] ** Expect: ** actualVenus(36) === "12.99";

#### Spec: for Earth age 36 (April 6, 1982) on Mars, return the number of years remaining in Mars Years;
- [x] ** Expect: ** actualMars(36) === "4.25";

#### Spec: for Earth age 36 (April 6, 1982) on Jupiter, return the number of years remaining in Jupiter Years;
- [x] ** Expect: ** actualJupiter(36) === "0.67";

#### Spec: for Earth age 36 (April 6, 1982) on Saturn, return the number of years remaining in Saturn Years;
- [x] ** Expect: ** actualSaturn(36) === "0.27";

#### Spec: for Earth age 36 (April 6, 1982) on Uranus, return the number of years remaining in Uranus Years;
- [x] ** Expect: ** actualUranus(36) === "0.09";

#### Spec: for Earth age 36 (April 6, 1982) on Neptune, return the number of years remaining in Neptune Years;
- [x] ** Expect: ** actualNeptune(36) === "0.05";

#### Spec: for Earth age 36 (April 6, 1982) on Pluto, return the number of years remaining in Pluto Years;
- [x] ** Expect: ** actualPluto(36) === "0.03";

## Setup/Installation Requirements
1. git clone: https://github.com/DanBurbach/Galactic_Age_Calculator.git

2. Navigate into this repo and download dependencies using manager of your choice: npm install

3. Run specs using npm run test
 - a new browser will open with localhost:9876

4. launch dev environment in browser using npm run start
 - a new browser will open with localhost:8080

## Known Bugs

## Support and contact details
Feel free to contact me with any suggestions or questions.

## Technologies Used
HTML, CSS, Javascript, and webpack

## Objectives

- Specs were committed before any code.

- Business logic is thoroughly tested with Jasmine.

- Karma is set up correctly.

- Project utilizes ES6 features including classes, let and const.

- Dependencies are managed with npm.

- Application uses webpack to lint, bundle, and process code.

- Project is in a polished, portfolio-quality state. (Clear code presentation, error free, complete README, commit history, etc.)

- Required functionality was in place by the Friday deadline.

- Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

### License
Licensed under the MIT license.

Copyright <2019> <Daniel Burbach>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
