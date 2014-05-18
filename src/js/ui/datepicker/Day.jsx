/** @jsx React.DOM */

goog.provide('misino.ui.datepicker.Day');

var Day = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        this.props.changeDate(this.props.date);
    },
    getDefaultProps: function() {
        return {selected:false};
    },
    render: function() {
        var className="day week-"+this.props.week+" dayInWeek-"+this.props.date.getDay();
        className += (this.props.selected?' selected':'');
        return (
            <div className={className}>
                <a href="#" onClick={this.handleClick}>{this.props.date.getDate()}</a>
            </div>
            );
    }
});