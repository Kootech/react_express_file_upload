import React, { useState } from "react";
import { addItem } from "../services/api";

const AddItemForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    image: null,
  });

  const { name, description, category, price, image } = form;

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("image", form.image);
    try {
      const res = await addItem(formData);
      console.log(`upload was successful ${res}`);
    } catch (e) {
      console.log(`error occurred ${e}`);
    }
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ItemName
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Watch"
              required
              onChange={handleChange}
              value={name}
            />
          </div>

          <div className="mb-6">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description"
              required
              onChange={handleChange}
              value={description}
            />
          </div>

          <div className="mb-6">
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              item category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="electronics"
              required
              onChange={handleChange}
              value={category}
            />
          </div>

          <div className="mb-6">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="20"
              required
              onChange={handleChange}
              value={price}
            />
          </div>
          <div className="mb-6">
            <label
              for="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  [e.target.id]: e.target.files[0],
                }))
              }
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
