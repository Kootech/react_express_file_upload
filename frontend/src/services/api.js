import axios from "axios";

const uri = "http://localhost:5000/items";

export const getItems = () => axios.get(uri);
