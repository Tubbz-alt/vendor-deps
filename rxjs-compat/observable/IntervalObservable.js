"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var IntervalObservable = /** @class */ (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
        return rxjs_1.interval(period, scheduler);
    };
    return IntervalObservable;
}(rxjs_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map