'use strict';

let workhure = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function getRC(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

let seattle = {
    mincus: 23,
    maxcus: 65,
    avgcus: 6.3,
    randomcustomers: [],
    avgcookiesperhoue: [],
    total: 0,

    random: function () {
        for (let i = 0; i < workhure.length; i++) {
            this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

        }
    },

    AvgNum: function () {
        for (let i = 0; i < this.randomcustomers.length; i++) {
            this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
            this.total = this.total + this.avgcookiesperhoue[i];
        }
    }
};
seattle.random();
seattle.AvgNum();

console.log(seattle);

let parent = document.getElementById("parent")

let h2 = document.createElement('h2')

parent.appendChild(h2);

h2.textContent = 'Seattle';

let ul = document.createElement('ul');

parent.appendChild(ul);


for (let i = 0; i < workhure.length; i++) {
    let li = document.createElement('li');

    ul.appendChild(li);
    li.textContent = ` ${workhure[i]} : ${seattle.avgcookiesperhoue[i]} cookies `
};


let li = document.createElement('li');

ul.appendChild(li);

li.textContent = `Total: ${seattle.total} cookies`;


let Tokyo = {
    mincus: 3,
    maxcus: 24,
    avgcus: 1.2,
    randomcustomers: [],
    avgcookiesperhoue: [],
    total: 0,

    random: function () {
        for (let i = 0; i < workhure.length; i++) {
            this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

        }
    },

    AvgNum: function () {
        for (let i = 0; i < this.randomcustomers.length; i++) {
            this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
            this.total = this.total + this.avgcookiesperhoue[i];
        }
    }
};
Tokyo.random();
Tokyo.AvgNum();

console.log(Tokyo);

function rendertokyo() {

    let parent = document.getElementById("parent")

    let h2 = document.createElement('h2')

    parent.appendChild(h2);

    h2.textContent = 'Tokyo';

    let ul = document.createElement('ul');

    parent.appendChild(ul);


    for (let i = 0; i < workhure.length; i++) {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.textContent = ` ${workhure[i]} : ${Tokyo.avgcookiesperhoue[i]} cookies `
    };


    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total: ${Tokyo.total} cookies`;


};

rendertokyo();



let dubai = {
    mincus: 11,
    maxcus: 38,
    avgcus: 3.7,
    randomcustomers: [],
    avgcookiesperhoue: [],
    total: 0,

    random: function () {
        for (let i = 0; i < workhure.length; i++) {
            this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

        }
    },

    AvgNum: function () {
        for (let i = 0; i < this.randomcustomers.length; i++) {
            this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
            this.total = this.total + this.avgcookiesperhoue[i];
        }
    }
};
dubai.random();
dubai.AvgNum();

console.log(dubai);

function renderdubai() {

    let parent = document.getElementById("parent")

    let h2 = document.createElement('h2')

    parent.appendChild(h2);

    h2.textContent = 'Dubai';

    let ul = document.createElement('ul');

    parent.appendChild(ul);


    for (let i = 0; i < workhure.length; i++) {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.textContent = ` ${workhure[i]} : ${dubai.avgcookiesperhoue[i]} cookies `
    };


    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total: ${dubai.total} cookies`;


};

renderdubai();



let paris = {
    mincus: 20,
    maxcus: 38,
    avgcus: 2.3,
    randomcustomers: [],
    avgcookiesperhoue: [],
    total: 0,

    random: function () {
        for (let i = 0; i < workhure.length; i++) {
            this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

        }
    },

    AvgNum: function () {
        for (let i = 0; i < this.randomcustomers.length; i++) {
            this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
            this.total = this.total + this.avgcookiesperhoue[i];
        }
    }
};
paris.random();
paris.AvgNum();

console.log(paris);

function renderparis() {

    let parent = document.getElementById("parent")

    let h2 = document.createElement('h2')

    parent.appendChild(h2);

    h2.textContent = 'Paris';

    let ul = document.createElement('ul');

    parent.appendChild(ul);


    for (let i = 0; i < workhure.length; i++) {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.textContent = ` ${workhure[i]} : ${paris.avgcookiesperhoue[i]} cookies `
    };


    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total: ${paris.total} cookies`;


};

renderparis();



let lima = {
    mincus: 2,
    maxcus: 16,
    avgcus: 4.6,
    randomcustomers: [],
    avgcookiesperhoue: [],
    total: 0,

    random: function () {
        for (let i = 0; i < workhure.length; i++) {
            this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

        }
    },

    AvgNum: function () {
        for (let i = 0; i < this.randomcustomers.length; i++) {
            this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
            this.total = this.total + this.avgcookiesperhoue[i];
        }
    }
};
lima.random();
lima.AvgNum();

console.log(lima);

function renderlima() {

    let parent = document.getElementById("parent")

    let h2 = document.createElement('h2')

    parent.appendChild(h2);

    h2.textContent = 'Lima';

    let ul = document.createElement('ul');

    parent.appendChild(ul);


    for (let i = 0; i < workhure.length; i++) {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.textContent = ` ${workhure[i]} : ${lima.avgcookiesperhoue[i]} cookies `
    };


    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total: ${lima.total} cookies`;


};

renderlima();

