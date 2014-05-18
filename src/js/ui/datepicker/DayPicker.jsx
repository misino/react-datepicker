/** @jsx React.DOM */

goog.provide('misino.ui.datepicker.DayPicker');
goog.require('misino.utils.DateUtils');
goog.require('misino.ui.datepicker.Day');

var DayPicker = React.createClass({
    selectDay: function(date) {
        this.props.selectDate(date);
    },
    render: function (){
        var date=this.props.date,
            beforeDaysCount = DateUtils.daysInMonthCount((date.getMonth()-1), date.getFullYear()),
            firstDay = DateUtils.createNewDay(1, date.getTime()),
            offset = (firstDay.getDay()===0?7:firstDay.getDay())- 1,
            daysArray = DateUtils.getArrayByBoundary(beforeDaysCount-offset+1, beforeDaysCount);

        var previousMonthDays = daysArray.map(function(day){
            var thisDate = DateUtils.createNewDayMonth(day, date.getMonth()-1, date.getTime());
            return <Day date={thisDate} week={1} changeDate={this.selectDay} />
        }.bind(this));

        daysArray = DateUtils.getArrayByBoundary(1, DateUtils.daysInMonthCount(date.getMonth(), date.getFullYear()));
        var actualMonthDays = daysArray.map(function(day) {
            var thisDate = DateUtils.createNewDay(day, date.getTime()),
                weekNumber = Math.ceil((day+offset) / 7),
                selected = false;

            if(date.getMonth()==this.props.selectedDate.getMonth() && date.getFullYear()==this.props.selectedDate.getFullYear()) {
                selected = (day==this.props.selectedDate.getDate());
            }
            return <Day selected={selected} date={thisDate} week={weekNumber} changeDate={this.selectDay} />
        }.bind(this));

        daysArray = DateUtils.getArrayByBoundary(1, 42- previousMonthDays.length - actualMonthDays.length);
        var nextMonthDays = daysArray.map(function(day){
            var thisDate = DateUtils.createNewDayMonth(day, date.getMonth()+1, date.getTime()),
                weekNumber = Math.ceil((previousMonthDays.length + actualMonthDays.length + day) / 7);
            return <Day date={thisDate} week={weekNumber} changeDate={this.selectDay} />
        }.bind(this));

        return (
            <div className="datepicker-dates">
                <div className="out">
                {previousMonthDays}
                </div>
                <div>
                {actualMonthDays}
                </div>
                <div className="out">
                {nextMonthDays}
                </div>
            </div>
            );
    }
});