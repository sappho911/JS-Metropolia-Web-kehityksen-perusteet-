'use strict';

export const restaurantRow = (restaurant) => {
  return restaurant.map(({name, company}) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${name}</td>
        <td>${company}</td>
      `;

    return tr;
  });
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;

  const dialog = document.querySelector('dialog');

  let menuHTML = '';

  courses.forEach((course) => {
    menuHTML += `<p>${course.name}</p>`;
  });

  dialog.innerHTML = `
      <form method="dialog">
        <h2>${name}</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Postal code:</strong> ${postalCode}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>

        ${menuHTML}
        <button>Close</button>
      </form>
    `;

  return dialog;
};
