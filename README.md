#react-datepicker

Datepicker component for applications based on Facebook React library.

##Usage
Standalone datepicker element. It can perform action if date is selected. Parameters are optional.

```
var callback = function(date) {
  alert('new selected date is: '+date);
}

<Datepicker date={new Date()} onChangeDate={callback} show={true} />
```

This library contains own datepicker integration with input element.
All parameters are optional.
Default: date = new Date()
```
<DatepickerInput date={new Date()} />
```
