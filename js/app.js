'use strict';

let workhour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

let resturantplace = [];

function getRC(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

function Resturant(ResLoc, mincus, maxcus, avgcus) {
    this.ResLoc = ResLoc;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcus = avgcus;
    this.randomcustomers = [];

    this.avgcookiesperhoue = [];

    this.total = 0;
    resturantplace.push(this);

};
let seattle = new Resturant("Seattle", 23, 65, 6.3);

let Tokyo = new Resturant("Tokyo", 3, 24, 1.2);

let dubai = new Resturant("Dubai", 11, 38, 3.7);

let paris = new Resturant("Paris", 20, 38, 2.3);

let lima = new Resturant("Lima", 2, 16, 4.6);

Resturant.prototype.random = function () {
    for (let i = 0; i < workhour.length; i++) {
        this.randomcustomers[i] = getRC(this.mincus, this.maxcus);

    };
};
seattle.random();

Tokyo.random();

dubai.random();

paris.random();

lima.random();

Resturant.prototype.AvgNum = function () {
    for (let i = 0; i < this.randomcustomers.length; i++) {
        this.avgcookiesperhoue[i] = Math.floor(this.avgcus * this.randomcustomers[i]);
        this.total = this.total + this.avgcookiesperhoue[i];

    };
};
seattle.AvgNum();

Tokyo.AvgNum();

dubai.AvgNum();

paris.AvgNum();

lima.AvgNum();

// console.log(seattle);

// console.log(Tokyo);

// console.log(dubai);

// console.log(paris);

// console.log(lima);

let parent = document.getElementById('parent');

let table = document.createElement('table');

parent.appendChild(table);

function time() {

    let tr = document.createElement('tr');

    table.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = ``;

    for (let i = 0; i < workhour.length; i++) {
        let th = document.createElement('th');

        tr.appendChild(th);
        th.textContent = `${workhour[i]} `

    };
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = `Daily Location Total`;

};
time();

function renderSeattle() {
    let tr = document.createElement('tr');

    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${seattle.ResLoc}`;

    for (let i = 0; i < workhour.length; i++) {
        let td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = `${seattle.avgcookiesperhoue[i]}`
    };
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = `${seattle.total}`;
};
renderSeattle();

function renderTokyo() {
    let tr = document.createElement('tr');

    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${Tokyo.ResLoc}`;

    for (let i = 0; i < workhour.length; i++) {
        let td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = `${Tokyo.avgcookiesperhoue[i]}`
    };
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = `${Tokyo.total}`;
};
renderTokyo();

function renderDubai() {
    let tr = document.createElement('tr');

    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${dubai.ResLoc}`;

    for (let i = 0; i < workhour.length; i++) {
        let td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = `${dubai.avgcookiesperhoue[i]}`
    };
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = `${dubai.total}`;
};
renderDubai();

function renderParis() {
    let tr = document.createElement('tr');

    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${paris.ResLoc}`;

    for (let i = 0; i < workhour.length; i++) {
        let td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = `${paris.avgcookiesperhoue[i]}`
    };
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = `${paris.total}`;
};
renderParis();

function renderLima() {
    let tr = document.createElement('tr');

    table.appendChild(tr);

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${lima.ResLoc}`;

    for (let i = 0; i < workhour.length; i++) {
        let td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = `${lima.avgcookiesperhoue[i]}`
    };
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = `${lima.total}`;
};
renderLima();

function renderTotal() {

    let tr = document.createElement('tr');

    table.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = `Total`;


    let totalavg = 0;
    let sum=0;


    for (let i = 0; i < workhour.length; i++) {
        
        totalavg = 0;

        for (let y = 0; y < resturantplace.length; y++) {

            totalavg += resturantplace[y].avgcookiesperhoue[i];

            // totalavg += resturantplace[y].avgcookiesperhoue[i];

        };
        sum += totalavg

        let th = document.createElement('th')
        tr.appendChild(th);
        th.textContent = `${totalavg}`
    };
    let th = document.createElement('th')
    tr.appendChild(th);
    th.textContent=`${sum}`
};

renderTotal();
