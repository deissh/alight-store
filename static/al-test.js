"use strict";

$(document).ready(() => {
    console.log("run.");

    alight.controllers.main_app = (scope) => {
        scope.items = [{
            id: 1,
            title: 'Toy',
            price: 340,
            amount: 3,
            category: 'Игрушка',
            arrival: '27.01.2018',
            validity: '01.01.2099',
            manufacturer: 1,
        }];
        scope.manufacturer = {
            '1': {
                name: 'someName',
                desc: 'some very short description',
            },
        };


    }
});
