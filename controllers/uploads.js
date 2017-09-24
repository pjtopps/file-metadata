module.exports = (app) => {
  app.post('/uploads', (req, res) => {
    console.log(req.files);
    res.send('all good!');
  });
}
