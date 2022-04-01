# Thermostat server

This project is intended as a small exemplar to be used for the JavaScript Thermostat web server.

Run the server:

```
$ npm install
$ node web.js
Thermostat server listening on http://localhost:3000
```

Usage over HTTP:

```
$ curl -XGET http://localhost:3000/
{"Hello, it's me, your thermostat!"}
$ curl -XGET http://localhost:3000/temperature
{"temperature":20}
$ curl -XPOST http://localhost:3000/up
$ curl -XPOST http://localhost:3000/up
$ curl -XGET http://localhost:3000/temperature
{"temperature":22}
$ curl -XDELETE http://localhost:3000/
$ curl -XGET http://localhost:3000/temperature
{"temperature":20}
```