import express from 'express';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.unsubscribe(express.json());

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
