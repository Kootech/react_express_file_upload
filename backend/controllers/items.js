export const getItems = (req, res) => {
  res.send(`getItems working`);
};

export const addItem = (req, res) => {
  console.log(req.body);
  console.log(req.file);
};

export const updateItem = (req, res) => {
  res.send(`updateItem working ${req.params.id}`);
};

export const deleteItem = (req, res) => {
  res.send(`delete working ${req.params.id}`);
};
