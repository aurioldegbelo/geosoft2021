"use strict"

// "ClientConsole" logs to just the console
var consoleAppender = JL.createConsoleAppender('consoleAppender')
JL().setOptions({"appenders": [consoleAppender]})
console.log ("Console-log: Log message in the console")

JL("ClientConsole").info("This is an info message")
JL("ClientConsole").debug("This is a debug message")
JL("ClientConsole").fatal("This is a critical message")


