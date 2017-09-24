module.exports = (app, filePath) => {
  app.get('*', (req, res) => {
    res.sendFile(filePath);
  });
}
