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
