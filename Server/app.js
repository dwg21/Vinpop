require('dotenv').config();
require('express-async-errors');
// express

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))
// rest of the packages


const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// database
const connectDB = require('./db/connect');

//  routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const listingRouter = require('./routes/listingRoutes');
const cartRouter = require('./routes/CartRoutes');
const offerRoute  = require('./routes/offerRoutes');



// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.set('trust proxy', 1);


// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 60,
//   })
// );
// app.use(helmet());
app.use(cors({
    origin:['https://vinswap.onrender.com', 'https://vinswap.lat/'],
    credentials: true
}));
// app.use(xss());
// app.use(mongoSanitize());

// app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', express: true}));
app.use(cookieParser(process.env.JWT_SECRET));

app.use(fileUpload({useTempFiles: true}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/listing', listingRouter);
app.use('/api/v1/cart', cartRouter);
app.use('/api/v1/offer', offerRoute);





app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
