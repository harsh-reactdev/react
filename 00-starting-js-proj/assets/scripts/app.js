import { API_KEY, abc } from './util.js';

// console.log(API_KEY); //it works

import * as util from './util.js';
// to access a default export when all values are being imported from another module,
// we can acess it using the default property
// console.log(util.default);


function greet() {
    console.log('Hello !');
}

// greet();

const user = {
    name: 'Harsh',
    age: 25,
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

// console.log(user);
// console.log(user.name);
// user.greet() ;

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }

}

const user1 = new User('harsh', 25);
// console.log(user1);

const obj1 = {
    name: 'harsh',
    age: 25
};

const jobDetails = {
    designation: 'Software Developer',
    skills: ['javascript', 'react', 'python']
};

const userProfile = { ...obj1, ...jobDetails };
// console.log(userProfile);