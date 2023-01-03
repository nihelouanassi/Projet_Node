const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY;

exports.authenticate = (req, res, next) => {
    let token = req.headers.authorization;


    
  if (token) {
    // Verify the JWT and decode it
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        // The JWT is invalid, so return an error
        return res.status(401).send('Unauthorized');
      }

      // The JWT is valid, so set the req.user object
      req.user = decoded;

      // Call the next middleware function
      return next();
    });
  } else {
    // No JWT was provided, so return an error
    return res.status(401).send('Unauthorized');
  }


}


exports.checkAdmin = (req, res, next)=> {
    if (req.user.role === 'admin') {
      // The user is an admin, so call the next middleware function
      return next();
    }
  
    // The user is not an admin, so return an error
    res.status(401).send('Unauthorized');
  }
 