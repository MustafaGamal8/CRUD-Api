const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const connectDb = require('./config/connectDB');
const { default: mongoose } = require('mongoose');
require('dotenv').config();




app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('This is Mustafa gamal Api ');
});

app.use("/api", require("./routes/api"));
app.use("/collection", require("./routes/Collection"));




app.use(require('./middlewares/errorMW'))



connectDb()
mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
})

