#react-datepicker

Datepicker component for applications based on Facebook React library.

##Usage
Standalone datepicker element. It can perform action if date is selected. Parameters are optional.
For best functionality, *DatePicker* needs to be wrapped in component which sets new date on *onChangeDate* event. An example of such wrapper component could be *DatepickerInput*.

```
var callback = function(date) {
  alert('new selected date is: '+date);
}

<DatePicker date={new Date()} onChangeDate={callback} show={true} />
```

This library contains own datepicker integration with input element.
All parameters are optional.
Parameter *beforeUpdate* has to be function which returns string. This string will be set as value of input field before date change.

```
var returnDate = function(date) {return date}; // this callback will be called before input field update. You can use it for example for date formatting as is shown in example/index.html
<DatePickerInput date={new Date()} beforeUpdate={returnDate} />
```

minified javascript and css are located in directory `src/build`

###Development
If you want to make changes in code and use benefits of compiling code, you need to have gulp and bower installed.

```
npm install -g gulp
npm install -g bower
```

before running gulp for the first time, install dependencies and download other stuff via bower

```
cd react-datepicker
npm install
bower install
```

Compile code via command `gulp build` or `gulp`
