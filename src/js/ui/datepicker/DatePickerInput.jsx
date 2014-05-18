/** @jsx React.DOM */

goog.provide('misino.ui.datepicker.DatePickerInput');
goog.require('misino.ui.datepicker.DatePicker');

var DatePickerInput = React.createClass(/** @lends {React.ReactComponent.prototype} */{
    /**
     *
     * @returns {{date: Date}}
     */
    getDefaultProps: function() {
        return({date:new Date()});
    },
    /**
     *
     * @returns {{show: boolean}}
     */
    getInitialState: function() {
        return {show:false};
    },
    showDatePicker: function() {
        this.setState({show:true});
    },
    hideDatePicker: function() {
        this.setState({show:false});
    },
    /**
     *
     * @param {Date} date
     */
    onChangeDate: function(date) {
        this.props.date = date;
        this.setState({show:false});
    },
    render: function() {
        var style={position:'fixed', top:0,left:0, width:'100%', height:'100%', display:(this.state.show?'block':'none')};

        return (
            <div>
                <div style={style} onClick={this.hideDatePicker}></div>
                <div className="datepicker-wrapper">
                    <DatePicker selectedDate={this.props.date} show={this.state.show} onChangeDate={this.onChangeDate}  />
                </div>
                <input type="text" onFocus={this.showDatePicker} value={this.props.date} />
            </div>
            );
    }
});

goog.exportSymbol('DatePickerInput', DatePickerInput);