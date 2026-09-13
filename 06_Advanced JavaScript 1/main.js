'use strict';
import {API_ALL_RESTAURANTS, API_RESTAURANT_MENU} from './veriables.js';
import {fetchRestaurants, sortRest} from './utils.js';
import {restaurantRow} from './components.js';
// your code here
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

const loadRestaurants = await fetchRestaurants(`${API_ALL_RESTAURANTS}`);
console.log(loadRestaurants);

const sortRestaurants = sortRest(loadRestaurants);

console.log('Sorted Restaurants', sortRestaurants);

const displayRestaurants = restaurantRow(sortRestaurants);

table.innerHTML = '';
table.append(...displayRestaurants);
