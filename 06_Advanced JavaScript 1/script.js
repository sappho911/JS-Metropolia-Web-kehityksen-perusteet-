'use strict';

import {restaurantRow, restaurantModal} from './components.js';
// your code here
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

const url = 'https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants';

async function fetchMenu(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

const displayAllRestaurants = async function (url) {
  const data = await fetchData(url);

  console.log(data);

  const sortedRestaurants = [...data].sort((a, b) =>
    a.address.localeCompare(b.address)
  );

  console.log(sortedRestaurants);

  sortedRestaurants.forEach(function (rest) {
    const row = restaurantRow(rest);

    row.addEventListener('click', async function () {
      document.querySelectorAll('.restaurant-row').forEach(function (row) {
        row.classList.remove('highlight');
      });

      row.classList.add('highlight');
      const _id = rest._id;
      const menuId = `https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${_id}/fi`;

      const weeklyMenu = await fetchMenu(menuId);

      let menuHTML = '';

      weeklyMenu.days.forEach((day) => {
        menuHTML += `<h2>${day.date}</h2>`;

        day.courses.forEach((course) => {
          menuHTML += `<p>${course.name}<p>`;
        });
      });

      dialog.innerHTML = `
      <form method="dialog">
        <h2>${rest.name}</h2>
        <p><strong>Address:</strong> ${rest.address}</p>
        <p><strong>Postal code:</strong> ${rest.postalCode}</p>
        <p><strong>City:</strong> ${rest.city}</p>
        <p><strong>Phone:</strong> ${rest.phone}</p>
        <p><strong>Company:</strong> ${rest.company}</p>

        ${menuHTML}
        <button>Close</button>
      </form>
    `;

      dialog.showModal();
    });

    table.appendChild(row);
  });
};

displayAllRestaurants(url);
