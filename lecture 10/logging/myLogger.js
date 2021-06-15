"use strict"

// "mylogger" logs to just the console
var mylogger = JL();
var consoleAppender = JL.createConsoleAppender('consoleAppender')
mylogger.setOptions({"appenders": [consoleAppender]})
console.log ("Console-log: Log message in the console")

JL("JSNLOG-mylogger").info("This is an info message")
JL("JSNLOG-mylogger").debug("This is a debug message")
JL("JSNLOG-mylogger").fatal("This is a critical message")


// Log messages to the server
/*
var consoleAppender=JL.createConsoleAppender('consoleAppender');

JL.setOptions({
    "defaultAjaxUrl": "/geosoft/jsnlog/"
});

JL("mainlogger").setOptions({"appenders": [consoleAppender]});

JL().info("JSNLOG: This is an info message");
JL().debug("JSNLOG: This is a debug message");
JL().fatal("JSNLOG: This is a critical message");
*/