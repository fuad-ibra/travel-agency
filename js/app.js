(() => {
  var e = {
      545: function (e) {
        e.exports = (function () {
          "use strict";
          var e = {
              d: function (t, s) {
                for (var i in s)
                  e.o(s, i) &&
                    !e.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: s[i] });
              },
              o: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              },
            },
            t = {};
          e.d(t, {
            default: function () {
              return j;
            },
          });
          var s = {
              days: "days",
              months: "months",
              years: "years",
              day: "day",
              month: "month",
              year: "year",
              eventChangeViewDate: "changeViewDate",
              eventChangeCurrentView: "changeCurrentView",
              eventChangeFocusDate: "changeFocusDate",
              eventChangeSelectedDate: "changeSelectedDate",
              eventChangeTime: "changeTime",
              eventChangeLastSelectedDate: "changeLastSelectedDate",
              actionSelectDate: "selectDate",
              actionUnselectDate: "unselectDate",
              cssClassWeekend: "-weekend-",
            },
            i = {
              classes: "",
              inline: !1,
              locale: {
                days: [
                  "Воскресенье",
                  "Понедельник",
                  "Вторник",
                  "Среда",
                  "Четверг",
                  "Пятница",
                  "Суббота",
                ],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: [
                  "Январь",
                  "Февраль",
                  "Март",
                  "Апрель",
                  "Май",
                  "Июнь",
                  "Июль",
                  "Август",
                  "Сентябрь",
                  "Октябрь",
                  "Ноябрь",
                  "Декабрь",
                ],
                monthsShort: [
                  "Янв",
                  "Фев",
                  "Мар",
                  "Апр",
                  "Май",
                  "Июн",
                  "Июл",
                  "Авг",
                  "Сен",
                  "Окт",
                  "Ноя",
                  "Дек",
                ],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1,
              },
              startDate: new Date(),
              firstDay: "",
              weekends: [6, 0],
              dateFormat: "",
              altField: "",
              altFieldDateFormat: "T",
              toggleSelected: !0,
              keyboardNav: !0,
              selectedDates: !1,
              container: "",
              isMobile: !1,
              visible: !1,
              position: "bottom left",
              offset: 12,
              view: s.days,
              minView: s.days,
              showOtherMonths: !0,
              selectOtherMonths: !0,
              moveToOtherMonthsOnSelect: !0,
              showOtherYears: !0,
              selectOtherYears: !0,
              moveToOtherYearsOnSelect: !0,
              minDate: "",
              maxDate: "",
              disableNavWhenOutOfRange: !0,
              multipleDates: !1,
              multipleDatesSeparator: ", ",
              range: !1,
              dynamicRange: !0,
              buttons: !1,
              monthsField: "monthsShort",
              showEvent: "focus",
              autoClose: !1,
              prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
              nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
              navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2",
              },
              timepicker: !1,
              onlyTimepicker: !1,
              dateTimeSeparator: " ",
              timeFormat: "",
              minHours: 0,
              maxHours: 24,
              minMinutes: 0,
              maxMinutes: 59,
              hoursStep: 1,
              minutesStep: 1,
              onSelect: !1,
              onChangeViewDate: !1,
              onChangeView: !1,
              onRenderCell: !1,
              onShow: !1,
              onHide: !1,
              onClickDayName: !1,
            };
          function n(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document;
            return "string" == typeof e ? t.querySelector(e) : e;
          }
          function r() {
            let {
                tagName: e = "div",
                className: t = "",
                innerHtml: s = "",
                id: i = "",
                attrs: n = {},
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              r = document.createElement(e);
            if (
              (t && r.classList.add(...t.split(" ")),
              i && (r.id = i),
              s && (r.innerHTML = s),
              n)
            )
              for (let e in n) r.setAttribute(e, n[e]);
            return r;
          }
          function a(e, t) {
            for (let [s, i] of Object.entries(t)) e.setAttribute(s, i);
            return e;
          }
          function o(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
          }
          function l(e) {
            let t = e.getHours(),
              s = t % 12 == 0 ? 12 : t % 12;
            return {
              year: e.getFullYear(),
              month: e.getMonth(),
              fullMonth:
                e.getMonth() + 1 < 10
                  ? "0" + (e.getMonth() + 1)
                  : e.getMonth() + 1,
              date: e.getDate(),
              fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
              day: e.getDay(),
              hours: t,
              fullHours: d(t),
              hours12: s,
              fullHours12: d(s),
              minutes: e.getMinutes(),
              fullMinutes:
                e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
            };
          }
          function d(e) {
            return e < 10 ? "0" + e : e;
          }
          function c(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [t, t + 9];
          }
          function h() {
            let e = [];
            for (var t = arguments.length, s = new Array(t), i = 0; i < t; i++)
              s[i] = arguments[i];
            return (
              s.forEach((t) => {
                if ("object" == typeof t) for (let s in t) t[s] && e.push(s);
                else t && e.push(t);
              }),
              e.join(" ")
            );
          }
          function u(e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s.days;
            if (!e || !t) return !1;
            let n = l(e),
              r = l(t);
            return {
              [s.days]:
                n.date === r.date && n.month === r.month && n.year === r.year,
              [s.months]: n.month === r.month && n.year === r.year,
              [s.years]: n.year === r.year,
            }[i];
          }
          function p(e, t, s) {
            let i = f(e, !1).getTime(),
              n = f(t, !1).getTime();
            return s ? i >= n : i > n;
          }
          function m(e, t) {
            return !p(e, t, !0);
          }
          function f(e) {
            let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              s = new Date(e.getTime());
            return "boolean" != typeof t || t || g(s), s;
          }
          function g(e) {
            return e.setHours(0, 0, 0, 0), e;
          }
          function v(e, t, s) {
            e.length
              ? e.forEach((e) => {
                  e.addEventListener(t, s);
                })
              : e.addEventListener(t, s);
          }
          function y(e, t) {
            return (
              !(!e || e === document || e instanceof DocumentFragment) &&
              (e.matches(t) ? e : y(e.parentNode, t))
            );
          }
          function b(e, t, s) {
            return e > s ? s : e < t ? t : e;
          }
          function w(e) {
            for (
              var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              s[i - 1] = arguments[i];
            return (
              s
                .filter((e) => e)
                .forEach((t) => {
                  for (let [s, i] of Object.entries(t))
                    if (void 0 !== i && "[object Object]" === i.toString()) {
                      let t = void 0 !== e[s] ? e[s].toString() : void 0,
                        n = i.toString(),
                        r = Array.isArray(i) ? [] : {};
                      (e[s] = e[s] ? (t !== n ? r : e[s]) : r), w(e[s], i);
                    } else e[s] = i;
                }),
              e
            );
          }
          function C(e) {
            let t = e;
            return (
              e instanceof Date || (t = new Date(e)),
              isNaN(t.getTime()) &&
                (console.log(
                  'Unable to convert value "'.concat(e, '" to Date object')
                ),
                (t = !1)),
              t
            );
          }
          function S(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
          }
          function x(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          class D {
            constructor() {
              let {
                type: e,
                date: t,
                dp: s,
                opts: i,
                body: n,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              x(this, "focus", () => {
                this.$cell.classList.add("-focus-"), (this.focused = !0);
              }),
                x(this, "removeFocus", () => {
                  this.$cell.classList.remove("-focus-"), (this.focused = !1);
                }),
                x(this, "select", () => {
                  this.$cell.classList.add("-selected-"), (this.selected = !0);
                }),
                x(this, "removeSelect", () => {
                  this.$cell.classList.remove(
                    "-selected-",
                    "-range-from-",
                    "-range-to-"
                  ),
                    (this.selected = !1);
                }),
                x(this, "onChangeSelectedDate", () => {
                  this.isDisabled ||
                    (this._handleSelectedStatus(),
                    this.opts.range && this._handleRangeStatus());
                }),
                x(this, "onChangeFocusDate", (e) => {
                  if (!e) return void (this.focused && this.removeFocus());
                  let t = u(e, this.date, this.type);
                  t ? this.focus() : !t && this.focused && this.removeFocus(),
                    this.opts.range && this._handleRangeStatus();
                }),
                x(
                  this,
                  "render",
                  () => (
                    (this.$cell.innerHTML = this._getHtml()),
                    (this.$cell.adpCell = this),
                    this.$cell
                  )
                ),
                (this.type = e),
                (this.singleType = this.type.slice(0, -1)),
                (this.date = t),
                (this.dp = s),
                (this.opts = i),
                (this.body = n),
                (this.customData = !1),
                this.init();
            }
            init() {
              let { range: e, onRenderCell: t } = this.opts;
              t &&
                (this.customData = t({
                  date: this.date,
                  cellType: this.singleType,
                  datepicker: this.dp,
                })),
                this._createElement(),
                this._bindDatepickerEvents(),
                this._handleInitialFocusStatus(),
                this.dp.hasSelectedDates &&
                  (this._handleSelectedStatus(),
                  e && this._handleRangeStatus());
            }
            _bindDatepickerEvents() {
              this.dp.on(s.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(s.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(s.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(s.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              let { year: e, month: t, date: s } = l(this.date);
              this.$cell = r({
                className: this._getClassName(),
                attrs: { "data-year": e, "data-month": t, "data-date": s },
              });
            }
            _getClassName() {
              var e, t;
              let i = new Date(),
                { selectOtherMonths: n, selectOtherYears: r } = this.opts,
                { minDate: a, maxDate: o } = this.dp,
                { day: d } = l(this.date),
                c = this._isOutOfMinMaxRange(),
                p =
                  null === (e = this.customData) || void 0 === e
                    ? void 0
                    : e.disabled,
                m = h("air-datepicker-cell", "-".concat(this.singleType, "-"), {
                  "-current-": u(i, this.date, this.type),
                  "-min-date-": a && u(a, this.date, this.type),
                  "-max-date-": o && u(o, this.date, this.type),
                }),
                f = "";
              switch (this.type) {
                case s.days:
                  f = h({
                    "-weekend-": this.dp.isWeekend(d),
                    "-other-month-": this.isOtherMonth,
                    "-disabled-": (this.isOtherMonth && !n) || c || p,
                  });
                  break;
                case s.months:
                  f = h({ "-disabled-": c || p });
                  break;
                case s.years:
                  f = h({
                    "-other-decade-": this.isOtherDecade,
                    "-disabled-": c || (this.isOtherDecade && !r) || p,
                  });
              }
              return h(
                m,
                f,
                null === (t = this.customData) || void 0 === t
                  ? void 0
                  : t.classes
              );
            }
            _getHtml() {
              var e;
              let { year: t, month: i, date: n } = l(this.date),
                { showOtherMonths: r, showOtherYears: a } = this.opts;
              if (null !== (e = this.customData) && void 0 !== e && e.html)
                return this.customData.html;
              switch (this.type) {
                case s.days:
                  return !r && this.isOtherMonth ? "" : n;
                case s.months:
                  return this.dp.locale[this.opts.monthsField][i];
                case s.years:
                  return !a && this.isOtherDecade ? "" : t;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e, maxDate: t } = this.dp,
                { type: i, date: n } = this,
                { month: r, year: a, date: o } = l(n),
                d = i === s.days,
                c = i === s.years,
                h =
                  !!e && new Date(a, c ? e.getMonth() : r, d ? o : e.getDate()),
                u =
                  !!t && new Date(a, c ? t.getMonth() : r, d ? o : t.getDate());
              return e && t
                ? m(h, e) || p(u, t)
                : e
                ? m(h, e)
                : t
                ? p(u, t)
                : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              let { rangeDateFrom: e, rangeDateTo: t } = this.dp,
                s = h({
                  "-in-range-":
                    e &&
                    t &&
                    ((i = this.date), (n = e), (r = t), p(i, n) && m(i, r)),
                  "-range-from-": e && u(this.date, e, this.type),
                  "-range-to-": t && u(this.date, t, this.type),
                });
              var i, n, r;
              this.$cell.classList.remove(
                "-range-from-",
                "-range-to-",
                "-in-range-"
              ),
                s && this.$cell.classList.add(...s.split(" "));
            }
            _handleSelectedStatus() {
              let e = this.dp._checkIfDateIsSelected(this.date, this.type);
              e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              u(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function E(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          let T = {
            [s.days]:
              '<div class="air-datepicker-body--day-names"></div>' +
              '<div class="air-datepicker-body--cells -'.concat(
                s.days,
                '-"></div>'
              ),
            [s.months]: '<div class="air-datepicker-body--cells -'.concat(
              s.months,
              '-"></div>'
            ),
            [s.years]: '<div class="air-datepicker-body--cells -'.concat(
              s.years,
              '-"></div>'
            ),
          };
          class k {
            constructor(e) {
              let { dp: t, type: i, opts: n } = e;
              E(this, "handleClick", (e) => {
                let t = e.target.adpCell;
                if (t.isDisabled) return;
                if (!this.dp.isMinViewReached) return void this.dp.down();
                let s = this.dp._checkIfDateIsSelected(t.date, t.type);
                s
                  ? this.dp._handleAlreadySelectedDates(s, t.date)
                  : this.dp.selectDate(t.date);
              }),
                E(this, "handleDayNameClick", (e) => {
                  let t = e.target.getAttribute("data-day-index");
                  this.opts.onClickDayName({
                    dayIndex: Number(t),
                    datepicker: this.dp,
                  });
                }),
                E(this, "onChangeCurrentView", (e) => {
                  e !== this.type ? this.hide() : (this.show(), this.render());
                }),
                E(this, "onMouseOverCell", (e) => {
                  let t = y(e.target, ".air-datepicker-cell");
                  this.dp.setFocusDate(!!t && t.adpCell.date);
                }),
                E(this, "onMouseOutCell", () => {
                  this.dp.setFocusDate(!1);
                }),
                E(this, "onClickBody", (e) => {
                  let { onClickDayName: t } = this.opts,
                    s = e.target;
                  s.closest(".air-datepicker-cell") && this.handleClick(e),
                    t &&
                      s.closest(".air-datepicker-body--day-name") &&
                      this.handleDayNameClick(e);
                }),
                E(this, "onMouseDown", (e) => {
                  this.pressed = !0;
                  let t = y(e.target, ".air-datepicker-cell"),
                    s = t && t.adpCell;
                  u(s.date, this.dp.rangeDateFrom) &&
                    (this.rangeFromFocused = !0),
                    u(s.date, this.dp.rangeDateTo) &&
                      (this.rangeToFocused = !0);
                }),
                E(this, "onMouseMove", (e) => {
                  if (!this.pressed || !this.dp.isMinViewReached) return;
                  e.preventDefault();
                  let t = y(e.target, ".air-datepicker-cell"),
                    s = t && t.adpCell,
                    {
                      selectedDates: i,
                      rangeDateTo: n,
                      rangeDateFrom: r,
                    } = this.dp;
                  if (!s || s.isDisabled) return;
                  let { date: a } = s;
                  if (2 === i.length) {
                    if (this.rangeFromFocused && !p(a, n)) {
                      let { hours: e, minutes: t } = l(r);
                      a.setHours(e),
                        a.setMinutes(t),
                        (this.dp.rangeDateFrom = a),
                        this.dp.replaceDate(r, a);
                    }
                    if (this.rangeToFocused && !m(a, r)) {
                      let { hours: e, minutes: t } = l(n);
                      a.setHours(e),
                        a.setMinutes(t),
                        (this.dp.rangeDateTo = a),
                        this.dp.replaceDate(n, a);
                    }
                  }
                }),
                E(this, "onMouseUp", () => {
                  (this.pressed = !1),
                    (this.rangeFromFocused = !1),
                    (this.rangeToFocused = !1);
                }),
                E(this, "onChangeViewDate", (e, t) => {
                  if (!this.isVisible) return;
                  let i = c(e),
                    n = c(t);
                  switch (this.dp.currentView) {
                    case s.days:
                      if (u(e, t, s.months)) return;
                      break;
                    case s.months:
                      if (u(e, t, s.years)) return;
                      break;
                    case s.years:
                      if (i[0] === n[0] && i[1] === n[1]) return;
                  }
                  this.render();
                }),
                E(this, "render", () => {
                  this.destroyCells(),
                    this._generateCells(),
                    this.cells.forEach((e) => {
                      this.$cells.appendChild(e.render());
                    });
                }),
                (this.dp = t),
                (this.type = i),
                (this.opts = n),
                (this.cells = []),
                (this.$el = ""),
                (this.pressed = !1),
                (this.isVisible = !0),
                this.init();
            }
            init() {
              this._buildBaseHtml(),
                this.type === s.days && this.renderDayNames(),
                this.render(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e, dynamicRange: t } = this.opts;
              v(this.$el, "mouseover", this.onMouseOverCell),
                v(this.$el, "mouseout", this.onMouseOutCell),
                v(this.$el, "click", this.onClickBody),
                e &&
                  t &&
                  (v(this.$el, "mousedown", this.onMouseDown),
                  v(this.$el, "mousemove", this.onMouseMove),
                  v(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(s.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(s.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              (this.$el = r({
                className: "air-datepicker-body -".concat(this.type, "-"),
                innerHtml: T[this.type],
              })),
                (this.$names = n(".air-datepicker-body--day-names", this.$el)),
                (this.$cells = n(".air-datepicker-body--cells", this.$el));
            }
            _getDayNamesHtml() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.dp.locale.firstDay,
                t = "",
                i = this.dp.isWeekend,
                { onClickDayName: n } = this.opts,
                r = e,
                a = 0;
              for (; a < 7; ) {
                let e = r % 7,
                  o = h("air-datepicker-body--day-name", {
                    [s.cssClassWeekend]: i(e),
                    "-clickable-": !!n,
                  }),
                  l = this.dp.locale.daysMin[e];
                (t += '<div class="'
                  .concat(o, "\" data-day-index='")
                  .concat(e, "'>")
                  .concat(l, "</div>")),
                  a++,
                  r++;
              }
              return t;
            }
            _getDaysCells() {
              let {
                  viewDate: e,
                  locale: { firstDay: t },
                } = this.dp,
                s = o(e),
                { year: i, month: n } = l(e),
                r = new Date(i, n, 1),
                a = new Date(i, n, s),
                d = r.getDay() - t,
                c = 6 - a.getDay() + t;
              (d = d < 0 ? d + 7 : d), (c = c > 6 ? c - 7 : c);
              let h = (function (e, t) {
                  let { year: s, month: i, date: n } = l(e);
                  return new Date(s, i, n - t);
                })(r, d),
                u = s + d + c,
                p = h.getDate(),
                { year: m, month: f } = l(h),
                g = 0;
              for (; g < u; ) {
                let e = new Date(m, f, p + g);
                this._generateCell(e), g++;
              }
            }
            _generateCell(e) {
              let { type: t, dp: s, opts: i } = this,
                n = new D({ type: t, dp: s, opts: i, date: e, body: this });
              return this.cells.push(n), n;
            }
            _generateDayCells() {
              this._getDaysCells();
            }
            _generateMonthCells() {
              let { year: e } = this.dp.parsedViewDate,
                t = 0;
              for (; t < 12; )
                this.cells.push(this._generateCell(new Date(e, t))), t++;
            }
            _generateYearCells() {
              let e = c(this.dp.viewDate),
                t = e[0] - 1,
                s = e[1] + 1,
                i = t;
              for (; i <= s; )
                this.cells.push(this._generateCell(new Date(i, 0))), i++;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCells() {
              switch (this.type) {
                case s.days:
                  this._generateDayCells();
                  break;
                case s.months:
                  this._generateMonthCells();
                  break;
                case s.years:
                  this._generateYearCells();
              }
            }
            show() {
              (this.isVisible = !0), this.$el.classList.remove("-hidden-");
            }
            hide() {
              (this.isVisible = !1), this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e) => e.destroy()),
                (this.cells = []),
                (this.$cells.innerHTML = "");
            }
            destroy() {
              this.destroyCells(),
                this.dp.off(s.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(s.eventChangeCurrentView, this.onChangeCurrentView);
            }
          }
          function M(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          class $ {
            constructor(e) {
              let { dp: t, opts: s } = e;
              M(this, "onClickNav", (e) => {
                let t = y(e.target, ".air-datepicker-nav--action");
                if (!t) return;
                let s = t.dataset.action;
                this.dp[s]();
              }),
                M(this, "onChangeViewDate", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                M(this, "onChangeCurrentView", () => {
                  this.render(), this._resetNavStatus(), this.handleNavStatus();
                }),
                M(this, "onClickNavTitle", () => {
                  this.dp.isFinalView || this.dp.up();
                }),
                M(this, "update", () => {
                  let { prevHtml: e, nextHtml: t } = this.opts;
                  (this.$prev.innerHTML = e),
                    (this.$next.innerHTML = t),
                    this._resetNavStatus(),
                    this.render(),
                    this.handleNavStatus();
                }),
                M(this, "renderDelay", () => {
                  setTimeout(this.render);
                }),
                M(this, "render", () => {
                  (this.$title.innerHTML = this._getTitle()),
                    (function (e, t) {
                      for (let s in t)
                        t[s] ? e.classList.add(s) : e.classList.remove(s);
                    })(this.$title, { "-disabled-": this.dp.isFinalView });
                }),
                (this.dp = t),
                (this.opts = s),
                this.init();
            }
            init() {
              this._createElement(),
                this._buildBaseHtml(),
                this._defineDOM(),
                this.render(),
                this.handleNavStatus(),
                this._bindEvents(),
                this._bindDatepickerEvents();
            }
            _defineDOM() {
              (this.$title = n(".air-datepicker-nav--title", this.$el)),
                (this.$prev = n('[data-action="prev"]', this.$el)),
                (this.$next = n('[data-action="next"]', this.$el));
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav),
                this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(s.eventChangeViewDate, this.onChangeViewDate),
                this.dp.on(s.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.on(s.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.on(s.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(s.eventChangeViewDate, this.onChangeViewDate),
                this.dp.off(s.eventChangeCurrentView, this.onChangeCurrentView),
                this.isNavIsFunction &&
                  (this.dp.off(s.eventChangeSelectedDate, this.renderDelay),
                  this.dp.opts.timepicker &&
                    this.dp.off(s.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = r({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e, opts: t } = this,
                s = t.navTitles[e.currentView];
              return "function" == typeof s
                ? s(e)
                : e.formatDate(e.viewDate, s);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e } = this.opts,
                { minDate: t, maxDate: i } = this.dp;
              if ((!t && !i) || !e) return;
              let { year: n, month: r } = this.dp.parsedViewDate,
                a = !!t && l(t),
                o = !!i && l(i);
              switch (this.dp.currentView) {
                case s.days:
                  t && a.month >= r && a.year >= n && this._disableNav("prev"),
                    i &&
                      o.month <= r &&
                      o.year <= n &&
                      this._disableNav("next");
                  break;
                case s.months:
                  t && a.year >= n && this._disableNav("prev"),
                    i && o.year <= n && this._disableNav("next");
                  break;
                case s.years: {
                  let e = c(this.dp.viewDate);
                  t && a.year >= e[0] && this._disableNav("prev"),
                    i && o.year <= e[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e) {
              n('[data-action="' + e + '"]', this.$el).classList.add(
                "-disabled-"
              );
            }
            _resetNavStatus() {
              !(function (e) {
                for (
                  var t = arguments.length,
                    s = new Array(t > 1 ? t - 1 : 0),
                    i = 1;
                  i < t;
                  i++
                )
                  s[i - 1] = arguments[i];
                e.length
                  ? e.forEach((e) => {
                      e.classList.remove(...s);
                    })
                  : e.classList.remove(...s);
              })(
                this.$el.querySelectorAll(".air-datepicker-nav--action"),
                "-disabled-"
              );
            }
            _buildBaseHtml() {
              let { prevHtml: e, nextHtml: t } = this.opts;
              this.$el.innerHTML =
                '<div class="air-datepicker-nav--action" data-action="prev">'.concat(
                  e,
                  "</div>"
                ) +
                '<div class="air-datepicker-nav--title"></div>' +
                '<div class="air-datepicker-nav--action" data-action="next">'.concat(
                  t,
                  "</div>"
                );
            }
            get isNavIsFunction() {
              let { navTitles: e } = this.opts;
              return Object.keys(e).find((t) => "function" == typeof e[t]);
            }
          }
          var L = {
            today: {
              content: (e) => e.locale.today,
              onClick: (e) => e.setViewDate(new Date()),
            },
            clear: {
              content: (e) => e.locale.clear,
              onClick: (e) => e.clear(),
            },
          };
          class _ {
            constructor(e) {
              let { dp: t, opts: s } = e;
              (this.dp = t), (this.opts = s), this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = r({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return (this.$el.innerHTML = ""), this;
            }
            generateButtons() {
              let { buttons: e } = this.opts;
              Array.isArray(e) || (e = [e]),
                e.forEach((e) => {
                  let t = e;
                  "string" == typeof e && L[e] && (t = L[e]);
                  let s = this.createButton(t);
                  t.onClick && this.attachEventToButton(s, t.onClick),
                    this.$el.appendChild(s);
                });
            }
            attachEventToButton(e, t) {
              e.addEventListener("click", () => {
                t(this.dp);
              });
            }
            createButton(e) {
              let {
                  content: t,
                  className: s,
                  tagName: i = "button",
                  attrs: n = {},
                } = e,
                a = "function" == typeof t ? t(this.dp) : t;
              return r({
                tagName: i,
                innerHtml: "<span tabindex='-1'>".concat(a, "</span>"),
                className: h("air-datepicker-button", s),
                attrs: n,
              });
            }
            render() {
              this.generateButtons();
            }
          }
          function P(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          class A {
            constructor() {
              let { opts: e, dp: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              P(this, "toggleTimepickerIsActive", (e) => {
                this.dp.timepickerIsActive = e;
              }),
                P(this, "onChangeSelectedDate", (e) => {
                  let { date: t, updateTime: s = !1 } = e;
                  t &&
                    (this.setMinMaxTime(t),
                    this.setCurrentTime(!!s && t),
                    this.addTimeToDate(t));
                }),
                P(this, "onChangeLastSelectedDate", (e) => {
                  e && (this.setTime(e), this.render());
                }),
                P(this, "onChangeInputRange", (e) => {
                  let t = e.target;
                  (this[t.getAttribute("name")] = t.value),
                    this.updateText(),
                    this.dp.trigger(s.eventChangeTime, {
                      hours: this.hours,
                      minutes: this.minutes,
                    });
                }),
                P(this, "onMouseEnterLeave", (e) => {
                  let t = e.target.getAttribute("name"),
                    s = this.$minutesText;
                  "hours" === t && (s = this.$hoursText),
                    s.classList.toggle("-focus-");
                }),
                P(this, "onFocus", () => {
                  this.toggleTimepickerIsActive(!0);
                }),
                P(this, "onBlur", () => {
                  this.toggleTimepickerIsActive(!1);
                }),
                (this.opts = e),
                (this.dp = t);
              let { timeFormat: i } = this.dp.locale;
              i && (i.match(S("h")) || i.match(S("hh"))) && (this.ampm = !0),
                this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
                this.createElement(),
                this.buildHtml(),
                this.defineDOM(),
                this.render(),
                this.bindDatepickerEvents(),
                this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(s.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.on(
                  s.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate
                );
            }
            bindDOMEvents() {
              let e = "input";
              navigator.userAgent.match(/trident/gi) && (e = "change"),
                v(this.$ranges, e, this.onChangeInputRange),
                v(this.$ranges, "mouseenter", this.onMouseEnterLeave),
                v(this.$ranges, "mouseleave", this.onMouseEnterLeave),
                v(this.$ranges, "focus", this.onFocus),
                v(this.$ranges, "mousedown", this.onFocus),
                v(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = r({
                className: h("air-datepicker-time", {
                  "-am-pm-": this.dp.ampm,
                }),
              });
            }
            destroy() {
              this.dp.off(s.eventChangeSelectedDate, this.onChangeSelectedDate),
                this.dp.off(
                  s.eventChangeLastSelectedDate,
                  this.onChangeLastSelectedDate
                ),
                this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let {
                ampm: e,
                hours: t,
                displayHours: s,
                minutes: i,
                minHours: n,
                minMinutes: r,
                maxHours: a,
                maxMinutes: o,
                dayPeriod: l,
                opts: { hoursStep: c, minutesStep: h },
              } = this;
              this.$el.innerHTML =
                '<div class="air-datepicker-time--current">' +
                '   <span class="air-datepicker-time--current-hours">'.concat(
                  d(s),
                  "</span>"
                ) +
                '   <span class="air-datepicker-time--current-colon">:</span>' +
                '   <span class="air-datepicker-time--current-minutes">'.concat(
                  d(i),
                  "</span>"
                ) +
                "   ".concat(
                  e
                    ? "<span class='air-datepicker-time--current-ampm'>".concat(
                        l,
                        "</span>"
                      )
                    : ""
                ) +
                '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
                '      <input type="range" name="hours" value="'
                  .concat(t, '" min="')
                  .concat(n, '" max="')
                  .concat(a, '" step="')
                  .concat(c, '"/>') +
                '   </div>   <div class="air-datepicker-time--row">' +
                '      <input type="range" name="minutes" value="'
                  .concat(i, '" min="')
                  .concat(r, '" max="')
                  .concat(o, '" step="')
                  .concat(h, '"/>') +
                "   </div></div>";
            }
            defineDOM() {
              let e = (e) => n(e, this.$el);
              (this.$ranges = this.$el.querySelectorAll('[type="range"]')),
                (this.$hours = e('[name="hours"]')),
                (this.$minutes = e('[name="minutes"]')),
                (this.$hoursText = e(".air-datepicker-time--current-hours")),
                (this.$minutesText = e(
                  ".air-datepicker-time--current-minutes"
                )),
                (this.$ampm = e(".air-datepicker-time--current-ampm"));
            }
            setTime(e) {
              this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
              e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
              if ((this.setMinMaxTimeFromOptions(), e)) {
                let { minDate: t, maxDate: s } = this.dp;
                t && u(e, t) && this.setMinTimeFromMinDate(t),
                  s && u(e, s) && this.setMaxTimeFromMaxDate(s);
              }
            }
            setCurrentTime(e) {
              let { hours: t, minutes: s } = e ? l(e) : this;
              (this.hours = b(t, this.minHours, this.maxHours)),
                (this.minutes = b(s, this.minMinutes, this.maxMinutes));
            }
            setMinMaxTimeFromOptions() {
              let {
                minHours: e,
                minMinutes: t,
                maxHours: s,
                maxMinutes: i,
              } = this.opts;
              (this.minHours = b(e, 0, 23)),
                (this.minMinutes = b(t, 0, 59)),
                (this.maxHours = b(s, 0, 23)),
                (this.maxMinutes = b(i, 0, 59));
            }
            setMinTimeFromMinDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.minHours = e.getHours()),
                t && t.getHours() > e.getHours()
                  ? (this.minMinutes = this.opts.minMinutes)
                  : (this.minMinutes = e.getMinutes());
            }
            setMaxTimeFromMaxDate(e) {
              let { lastSelectedDate: t } = this.dp;
              (this.maxHours = e.getHours()),
                t && t.getHours() < e.getHours()
                  ? (this.maxMinutes = this.opts.maxMinutes)
                  : (this.maxMinutes = e.getMinutes());
            }
            getDayPeriod(e, t) {
              let s = e,
                i = Number(e);
              e instanceof Date && ((s = l(e)), (i = Number(s.hours)));
              let n = "am";
              if (t || this.ampm) {
                switch (!0) {
                  case 12 === i:
                  case i > 11:
                    n = "pm";
                }
                i = i % 12 == 0 ? 12 : i % 12;
              }
              return { hours: i, dayPeriod: n };
            }
            updateSliders() {
              (a(this.$hours, {
                min: this.minHours,
                max: this.maxHours,
              }).value = this.hours),
                (a(this.$minutes, {
                  min: this.minMinutes,
                  max: this.maxMinutes,
                }).value = this.minutes);
            }
            updateText() {
              (this.$hoursText.innerHTML = d(this.displayHours)),
                (this.$minutesText.innerHTML = d(this.minutes)),
                this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
              this._hours = e;
              let { hours: t, dayPeriod: s } = this.getDayPeriod(e);
              (this.displayHours = t), (this.dayPeriod = s);
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function O(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          class N {
            constructor(e) {
              let { dp: t, opts: s } = e;
              O(this, "pressedKeys", new Set()),
                O(
                  this,
                  "hotKeys",
                  new Map([
                    [
                      [
                        ["Control", "ArrowRight"],
                        ["Control", "ArrowUp"],
                      ],
                      (e) => e.month++,
                    ],
                    [
                      [
                        ["Control", "ArrowLeft"],
                        ["Control", "ArrowDown"],
                      ],
                      (e) => e.month--,
                    ],
                    [
                      [
                        ["Shift", "ArrowRight"],
                        ["Shift", "ArrowUp"],
                      ],
                      (e) => e.year++,
                    ],
                    [
                      [
                        ["Shift", "ArrowLeft"],
                        ["Shift", "ArrowDown"],
                      ],
                      (e) => e.year--,
                    ],
                    [
                      [
                        ["Alt", "ArrowRight"],
                        ["Alt", "ArrowUp"],
                      ],
                      (e) => (e.year += 10),
                    ],
                    [
                      [
                        ["Alt", "ArrowLeft"],
                        ["Alt", "ArrowDown"],
                      ],
                      (e) => (e.year -= 10),
                    ],
                    [["Control", "Shift", "ArrowUp"], (e, t) => t.up()],
                  ])
                ),
                O(this, "handleHotKey", (e) => {
                  let t = this.hotKeys.get(e),
                    s = l(this.getInitialFocusDate());
                  t(s, this.dp);
                  let { year: i, month: n, date: r } = s,
                    a = o(new Date(i, n));
                  a < r && (r = a);
                  let d = this.dp.getClampedDate(new Date(i, n, r));
                  this.dp.setFocusDate(d, { viewDateTransition: !0 });
                }),
                O(this, "isHotKeyPressed", () => {
                  let e = !1,
                    t = this.pressedKeys.size,
                    s = (e) => this.pressedKeys.has(e);
                  for (let [i] of this.hotKeys) {
                    if (e) break;
                    if (Array.isArray(i[0]))
                      i.forEach((n) => {
                        e || t !== n.length || (e = n.every(s) && i);
                      });
                    else {
                      if (t !== i.length) continue;
                      e = i.every(s) && i;
                    }
                  }
                  return e;
                }),
                O(this, "isArrow", (e) => e >= 37 && e <= 40),
                O(this, "onKeyDown", (e) => {
                  let { key: t, which: s } = e,
                    {
                      dp: i,
                      dp: { focusDate: n },
                      opts: r,
                    } = this;
                  this.registerKey(t);
                  let a = this.isHotKeyPressed();
                  if (a) return e.preventDefault(), void this.handleHotKey(a);
                  if (this.isArrow(s))
                    return e.preventDefault(), void this.focusNextCell(t);
                  if ("Enter" === t) {
                    if (i.currentView !== r.minView) return void i.down();
                    if (n) {
                      let e = i._checkIfDateIsSelected(n);
                      return void (e
                        ? i._handleAlreadySelectedDates(e, n)
                        : i.selectDate(n));
                    }
                  }
                  "Escape" === t && this.dp.hide();
                }),
                O(this, "onKeyUp", (e) => {
                  this.removeKey(e.key);
                }),
                (this.dp = t),
                (this.opts = s),
                this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e } = this.dp;
              e.addEventListener("keydown", this.onKeyDown),
                e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e } = this.dp;
              e.removeEventListener("keydown", this.onKeyDown),
                e.removeEventListener("keyup", this.onKeyUp),
                (this.hotKeys = null),
                (this.pressedKeys = null);
            }
            getInitialFocusDate() {
              let {
                  focusDate: e,
                  currentView: t,
                  selectedDates: i,
                  parsedViewDate: { year: n, month: r },
                } = this.dp,
                a = e || i[i.length - 1];
              if (!a)
                switch (t) {
                  case s.days:
                    a = new Date(n, r, new Date().getDate());
                    break;
                  case s.months:
                    a = new Date(n, r, 1);
                    break;
                  case s.years:
                    a = new Date(n, 0, 1);
                }
              return a;
            }
            focusNextCell(e) {
              let t = this.getInitialFocusDate(),
                { currentView: i } = this.dp,
                { days: n, months: r, years: a } = s,
                o = l(t),
                d = o.year,
                c = o.month,
                h = o.date;
              switch (e) {
                case "ArrowLeft":
                  i === n && (h -= 1), i === r && (c -= 1), i === a && (d -= 1);
                  break;
                case "ArrowUp":
                  i === n && (h -= 7), i === r && (c -= 3), i === a && (d -= 4);
                  break;
                case "ArrowRight":
                  i === n && (h += 1), i === r && (c += 1), i === a && (d += 1);
                  break;
                case "ArrowDown":
                  i === n && (h += 7), i === r && (c += 3), i === a && (d += 4);
              }
              let u = this.dp.getClampedDate(new Date(d, c, h));
              this.dp.setFocusDate(u, { viewDateTransition: !0 });
            }
            registerKey(e) {
              this.pressedKeys.add(e);
            }
            removeKey(e) {
              this.pressedKeys.delete(e);
            }
          }
          let V = {
            on(e, t) {
              this.__events || (this.__events = {}),
                this.__events[e]
                  ? this.__events[e].push(t)
                  : (this.__events[e] = [t]);
            },
            off(e, t) {
              this.__events &&
                this.__events[e] &&
                (this.__events[e] = this.__events[e].filter((e) => e !== t));
            },
            removeAllEvents() {
              this.__events = {};
            },
            trigger(e) {
              for (
                var t = arguments.length,
                  s = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                s[i - 1] = arguments[i];
              this.__events &&
                this.__events[e] &&
                this.__events[e].forEach((e) => {
                  e(...s);
                });
            },
          };
          function I(e, t, s) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = s),
              e
            );
          }
          let F = "",
            H = "",
            z = "",
            B = !1;
          class j {
            constructor(e, t) {
              var a = this;
              if (
                (I(this, "viewIndexes", [s.days, s.months, s.years]),
                I(this, "next", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case s.days:
                      this.setViewDate(new Date(e, t + 1, 1));
                      break;
                    case s.months:
                      this.setViewDate(new Date(e + 1, t, 1));
                      break;
                    case s.years:
                      this.setViewDate(new Date(e + 10, 0, 1));
                  }
                }),
                I(this, "prev", () => {
                  let { year: e, month: t } = this.parsedViewDate;
                  switch (this.currentView) {
                    case s.days:
                      this.setViewDate(new Date(e, t - 1, 1));
                      break;
                    case s.months:
                      this.setViewDate(new Date(e - 1, t, 1));
                      break;
                    case s.years:
                      this.setViewDate(new Date(e - 10, 0, 1));
                  }
                }),
                I(this, "_finishHide", () => {
                  (this.hideAnimation = !1),
                    this._destroyComponents(),
                    this.$container.removeChild(this.$datepicker);
                }),
                I(this, "setPosition", function (e) {
                  let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if ("function" == typeof (e = e || a.opts.position))
                    return void (a.customHide = e({
                      $datepicker: a.$datepicker,
                      $target: a.$el,
                      $pointer: a.$pointer,
                      isViewChange: t,
                      done: a._finishHide,
                    }));
                  let s,
                    i,
                    { isMobile: n } = a.opts,
                    r = a.$el.getBoundingClientRect(),
                    o = a.$el.getBoundingClientRect(),
                    l = a.$datepicker.offsetParent,
                    d = a.$el.offsetParent,
                    c = a.$datepicker.getBoundingClientRect(),
                    h = e.split(" "),
                    u = window.scrollY,
                    p = window.scrollX,
                    m = a.opts.offset,
                    f = h[0],
                    g = h[1];
                  if (n) a.$datepicker.style.cssText = "left: 50%; top: 50%";
                  else {
                    if (
                      (l === d &&
                        l !== document.body &&
                        ((o = {
                          top: a.$el.offsetTop,
                          left: a.$el.offsetLeft,
                          width: r.width,
                          height: a.$el.offsetHeight,
                        }),
                        (u = 0),
                        (p = 0)),
                      l !== d && l !== document.body)
                    ) {
                      let e = l.getBoundingClientRect();
                      (o = {
                        top: r.top - e.top,
                        left: r.left - e.left,
                        width: r.width,
                        height: r.height,
                      }),
                        (u = 0),
                        (p = 0);
                    }
                    switch (f) {
                      case "top":
                        s = o.top - c.height - m;
                        break;
                      case "right":
                        i = o.left + o.width + m;
                        break;
                      case "bottom":
                        s = o.top + o.height + m;
                        break;
                      case "left":
                        i = o.left - c.width - m;
                    }
                    switch (g) {
                      case "top":
                        s = o.top;
                        break;
                      case "right":
                        i = o.left + o.width - c.width;
                        break;
                      case "bottom":
                        s = o.top + o.height - c.height;
                        break;
                      case "left":
                        i = o.left;
                        break;
                      case "center":
                        /left|right/.test(f)
                          ? (s = o.top + o.height / 2 - c.height / 2)
                          : (i = o.left + o.width / 2 - c.width / 2);
                    }
                    a.$datepicker.style.cssText = "left: "
                      .concat(i + p, "px; top: ")
                      .concat(s + u, "px");
                  }
                }),
                I(this, "_setInputValue", () => {
                  let {
                      opts: e,
                      $altField: t,
                      locale: { dateFormat: s },
                    } = this,
                    { altFieldDateFormat: i, altField: n } = e;
                  n && t && (t.value = this._getInputValue(i)),
                    (this.$el.value = this._getInputValue(s));
                }),
                I(this, "_getInputValue", (e) => {
                  let { selectedDates: t, opts: s } = this,
                    { multipleDates: i, multipleDatesSeparator: n } = s;
                  if (!t.length) return "";
                  let r = "function" == typeof e,
                    a = r
                      ? e(i ? t : t[0])
                      : t.map((t) => this.formatDate(t, e));
                  return (a = r ? a : a.join(n)), a;
                }),
                I(this, "_checkIfDateIsSelected", function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : s.days,
                    i = !1;
                  return (
                    a.selectedDates.some((s) => {
                      let n = u(e, s, t);
                      return (i = n && s), n;
                    }),
                    i
                  );
                }),
                I(this, "_scheduleCallAfterTransition", (e) => {
                  this._cancelScheduledCall(),
                    e && e(!1),
                    (this._onTransitionEnd = () => {
                      e && e(!0);
                    }),
                    this.$datepicker.addEventListener(
                      "transitionend",
                      this._onTransitionEnd,
                      { once: !0 }
                    );
                }),
                I(this, "_cancelScheduledCall", () => {
                  this.$datepicker.removeEventListener(
                    "transitionend",
                    this._onTransitionEnd
                  );
                }),
                I(this, "setViewDate", (e) => {
                  if (!((e = C(e)) instanceof Date)) return;
                  if (u(e, this.viewDate)) return;
                  let t = this.viewDate;
                  this.viewDate = e;
                  let { onChangeViewDate: i } = this.opts;
                  if (i) {
                    let { month: e, year: t } = this.parsedViewDate;
                    i({ month: e, year: t, decade: this.curDecade });
                  }
                  this.trigger(s.eventChangeViewDate, e, t);
                }),
                I(this, "setFocusDate", function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (!e || (e = C(e)) instanceof Date) &&
                    ((a.focusDate = e),
                    a.opts.range && e && a._handleRangeOnFocus(),
                    a.trigger(s.eventChangeFocusDate, e, t));
                }),
                I(this, "setCurrentView", (e) => {
                  if (this.viewIndexes.includes(e)) {
                    if (
                      ((this.currentView = e),
                      this.elIsInput &&
                        this.visible &&
                        this.setPosition(void 0, !0),
                      this.trigger(s.eventChangeCurrentView, e),
                      !this.views[e])
                    ) {
                      let t = (this.views[e] = new k({
                        dp: this,
                        opts: this.opts,
                        type: e,
                      }));
                      this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                    }
                    this.opts.onChangeView && this.opts.onChangeView(e);
                  }
                }),
                I(this, "_updateLastSelectedDate", (e) => {
                  (this.lastSelectedDate = e),
                    this.trigger(s.eventChangeLastSelectedDate, e);
                }),
                I(this, "destroy", () => {
                  let { showEvent: e, isMobile: t } = this.opts,
                    s = this.$datepicker.parentNode;
                  s && s.removeChild(this.$datepicker),
                    this.$el.removeEventListener(e, this._onFocus),
                    this.$el.removeEventListener("blur", this._onBlur),
                    window.removeEventListener("resize", this._onResize),
                    t && this._removeMobileAttributes(),
                    this.keyboardNav && this.keyboardNav.destroy(),
                    (this.views = null),
                    (this.nav = null),
                    (this.$datepicker = null),
                    (this.opts = null),
                    (this.$customContainer = null),
                    (this.viewDate = null),
                    (this.focusDate = null),
                    (this.selectedDates = null),
                    (this.rangeDateFrom = null),
                    (this.rangeDateTo = null);
                }),
                I(this, "update", (e) => {
                  let t = w({}, this.opts);
                  w(this.opts, e);
                  let {
                      timepicker: i,
                      buttons: n,
                      range: r,
                      selectedDates: a,
                      isMobile: o,
                    } = this.opts,
                    l = this.visible || this.treatAsInline;
                  this._createMinMaxDates(),
                    this._limitViewDateByMaxMinDates(),
                    this._handleLocale(),
                    !t.selectedDates && a && this.selectDate(a),
                    e.view && this.setCurrentView(e.view),
                    this._setInputValue(),
                    t.range && !r
                      ? ((this.rangeDateTo = !1), (this.rangeDateFrom = !1))
                      : !t.range &&
                        r &&
                        this.selectedDates.length &&
                        ((this.rangeDateFrom = this.selectedDates[0]),
                        (this.rangeDateTo = this.selectedDates[1])),
                    t.timepicker && !i
                      ? (l && this.timepicker.destroy(),
                        (this.timepicker = !1),
                        this.$timepicker.parentNode.removeChild(
                          this.$timepicker
                        ))
                      : !t.timepicker && i && this._addTimepicker(),
                    !t.buttons && n
                      ? this._addButtons()
                      : t.buttons && !n
                      ? (this.buttons.destroy(),
                        this.$buttons.parentNode.removeChild(this.$buttons))
                      : l &&
                        t.buttons &&
                        n &&
                        this.buttons.clearHtml().render(),
                    !t.isMobile && o
                      ? (this.treatAsInline || z || this._createMobileOverlay(),
                        this._addMobileAttributes(),
                        this.visible && this._showMobileOverlay())
                      : t.isMobile &&
                        !o &&
                        (this._removeMobileAttributes(),
                        this.visible &&
                          (z.classList.remove("-active-"),
                          "function" != typeof this.opts.position &&
                            this.setPosition())),
                    l &&
                      (this.nav.update(),
                      this.views[this.currentView].render(),
                      this.currentView === s.days &&
                        this.views[this.currentView].renderDayNames());
                }),
                I(this, "isOtherMonth", (e) => {
                  let { month: t } = l(e);
                  return t !== this.parsedViewDate.month;
                }),
                I(this, "isOtherYear", (e) => {
                  let { year: t } = l(e);
                  return t !== this.parsedViewDate.year;
                }),
                I(this, "isOtherDecade", (e) => {
                  let { year: t } = l(e),
                    [s, i] = c(this.viewDate);
                  return t < s || t > i;
                }),
                I(this, "_onChangeSelectedDate", (e) => {
                  let { silent: t } = e;
                  setTimeout(() => {
                    this._setInputValue(),
                      this.opts.onSelect && !t && this._triggerOnSelect();
                  });
                }),
                I(this, "_onChangeFocusedDate", function (e) {
                  let { viewDateTransition: t } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!e) return;
                  let s = !1;
                  t &&
                    (s =
                      a.isOtherMonth(e) ||
                      a.isOtherYear(e) ||
                      a.isOtherDecade(e)),
                    s && a.setViewDate(e);
                }),
                I(this, "_onChangeTime", (e) => {
                  let { hours: t, minutes: s } = e,
                    i = new Date(),
                    {
                      lastSelectedDate: n,
                      opts: { onSelect: r },
                    } = this,
                    a = n;
                  n || (a = i);
                  let o = this.getCell(a, this.currentViewSingular),
                    l = o && o.adpCell;
                  (l && l.isDisabled) ||
                    (a.setHours(t),
                    a.setMinutes(s),
                    n
                      ? (this._setInputValue(), r && this._triggerOnSelect())
                      : this.selectDate(a));
                }),
                I(this, "_onFocus", (e) => {
                  this.visible || this.show();
                }),
                I(this, "_onBlur", (e) => {
                  this.inFocus ||
                    !this.visible ||
                    this.opts.isMobile ||
                    this.hide();
                }),
                I(this, "_onMouseDown", (e) => {
                  this.inFocus = !0;
                }),
                I(this, "_onMouseUp", (e) => {
                  (this.inFocus = !1), this.$el.focus();
                }),
                I(this, "_onResize", () => {
                  this.visible &&
                    "function" != typeof this.opts.position &&
                    this.setPosition();
                }),
                I(this, "_onClickOverlay", () => {
                  this.visible && this.hide();
                }),
                I(this, "isWeekend", (e) => this.opts.weekends.includes(e)),
                I(this, "getClampedDate", (e) => {
                  let { minDate: t, maxDate: s } = this,
                    i = e;
                  return s && p(e, s) ? (i = s) : t && m(e, t) && (i = t), i;
                }),
                (this.$el = n(e)),
                !this.$el)
              )
                return;
              (this.$datepicker = r({ className: "air-datepicker" })),
                (this.opts = w({}, i, t)),
                (this.$customContainer =
                  !!this.opts.container && n(this.opts.container)),
                (this.$altField = n(this.opts.altField || !1)),
                F || (F = n("body"));
              let { view: o, startDate: d } = this.opts;
              d || (this.opts.startDate = new Date()),
                "INPUT" === this.$el.nodeName && (this.elIsInput = !0),
                (this.inited = !1),
                (this.visible = !1),
                (this.viewDate = C(this.opts.startDate)),
                (this.focusDate = !1),
                (this.initialReadonly = this.$el.getAttribute("readonly")),
                (this.customHide = !1),
                (this.currentView = o),
                (this.selectedDates = []),
                (this.views = {}),
                (this.keys = []),
                (this.rangeDateFrom = ""),
                (this.rangeDateTo = ""),
                (this.timepickerIsActive = !1),
                (this.treatAsInline = this.opts.inline || !this.elIsInput),
                this.init();
            }
            init() {
              let {
                opts: e,
                treatAsInline: t,
                opts: {
                  inline: s,
                  isMobile: i,
                  selectedDates: n,
                  keyboardNav: a,
                  onlyTimepicker: o,
                },
              } = this;
              var l;
              B ||
                s ||
                !this.elIsInput ||
                ((B = !0),
                (H = r({ className: (l = j.defaultContainerId), id: l })),
                F.appendChild(H)),
                !i || z || t || this._createMobileOverlay(),
                this._handleLocale(),
                this._bindSubEvents(),
                this._createMinMaxDates(),
                this._limitViewDateByMaxMinDates(),
                this.elIsInput &&
                  (s || this._bindEvents(),
                  a && !o && (this.keyboardNav = new N({ dp: this, opts: e }))),
                n && this.selectDate(n, { silent: !0 }),
                this.opts.visible && !t && this.show(),
                i && !t && this.$el.setAttribute("readonly", !0),
                t && this._createComponents();
            }
            _createMobileOverlay() {
              (z = r({ className: "air-datepicker-overlay" })),
                H.appendChild(z);
            }
            _createComponents() {
              let {
                opts: e,
                treatAsInline: t,
                opts: {
                  inline: s,
                  buttons: i,
                  timepicker: n,
                  position: r,
                  classes: a,
                  onlyTimepicker: o,
                  isMobile: l,
                },
              } = this;
              this._buildBaseHtml(),
                this.elIsInput && (s || this._setPositionClasses(r)),
                (!s && this.elIsInput) ||
                  this.$datepicker.classList.add("-inline-"),
                a && this.$datepicker.classList.add(...a.split(" ")),
                o && this.$datepicker.classList.add("-only-timepicker-"),
                l && !t && this._addMobileAttributes(),
                (this.views[this.currentView] = new k({
                  dp: this,
                  type: this.currentView,
                  opts: e,
                })),
                (this.nav = new $({ dp: this, opts: e })),
                n && this._addTimepicker(),
                i && this._addButtons(),
                this.$content.appendChild(this.views[this.currentView].$el),
                this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e in this.views) this.views[e].destroy();
              (this.views = {}),
                this.nav.destroy(),
                this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              z.addEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.add("-is-mobile-"),
                this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
              z.removeEventListener("click", this._onClickOverlay),
                this.$datepicker.classList.remove("-is-mobile-"),
                this.initialReadonly ||
                  "" === this.initialReadonly ||
                  this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e, maxDate: t } = this.opts;
              (this.minDate = !!e && C(e)), (this.maxDate = !!t && C(t));
            }
            _addTimepicker() {
              (this.$timepicker = r({ className: "air-datepicker--time" })),
                this.$datepicker.appendChild(this.$timepicker),
                (this.timepicker = new A({ dp: this, opts: this.opts })),
                this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              (this.$buttons = r({ className: "air-datepicker--buttons" })),
                this.$datepicker.appendChild(this.$buttons),
                (this.buttons = new _({ dp: this, opts: this.opts })),
                this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(s.eventChangeSelectedDate, this._onChangeSelectedDate),
                this.on(s.eventChangeFocusDate, this._onChangeFocusedDate),
                this.on(s.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e } = this.opts;
              var t, s;
              this.elIsInput
                ? e
                  ? ((t = this.$datepicker),
                    (s = this.$el).parentNode.insertBefore(t, s.nextSibling))
                  : this.$container.appendChild(this.$datepicker)
                : this.$el.appendChild(this.$datepicker),
                (this.$datepicker.innerHTML =
                  '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
                (this.$content = n(
                  ".air-datepicker--content",
                  this.$datepicker
                )),
                (this.$pointer = n(
                  ".air-datepicker--pointer",
                  this.$datepicker
                )),
                (this.$nav = n(
                  ".air-datepicker--navigation",
                  this.$datepicker
                ));
            }
            _handleLocale() {
              let {
                locale: e,
                dateFormat: t,
                firstDay: s,
                timepicker: i,
                onlyTimepicker: n,
                timeFormat: r,
                dateTimeSeparator: a,
              } = this.opts;
              var o;
              (this.locale = ((o = e), JSON.parse(JSON.stringify(o)))),
                t && (this.locale.dateFormat = t),
                void 0 !== r && "" !== r && (this.locale.timeFormat = r);
              let { timeFormat: l } = this.locale;
              if (
                ("" !== s && (this.locale.firstDay = s),
                i && "function" != typeof t)
              ) {
                let e = l ? a : "";
                this.locale.dateFormat = [this.locale.dateFormat, l || ""].join(
                  e
                );
              }
              n && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
              if ("function" == typeof e)
                return void this.$datepicker.classList.add("-custom-position-");
              let t = (e = e.split(" "))[0],
                s = e[1],
                i = "air-datepicker -"
                  .concat(t, "-")
                  .concat(s, "- -from-")
                  .concat(t, "-");
              this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus),
                this.$el.addEventListener("blur", this._onBlur),
                this.$datepicker.addEventListener(
                  "mousedown",
                  this._onMouseDown
                ),
                this.$datepicker.addEventListener("mouseup", this._onMouseUp),
                window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e, minDate: t, maxDate: s } = this;
              s && p(e, s) && this.setViewDate(s),
                t && m(e, t) && this.setViewDate(t);
            }
            formatDate() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.viewDate,
                t = arguments.length > 1 ? arguments[1] : void 0;
              if (((e = C(e)), !(e instanceof Date))) return;
              let s = t,
                i = this.locale,
                n = l(e),
                r = c(e),
                a = j.replacer,
                o = "am";
              this.opts.timepicker &&
                this.timepicker &&
                (o = this.timepicker.getDayPeriod(e).dayPeriod);
              let d = {
                T: e.getTime(),
                m: n.minutes,
                mm: n.fullMinutes,
                h: n.hours12,
                hh: n.fullHours12,
                H: n.hours,
                HH: n.fullHours,
                aa: o,
                AA: o.toUpperCase(),
                E: i.daysShort[n.day],
                EEEE: i.days[n.day],
                d: n.date,
                dd: n.fullDate,
                M: n.month + 1,
                MM: n.fullMonth,
                MMM: i.monthsShort[n.month],
                MMMM: i.months[n.month],
                yy: n.year.toString().slice(-2),
                yyyy: n.year,
                yyyy1: r[0],
                yyyy2: r[1],
              };
              for (let [e, t] of Object.entries(d)) s = a(s, S(e), t);
              return s;
            }
            down(e) {
              this._handleUpDownActions(e, "down");
            }
            up(e) {
              this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
              let t,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { currentView: n, parsedViewDate: r, selectedDates: a } = this,
                { updateTime: o } = i,
                {
                  moveToOtherMonthsOnSelect: l,
                  moveToOtherYearsOnSelect: d,
                  multipleDates: c,
                  range: h,
                  autoClose: u,
                } = this.opts,
                m = a.length;
              if (Array.isArray(e))
                return (
                  e.forEach((e) => {
                    this.selectDate(e, i);
                  }),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              if ((e = C(e)) instanceof Date) {
                if (
                  (n === s.days &&
                    e.getMonth() !== r.month &&
                    l &&
                    (t = new Date(e.getFullYear(), e.getMonth(), 1)),
                  n === s.years &&
                    e.getFullYear() !== r.year &&
                    d &&
                    (t = new Date(e.getFullYear(), 0, 1)),
                  t && this.setViewDate(t),
                  c && !h)
                ) {
                  if (m === c) return;
                  this._checkIfDateIsSelected(e) || a.push(e);
                } else if (h)
                  switch (m) {
                    case 1:
                      a.push(e),
                        this.rangeDateTo || (this.rangeDateTo = e),
                        p(this.rangeDateFrom, this.rangeDateTo) &&
                          ((this.rangeDateTo = this.rangeDateFrom),
                          (this.rangeDateFrom = e)),
                        (this.selectedDates = [
                          this.rangeDateFrom,
                          this.rangeDateTo,
                        ]);
                      break;
                    case 2:
                      (this.selectedDates = [e]),
                        (this.rangeDateFrom = e),
                        (this.rangeDateTo = "");
                      break;
                    default:
                      (this.selectedDates = [e]), (this.rangeDateFrom = e);
                  }
                else this.selectedDates = [e];
                return (
                  this.trigger(s.eventChangeSelectedDate, {
                    action: s.actionSelectDate,
                    silent: null == i ? void 0 : i.silent,
                    date: e,
                    updateTime: o,
                  }),
                  this._updateLastSelectedDate(e),
                  u &&
                    !this.timepickerIsActive &&
                    this.visible &&
                    (c || h ? h && 1 === m && this.hide() : this.hide()),
                  new Promise((e) => {
                    setTimeout(e);
                  })
                );
              }
            }
            unselectDate(e) {
              let t = this.selectedDates,
                i = this;
              if ((e = C(e)) instanceof Date)
                return t.some((n, r) => {
                  if (u(n, e))
                    return (
                      t.splice(r, 1),
                      i.selectedDates.length
                        ? i._updateLastSelectedDate(
                            i.selectedDates[i.selectedDates.length - 1]
                          )
                        : ((i.rangeDateFrom = ""),
                          (i.rangeDateTo = ""),
                          i._updateLastSelectedDate(!1)),
                      this.trigger(s.eventChangeSelectedDate, {
                        action: s.actionUnselectDate,
                        date: e,
                      }),
                      !0
                    );
                });
            }
            replaceDate(e, t) {
              let i = this.selectedDates.find((t) => u(t, e, this.currentView)),
                n = this.selectedDates.indexOf(i);
              n < 0 ||
                u(this.selectedDates[n], t, this.currentView) ||
                ((this.selectedDates[n] = t),
                this.trigger(s.eventChangeSelectedDate, {
                  action: s.actionSelectDate,
                  date: t,
                  updateTime: !0,
                }),
                this._updateLastSelectedDate(t));
            }
            clear() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                (this.selectedDates = []),
                (this.rangeDateFrom = !1),
                (this.rangeDateTo = !1),
                this.trigger(s.eventChangeSelectedDate, {
                  action: s.actionUnselectDate,
                  silent: e.silent,
                }),
                new Promise((e) => {
                  setTimeout(e);
                })
              );
            }
            show() {
              let { onShow: e, isMobile: t } = this.opts;
              this._cancelScheduledCall(),
                this.visible || this.hideAnimation || this._createComponents(),
                this.setPosition(this.opts.position),
                this.$datepicker.classList.add("-active-"),
                (this.visible = !0),
                e && this._scheduleCallAfterTransition(e),
                t && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e, isMobile: t } = this.opts,
                s = this._hasTransition();
              (this.visible = !1),
                (this.hideAnimation = !0),
                this.$datepicker.classList.remove("-active-"),
                this.customHide && this.customHide(),
                this.elIsInput && this.$el.blur(),
                this._scheduleCallAfterTransition((t) => {
                  !this.customHide &&
                    ((t && s) || (!t && !s)) &&
                    this._finishHide(),
                    e && e(t);
                }),
                t && z.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e = [],
                t = [],
                {
                  selectedDates: s,
                  locale: i,
                  opts: { onSelect: n, multipleDates: r, range: a },
                } = this,
                o = r || a,
                l = "function" == typeof i.dateFormat;
              s.length &&
                ((e = s.map(f)),
                (t = l
                  ? r
                    ? i.dateFormat(e)
                    : e.map((e) => i.dateFormat(e))
                  : e.map((e) => this.formatDate(e, i.dateFormat)))),
                n({
                  date: o ? e : e[0],
                  formattedDate: o ? t : t[0],
                  datepicker: this,
                });
            }
            _handleAlreadySelectedDates(e, t) {
              let { range: s, toggleSelected: i } = this.opts;
              s
                ? i
                  ? this.unselectDate(t)
                  : 2 !== this.selectedDates.length && this.selectDate(t)
                : i && this.unselectDate(t),
                i || this._updateLastSelectedDate(e);
            }
            _handleUpDownActions(e, t) {
              if (
                !((e = C(e || this.focusDate || this.viewDate)) instanceof Date)
              )
                return;
              let s = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
              s > 2 && (s = 2),
                s < 0 && (s = 0),
                this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)),
                this.setCurrentView(this.viewIndexes[s]);
            }
            _handleRangeOnFocus() {
              1 === this.selectedDates.length &&
                (p(this.selectedDates[0], this.focusDate)
                  ? ((this.rangeDateTo = this.selectedDates[0]),
                    (this.rangeDateFrom = this.focusDate))
                  : ((this.rangeDateTo = this.focusDate),
                    (this.rangeDateFrom = this.selectedDates[0])));
            }
            getCell(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s.day;
              if (!((e = C(e)) instanceof Date)) return;
              let { year: i, month: n, date: r } = l(e),
                a = '[data-year="'.concat(i, '"]'),
                o = '[data-month="'.concat(n, '"]'),
                d = '[data-date="'.concat(r, '"]'),
                c = {
                  [s.day]: "".concat(a).concat(o).concat(d),
                  [s.month]: "".concat(a).concat(o),
                  [s.year]: "".concat(a),
                };
              return this.views[this.currentView].$el.querySelector(c[t]);
            }
            _showMobileOverlay() {
              z.classList.add("-active-");
            }
            _hasTransition() {
              return (
                window
                  .getComputedStyle(this.$datepicker)
                  .getPropertyValue("transition-duration")
                  .split(", ")
                  .reduce((e, t) => parseFloat(t) + e, 0) > 0
              );
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return l(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return c(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === s.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return (
                this.currentView === this.opts.minView ||
                this.currentView === s.days
              );
            }
            get $container() {
              return this.$customContainer || H;
            }
            static replacer(e, t, s) {
              return e.replace(t, function (e, t, i, n) {
                return t + s + n;
              });
            }
          }
          var R;
          return (
            I(j, "defaults", i),
            I(j, "version", "3.2.0"),
            I(j, "defaultContainerId", "air-datepicker-global-container"),
            (R = j.prototype),
            Object.assign(R, V),
            t.default
          );
        })();
      },
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function a(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              r = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - n.clientTop : s.left + r.x - n.clientLeft
            );
          }
          function d(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function c(e, t, s) {
            s > 0 &&
              (m(e, t),
              setTimeout(function () {
                f(e, t);
              }, s));
          }
          function h(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function u(e) {
            return Array.isArray(e) ? e : [e];
          }
          function p(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function y() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function b() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function C(e, t) {
            return 100 / (t - e);
          }
          function S(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function x(e, t) {
            return S(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function D(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function E(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function T(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = E(s, e),
              n = e[i - 1],
              r = e[i],
              a = t[i - 1],
              o = t[i];
            return a + x([n, r], s) / C(a, o);
          }
          function k(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = E(s, t),
              n = e[i - 1],
              r = e[i],
              a = t[i - 1];
            return D([n, r], (s - a) * C(a, t[i]));
          }
          function M(e, t, s, i) {
            if (100 === i) return i;
            var n = E(i, e),
              r = e[n - 1],
              a = e[n];
            return s
              ? i - r > (a - r) / 2
                ? a
                : r
              : t[n - 1]
              ? e[n - 1] + o(i - e[n - 1], t[n - 1])
              : i;
          }
          var $, L;
          (e.PipsMode = void 0),
            ((L = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (L.Steps = "steps"),
            (L.Positions = "positions"),
            (L.Count = "count"),
            (L.Values = "values"),
            (e.PipsType = void 0),
            (($ = e.PipsType || (e.PipsType = {}))[($.None = -1)] = "None"),
            ($[($.NoValue = 0)] = "NoValue"),
            ($[($.LargeValue = 1)] = "LargeValue"),
            ($[($.SmallValue = 2)] = "SmallValue");
          var _ = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([u(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = S(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var r = 1,
                    a = t[n],
                    o = 0,
                    l = 0,
                    d = 0,
                    c = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    a > 0;

                  )
                    (o = this.xPct[n + 1 + c] - this.xPct[n + c]),
                      t[n + c] * r + 100 - 100 * i > 100
                        ? ((l = o * i), (r = (a - 100 * i) / t[n + c]), (i = 1))
                        : ((l = ((t[n + c] * o) / 100) * r), (r = 0)),
                      s
                        ? ((d -= l), this.xPct.length + c >= 1 && c--)
                        : ((d += l), this.xPct.length - c >= 1 && c++),
                      (a = t[n + c] * r);
                  return e + d;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = T(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return k(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = M(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = E(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = E(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(p);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !d(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !d(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        S([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        C(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            P = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            A = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            O = { tooltips: ".__tooltips", aria: ".__aria" };
          function N(e, t) {
            if (!d(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function V(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function I(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function F(e, t) {
            if (!d(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function H(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new _(t, e.snap || !1, e.singleStep);
          }
          function z(e, t) {
            if (((t = u(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function B(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function R(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function q(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function G(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function W(e, t) {
            if (!d(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!d(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var s;
            if (!d(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !d(t[0]) && !d(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function X(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              a = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              d = t.indexOf("smooth-steps") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              W(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: i,
              dragAll: l,
              smoothSteps: d,
              fixed: n,
              snap: r,
              hover: a,
              unconstrained: o,
            };
          }
          function J(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = u(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function Z(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: P,
                format: P,
              },
              s = {
                step: { r: !1, t: N },
                keyboardPageMultiplier: { r: !1, t: V },
                keyboardMultiplier: { r: !1, t: I },
                keyboardDefaultStep: { r: !1, t: F },
                start: { r: !0, t: z },
                connect: { r: !0, t: q },
                direction: { r: !0, t: X },
                snap: { r: !1, t: B },
                animate: { r: !1, t: j },
                animationDuration: { r: !1, t: R },
                range: { r: !0, t: H },
                orientation: { r: !1, t: G },
                margin: { r: !1, t: W },
                limit: { r: !1, t: U },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: Z },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: J },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Q },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: A,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (n(e[r]) || void 0 !== i[r])
                  s[r].t(t, n(e[r]) ? e[r] : i[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              a = void 0 !== r.style.msTransform,
              o = void 0 !== r.style.transform;
            t.transformRule = o
              ? "transform"
              : a
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function ae(t, s, o) {
            var d,
              p,
              C,
              S,
              x,
              D = y(),
              E = w() && b(),
              T = t,
              k = s.spectrum,
              M = [],
              $ = [],
              L = [],
              _ = 0,
              P = {},
              A = t.ownerDocument,
              N = s.documentElement || A.documentElement,
              V = A.body,
              I = "rtl" === A.dir || 1 === s.ort ? 0 : 100;
            function F(e, t) {
              var s = A.createElement("div");
              return t && m(s, t), e.appendChild(s), s;
            }
            function H(e, t) {
              var i = F(e, s.cssClasses.origin),
                n = F(i, s.cssClasses.handle);
              if (
                (F(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return pe(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  n.setAttribute(e, r[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? m(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && m(n, s.cssClasses.handleUpper),
                i
              );
            }
            function z(e, t) {
              return !!t && F(e, s.cssClasses.connect);
            }
            function B(e, t) {
              var i = F(t, s.cssClasses.connects);
              (p = []), (C = []).push(z(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                p.push(H(t, n)), (L[n] = n), C.push(z(i, e[n + 1]));
            }
            function j(e) {
              return (
                m(e, s.cssClasses.target),
                0 === s.dir ? m(e, s.cssClasses.ltr) : m(e, s.cssClasses.rtl),
                0 === s.ort
                  ? m(e, s.cssClasses.horizontal)
                  : m(e, s.cssClasses.vertical),
                m(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                F(e, s.cssClasses.base)
              );
            }
            function R(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                F(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function q() {
              return T.hasAttribute("disabled");
            }
            function G(e) {
              return p[e].hasAttribute("disabled");
            }
            function W() {
              x &&
                (ve("update" + O.tooltips),
                x.forEach(function (e) {
                  e && i(e);
                }),
                (x = null));
            }
            function U() {
              W(),
                (x = p.map(R)),
                fe("update" + O.tooltips, function (e, t, i) {
                  if (x && s.tooltips && !1 !== x[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (x[t].innerHTML = n);
                  }
                });
            }
            function Y() {
              ve("update" + O.aria),
                fe("update" + O.aria, function (e, t, i, n, r) {
                  L.forEach(function (e) {
                    var t = p[e],
                      n = be($, e, 0, !0, !0, !0),
                      a = be($, e, 100, !0, !0, !0),
                      o = r[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = k.fromStepping(n).toFixed(1)),
                      (a = k.fromStepping(a).toFixed(1)),
                      (o = k.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", a),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function X(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return k.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return k.fromStepping(k.getStep(k.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return k.fromStepping(t ? k.getStep(e) : e);
              });
            }
            function J(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = X(t),
                n = {},
                r = k.xVal[0],
                o = k.xVal[k.xVal.length - 1],
                l = !1,
                d = !1,
                c = 0;
              return (
                (i = a(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (i.unshift(r), (l = !0)),
                i[i.length - 1] !== o && (i.push(o), (d = !0)),
                i.forEach(function (r, a) {
                  var o,
                    h,
                    u,
                    p,
                    m,
                    f,
                    g,
                    v,
                    y,
                    b,
                    w = r,
                    C = i[a + 1],
                    S = t.mode === e.PipsMode.Steps;
                  for (
                    S && (o = k.xNumSteps[a]),
                      o || (o = C - w),
                      void 0 === C && (C = w),
                      o = Math.max(o, 1e-7),
                      h = w;
                    h <= C;
                    h = s(h, o)
                  ) {
                    for (
                      v = (m = (p = k.toStepping(h)) - c) / (t.density || 1),
                        b = m / (y = Math.round(v)),
                        u = 1;
                      u <= y;
                      u += 1
                    )
                      n[(f = c + u * b).toFixed(5)] = [k.fromStepping(f), 0];
                    (g =
                      i.indexOf(h) > -1
                        ? e.PipsType.LargeValue
                        : S
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !a && l && h !== C && (g = 0),
                      (h === C && d) || (n[p.toFixed(5)] = [h, g]),
                      (c = p);
                  }
                }),
                n
              );
            }
            function Q(t, i, n) {
              var r,
                a,
                o = A.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                d =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  a),
                c = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                h = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function u(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : d;
                return t + " " + (i ? c : h)[s.ort] + " " + n[e];
              }
              function p(t, r, a) {
                if ((a = i ? i(r, a) : a) !== e.PipsType.None) {
                  var l = F(o, !1);
                  (l.className = u(a, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    a > e.PipsType.NoValue &&
                      (((l = F(o, !1)).className = u(a, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(r))));
                }
              }
              return (
                m(o, s.cssClasses.pips),
                m(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  p(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function Z() {
              S && (i(S), (S = null));
            }
            function ee(e) {
              Z();
              var t = J(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (S = T.appendChild(Q(t, s, i)));
            }
            function te() {
              var e = d.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || d[t] : e.height || d[t];
            }
            function se(e, t, i, n) {
              var r = function (r) {
                  var a = ie(r, n.pageOffset, n.target || t);
                  return (
                    !!a &&
                    !(q() && !n.doNotReject) &&
                    !(g(T, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === D.start && void 0 !== a.buttons && a.buttons > 1) &&
                    (!n.hover || !a.buttons) &&
                    (E || a.preventDefault(),
                    (a.calcPoint = a.points[s.ort]),
                    void i(a, n))
                  );
                },
                a = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!E && { passive: !0 }),
                    a.push([e, r]);
                }),
                a
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                a = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var d = Array.prototype.filter.call(e.touches, l);
                  if (d.length > 1) return !1;
                  (a = d[0].pageX), (o = d[0].pageY);
                } else {
                  var c = Array.prototype.find.call(e.changedTouches, l);
                  if (!c) return !1;
                  (a = c.pageX), (o = c.pageY);
                }
              }
              return (
                (t = t || v(A)),
                (n || r) && ((a = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [a, o]),
                (e.cursor = n || r),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(d, s.ort))) / te();
              return (t = h(t)), s.dir ? 100 - t : t;
            }
            function ae(e) {
              var t = 100,
                s = !1;
              return (
                p.forEach(function (i, n) {
                  if (!G(n)) {
                    var r = $[n],
                      a = Math.abs(r - e);
                    (a < t || (a <= t && e > r) || (100 === a && 100 === t)) &&
                      ((s = n), (t = a));
                  }
                }),
                s
              );
            }
            function oe(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                de(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return de(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Ce(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function de(e, t) {
              t.handle && (f(t.handle, s.cssClasses.active), (_ -= 1)),
                t.listeners.forEach(function (e) {
                  N.removeEventListener(e[0], e[1]);
                }),
                0 === _ &&
                  (f(T, s.cssClasses.drag),
                  De(),
                  e.cursor &&
                    ((V.style.cursor = ""),
                    V.removeEventListener("selectstart", r))),
                s.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    Ee(e, $[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    ye("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  ye("change", e), ye("set", e), ye("end", e);
                });
            }
            function ce(e, t) {
              if (!t.handleNumbers.some(G)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = p[t.handleNumbers[0]].children[0]),
                  (_ += 1),
                  m(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  a = se(D.move, N, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: $.slice(),
                  }),
                  o = se(D.end, N, de, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", N, oe, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, a.concat(o, l)),
                  e.cursor &&
                    ((V.style.cursor = getComputedStyle(e.target).cursor),
                    p.length > 1 && m(T, s.cssClasses.drag),
                    V.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    ye("start", e);
                  });
              }
            }
            function he(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = ae(t);
              !1 !== i &&
                (s.events.snap || c(T, s.cssClasses.tap, s.animationDuration),
                Ee(i, t, !0, !0),
                De(),
                ye("slide", i, !0),
                ye("update", i, !0),
                s.events.snap
                  ? ce(e, { handleNumbers: [i] })
                  : (ye("change", i, !0), ye("set", i, !0)));
            }
            function ue(e) {
              var t = ne(e.calcPoint),
                s = k.getStep(t),
                i = k.fromStepping(s);
              Object.keys(P).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  P[e].forEach(function (e) {
                    e.call(Ie, i);
                  });
              });
            }
            function pe(e, t) {
              if (q() || G(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                a = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), r.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                d = l === r[0],
                c = l === r[1],
                h = l === n[0] || l === i[0] || d,
                u = l === n[1] || l === i[1] || c,
                p = l === a[0],
                m = l === a[1];
              if (!(h || u || p || m)) return !0;
              if ((e.preventDefault(), u || h)) {
                var f = h ? 0 : 1,
                  g = Ae(t)[f];
                if (null === g) return !1;
                !1 === g &&
                  (g = k.getDefaultStep($[t], h, s.keyboardDefaultStep)),
                  (g *=
                    c || d ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= h ? -1 : 1),
                  (o = M[t] + g);
              } else
                o = m
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Ee(t, k.toStepping(o), !0, !0),
                ye("slide", t),
                ye("update", t),
                ye("change", t),
                ye("set", t),
                !1
              );
            }
            function me(e) {
              e.fixed ||
                p.forEach(function (e, t) {
                  se(D.start, e.children[0], ce, { handleNumbers: [t] });
                }),
                e.tap && se(D.start, d, he, {}),
                e.hover && se(D.move, d, ue, { hover: !0 }),
                e.drag &&
                  C.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== C.length - 1) {
                      var n = p[i - 1],
                        r = p[i],
                        a = [t],
                        o = [n, r],
                        l = [i - 1, i];
                      m(t, s.cssClasses.draggable),
                        e.fixed &&
                          (a.push(n.children[0]), a.push(r.children[0])),
                        e.dragAll && ((o = p), (l = L)),
                        a.forEach(function (e) {
                          se(D.start, e, ce, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function fe(e, t) {
              (P[e] = P[e] || []),
                P[e].push(t),
                "update" === e.split(".")[0] &&
                  p.forEach(function (e, t) {
                    ye("update", t);
                  });
            }
            function ge(e) {
              return e === O.aria || e === O.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(P).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete P[e];
              });
            }
            function ye(e, t, i) {
              Object.keys(P).forEach(function (n) {
                var r = n.split(".")[0];
                e === r &&
                  P[n].forEach(function (e) {
                    e.call(
                      Ie,
                      M.map(s.format.to),
                      t,
                      M.slice(),
                      i || !1,
                      $.slice(),
                      Ie
                    );
                  });
              });
            }
            function be(e, t, i, n, r, a, o) {
              var l;
              return (
                p.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((l = k.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, l))),
                  r &&
                    t < p.length - 1 &&
                    ((l = k.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, l)))),
                p.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((l = k.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, l))),
                  r &&
                    t < p.length - 1 &&
                    ((l = k.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, l)))),
                s.padding &&
                  (0 === t &&
                    ((l = k.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, l))),
                  t === p.length - 1 &&
                    ((l = k.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, l)))),
                o || (i = k.getStep(i)),
                !((i = h(i)) === e[t] && !a) && i
              );
            }
            function we(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function Ce(e, t, i, n, r) {
              var a = i.slice(),
                o = n[0],
                l = s.events.smoothSteps,
                d = [!e, e],
                c = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, s) {
                      var i = be(a, e, a[e] + t, d[s], c[s], !1, l);
                      !1 === i ? (t = 0) : ((t = i - a[e]), (a[e] = i));
                    })
                  : (d = c = [!0]);
              var h = !1;
              n.forEach(function (e, s) {
                h = Ee(e, i[e] + t, d[s], c[s], !1, l) || h;
              }),
                h &&
                  (n.forEach(function (e) {
                    ye("update", e), ye("slide", e);
                  }),
                  null != r && ye("drag", o));
            }
            function Se(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function xe(e, t) {
              ($[e] = t), (M[e] = k.fromStepping(t));
              var i = "translate(" + we(Se(t, 0) - I + "%", "0") + ")";
              (p[e].style[s.transformRule] = i), Te(e), Te(e + 1);
            }
            function De() {
              L.forEach(function (e) {
                var t = $[e] > 50 ? -1 : 1,
                  s = 3 + (p.length + t * e);
                p[e].style.zIndex = String(s);
              });
            }
            function Ee(e, t, s, i, n, r) {
              return (
                n || (t = be($, e, t, s, i, !1, r)), !1 !== t && (xe(e, t), !0)
              );
            }
            function Te(e) {
              if (C[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = $[e - 1]), e !== C.length - 1 && (i = $[e]);
                var n = i - t,
                  r = "translate(" + we(Se(t, n) + "%", "0") + ")",
                  a = "scale(" + we(n / 100, "1") + ")";
                C[e].style[s.transformRule] = r + " " + a;
              }
            }
            function ke(e, t) {
              return null === e || !1 === e || void 0 === e
                ? $[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = k.toStepping(e)),
                  !1 === e || isNaN(e) ? $[t] : e);
            }
            function Me(e, t, i) {
              var n = u(e),
                r = void 0 === $[0];
              (t = void 0 === t || t),
                s.animate && !r && c(T, s.cssClasses.tap, s.animationDuration),
                L.forEach(function (e) {
                  Ee(e, ke(n[e], e), !0, !1, i);
                });
              var a = 1 === L.length ? 0 : 1;
              if (r && k.hasNoSize() && ((i = !0), ($[0] = 0), L.length > 1)) {
                var o = 100 / (L.length - 1);
                L.forEach(function (e) {
                  $[e] = e * o;
                });
              }
              for (; a < L.length; ++a)
                L.forEach(function (e) {
                  Ee(e, $[e], !0, !0, i);
                });
              De(),
                L.forEach(function (e) {
                  ye("update", e), null !== n[e] && t && ye("set", e);
                });
            }
            function $e(e) {
              Me(s.start, e);
            }
            function Le(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < L.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Ee(e, ke(t, e), !0, !0, i), ye("update", e), s && ye("set", e);
            }
            function _e(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === M.length ? M[0] : M.slice(0);
              var t = M.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Pe() {
              for (
                ve(O.aria),
                  ve(O.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    f(T, s.cssClasses[e]);
                  });
                T.firstChild;

              )
                T.removeChild(T.firstChild);
              delete T.noUiSlider;
            }
            function Ae(e) {
              var t = $[e],
                i = k.getNearbySteps(t),
                n = M[e],
                r = i.thisStep.step,
                a = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== r &&
                n + r > i.stepAfter.startValue &&
                (r = i.stepAfter.startValue - n),
                (a =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (a = null);
              var o = k.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                [a, r]
              );
            }
            function Oe() {
              return L.map(Ae);
            }
            function Ne(e, t) {
              var i = _e(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var a = re(o);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = a[t]);
              }),
                (k = a.spectrum),
                (s.margin = a.margin),
                (s.limit = a.limit),
                (s.padding = a.padding),
                s.pips ? ee(s.pips) : Z(),
                s.tooltips ? U() : W(),
                ($ = []),
                Me(n(e.start) ? e.start : i, t);
            }
            function Ve() {
              (d = j(T)),
                B(s.connect, d),
                me(s.events),
                Me(s.start),
                s.pips && ee(s.pips),
                s.tooltips && U(),
                Y();
            }
            Ve();
            var Ie = {
              destroy: Pe,
              steps: Oe,
              on: fe,
              off: ve,
              get: _e,
              set: Me,
              setHandle: Le,
              reset: $e,
              __moveHandles: function (e, t, s) {
                Ce(e, t, $, s);
              },
              options: o,
              updateOptions: Ne,
              target: T,
              removePips: Z,
              removeTooltips: W,
              getPositions: function () {
                return $.slice();
              },
              getTooltips: function () {
                return x;
              },
              getOrigins: function () {
                return p;
              },
              pips: ee,
            };
            return Ie;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = ae(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: _, cssClasses: A, create: oe };
          (e.create = oe),
            (e.cssClasses = A),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, { a: t }), t;
  }),
    (s.d = (e, t) => {
      for (var i in t)
        s.o(t, i) &&
          !s.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = {};
      let t = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
          );
        },
      };
      let i = (e, t = 500, s = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !s),
                !s && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !s && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideUpDone", { detail: { target: e } })
                );
            }, t));
        },
        n = (e, t = 500, s = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              s && e.style.removeProperty("height");
            let i = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = s ? `${s}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = i + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide"),
                  document.dispatchEvent(
                    new CustomEvent("slideDownDone", { detail: { target: e } })
                  );
              }, t);
          }
        },
        r = !0,
        a = (e = 500) => {
          let t = document.querySelector("body");
          if (r) {
            let s = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < s.length; e++) {
                s[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (r = !1),
              setTimeout(function () {
                r = !0;
              }, e);
          }
        },
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (r) {
            let s = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (r = !1),
              setTimeout(function () {
                r = !0;
              }, e);
          }
        };
      function l(e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      }
      function d(e, t) {
        const s = Array.from(e).filter(function (e, s, i) {
          if (e.dataset[t]) return e.dataset[t].split(",")[0];
        });
        if (s.length) {
          const e = [];
          s.forEach((s) => {
            const i = {},
              n = s.dataset[t].split(",");
            (i.value = n[0]),
              (i.type = n[1] ? n[1].trim() : "max"),
              (i.item = s),
              e.push(i);
          });
          let i = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          i = l(i);
          const n = [];
          if (i.length)
            return (
              i.forEach((t) => {
                const s = t.split(","),
                  i = s[1],
                  r = s[2],
                  a = window.matchMedia(s[0]),
                  o = e.filter(function (e) {
                    if (e.value === i && e.type === r) return !0;
                  });
                n.push({ itemsArray: o, matchMedia: a });
              }),
              n
            );
        }
      }
      var c = s(211);
      function h(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function u(e = {}, t = {}) {
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : h(t[s]) &&
              h(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              u(e[s], t[s]);
        });
      }
      !(function () {
        const e = document.querySelector(".price-filter__slider");
        if (e) {
          c.create(e, {
            start: [1600, 4e3],
            connect: !0,
            step: 1,
            range: { min: [0], max: [8e3] },
          });
          const t = document.getElementById("price-filter__start"),
            s = document.getElementById("price-filter__end"),
            i = [t, s];
          function n() {
            let i, n;
            "" != t.value && (i = t.value),
              "" != s.value && (n = s.value),
              e.noUiSlider.set([i, n]);
          }
          e.noUiSlider.on("update", function (e, t) {
            i[t].value = Math.round(e[t]);
          }),
            t.addEventListener("change", n),
            s.addEventListener("change", n);
        }
      })();
      const p = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function m() {
        const e = "undefined" != typeof document ? document : {};
        return u(e, p), e;
      }
      const f = {
        document: p,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function g() {
        const e = "undefined" != typeof window ? window : {};
        return u(e, f), e;
      }
      class v extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function y(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...y(e)) : t.push(e);
          }),
          t
        );
      }
      function b(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function w(e, t) {
        const s = g(),
          i = m();
        let n = [];
        if (!t && e instanceof v) return e;
        if (!e) return new v(n);
        if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const s = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) s.push(i[e]);
              return s;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof v) return e;
          n = e;
        }
        return new v(
          (function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
          })(n)
        );
      }
      w.fn = v.prototype;
      const C = "resize scroll".split(" ");
      function S(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              C.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : w(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      S("click"),
        S("blur"),
        S("focus"),
        S("focusin"),
        S("focusout"),
        S("keyup"),
        S("keydown"),
        S("keypress"),
        S("submit"),
        S("change"),
        S("mousedown"),
        S("mousemove"),
        S("mouseup"),
        S("mouseenter"),
        S("mouseleave"),
        S("mouseout"),
        S("mouseover"),
        S("touchstart"),
        S("touchend"),
        S("touchmove"),
        S("resize"),
        S("scroll");
      const x = {
        addClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            b(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else
              for (const t in e)
                (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, s, i, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), w(t).is(s))) i.apply(t, n);
            else {
              const e = w(t).parents();
              for (let t = 0; t < e.length; t += 1)
                w(e[t]).is(s) && i.apply(e[t], n);
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const o = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (s)
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                  t.addEventListener(e, a, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, i, n] = e;
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let a;
              if (
                (!s && r.dom7Listeners
                  ? (a = r.dom7Listeners[t])
                  : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
                a && a.length)
              )
                for (let e = a.length - 1; e >= 0; e -= 1) {
                  const s = a[e];
                  (i && s.listener === i) ||
                  (i &&
                    s.listener &&
                    s.listener.dom7proxy &&
                    s.listener.dom7proxy === i)
                    ? (r.removeEventListener(t, s.proxyListener, n),
                      a.splice(e, 1))
                    : i ||
                      (r.removeEventListener(t, s.proxyListener, n),
                      a.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = g(),
            s = e[0].split(" "),
            i = e[1];
          for (let n = 0; n < s.length; n += 1) {
            const r = s[n];
            for (let s = 0; s < this.length; s += 1) {
              const n = this[s];
              if (t.CustomEvent) {
                const s = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(s),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function s(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", s));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = g();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = g(),
              t = m(),
              s = this[0],
              i = s.getBoundingClientRect(),
              n = t.body,
              r = s.clientTop || n.clientTop || 0,
              a = s.clientLeft || n.clientLeft || 0,
              o = s === e ? e.scrollY : s.scrollTop,
              l = s === e ? e.scrollX : s.scrollLeft;
            return { top: i.top + o - r, left: i.left + l - a };
          }
          return null;
        },
        css: function (e, t) {
          const s = g();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return s.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, s) => {
                e.apply(t, [t, s]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = g(),
            s = m(),
            i = this[0];
          let n, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = w(e), r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          if (e === s) return i === s;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof v) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return w([]);
          if (e < 0) {
            const s = t + e;
            return w(s < 0 ? [] : [this[s]]);
          }
          return w([this[e]]);
        },
        append: function (...e) {
          let t;
          const s = m();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = s.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof v)
                for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = m();
          let s, i;
          for (s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof v)
              for (i = 0; i < e.length; i += 1)
                this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                w(this[0].nextElementSibling).is(e)
                ? w([this[0].nextElementSibling])
                : w([])
              : this[0].nextElementSibling
              ? w([this[0].nextElementSibling])
              : w([])
            : w([]);
        },
        nextAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return w([]);
          for (; s.nextElementSibling; ) {
            const i = s.nextElementSibling;
            e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return w(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && w(t.previousElementSibling).is(e)
                ? w([t.previousElementSibling])
                : w([])
              : t.previousElementSibling
              ? w([t.previousElementSibling])
              : w([]);
          }
          return w([]);
        },
        prevAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return w([]);
          for (; s.previousElementSibling; ) {
            const i = s.previousElementSibling;
            e ? w(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return w(t);
        },
        parent: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e
                ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                : t.push(this[s].parentNode));
          return w(t);
        },
        parents: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; )
              e ? w(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return w(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? w([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return w(t);
        },
        children: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].children;
            for (let s = 0; s < i.length; s += 1)
              (e && !w(i[s]).is(e)) || t.push(i[s]);
          }
          return w(t);
        },
        filter: function (e) {
          return w(b(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(x).forEach((e) => {
        Object.defineProperty(w.fn, e, { value: x[e], writable: !0 });
      });
      const D = w;
      function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function T() {
        return Date.now();
      }
      function k(e, t) {
        void 0 === t && (t = "x");
        const s = g();
        let i, n, r;
        const a = (function (e) {
          const t = g();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((n = a.transform || a.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = r.toString().split(","))),
          "x" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          n || 0
        );
      }
      function M(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function $(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function L() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
          const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (null != i && !$(i)) {
            const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, n = s.length; t < n; t += 1) {
              const n = s[t],
                r = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== r &&
                r.enumerable &&
                (M(e[n]) && M(i[n])
                  ? i[n].__swiper__
                    ? (e[n] = i[n])
                    : L(e[n], i[n])
                  : !M(e[n]) && M(i[n])
                  ? ((e[n] = {}),
                    i[n].__swiper__ ? (e[n] = i[n]) : L(e[n], i[n]))
                  : (e[n] = i[n]));
            }
          }
        }
        return e;
      }
      function _(e, t, s) {
        e.style.setProperty(t, s);
      }
      function P(e) {
        let { swiper: t, targetPosition: s, side: i } = e;
        const n = g(),
          r = -t.translate;
        let a,
          o = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(t.cssModeFrameID);
        const d = s > r ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          h = () => {
            (a = new Date().getTime()), null === o && (o = a);
            const e = Math.max(Math.min((a - o) / l, 1), 0),
              d = 0.5 - Math.cos(e * Math.PI) / 2;
            let u = r + d * (s - r);
            if ((c(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), c(u, s)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: u });
                }),
                void n.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = n.requestAnimationFrame(h);
          };
        h();
      }
      let A, O, N;
      function V() {
        return (
          A ||
            (A = (function () {
              const e = g(),
                t = m();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const s = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, s);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          A
        );
      }
      function I(e) {
        return (
          void 0 === e && (e = {}),
          O ||
            (O = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const s = V(),
                i = g(),
                n = i.navigator.platform,
                r = t || i.navigator.userAgent,
                a = { ios: !1, android: !1 },
                o = i.screen.width,
                l = i.screen.height,
                d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = r.match(/(iPad).*OS\s([\d_]+)/);
              const h = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === n;
              let m = "MacIntel" === n;
              return (
                !c &&
                  m &&
                  s.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${l}`) >= 0 &&
                  ((c = r.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (m = !1)),
                d && !p && ((a.os = "android"), (a.android = !0)),
                (c || u || h) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          O
        );
      }
      function F() {
        return (
          N ||
            (N = (function () {
              const e = g();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          N
        );
      }
      const H = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][n](t);
            }),
            i
          );
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
              r[a] = arguments[a];
            t.apply(i, r);
          }
          return (n.__emitterProxy = t), i.on(e, n, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(n, 1);
                    });
              }),
              s)
            : s;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
            : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
            s.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, s);
                  });
            }),
            e
          );
        },
      };
      const z = {
        updateSize: function () {
          const e = this;
          let t, s;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const i = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
            l = e.virtual && i.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = n.children(`.${e.params.slideClass}`),
            h = l ? e.virtual.slides.length : c.length;
          let u = [];
          const p = [],
            m = [];
          let f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          let g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = i.spaceBetween,
            w = -f,
            C = 0,
            S = 0;
          if (void 0 === r) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * r),
            (e.virtualSize = -b),
            a
              ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (_(e.wrapperEl, "--swiper-centered-offset-before", ""),
              _(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const x = i.grid && i.grid.rows > 1 && e.grid;
          let D;
          x && e.grid.initSlides(h);
          const E =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < h; n += 1) {
            D = 0;
            const a = c.eq(n);
            if (
              (x && e.grid.updateSlide(n, a, h, t), "none" !== a.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                E && (c[n].style[t("width")] = "");
                const r = getComputedStyle(a[0]),
                  o = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  D = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    i = s(r, "padding-right"),
                    n = s(r, "margin-left"),
                    o = s(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) D = e + n + o;
                  else {
                    const { clientWidth: s, offsetWidth: r } = a[0];
                    D = e + t + i + n + o + (r - s);
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  i.roundLengths && (D = Math.floor(D));
              } else
                (D = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                  i.roundLengths && (D = Math.floor(D)),
                  c[n] && (c[n].style[t("width")] = `${D}px`);
              c[n] && (c[n].swiperSlideSize = D),
                m.push(D),
                i.centeredSlides
                  ? ((w = w + D / 2 + C / 2 + b),
                    0 === C && 0 !== n && (w = w - r / 2 - b),
                    0 === n && (w = w - r / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    i.roundLengths && (w = Math.floor(w)),
                    S % i.slidesPerGroup == 0 && u.push(w),
                    p.push(w))
                  : (i.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && u.push(w),
                    p.push(w),
                    (w = w + D + b)),
                (e.virtualSize += D + b),
                (C = D),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            a &&
              o &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            x && e.grid.updateWrapperSize(D, u, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < u.length; s += 1) {
              let n = u[s];
              i.roundLengths && (n = Math.floor(n)),
                u[s] <= e.virtualSize - r && t.push(n);
            }
            (u = t),
              Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(e.virtualSize - r);
          }
          if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
            const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
              [s]: `${b}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - r;
            u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              u.forEach((e, s) => {
                u[s] = e - t;
              }),
                p.forEach((e, s) => {
                  p[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: p,
              slidesSizesGrid: m,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            _(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              _(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - m[m.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (h !== d && e.emit("slidesLengthChange"),
            u.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              s = e.$el.hasClass(t);
            h <= i.maxBackfaceHiddenSlides
              ? s || e.$el.addClass(t)
              : s && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || D([])).each((e) => {
                s.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                s.push(a(e));
              }
          else s.push(a(t.activeIndex));
          for (n = 0; n < s.length; n += 1)
            if (void 0 !== s[n]) {
              const e = s[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: n, snapGrid: r } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          n && (a = e),
            i.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const o = i[e];
            let l = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
            const d =
                (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              c =
                (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              h = -(a - l),
              u = h + t.slidesSizesGrid[e];
            ((h >= 0 && h < t.size - 1) ||
              (u > 1 && u <= t.size) ||
              (h <= 0 && u >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(s.slideVisibleClass)),
              (o.progress = n ? -d : d),
              (o.originalProgress = n ? -c : c);
          }
          t.visibleSlides = D(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: a } = t;
          const o = r,
            l = a;
          0 === i
            ? ((n = 0), (r = !0), (a = !0))
            : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            a && !l && t.emit("reachEnd toEdge"),
            ((o && !r) || (l && !a)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: i,
              activeIndex: n,
              realIndex: r,
            } = e,
            a = e.virtual && s.virtual.enabled;
          let o;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (o = a
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            o.addClass(s.slideActiveClass),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(s.slideNextClass));
          let d = o
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === d.length &&
            ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: n,
              params: r,
              activeIndex: a,
              realIndex: o,
              snapIndex: l,
            } = t;
          let d,
            c = e;
          if (void 0 === c) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (c = e)
                  : s >= i[e] && s < i[e + 1] && (c = e + 1)
                : s >= i[e] && (c = e);
            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (n.indexOf(s) >= 0) d = n.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            d = e + Math.floor((c - e) / r.slidesPerGroup);
          }
          if ((d >= n.length && (d = n.length - 1), c === a))
            return void (
              d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
            );
          const h = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          Object.assign(t, {
            snapIndex: d,
            realIndex: h,
            previousIndex: a,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== h && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = D(e).closest(`.${s.slideClass}`)[0];
          let n,
            r = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (r = !0), (n = e);
                break;
              }
          if (!i || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  D(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const B = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          let r = k(n[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            {
              rtlTranslate: i,
              params: n,
              $wrapperEl: r,
              wrapperEl: a,
              progress: o,
            } = s;
          let l,
            d = 0,
            c = 0;
          s.isHorizontal() ? (d = i ? -e : e) : (c = e),
            n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
            n.cssMode
              ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -d : -c)
              : n.virtualTranslate ||
                r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? d : c);
          const h = s.maxTranslate() - s.minTranslate();
          (l = 0 === h ? 0 : (e - s.minTranslate()) / h),
            l !== o && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, i, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === i && (i = !0);
          const r = this,
            { params: a, wrapperEl: o } = r;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            d = r.maxTranslate();
          let c;
          if (
            ((c = i && e > l ? l : i && e < d ? d : e),
            r.updateProgress(c),
            a.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return (
                  P({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(c),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function j(e) {
        let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
        const { activeIndex: r, previousIndex: a } = t;
        let o = i;
        if (
          (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
          t.emit(`transition${n}`),
          s && r !== a)
        ) {
          if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`),
            "next" === o
              ? t.emit(`slideNextTransition${n}`)
              : t.emit(`slidePrevTransition${n}`);
        }
      }
      const R = {
        slideTo: function (e, t, s, i, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: h,
            rtlTranslate: u,
            wrapperEl: p,
            enabled: m,
          } = r;
          if (
            (r.animating && o.preventInteractionOnTransition) ||
            (!m && !i && !n)
          )
            return !1;
          const f = Math.min(r.params.slidesPerGroupSkip, a);
          let g = f + Math.floor((a - f) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (h || o.initialSlide || 0) === (c || 0) &&
              s &&
              r.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((r.updateProgress(v), o.normalizeSlideIndex))
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * d[e]),
                i = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= s && t < i - (i - s) / 2
                  ? (a = e)
                  : t >= s && t < i && (a = e + 1)
                : t >= s && (a = e);
            }
          if (r.initialized && a !== h) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (h || 0) !== a
            )
              return !1;
          }
          let y;
          if (
            ((y = a > h ? "next" : a < h ? "prev" : "reset"),
            (u && -v === r.translate) || (!u && v === r.translate))
          )
            return (
              r.updateActiveIndex(a),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(v),
              "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
              !1
            );
          if (o.cssMode) {
            const e = r.isHorizontal(),
              s = u ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  P({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, i),
            r.transitionStart(s, y),
            0 === t
              ? r.transitionEnd(s, y)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(s, y));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, s, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
        },
        slideNext: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: n, enabled: r, params: a } = i;
          if (!r) return i;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return a.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + l, e, t, s);
        },
        slidePrev: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: n,
              animating: r,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: d,
            } = i;
          if (!d) return i;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const h = c(l ? i.translate : -i.translate),
            u = a.map((e) => c(e));
          let p = a[u.indexOf(h) - 1];
          if (void 0 === p && n.cssMode) {
            let e;
            a.forEach((t, s) => {
              h >= t && (e = s);
            }),
              void 0 !== e && (p = a[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            (void 0 !== p &&
              ((m = o.indexOf(p)),
              m < 0 && (m = i.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            n.rewind && i.isBeginning)
          ) {
            const n =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(n, e, t, s);
          }
          return i.slideTo(m, e, t, s);
        },
        slideReset: function (e, t, s) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
          );
        },
        slideToClosest: function (e, t, s, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const n = this;
          let r = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, r),
            o = a + Math.floor((r - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[o]) {
            const e = n.snapGrid[o];
            l - e > (n.snapGrid[o + 1] - e) * i &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[o - 1];
            l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              D(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - i / 2 ||
                  r > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    E(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - i
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const q = {
        loopCreate: function () {
          const e = this,
            t = m(),
            { params: s, $wrapperEl: i } = e,
            n = i.children().length > 0 ? D(i.children()[0].parentNode) : i;
          n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = n.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = D(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const a = [],
            o = [];
          r.each((t, s) => {
            const i = D(t);
            s < e.loopedSlides && o.push(t),
              s < r.length && s >= r.length - e.loopedSlides && a.push(t),
              i.attr("data-swiper-slide-index", s);
          });
          for (let e = 0; e < o.length; e += 1)
            n.append(D(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = a.length - 1; e >= 0; e -= 1)
            n.prepend(D(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: i,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: a,
            rtlTranslate: o,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const d = -a[t] - e.getTranslate();
          if (t < i) {
            (l = s.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((o ? -e.translate : e.translate) - d);
          } else if (t >= s.length - i) {
            (l = -s.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== d &&
              e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
      function G(e) {
        const t = this,
          s = m(),
          i = g(),
          n = t.touchEventsData,
          { params: r, touches: a, enabled: o } = t;
        if (!o) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let d = D(l.target);
        if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!r.noSwipingClass &&
          "" !== r.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (d = D(e.path[0]));
        const c = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          h = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(s) {
                    if (!s || s === m() || s === g()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode
                      ? i || t(s.getRootNode().host)
                      : null;
                  })(t)
                );
              })(c, d[0])
            : d.closest(c)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
        (a.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (a.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const u = a.currentX,
          p = a.currentY,
          f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (f && (u <= v || u >= i.innerWidth - v)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (a.startX = u),
          (a.startY = p),
          (n.touchStartTime = T()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          d.is(n.focusableElements) &&
            ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
            s.activeElement &&
              D(s.activeElement).is(n.focusableElements) &&
              s.activeElement !== d[0] &&
              s.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !i) ||
            d[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function W(e) {
        const t = m(),
          s = this,
          i = s.touchEventsData,
          { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
        if (!o) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            s.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const d =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          c = "touchmove" === l.type ? d.pageX : l.pageX,
          h = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = c), void (r.startY = h);
        if (!s.allowTouchMove)
          return (
            D(l.target).is(i.focusableElements) || (s.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(r, {
                startX: c,
                startY: h,
                currentX: c,
                currentY: h,
              }),
              (i.touchStartTime = T()))
            )
          );
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (s.isVertical()) {
            if (
              (h < r.startY && s.translate <= s.maxTranslate()) ||
              (h > r.startY && s.translate >= s.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (c < r.startX && s.translate <= s.maxTranslate()) ||
            (c > r.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          D(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (s.allowClick = !1);
        if (
          (i.allowTouchCallbacks && s.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = c), (r.currentY = h);
        const u = r.currentX - r.startX,
          p = r.currentY - r.startY;
        if (
          s.params.threshold &&
          Math.sqrt(u ** 2 + p ** 2) < s.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (s.isHorizontal() && r.currentY === r.startY) ||
          (s.isVertical() && r.currentX === r.startX)
            ? (i.isScrolling = !1)
            : u * u + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(u))) / Math.PI),
              (i.isScrolling = s.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (i.isScrolling && s.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          i.isMoved ||
            (n.loop && !n.cssMode && s.loopFix(),
            (i.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating &&
              s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", l)),
          s.emit("sliderMove", l),
          (i.isMoved = !0);
        let f = s.isHorizontal() ? u : p;
        (r.diff = f),
          (f *= n.touchRatio),
          a && (f = -f),
          (s.swipeDirection = f > 0 ? "prev" : "next"),
          (i.currentTranslate = f + i.startTranslate);
        let g = !0,
          v = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (v = 0),
          f > 0 && i.currentTranslate > s.minTranslate()
            ? ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + f) ** v))
            : f < 0 &&
              i.currentTranslate < s.maxTranslate() &&
              ((g = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - f) ** v)),
          g && (l.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (i.currentTranslate = i.startTranslate),
              void (r.diff = s.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
            n.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          s.params.freeMode &&
            n.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(i.currentTranslate),
          s.setTranslate(i.currentTranslate));
      }
      function U(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: o,
          } = t;
        if (!o) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", l),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = T(),
          c = d - s.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            c < 300 &&
              d - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((s.lastClickTime = T()),
          E(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let h;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (h = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: h });
        let u = 0,
          p = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < a.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== a[e + t]
            ? h >= a[e] && h < a[e + t] && ((u = e), (p = a[e + t] - a[e]))
            : h >= a[e] && ((u = e), (p = a[a.length - 1] - a[a.length - 2]));
        }
        let m = null,
          f = null;
        i.rewind &&
          (t.isBeginning
            ? (f =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (m = 0));
        const g = (h - a[u]) / p,
          v = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? m : u + v)
              : t.slideTo(u)),
            "prev" === t.swipeDirection &&
              (g > 1 - i.longSwipesRatio
                ? t.slideTo(u + v)
                : null !== f && g < 0 && Math.abs(g) > i.longSwipesRatio
                ? t.slideTo(f)
                : t.slideTo(u));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(u + v)
              : t.slideTo(u)
            : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : u + v),
              "prev" === t.swipeDirection && t.slideTo(null !== f ? f : u));
        }
      }
      function Y() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function X(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function K() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let J = !1;
      function Q() {}
      const Z = (e, t) => {
        const s = m(),
          {
            params: i,
            touchEvents: n,
            el: r,
            wrapperEl: a,
            device: o,
            support: l,
          } = e,
          d = !!i.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          h = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[c](n.start, e.onTouchStart, t),
            r[c](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: d } : d
            ),
            r[c](n.end, e.onTouchEnd, t),
            n.cancel && r[c](n.cancel, e.onTouchEnd, t);
        } else
          r[c](n.start, e.onTouchStart, !1),
            s[c](n.move, e.onTouchMove, d),
            s[c](n.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          r[c]("click", e.onClick, !0),
          i.cssMode && a[c]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[h](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Y,
                !0
              )
            : e[h]("observerUpdate", Y, !0);
      };
      const ee = {
          attachEvents: function () {
            const e = this,
              t = m(),
              { params: s, support: i } = e;
            (e.onTouchStart = G.bind(e)),
              (e.onTouchMove = W.bind(e)),
              (e.onTouchEnd = U.bind(e)),
              s.cssMode && (e.onScroll = K.bind(e)),
              (e.onClick = X.bind(e)),
              i.touch && !J && (t.addEventListener("touchstart", Q), (J = !0)),
              Z(e, "on");
          },
          detachEvents: function () {
            Z(this, "off");
          },
        },
        te = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const se = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: i = 0,
              params: n,
              $el: r,
            } = e,
            a = n.breakpoints;
          if (!a || (a && 0 === Object.keys(a).length)) return;
          const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
          if (!o || e.currentBreakpoint === o) return;
          const l = (o in a ? a[o] : void 0) || e.originalParams,
            d = te(e, n),
            c = te(e, l),
            h = n.enabled;
          d && !c
            ? (r.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                r.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = n[t] && n[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const u = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || u);
          u && s && e.changeDirection(), L(e.params, l);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            h && !m ? e.disable() : !h && m && e.enable(),
            (e.currentBreakpoint = o),
            e.emit("_beforeBreakpoint", l),
            p &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
            return;
          let i = !1;
          const n = g(),
            r = "window" === t ? n.innerHeight : s.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: r, value: o } = a[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
              : o <= s.clientWidth && (i = r);
          }
          return i || "max";
        },
      };
      const ie = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: i,
              $el: n,
              device: r,
              support: a,
            } = e,
            o = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !a.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const ne = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function re(e, t) {
        return function (s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            n = s[i];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in n
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  L(t, s))
                : L(t, s))
            : L(t, s);
        };
      }
      const ae = {
          eventsEmitter: H,
          update: z,
          translate: B,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              i.cssMode ||
                (i.autoHeight && s.updateAutoHeight(),
                j({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              (s.animating = !1),
                i.cssMode ||
                  (s.setTransition(0),
                  j({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: R,
          loop: q,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (s.style.cursor = "move"),
                (s.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: ee,
          breakpoints: se,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: i } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: ie,
          images: {
            loadImage: function (e, t, s, i, n, r) {
              const a = g();
              let o;
              function l() {
                r && r();
              }
              D(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((o = new a.Image()),
                  (o.onload = l),
                  (o.onerror = l),
                  i && (o.sizes = i),
                  s && (o.srcset = s),
                  t && (o.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        oe = {};
      class le {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
            i[n] = arguments[n];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = L({}, t)),
            e && !t.el && (t.el = e),
            t.el && D(t.el).length > 1)
          ) {
            const e = [];
            return (
              D(t.el).each((s) => {
                const i = L({}, t, { el: s });
                e.push(new le(i));
              }),
              e
            );
          }
          const r = this;
          (r.__swiper__ = !0),
            (r.support = V()),
            (r.device = I({ userAgent: t.userAgent })),
            (r.browser = F()),
            (r.eventsListeners = {}),
            (r.eventsAnyListeners = []),
            (r.modules = [...r.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              r.modules.push(...t.modules);
          const a = {};
          r.modules.forEach((e) => {
            e({
              swiper: r,
              extendParams: re(t, a),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r),
            });
          });
          const o = L({}, ne, a);
          return (
            (r.params = L({}, o, oe, t)),
            (r.originalParams = L({}, r.params)),
            (r.passedParams = L({}, t)),
            r.params &&
              r.params.on &&
              Object.keys(r.params.on).forEach((e) => {
                r.on(e, r.params.on[e]);
              }),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            (r.$ = D),
            Object.assign(r, {
              enabled: r.params.enabled,
              el: e,
              classNames: [],
              slides: D(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === r.params.direction,
              isVertical: () => "vertical" === r.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (r.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (r.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  r.support.touch || !r.params.simulateTouch
                    ? r.touchEventsTouch
                    : r.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: r.params.focusableElements,
                lastClickTime: T(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            n = (s.maxTranslate() - i) * e + i;
          s.translateTo(n, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (s.centeredSlides) {
            let e,
              t = i[o].swiperSlideSize;
            for (let s = o + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1) {
              (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
            }
          else
            for (let e = o - 1; e >= 0; e -= 1) {
              n[o] - n[e] < a && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || i()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.$el
                .removeClass(`${s.params.containerModifierClass}${i}`)
                .addClass(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const s = D(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = D(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => s.children(e)), t;
            }
            return s.children ? s.children(i()) : D(s).children(i());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = m().createElement("div");
            (n = D(e)),
              (e.className = t.params.wrapperClass),
              s.append(e),
              s.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            { params: i, $el: n, $wrapperEl: r, slides: a } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          L(oe, e);
        }
        static get extendedDefaults() {
          return oe;
        }
        static get defaults() {
          return ne;
        }
        static installModule(e) {
          le.prototype.__modules__ || (le.prototype.__modules__ = []);
          const t = le.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => le.installModule(e)), le)
            : (le.installModule(e), le);
        }
      }
      Object.keys(ae).forEach((e) => {
        Object.keys(ae[e]).forEach((t) => {
          le.prototype[t] = ae[e][t];
        });
      }),
        le.use([
          function (e) {
            let { swiper: t, on: s, emit: i } = e;
            const n = g();
            let r = null,
              a = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            s("init", () => {
              t.params.resizeObserver && void 0 !== n.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((r = new ResizeObserver((e) => {
                    a = n.requestAnimationFrame(() => {
                      const { width: s, height: i } = t;
                      let n = s,
                        r = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: s,
                          contentRect: i,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((n = i ? i.width : (s[0] || s).inlineSize),
                          (r = i ? i.height : (s[0] || s).blockSize));
                      }),
                        (n === s && r === i) || o();
                    });
                  })),
                  r.observe(t.el))
                : (n.addEventListener("resize", o),
                  n.addEventListener("orientationchange", l));
            }),
              s("destroy", () => {
                a && n.cancelAnimationFrame(a),
                  r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                  n.removeEventListener("resize", o),
                  n.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: s, on: i, emit: n } = e;
            const r = [],
              a = g(),
              o = function (e, t) {
                void 0 === t && (t = {});
                const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const t = function () {
                      n("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(t)
                      : a.setTimeout(t, 0);
                  }
                );
                s.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  r.push(s);
              };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.$el[0], { childList: t.params.observeSlideChildren }),
                    o(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                r.forEach((e) => {
                  e.disconnect();
                }),
                  r.splice(0, r.length);
              });
          },
        ]);
      const de = le;
      function ce(e, t, s, i) {
        const n = m();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((r) => {
              if (!s[r] && !0 === s.auto) {
                let a = e.$el.children(`.${i[r]}`)[0];
                a ||
                  ((a = n.createElement("div")),
                  (a.className = i[r]),
                  e.$el.append(a)),
                  (s[r] = a),
                  (t[r] = a);
              }
            }),
          s
        );
      }
      function he(e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        function r(e) {
          let s;
          return (
            e &&
              ((s = D(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                s.length > 1 &&
                1 === t.$el.find(e).length &&
                (s = t.$el.find(e))),
            s
          );
        }
        function a(e, s) {
          const i = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[s ? "addClass" : "removeClass"](i.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function o() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: s } = t.navigation;
          a(s, t.isBeginning && !t.params.rewind),
            a(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              t.slidePrev();
        }
        function d(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function c() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = ce(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const s = r(e.nextEl),
            i = r(e.prevEl);
          s && s.length > 0 && s.on("click", d),
            i && i.length > 0 && i.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            t.enabled ||
              (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
        }
        function h() {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e.length &&
            (e.off("click", d),
            e.removeClass(t.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", l),
              s.removeClass(t.params.navigation.disabledClass));
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            !1 === t.params.navigation.enabled ? u() : (c(), o());
          }),
          i("toEdge fromEdge lock unlock", () => {
            o();
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            const { $nextEl: e, $prevEl: s } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              s &&
                s[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          i("click", (e, s) => {
            const { $nextEl: i, $prevEl: r } = t.navigation,
              a = s.target;
            if (t.params.navigation.hideOnClick && !D(a).is(r) && !D(a).is(i)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                n(!0 === e ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        const u = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), h();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              c(),
              o();
          },
          disable: u,
          update: o,
          init: c,
          destroy: h,
        });
      }
      function ue(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function pe(e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const r = "swiper-pagination";
        let a;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function d(e, s) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
        }
        function c() {
          const e = t.rtl,
            s = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let c;
          const h = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((c = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                c > i - 1 - 2 * t.loopedSlides && (c -= i - 2 * t.loopedSlides),
                c > h - 1 && (c -= h),
                c < 0 && "bullets" !== t.params.paginationType && (c = h + c))
              : (c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === s.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let n, l, h;
            if (
              (s.dynamicBullets &&
                ((a = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  a * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((o += c - (t.previousIndex - t.loopedSlides || 0)),
                  o > s.dynamicMainBullets - 1
                    ? (o = s.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (n = Math.max(c - o, 0)),
                (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (h = (l + n) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              i.each((e) => {
                const t = D(e),
                  i = t.index();
                i === c && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (i >= n &&
                      i <= l &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    i === n && d(t, "prev"),
                    i === l && d(t, "next"));
              });
            else {
              const e = i.eq(c),
                r = e.index();
              if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const e = i.eq(n),
                  a = i.eq(l);
                for (let e = n; e <= l; e += 1)
                  i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= i.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else d(e, "prev"), d(a, "next");
                else d(e, "prev"), d(a, "next");
              }
            }
            if (s.dynamicBullets) {
              const n = Math.min(i.length, s.dynamicMainBullets + 4),
                r = (a * n - a) / 2 - h * a,
                o = e ? "right" : "left";
              i.css(t.isHorizontal() ? o : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (r.find(ue(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
              r.find(ue(s.totalClass)).text(s.formatFractionTotal(h))),
            "progressbar" === s.type)
          ) {
            let e;
            e = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (c + 1) / h;
            let n = 1,
              a = 1;
            "horizontal" === e ? (n = i) : (a = i),
              r
                .find(ue(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
                .transition(t.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (r.html(s.renderCustom(t, c + 1, h)), n("paginationRender", r[0]))
            : n("paginationUpdate", r[0]),
            t.params.watchOverflow &&
              t.enabled &&
              r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function h() {
          const e = t.params.pagination;
          if (l()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let n = t.params.loop
              ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              n > s &&
              (n = s);
            for (let s = 0; s < n; s += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, s, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(r), (t.pagination.bullets = i.find(ue(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(r)),
            "progressbar" === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(r)),
            "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
        }
        function u() {
          t.params.pagination = ce(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let s = D(e.el);
          0 !== s.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              s.length > 1 &&
              ((s = t.$el.find(e.el)),
              s.length > 1 &&
                (s = s.filter((e) => D(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
            s.addClass(e.modifierClass + e.type),
            s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (o = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              s.addClass(e.progressbarOppositeClass),
            e.clickable &&
              s.on("click", ue(e.bulletClass), function (e) {
                e.preventDefault();
                let s = D(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s);
              }),
            Object.assign(t.pagination, { $el: s, el: s[0] }),
            t.enabled || s.addClass(e.lockClass));
        }
        function p() {
          const e = t.params.pagination;
          if (l()) return;
          const s = t.pagination.$el;
          s.removeClass(e.hiddenClass),
            s.removeClass(e.modifierClass + e.type),
            s.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", ue(e.bulletClass));
        }
        i("init", () => {
          !1 === t.params.pagination.enabled ? m() : (u(), h(), c());
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && c();
          }),
          i("snapIndexChange", () => {
            t.params.loop || c();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (h(), c());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (h(), c());
          }),
          i("destroy", () => {
            p();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            c();
          }),
          i("click", (e, s) => {
            const i = s.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r.length > 0 &&
              !D(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              n(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const m = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            p();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              u(),
              h(),
              c();
          },
          disable: m,
          render: h,
          update: c,
          init: u,
          destroy: p,
        });
      }
      function me(e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const r = m();
        let a,
          o,
          l,
          d,
          c = !1,
          h = null,
          u = null;
        function p() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: s, progress: i } = t,
            { $dragEl: n, $el: r } = e,
            a = t.params.scrollbar;
          let d = o,
            c = (l - o) * i;
          s
            ? ((c = -c),
              c > 0 ? ((d = o - c), (c = 0)) : -c + o > l && (d = l + c))
            : c < 0
            ? ((d = o + c), (c = 0))
            : c + o > l && (d = l - c),
            t.isHorizontal()
              ? (n.transform(`translate3d(${c}px, 0, 0)`),
                (n[0].style.width = `${d}px`))
              : (n.transform(`translate3d(0px, ${c}px, 0)`),
                (n[0].style.height = `${d}px`)),
            a.hide &&
              (clearTimeout(h),
              (r[0].style.opacity = 1),
              (h = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function f() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { $dragEl: s, $el: i } = e;
          (s[0].style.width = ""),
            (s[0].style.height = ""),
            (l = t.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
            (d =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (o =
              "auto" === t.params.scrollbar.dragSize
                ? l * d
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (s[0].style.width = `${o}px`)
              : (s[0].style.height = `${o}px`),
            (i[0].style.display = d >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (i[0].style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.$el[t.isLocked ? "addClass" : "removeClass"](
                t.params.scrollbar.lockClass
              );
        }
        function g(e) {
          return t.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        }
        function v(e) {
          const { scrollbar: s, rtlTranslate: i } = t,
            { $el: n } = s;
          let r;
          (r =
            (g(e) -
              n.offset()[t.isHorizontal() ? "left" : "top"] -
              (null !== a ? a : o / 2)) /
            (l - o)),
            (r = Math.max(Math.min(r, 1), 0)),
            i && (r = 1 - r);
          const d =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
          t.updateProgress(d),
            t.setTranslate(d),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function y(e) {
          const s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: r } = t,
            { $el: o, $dragEl: l } = i;
          (c = !0),
            (a =
              e.target === l[0] || e.target === l
                ? g(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            l.transition(100),
            v(e),
            clearTimeout(u),
            o.transition(0),
            s.hide && o.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            n("scrollbarDragStart", e);
        }
        function b(e) {
          const { scrollbar: s, $wrapperEl: i } = t,
            { $el: r, $dragEl: a } = s;
          c &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            v(e),
            i.transition(0),
            r.transition(0),
            a.transition(0),
            n("scrollbarDragMove", e));
        }
        function w(e) {
          const s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: r } = t,
            { $el: a } = i;
          c &&
            ((c = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
            s.hide &&
              (clearTimeout(u),
              (u = E(() => {
                a.css("opacity", 0), a.transition(400);
              }, 1e3))),
            n("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
        }
        function C(e) {
          const {
              scrollbar: s,
              touchEventsTouch: i,
              touchEventsDesktop: n,
              params: a,
              support: o,
            } = t,
            l = s.$el;
          if (!l) return;
          const d = l[0],
            c = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            h = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!d) return;
          const u = "on" === e ? "addEventListener" : "removeEventListener";
          o.touch
            ? (d[u](i.start, y, c), d[u](i.move, b, c), d[u](i.end, w, h))
            : (d[u](n.start, y, c), r[u](n.move, b, c), r[u](n.end, w, h));
        }
        function S() {
          const { scrollbar: e, $el: s } = t;
          t.params.scrollbar = ce(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const i = t.params.scrollbar;
          if (!i.el) return;
          let n = D(i.el);
          t.params.uniqueNavElements &&
            "string" == typeof i.el &&
            n.length > 1 &&
            1 === s.find(i.el).length &&
            (n = s.find(i.el));
          let r = n.find(`.${t.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = D(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
            n.append(r)),
            Object.assign(e, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
        }
        function x() {
          t.params.scrollbar.el && t.scrollbar.el && C("off");
        }
        s({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          i("init", () => {
            !1 === t.params.scrollbar.enabled ? T() : (S(), f(), p());
          }),
          i("update resize observerUpdate lock unlock", () => {
            f();
          }),
          i("setTranslate", () => {
            p();
          }),
          i("setTransition", (e, s) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            })(s);
          }),
          i("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
          }),
          i("destroy", () => {
            x();
          });
        const T = () => {
          t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.$el &&
              t.scrollbar.$el.addClass(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            x();
        };
        Object.assign(t.scrollbar, {
          enable: () => {
            t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.$el &&
                t.scrollbar.$el.removeClass(
                  t.params.scrollbar.scrollbarDisabledClass
                ),
              S(),
              f(),
              p();
          },
          disable: T,
          updateSize: f,
          setTranslate: p,
          init: S,
          destroy: x,
        });
      }
      function fe() {
        !(function () {
          let e = document.querySelectorAll(
            '[class*="__swiper"]:not(.swiper-wrapper)'
          );
          e &&
            e.forEach((e) => {
              e.parentElement.classList.add("swiper"),
                e.classList.add("swiper-wrapper");
              for (const t of e.children) t.classList.add("swiper-slide");
            });
        })(),
          document.querySelector(".popular__slider") &&
            new de(".popular__slider", {
              modules: [he, pe, me],
              observer: !0,
              observeParents: !0,
              spaceBetween: 20,
              autoHeight: !0,
              speed: 800,
              grabCursor: !0,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              scrollbar: { el: ".swiper-scrollbar", hide: !1, draggable: !0 },
              breakpoints: {
                320: { slidesPerView: 1.5 },
                476: { slidesPerView: 1.75 },
                600: { slidesPerView: 2.25 },
                768: { slidesPerView: 2.5 },
                992: { slidesPerView: 3.5 },
              },
            }),
          document.querySelector(".testimonial__slider") &&
            new de(".testimonial__slider", {
              modules: [he, pe, me],
              observer: !0,
              observeParents: !0,
              spaceBetween: 20,
              autoHeight: !0,
              speed: 800,
              grabCursor: !0,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              scrollbar: { el: ".swiper-scrollbar", hide: !1, draggable: !0 },
              breakpoints: {
                320: { slidesPerView: 1.25 },
                768: { slidesPerView: 1.5 },
                992: { slidesPerView: 1.75 },
              },
            }),
          document.querySelector(".catalog__slider") &&
            new de(".catalog__slider", {
              modules: [he, pe],
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 50,
              speed: 800,
              grabCursor: !0,
              autoHeight: !0,
              pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function (e, t) {
                  return '<span class="' + t + '">' + (e + 1) + "</span>";
                },
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
      }
      window.addEventListener("load", function (e) {
        fe();
      });
      e.watcher = new (class {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `Проснулся, слежу за объектами (${e.length})...`
            ),
              l(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let s = t.split("|"),
                  i = { root: s[0], margin: s[1], threshold: s[2] },
                  n = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      n = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(s) === i.margin &&
                      String(n) === i.threshold
                    )
                      return e;
                  }),
                  r = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(n, r);
              });
          } else
            this.scrollWatcherLogging(
              "Сплю, нет объектов для слежения. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `Эмм... родительского объекта ${e.root} нет на странице`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `Я вижу ${t.classList}, добавил класс _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `Я не вижу ${t.classList}, убрал класс _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging &&
            (function (e) {
              setTimeout(() => {
                window.FLS && console.log(e);
              }, 0);
            })(`[Наблюдатель]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const s = e.target;
          this.scrollWatcherIntersecting(e, s),
            s.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(s, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      })({});
      let ge = !1;
      function ve(e) {
        this.type = e;
      }
      setTimeout(() => {
        if (ge) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        (ve.prototype.init = function () {
          const e = this;
          (this.оbjects = []),
            (this.daClassname = "_dynamic_adapt_"),
            (this.nodes = document.querySelectorAll("[data-da]"));
          for (let e = 0; e < this.nodes.length; e++) {
            const t = this.nodes[e],
              s = t.dataset.da.trim().split(","),
              i = {};
            (i.element = t),
              (i.parent = t.parentNode),
              (i.destination = document.querySelector(s[0].trim())),
              (i.breakpoint = s[1] ? s[1].trim() : "767"),
              (i.place = s[2] ? s[2].trim() : "last"),
              (i.index = this.indexInParent(i.parent, i.element)),
              this.оbjects.push(i);
          }
          this.arraySort(this.оbjects),
            (this.mediaQueries = Array.prototype.map.call(
              this.оbjects,
              function (e) {
                return (
                  "(" +
                  this.type +
                  "-width: " +
                  e.breakpoint +
                  "px)," +
                  e.breakpoint
                );
              },
              this
            )),
            (this.mediaQueries = Array.prototype.filter.call(
              this.mediaQueries,
              function (e, t, s) {
                return Array.prototype.indexOf.call(s, e) === t;
              }
            ));
          for (let t = 0; t < this.mediaQueries.length; t++) {
            const s = this.mediaQueries[t],
              i = String.prototype.split.call(s, ","),
              n = window.matchMedia(i[0]),
              r = i[1],
              a = Array.prototype.filter.call(this.оbjects, function (e) {
                return e.breakpoint === r;
              });
            n.addListener(function () {
              e.mediaHandler(n, a);
            }),
              this.mediaHandler(n, a);
          }
        }),
        (ve.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              (s.index = this.indexInParent(s.parent, s.element)),
                this.moveTo(s.place, s.element, s.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const s = t[e];
              s.element.classList.contains(this.daClassname) &&
                this.moveBack(s.parent, s.element, s.index);
            }
        }),
        (ve.prototype.moveTo = function (e, t, s) {
          t.classList.add(this.daClassname),
            "last" === e || e >= s.children.length
              ? s.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? s.children[e].insertAdjacentElement("beforebegin", t)
              : s.insertAdjacentElement("afterbegin", t);
        }),
        (ve.prototype.moveBack = function (e, t, s) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[s]
              ? e.children[s].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (ve.prototype.indexInParent = function (e, t) {
          const s = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(s, t);
        }),
        (ve.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      new ve("max").init();
      const ye = document.querySelector(".quantity-filter"),
        be = document.querySelectorAll(".quantity-filter__values"),
        we = document.querySelectorAll(".slide-catalog__favorite"),
        Ce = document.querySelector(".item-tour__field--location"),
        Se = document.querySelector(".item-tour__dropdown--location"),
        xe = document.querySelectorAll(".location__item"),
        De = document.querySelector(".item-tour__field--quantity"),
        Ee = document.querySelector(".item-tour__dropdown--quantity"),
        Te = document.querySelectorAll(".item-tour__dropdown"),
        ke = document.querySelector(".wrapper-tours");
      be.forEach((e) => {
        e.addEventListener("click", function () {
          ye.querySelector(".active").classList.remove("active"),
            e.classList.add("active");
        });
      }),
        we.forEach((e) => {
          e.addEventListener("click", function () {
            e.classList.toggle("active");
          });
        });
      const Me = (e, t, s) => {
        if (e)
          return (
            e.addEventListener(t, s),
            () => {
              e.removeEventListener(t, s);
            }
          );
      };
      !(function () {
        const e = () => {
          Se.classList.toggle("show");
        };
        Me(Ce, "click", function () {
          e();
        }),
          xe.forEach((t) => {
            Me(t, "click", function () {
              (Ce.innerHTML = this.textContent), e();
            });
          }),
          Me(ke, "click", (e) => {
            e.target != Ce && Se.classList.remove("show");
          });
      })(),
        (function () {
          const e = () => {
            Ee.classList.toggle("show");
          };
          Me(De, "click", function () {
            e();
          }),
            Me(ke, "click", function (t) {
              const s = t.target,
                i = s == Ee || Ee.contains(s),
                n = s == De,
                r = Ee.classList.contains("show");
              i || n || !r || e();
            });
        })(),
        document.addEventListener("keydown", (e) => {
          Te.forEach((t) => {
            "Escape" === e.code && t.classList.remove("show");
          });
        }),
        lightGallery(document.querySelector(".gallery__box"), {
          plugins: [lgThumbnail],
        });
      const $e = document.querySelector(".scrollup");
      window.addEventListener("scroll", function () {
        $e.classList.toggle("active", window.scrollY > 600);
      }),
        $e.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }),
        [].forEach.call(document.querySelectorAll(".phone"), function (e) {
          var t;
          function s(e) {
            e.keyCode && (t = e.keyCode),
              this.selectionStart < 3 && e.preventDefault();
            var s = "+994 (__) ___ __ __",
              i = 0,
              n = s.replace(/\D/g, ""),
              r = this.value.replace(/\D/g, ""),
              a = s.replace(/[_\d]/g, function (e) {
                return i < r.length ? r.charAt(i++) || n.charAt(i) : e;
              });
            -1 != (i = a.indexOf("_")) &&
              (i < 5 && (i = 3), (a = a.slice(0, i)));
            var o = s
              .substr(0, this.value.length)
              .replace(/_+/g, function (e) {
                return "\\d{1," + e.length + "}";
              })
              .replace(/[+()]/g, "\\$&");
            (!(o = new RegExp("^" + o + "$")).test(this.value) ||
              this.value.length < 5 ||
              (t > 47 && t < 58)) &&
              (this.value = a),
              "blur" == e.type && this.value.length < 5 && (this.value = "");
          }
          e.addEventListener("input", s, !1),
            e.addEventListener("focus", s, !1),
            e.addEventListener("blur", s, !1),
            e.addEventListener("keydown", s, !1);
        });
      var Le = s(545);
      const _e = s.n(Le)();
      document.querySelector(".item-tour__field--datepicker") &&
        new _e(".item-tour__field--datepicker", {
          range: !0,
          multipleDatesSeparator: " - ",
          buttons: ["today", "clear"],
          locale: {
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            monthsShort: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            today: "Today",
            clear: "Clear",
            dateFormat: "dd.MM.yyyy",
            timeFormat: "HH:mm",
            firstDay: 0,
          },
          keyboardNav: !0,
          disableNavWhenOutOfRange: !0,
          autoClose: !0,
          dynamicRange: !0,
        }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        t.any() && document.documentElement.classList.add("touch"),
        window.addEventListener("load", function () {
          setTimeout(function () {
            document.documentElement.classList.add("loaded");
          }, 0);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              r &&
                (((e = 500) => {
                  document.documentElement.classList.contains("lock")
                    ? a(e)
                    : o(e);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          if (
            document.querySelectorAll("[data-fullscreen]").length &&
            t.any()
          ) {
            function e() {
              let e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${e}px`);
            }
            window.addEventListener("resize", e), e();
          }
        })(),
        (function () {
          const e = document.querySelectorAll("[data-spoilers]");
          if (e.length > 0) {
            const t = Array.from(e).filter(function (e, t, s) {
              return !e.dataset.spoilers.split(",")[0];
            });
            t.length && r(t);
            let s = d(e, "spoilers");
            function r(e, t = !1) {
              e.forEach((e) => {
                (e = t ? e.item : e),
                  t.matches || !t
                    ? (e.classList.add("_spoiler-init"),
                      a(e),
                      e.addEventListener("click", o))
                    : (e.classList.remove("_spoiler-init"),
                      a(e, !1),
                      e.removeEventListener("click", o));
              });
            }
            function a(e, t = !0) {
              let s = e.querySelectorAll("[data-spoiler]");
              s.length &&
                ((s = Array.from(s).filter(
                  (t) => t.closest("[data-spoilers]") === e
                )),
                s.forEach((e) => {
                  t
                    ? (e.removeAttribute("tabindex"),
                      e.classList.contains("_spoiler-active") ||
                        (e.nextElementSibling.hidden = !0))
                    : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1));
                }));
            }
            function o(e) {
              const t = e.target;
              if (t.closest("[data-spoiler]")) {
                const s = t.closest("[data-spoiler]"),
                  r = s.closest("[data-spoilers]"),
                  a = !!r.hasAttribute("data-one-spoiler");
                r.querySelectorAll("._slide").length ||
                  (a && !s.classList.contains("_spoiler-active") && l(r),
                  s.classList.toggle("_spoiler-active"),
                  ((e, t = 500) => {
                    e.hidden ? n(e, t) : i(e, t);
                  })(s.nextElementSibling, 100)),
                  e.preventDefault();
              }
            }
            function l(e) {
              const t = e.querySelector("[data-spoiler]._spoiler-active");
              t &&
                (t.classList.remove("_spoiler-active"),
                i(t.nextElementSibling, 100));
            }
            s &&
              s.length &&
              s.forEach((e) => {
                e.matchMedia.addEventListener("change", function () {
                  r(e.itemsArray, e.matchMedia);
                }),
                  r(e.itemsArray, e.matchMedia);
              });
          }
        })(),
        document.addEventListener("click", function (e) {
          let t = e.target;
          if (t.closest(".quantity__button")) {
            let e = parseInt(
              t.closest(".quantity").querySelector("input").value
            );
            const s = document.querySelector(".item-tour__field--quantity");
            t.classList.contains("quantity__button_plus")
              ? (e++, e >= 1 && (s.innerHTML = e))
              : (--e, (s.innerHTML = e), e < 1 && ((e = 1), (s.innerHTML = 1))),
              (t.closest(".quantity").querySelector("input").value = e);
          }
        });
    })();
})();
