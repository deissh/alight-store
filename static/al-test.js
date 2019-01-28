"use strict";

$(document).ready(() => {
  console.log("run.");

  alight.controllers.main_app = (scope) => {
    scope.selected;

    scope.pricemin = 1;
    scope.pricemax = 999;
    scope.title = null;
    /*
      1 - rub
      2 - dollar
      3 - euro
    */
    scope.currency = 1;

    scope.items = [
      {
        "id": 0,
        "title": "non",
        "price": 333,
        "amount": 12,
        "category": "Еда",
        "arrival": "2016-07-23T11:21:14 -03:00",
        "validity": "2016-09-11T07:22:33 -03:00",
        "manufacturer": 1
      },
      {
        "id": 1,
        "title": "non",
        "price": 150,
        "amount": 10,
        "category": "Игрушка",
        "arrival": "2018-03-28T07:47:07 -03:00",
        "validity": "2017-03-16T08:05:17 -03:00",
        "manufacturer": 1
      },
      {
        "id": 2,
        "title": "fugiat",
        "price": 153,
        "amount": 21,
        "category": "Еда",
        "arrival": "2015-08-11T08:35:02 -03:00",
        "validity": "2017-02-21T04:14:05 -03:00",
        "manufacturer": 1
      },
      {
        "id": 3,
        "title": "nulla",
        "price": 286,
        "amount": 38,
        "category": "Игрушка",
        "arrival": "2018-11-09T05:39:00 -03:00",
        "validity": "2017-09-21T05:23:55 -03:00",
        "manufacturer": 1
      },
      {
        "id": 4,
        "title": "qui",
        "price": 149,
        "amount": 21,
        "category": "Еда",
        "arrival": "2017-09-25T04:36:01 -03:00",
        "validity": "2017-05-16T08:25:58 -03:00",
        "manufacturer": 1
      },
      {
        "id": 5,
        "title": "est",
        "price": 167,
        "amount": 30,
        "category": "Игрушка",
        "arrival": "2018-01-04T10:18:46 -03:00",
        "validity": "2017-04-18T05:34:21 -03:00",
        "manufacturer": 1
      }
    ];
    scope.manufacturer = {
      2: {
        name: 'Some name 2',
        desc: 'some very short description',
      },
      1: {
        name: 'Some name 1',
        desc: 'some very short description',
      },
      3: {
        name: 'Some name 3',
        desc: 'some very short description',
      },
    };

    scope.selectItem = (it) => {
      // todo: delete this
      console.log(it);
      scope.selected = it;
    };
    //todo: fix errors
    scope.accept = () => {
      console.log(scope.selected);
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === selected.id) {
          scope.items[i] = scope.selected;
        }
      }
    }
    scope.dismis = () => {
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === selected.id) {
          scope.selected = scope.items[i];
        }
      }
    }
  };

  alight.filters.price = (exp, scope) => {
    const ce = scope.$compile(exp);

    return (value) => {
      const result = [];
      console.log(ce());
      
      value.forEach((item) => {
        if (
          ce().price_min &&
          ce().price_max &&
          !ce() >= item.price <= ce().price_max
        ) {
          return;
        }

        result.push(item);
      });

      console.log(result);
      
      return result;
    };
  };
});