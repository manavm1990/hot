import axios from "axios";

// This is the DATABASE SERVER address
const BASE_URL = "http://localhost:3000";

export default {
  // `async` function returns a promise
  async index(type = "tables") {
    // Object destructuring
    const { data } = await axios.get(`${BASE_URL}/${type}`);
    return data;
  },

  async add(newCustomer) {
    // TODO: Check the lenght of the tables data
    // If it's less than 5, proceed with this code 👇🏾

    const { data } = await axios.post(`${BASE_URL}/tables`, newCustomer);
    return data;

    // If it's more than 5, then POST to `/reservations`
  },
};
