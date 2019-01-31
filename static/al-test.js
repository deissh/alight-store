"use strict";

let global = {};

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
    scope.items = [{
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
    scope.SelectItem = (id) => {
      // disable all watchers
      // todo: rewrite
      scope.selected = scope.items[id];
      console.log(scope.items[id]);
    };
    /**
     * @namespace viewer
     * @description aceept changes in preview panel
     */
    scope.Accept = () => {
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === scope.selected.id) {
          scope.items[i] = { ...scope.selected };
        }
      }
    }
    /**
     * @namespace viewer
     * @description discard all changes and set current values
     */
    scope.Dismis = () => {
      for (let i = 0; i < scope.items.length; i++) {
        if (scope.items[i].id === scope.selected.id) {
          scope.selected = scope.items[i];
        }
      }
    }

    /**
     * @namespace filter
     * @description start search
     */
    scope.Search = () => {
      scope.result = [];

      scope.items.forEach((item) => {
        if ((parseInt(scope.pricemin) > item.price || parseInt(scope.pricemax) < item.price)) {
          return;
        }

        scope.result.push(item);
      });
    };

    /**
     * @namespace filter
     * @description clear all filters and result
     */
    scope.Clear = () => {
      scope.pricemin = 1;
      scope.pricemax = 999;
      scope.title = null;

      scope.result = scope.items;
    };

    // todo: обвернуть внутрь scope или придумать более красивый способ
    evt.on('update', ({ value, key }) => {
      scope.$setValue(key, value)
    });

    // triger search with default values
    scope.Search();
    global = scope;
  };

  //todo: исправить то что текущий скоп перекрывает другие у дириктивы
  // '<input type="date" al-value="s.data">'
  alight.directives.al.datePicker = {
    init: (el, name, scope) => {
      const arg = name.split('*');
      const s = {
        event: arg[1],
        name: arg[0],
        input: null,
        template: function () {
          return `<input type="date" value="${this.date}">`
        },
        setter: function () {
          // для сохранения текущего this
          return (value) => $(this.input).val(value);
        },
        init: function () {
          this.date = scope.$watch(arg[0], this.setter()).value;

          this.input = $(this.template());
          this.input.change((e) => evt.emit('update', { value: e.target.value, key: this.name }));
          $(el).append(this.input);
        }
      };

      s.init();
    }
  }
});

const evt = {
  _cb: [],
  on: function (name, cb) {
    this._cb.push({ name, cb })
  },
  emit: function(name, data) {
    this._cb.forEach((fn) => {
      if (fn.name === name) {
        fn.cb(data);
      }
    });
  }
}