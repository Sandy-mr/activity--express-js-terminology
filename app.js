const express = require('express');
const chalk = require('chalk');
const logger = require('morgan');

const app = express();
const indexFile = `${ __dirname }/index.html`;
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.sendFile(indexFile)

});

app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found.'
  };

  response
  .status(404)
  .json(ERROR);
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 Server Error');
});


app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Express server running on PORT: ${PORT}`);

  console.log(formatedMessage);
});
