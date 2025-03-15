const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
    {
        customer_id: { type: String, required: true, unique: true },
        customer_name: { type: String, required: true },
        customer_email: { type: String, required: true, unique: true },
        customer_phone: { type: String, required: true },
    },
    { collection: "customer" } // 🟢 Đặt tên collection là "customer"
);

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
