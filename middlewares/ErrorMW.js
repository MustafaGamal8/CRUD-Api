function errorMW(err, req, res, next) {
  if (err) {
    if (err instanceof Error) {
      // Application error
      console.error(err);
      res.status(500).send(err.message);
    } else if (err.errors && typeof err.errors === 'object') {
      // Mongoose validation error
      const validationErrors = [];
      for (const key in err.errors) {
        if (err.errors[key].message) {
          validationErrors.push(err.errors[key].message);
        }
      }
      res.status(400).json({ errors: validationErrors });
    } else {
      // Other unexpected errors
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  } else {
    // No error provided
    res.status(500).send('Bad Request');
  }
}

module.exports = errorMW;
