import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div class="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ItemName
            </label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Watch"
              required
              onChange={handleChange}
              value={name}
            />
          </div>

          <div class="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Description
            </label>
            <input
              type="text"
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description"
              required
              onChange={handleChange}
              value={description}
            />
          </div>

          <div class="mb-6">
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              item category
            </label>
            <input
              type="text"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="electronics"
              required
              onChange={handleChange}
              value={category}
            />
          </div>

          <div class="mb-6">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              price
            </label>
            <input
              type="number"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="20"
              required
              onChange={handleChange}
              value={price}
            />
          </div>
          <div class="mb-6">
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
