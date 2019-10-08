require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User.js');
const Professor = require('../models/Professor.js');


const sallyJohnson = new Professor({
	name: 'Sally Johnson',
	course: 'General Commercial Liability',
	school: 'University of Georgia',
	description: 'She is a lazy professor!',
	image: 'https://static.parade.com/wp-content/uploads/2019/09/Young-Woman-Teacher-Classroom-FTR.jpg'
});


const jamesDean = new Professor({
	name: 'James Dean',
	course: 'Calculus 1',
	school: 'University of Georgia',
	description: 'He is so hard!',
	image: 'https://www.careerfaqs.com.au/wp-content/uploads/2018/10/How_to_become_a_teacher_612px.jpg'

});

const amyJones = new Professor({
	name: 'Amy Jones',
	course: 'Calculus 3',
	school: 'University of Georgia',
	description: 'She is so hard!',
	image: 'https://thenypost.files.wordpress.com/2019/09/shutterstock_diverse-classroom.jpg?quality=90&strip=all&w=618&h=410&crop=1'
});


const jim = new User({
	userName: 'Jimdoan4',
	password: 'password'
});

User.deleteMany({})
	.then(() => jim.save());

Apparel.deleteMany({})
	.then(() => sallyJohnson.save())
	.then(() => jamesDean.save())
	.then(() => amyJones.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());


