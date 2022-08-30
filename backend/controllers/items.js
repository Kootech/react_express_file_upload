import itemModel from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json(`bad request ${error}`);
  }
};

export const addItem = async (req, res) => {
  const { name, description, category, price } = req.body;
  const file = req.file.filename;
  console.log(req.file.filename);
  try {
    const item = await itemModel.create({
      name,
      description,
      category,
      price,
      image: file,
    });
    res.status(201).json(item);
    console.log(item);
  } catch (error) {
    res.status(400).json(`error ${error} occurred`);
  }
};

export const updateItem = (req, res) => {
  res.send(`updateItem working ${req.params.id}`);
};

export const deleteItem = (req, res) => {
  res.send(`delete working ${req.params.id}`);
};
