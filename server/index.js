const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


try {
	mongoose.connect('mongodb+srv://ryzensingh:admin123@cluster0.kzz5ihj.mongodb.net/infinite-locus');

	const connection = mongoose.connection;
	connection.once('open', () => {
    console.log("connection established")
	});
} catch (err) {
	lokiLogger.error('Error : ' + err);
	logger.error('Error : ' + err);
}


const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true,limit: '10mb' }));





const userRoutes = require('./controllers/user.controller');
app.use('/user', userRoutes);

const courseRoutes = require('./controllers/course.controller');
app.use('/course', courseRoutes);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Successfully served on port: ${PORT}.`);
});
