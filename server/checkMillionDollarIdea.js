const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
  
    if (
      !numWeeks || 
      !weeklyRevenue || 
      isNaN(numWeeks) || 
      isNaN(weeklyRevenue) ||
      Number(numWeeks) * Number(weeklyRevenue) < 1000000
    ) {
      return res.status(400).send();
    }
  
    next();
  }
  
  // Leave this exports assignment so that the function can be used elsewhere
  module.exports = checkMillionDollarIdea;
  