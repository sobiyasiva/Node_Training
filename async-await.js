async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);  
    }, 1000);
  });
}

async function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data + " processed";
      resolve(processedData);  
    }, 1000);
  });
}

function displayData(data) {
  console.log(data);  
}

async function main() {
  try {
    const data =  await fetchData();  
    console.log(data);  
    const processedData = await  processData(data);  
    console.log(processedData);  
    displayData(processedData);  
  } catch (error) {
    console.error("Error:", error);  
  }
}

main();
