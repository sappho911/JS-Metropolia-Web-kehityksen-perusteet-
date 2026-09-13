'use strict';

export const fetchRestaurants = async function (restaurant) {
  try {
    const response = await fetch(restaurant);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

// export const getSortedRestaurants = (restaurants) => {
//   return [...restaurants].sort((a, b) => a.address.localeCompare(b.address));
// };

// Modern way nowa days
export const sortRest = (restaurants) => {
  return restaurants.toSorted((a, b) => a.address.localeCompare(b.address));
};

// Still modern way but a little bit of old style

// export const sortRest = (restaurants) => {
//   return restaurants
//     .map((rest) => rest)
//     .sort((a, b) => {
//       return a.address.localeCompare(b.address);
//     });
// };
