/** @jsx React.DOM */

goog.provide('misino.ui.datepicker.DatePicker');
goog.require('misino.ui.numberpicker.NumberPicker');
goog.require('misino.ui.datepicker.DayPicker');

var DatePicker = React.createClass(/** @lends {React.ReactComponent.prototype} */{
    /**
     *
     * @param {Date} date
     */
    onChangeVisibleDate: function(date) {
        this.setState({visibleDate:date});
    },
    /**
     *
     * @param {Date} date
     */
    onChangeSelectedDate: function(date) {
        this.setState({visibleDate:date});
        this.props.onChangeDate(date);
    },
    /**
     *
     * @returns {{selectedDate: Date, show: boolean, onChangeDate: onChangeDate}}
     */
    getDefaultProps: function() {
        return({selectedDate:new Date(), show:true, onChangeDate: function(date) {
            console.log(date);
        }});
    },
    /**
     *
     * @returns {{visibleDate: Date}}
     */
    getInitialState: function() {
        var date = new Date();
        date.setTime(this.props.selectedDate.getTime());
        return({visibleDate:date});
    },
    /**
     *
     * @param {number} year
     */
    changeYear: function(year) {
        var date = new Date();
        date.setTime(this.state.visibleDate.getTime());
        date.setFullYear(year);
        this.setState({visibleDate:date});
    },
    /**
     *
     * @param {number} month
     */
    changeMonth: function(month) {
        var date = new Date();
        date.setTime(this.state.visibleDate.getTime());
        date.setMonth(month-1);
        this.setState({visibleDate:date});
    },
    render: function () {
        var style = {display:(this.props.show?'block':'none')};
        return (
            <div className="datepicker" style={style}>
                <div className="datepicker-container">
                    <NumberPicker number={this.state.visibleDate.getFullYear()} onChangeNumber={this.changeYear} />
                    <NumberPicker number={this.state.visibleDate.getMonth()+1} onChangeNumber={this.changeMonth} />

                    <DayPicker date={this.state.visibleDate} selectedDate={this.props.selectedDate} changeDate={this.onChangeVisibleDate} selectDate={this.onChangeSelectedDate} />
                </div>
            </div>
            );
    }
});

goog.exportSymbol('DatePicker', DatePicker);