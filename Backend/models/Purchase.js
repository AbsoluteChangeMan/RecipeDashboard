const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    ingredientId: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: [true, 'Ingredient reference is required']
    },
    quantityPurchased: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
    purchaseUnit: {
        type: String,
        required: [true, 'Unit is required']
    },
    price: {
        type: Number,
        default: 0,
        required: [true, 'Price is required'],
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Purchase', purchaseSchema);