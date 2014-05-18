goog.provide('misino.utils.DateUtils');

var DateUtils = {
    /**
     * Gets count of days in current month.
     * @param {number} month January has number 1. February 2, ... and so on
     * @param {number} year
     * @returns {number}
     */
    daysInMonthCount: function(month, year) {
        var d =new Date(year, month+1, 0);
        return d.getDate();
    },
    /**
     * Gets array of numbers starting from start to end
     * @param {number} start
     * @param {number} end
     * @returns {Array} array of numbers
     */
    getArrayByBoundary: function(start, end) {
        var out = [];
        for(var i= start; i<=end; i++) {
            out.push(i);
        }
        return out;
    },
    /**
     * Creates new Date() instance.
     * @param {number} date day in month
     * @param {number} time
     * @returns {Date}
     */
    createNewDay:  function(date, time) {
        var newDate = new Date();
        newDate.setTime(time);
        newDate.setDate(date);
        return newDate;
    },
    /**
     * Creates new Date() instance.
     * @param {number} date day in month
     * @param {number} month
     * @param {number} time
     * @returns {Date}
     */
    createNewDayMonth: function(date, month, time) {
        var newDate = new Date();
        newDate.setTime(time);
        newDate.setMonth(month);
        newDate.setDate(date);
        return newDate;
    }
}