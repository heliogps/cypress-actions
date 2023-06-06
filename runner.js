const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjcwYTRjYjVkLWQ2OTMtNGI5NC1hZjZkLTcwODVmZWIwMmIzYi0xNjg2MDcxODkxNDA4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZmMyZGI5YmItOTI2Ni00ZTkyLWFjNTQtNDZjMWRkZmRiMzFmIiwidHlwZSI6InQifQ.hx524OQtZ0NX0vlAgTf8cgKOzjRUScN4XNqtd4KwKpk'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
