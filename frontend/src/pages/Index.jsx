import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";

import { getItems } from "../services/api";

const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function apiReq() {
      const items = await getItems();
      const data = await items.data;
      setItems(data);
      console.log(items);
    }
    apiReq();
  }, []);
  return (
    <div className="grid grid-cols-1 m-2 p-1 md:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => {
        return <Cards key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Index;
