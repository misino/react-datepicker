/** @jsx React.DOM */

goog.provide('misino.ui.datepicker.DatePicker');
goog.require('misino.ui.numberpicker.NumberPicker');
goog.require('misino.ui.datepicker.DayPicker');

var DatePicker = React.createClass({
    onChangeVisibleDate: function(date) {
        this.setState({visibleDate:date});
    },
    onChangeSelectedDate: function(date) {
        this.setState({visibleDate:date});
        this.props.onChangeDate(date);
    },
    getDefaultProps: function() {
        return({selectedDate:new Date(), show:true, onChangeDate: function(date) {
            console.log(date);
        }});
    },
    getInitialState: function() {
        var date = new Date();
        date.setTime(this.props.selectedDate.getTime());
        return({visibleDate:date});
    },
    changeYear: function(year) {
        var date = new Date();
        date.setTime(this.state.visibleDate.getTime());
        date.setFullYear(year);
        this.setState({visibleDate:date});
    },
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