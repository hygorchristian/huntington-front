/* eslint-disable no-underscore-dangle  */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

Object.defineProperty(exports, '__esModule', {
  value: true
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

const _react = require('react');

//
const _react2 = _interopRequireDefault(_react);

const _propTypes = require('prop-types');

const _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.css');

const _ic_back = require('./ic_back.svg');

const _ic_back2 = _interopRequireDefault(_ic_back);

const _ic_forward = require('./ic_forward.svg');

const _ic_forward2 = _interopRequireDefault(_ic_forward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) {
 if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`); } subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, enumerable: false, writable: true, configurable: true
}
}); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

const config = {
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  month_subs: ['Jan', 'Fev', 'Abr', 'Mar', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  weeks: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
  week_subs: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: function today() {
    return new Date();
  }
};
const TODAY = config.today();

const Calendar = (function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    const _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      current: config.today(),
      selected: config.today(),
      ldom: 30
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateMonth(0);
    }
  }, {
    key: 'updateMonth',
    value: function updateMonth(add) {
      const d = this.state.current;
      d.setMonth(d.getMonth() + add);
      const eom = new Date(d.getYear(), d.getMonth() + 1, 0).getDate();
      this.setState({
        current: d,
        ldom: eom
      });
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.updateMonth(-1);
    }
  }, {
    key: 'next',
    value: function next() {
      this.updateMonth(1);
    }
  }, {
    key: '_onDatePicked',
    value: function _onDatePicked(month, day) {
      const d = new Date(this.state.current.getTime());
      d.setMonth(d.getMonth() + month);
      d.setDate(day);
      this.props.onDatePicked(d);
      this.setState({
        selected: d
      });
    }
  }, {
    key: 'renderDay',
    value: function renderDay() {
      const _this2 = this;

      const opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      let baseClasses = 'day noselect';
      let today = '';
      let todayStyle = {};
      let containerStyle = {};
      if (opts.today) {
        today = 'current';
        todayStyle = {
          borderColor: this.props.accentColor
        };
      }

      let selected = '';
      let selectedStyle = {};
      if (opts.selected) {
        selected = 'selected';
        selectedStyle = {
          backgroundColor: this.props.accentColor
        };
        containerStyle = {
          color: '#ffffff'
        };
      }

      baseClasses += opts.current ? '' : ' non-current';

      return _react2.default.createElement(
        'div',
        {
 className: baseClasses,
          style: containerStyle
},
        _react2.default.createElement('div', { className: today, style: todayStyle }),
        _react2.default.createElement('div', { className: selected, style: selectedStyle }),
        _react2.default.createElement(
          'p',
          {
 onClick: function onClick(ev) {
              const day = ev.target.innerHTML;
              _this2._onDatePicked(opts.month, day);
            }
},
          opts.date.getDate()
        )
      );
    }
  }, {
    key: 'renderDays',
    value: function renderDays(copy) {
      const days = [];

      // set to beginning of month
      copy.setDate(1);

      // if we are missing no offset, include the previous week
      const offset = copy.getDay() === 0 ? 7 : copy.getDay();

      copy.setDate(-offset);

      let inMonth = false;
      let lastMonth = true;
      for (let i = 0; i < 42; i++) {
        // increase date
        copy.setDate(copy.getDate() + 1);

        // make sure we pass any previous month values
        if (i < 30 && copy.getDate() === 1) {
          inMonth = true;
          lastMonth = false;
        }
        // if we are seeing the '1' again, we have iterated over
        // the current month
        else if (i > 30 && copy.getDate() === 1) {
          inMonth = false;
        }

        const sel = new Date(this.state.selected.getTime());
        const isSelected = sel.getFullYear() === copy.getFullYear() && sel.getDate() === copy.getDate() && sel.getMonth() === copy.getMonth();

        const isToday = TODAY.getFullYear() === copy.getFullYear() && TODAY.getDate() === copy.getDate() && TODAY.getMonth() === copy.getMonth();

        days.push(this.renderDay({
          today: isToday,
          selected: isSelected,
          current: inMonth,
          month: inMonth ? 0 : lastMonth ? -1 : 1,
          date: copy
        }));
      }

      return days;
    }
  }, {
    key: 'renderHeaders',
    value: function renderHeaders() {
      const header = [];

      for (let i = 0; i < config.week_subs.length; i++) {
        header.push(_react2.default.createElement(
          'p',
          { className: 'day-headers noselect' },
          config.week_subs[i]
        ));
      }

      return header;
    }
  }, {
    key: 'render',
    value: function render() {
      // get su-sat header
      const header = this.renderHeaders();

      // copy our current time state
      const copy = new Date(this.state.current.getTime());

      // get the month days
      const days = this.renderDays(copy);

      const tWeek = config.weeks[this.state.selected.getDay()];
      const tDate = this.state.selected.getDate();
      const month = config.months[this.state.current.getMonth()];
      const year = this.state.current.getFullYear();
      const date = this.state.current.getDate();

      let upperDate = null;
      if (this.props.showHeader) {
        upperDate = _react2.default.createElement(
          'div',
          {
            className: 'flex-1 header center',
          },
          _react2.default.createElement(
            'p',
            { className: 'header-month' },
            tWeek
          ),
          _react2.default.createElement(
            'p',
            { className: 'header-day' },
            tDate
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: `${this.props.orientation} container` },
        null,
        _react2.default.createElement(
          'div',
          { className: 'padding' },
          _react2.default.createElement(
            'div',
            { className: 'month' },
            upperDate,
            _react2.default.createElement('img', {
              className: 'month-arrow-left', src: _ic_back2.default, alt: 'back', onClick: this.prev.bind(this)
            }),
            _react2.default.createElement(
              'p',
              { className: 'month-title' },
              month,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                { className: 'month-year' },
                year
              )
            ),
            _react2.default.createElement('img', {
 className: 'month-arrow-right', src: _ic_forward2.default, alt: 'forward', onClick: this.next.bind(this)
})
          ),
          _react2.default.createElement(
            'div',
            { className: 'footer' },
            header,
            days
          )
        )
      );
    }
  }]);

  return Calendar;
}(_react.Component));

Calendar.propTypes = {
  accentColor: _propTypes2.default.string,
  onDatePicked: _propTypes2.default.func,
  showHeader: _propTypes2.default.bool,
  orientation: _propTypes2.default.string
};

Calendar.defaultProps = {
  accentColor: '#6ea384',
  onDatePicked: function onDatePicked() {},
  showHeader: true,
  orientation: 'flex-col'
};

exports.default = Calendar;
