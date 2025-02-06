function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Fetched data";
      if (data) {
        resolve(data);
      } else {
        reject("Error in fetching data");
      }
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        const processedData = data + " processed";
        resolve(processedData);
      } else {
        reject("Error in processing data");
      }
    }, 1000);
  });
}

function displayData(data) {
  console.log(data);
}

// Chaining promises
fetchData()
  .then((data) => {
    console.log("Step 1:", data);
    return processData(data);
  })
  .then((processedData) => {
    console.log("Step 2:", processedData);
    displayData(processedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
