/** @jsx React.DOM */

goog.provide('misino.ui.numberpicker.NumberPicker');

var NumberPicker = React.createClass(/** @lends {React.ReactComponent.prototype} */{
    getDefaultProps: function() {
        return {number:0};
    },
    changeNumber: function(e) {
        this.props.onChangeNumber(e.target.getAttribute('data-number'));
    },

    render: function() {
        return (
            <div className={"numberpicker"}>
                <a onClick={this.changeNumber} data-number={this.props.number-1} className={"btn btn-xs btn-default"}>&lt;&lt;</a>
                <span className="btn btn-xs">{this.props.number}</span>
                <a onClick={this.changeNumber} data-number={this.props.number+1} className={"btn btn-xs btn-default"}>&gt;&gt;</a>
            </div>
            )
    }
});