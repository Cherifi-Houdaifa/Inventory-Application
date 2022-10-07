const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        minLength: 1,
        maxLength: 50,
    },
    description: {
        type: Schema.Types.String,
        maxLength: 200,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    author: {
        type: Schema.Types.String,
        required: true,
        minLength: 1,
        maxLength: 30,
    },
    url: {
        type: Schema.Types.String,
        required: true,
        minLength: 1,
    }
});

ItemSchema.virtual('appUrl').get(function () {
    return `/item/${this._id}`;
});

module.exports = model('Item', ItemSchema);
