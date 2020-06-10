const BASE_URL = "https://thinkful-list-api.herokuapp.com/chatchawan-chrissy";

const getItems = function () {
  // return Promise.resolve('A successful response!');
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({ name });
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: newItem,
  });
};

const updateItem = function (id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newData
  });
};

export default {
  getItems,
  createItem,
  updateItem
};
