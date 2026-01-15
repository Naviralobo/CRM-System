import axios from "axios";
export const fetchLeads = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};
