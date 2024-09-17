import mongoose, { Schema } from "mongoose";

// name, last, buy, Sell, volume, base_unit

const wazirxDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  buy: {
    type: String,
    required: true,
  },
  sell: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  base_unit: {
    type: String,
    required: true,
  },
});

const marketDataSchema = new Schema({
  exchangeData: [wazirxDataSchema],
});

export const MarketData = mongoose.model("MarketData", marketDataSchema);
