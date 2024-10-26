export const handleStoreItem = (key, value) => {
  const storedItem = localStorage.setItem(key, value);
  return storedItem;
};

export const handleRetrieveItem = (key) => {
  const retrievedItem = localStorage.getItem(key);
  return retrievedItem;
};

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
