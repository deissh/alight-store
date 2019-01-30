"use strict";

$(document).ready(() => {
  console.log("run.");

  alight.controllers.main_app = (scope) => {
    /**
     * @description selected item
     */
    scope.selected;
    /**
     * @description contain search result
     */
    scope.result = [];
    /**
     * @namespace filter
     * @description filter, minimal price
     * @type {number}
     */
    scope.pricemin = 1;
    /**
     * @namespace filter
     * @description filter, maximum price
     * @type {number}
     */
    scope.pricemax = 999;
    /**
     * @namespace filter
     * @description item title
     * @type {string}
     */
    scope.title = null;
    /**
     * @description current currency
     * @type {number}
     * 1 - rub
     * 2 - dollar
     * 3 - euro
     */
    scope.currency = 1;

    /**
     * @description contain all items
     */
    scope.items = [
      {
        "id": 0,
        "title": "non",
        "price": 333,
        "amount": 12,
        "category": "Еда",
        "arrival": "2016-07-23",
        "validity": "2016-09-11",
        "manufacturer": 1
      },
      {
        "id": 1,
        "title": "non",
        "price": 150,
        "amount": 10,
        "category": "Игрушка",
        "arrival": "2018-03-28",
        "validity": "2017-03-16",
        "manufacturer": 1
      },
      {
        "id": 2,
        "title": "fugiat",
        "price": 153,
        "amount": 21,
        "category": "Еда",
        "arrival": "2015-08-11",
        "validity": "2017-02-21",
        "manufacturer": 1
      },
      {
        "id": 3,
        "title": "nulla",
        "price": 286,
        "amount": 38,
        "category": "Игрушка",
        "arrival": "2018-11-09",
        "validity": "2017-09-21",
        "manufacturer": 1
      },
      {
        "id": 4,
        "title": "qui",
        "price": 149,
        "amount": 21,
        "category": "Еда",
        "arrival": "2017-09-25",
        "validity": "2017-05-16",
        "manufacturer": 1
      },
      {
        "id": 5,
        "title": "est",
        "price": 167,
        "amount": 30,
        "category": "Игрушка",
        "arrival": "2018-01-04",
        "validity": "2017-04-18",
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

    /**
     * @namespace viewer
     * @description set item preview
     */
    scope.selectItem = (it) => {
      // disable all watchers
      // todo: rewrite
      scope.selected = { ...it };
    };
    /**
     * @namespace viewer
     * @description aceept changes in preview panel
     */
    scope.accept = () => {
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === scope.selected.id) {
          scope.items[i] = scope.selected;
        }
      }
    }
    /**
     * @namespace viewer
     * @description discard all changes and set current values
     */
    scope.dismis = () => {
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === scope.selected.id) {
          scope.selected = scope.items[i];
        }
      }
    }
  };

  // alight.filters.price = (exp, scope) => {
  //   const ce = scope.$compile(exp);

  //   return (value) => {
  //     const result = [];
  //     console.log(ce());
      
  //     value.forEach((item) => {
  //       if (
  //         ce().price_min &&
  //         ce().price_max &&
  //         !ce() >= item.price <= ce().price_max
  //       ) {
  //         return;
  //       }

  //       result.push(item);
  //     });

  //     console.log(result);
      
  //     return result;
  //   };
  // };
});