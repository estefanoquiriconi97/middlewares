// Ada, Greta, Vim o Tim.

module.exports = function (req, res, next) {
  switch (req.query.user) {
    case "Ada":
      next();
      break;
    case "Greta":
      next();
      break;
    case "Vim":
      next();
      break;
    case "Tim":
      next();
      break;
    default:
        res.send('No tienes los privilegios para ingresar');
      break;
  }

  next();
};
