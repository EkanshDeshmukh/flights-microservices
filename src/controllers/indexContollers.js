 const info =  (req, res, next) => {
  res.json({
    success: true,
    message: "Hello !!",
  });
}

module.exports = {
  info
}