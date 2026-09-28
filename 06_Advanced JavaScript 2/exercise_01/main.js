'use strict';

import {restaurantRow, restaurantModal} from '../components.js';
import {fetchData, sortRest} from './utils.js';
import {API_ALL_RESTAURANTS, API_RESTAURANT_MENU} from './veriables.js';

const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

const allRestaurants = await fetchData(API_ALL_RESTAURANTS);

const sortedRestaurantsByAddress = sortRest(allRestaurants);

const rows = restaurantRow(sortedRestaurantsByAddress);

rows.forEach((row) => {
  table.appendChild(row);
});

table.addEventListener('click', async function (e) {
  const row = e.target.closest('tr');

  if (!row) return;

  table.querySelectorAll('tr').forEach((row) => {
    row.classList.remove('highlight');
  });

  const id = row.dataset.id;

  try {
    const menu = await fetchData(API_RESTAURANT_MENU(id));

    const restaurant = sortedRestaurantsByAddress.find(
      (rest) => rest._id === id
    );

    if (!restaurant) {
      throw new Error('Restaurant menu not found');
    }

    row.classList.add('highlight');

    dialog.innerHTML = restaurantModal(restaurant, menu);
    dialog.showModal();
  } catch (error) {
    console.error('Failed to load restaurant:', error);

    dialog.innerHTML = `
      <form method="dialog">
        <h2>Error</h2>
        <p>Could not load restaurant information. Please try again.</p>
        <button>Close</button>
      </form>
    `;

    dialog.showModal();
  }
});
