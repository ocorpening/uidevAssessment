'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Person Schema
 */
var PersonSchema = new Schema({
    FirstName: {
        type: String,
        default: '',
        required: 'Please fill Person first name',
        trim: true
    },
    MiddleName: {
        type: String,
        default: '',
        required: 'Please fill Person middle name',
        trim: true
    },
    LastName: {
        type: String,
        default: '',
        required: 'Please fill Person last name',
        trim: true
    },
    BirthDate: {
        type: Date,
        default: Date.now
    },
    EmailAddress: {
        type: String,
        default: '',
        required: 'Please fill email address',
        trim: true
    },

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Person', PersonSchema);