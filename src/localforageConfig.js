import localforage from "localforage";

const configureLocalForage = () => {
  localforage.config({
    driver: localforage.INDEXEDDB, // Force IndexedDB; same as using setDriver()
    name: "PharmacyService",
    version: 1.0,
    storeName: "keyvaluepairs", // Should be alphanumeric, with underscores.
  });

  // Set data
  localforage.setItem("key", "value").then(() => {
    // console.log("Data set successfully");
  });

  // Retrieve data
  localforage.getItem("key").then((value) => {
    // console.log("Retrieved value:", value);
  });
};

export default configureLocalForage;
