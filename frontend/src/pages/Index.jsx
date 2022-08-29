import React, { useEffect, useState } from "react";

import { getItems } from "../services/api";

const Index = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function apiReq() {
      const items = await getItems();
      const data = items.data;
      setItems(data);
    }
    apiReq();
  }, [items]);
  return (
    <div>
      <h1>{console.log(items)}</h1>
    </div>
  );
};

export default Index;
