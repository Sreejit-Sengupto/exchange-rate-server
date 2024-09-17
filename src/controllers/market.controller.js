import axiosInstance from "../axiosInstance.js";
import { MarketData } from "../models/marketData.model.js";

const getExchageData = async (req, res) => {
  try {
    let wazirxData = await axiosInstance.request({
      url: "/tickers",
      method: "get",
    });

    wazirxData = Object.entries(wazirxData.data)
      .slice(0, 10)
      .map((item) => item.slice(1))
      .map((item) => item[0])
      .map(({ name, last, buy, sell, volume, base_unit }) => ({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit,
      }));

    if (!wazirxData) {
      return res.status(500).json({ message: "Failed to fetch data" });
    }

    const createdData = await MarketData.findOneAndUpdate(
      {},
      { exchangeData: wazirxData },
      { upsert: true, new: true }
    );

    if (!createdData) {
      throw new Error("Failed to save to database");
    }

    return res.status(200).json({ message: "Success", data: createdData });
  } catch (error) {
    console.error("Internal server error", error);
  }
};

export { getExchageData };
