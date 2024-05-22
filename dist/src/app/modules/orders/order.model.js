"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true, ref: "Product" },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});
exports.OrderModel = (0, mongoose_1.model)("order", OrderSchema);
