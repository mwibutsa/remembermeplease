import express from 'express';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;

const app = express();
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
