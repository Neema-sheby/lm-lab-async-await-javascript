import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    if (!response.ok)
      throw new Error(" ❌ Something went wrong with fetching data!");

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fetchData(jsonTypicode);
