const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Deployment with ECR is in Success 🚀');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});