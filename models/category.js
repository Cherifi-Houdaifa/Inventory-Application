const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        minLength: 1,
        maxLength: 15,
    },
    description: {
        type: Schema.Types.String,
        maxLength: 50,
    },
});

CategorySchema.virtual('appUrl').get(function () {
    return `/category/${this._id}`;
});

module.exports = model('Category', CategorySchema);
