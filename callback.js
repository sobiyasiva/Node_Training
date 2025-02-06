
function fetchData(callback) {
  console.log('Fetching data...'); 
  setTimeout(() => {
      const data = { id: 1, name: 'John Doe', age: 30 };
      callback(data);
  }, 2000);
}

function handleData(data) {
  console.log('Data received:', data);
}

fetchData(handleData);

  
  //handleData-callback function,fetchdata-main function