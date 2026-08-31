'use strict';

//https://reqres.in/api/users/1      GET
//https://reqres.in/api/users        Post
//https://reqres.in/api/unknown/23   Error Handling

const url = 'https://reqres.in/api/users';

async function fetchData(url, uploadData = undefined) {
  console.log('Start fetching data');

  try {
    const options = uploadData
      ? {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        }
      : {};

    const res = await fetch(url, options);
    if (!res.ok)
      throw new Error(`Response error: 💥💥💥💥${res.status}💥💥💥💥`);
    const data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    console.error(`An error occurred:❌❌❌${err}❌❌❌`);
    throw err;
  }
}

fetchData(url);

//DONE 4.0

// Exercise 4.0 Generic Fetch Function.
// Create a reusable async function
// that abstracts the Fetch API usage and handles errors.

// async function fetchData(url, options = {}) {
//   try {
//     const res = await fetch(url, options);

//     if (!res.ok) {
//       throw new Error(`Response error: 💥💥💥💥${res.status}💥💥💥💥`);
//     }

//     return await res.json();
//   } catch (err) {
//     throw err;
//   }
// }
