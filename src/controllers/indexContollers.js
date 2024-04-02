const info = (req, res) => {
  return res.json({
    success: true,
    message: "API is LIVE",
    
  });
};

module.exports = {
  info,
};
