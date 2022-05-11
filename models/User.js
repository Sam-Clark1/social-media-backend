const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valid email address.']
        },
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
      ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
      ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // makes sure no duplicate _id's are made from virtuals
        id: false
    }
);

// Get total friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

// Creates User model using the UserSchema
const User = model('User', UserSchema)

module.exports = User;