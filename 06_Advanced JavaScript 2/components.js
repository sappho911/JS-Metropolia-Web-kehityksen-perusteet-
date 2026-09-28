'use strict';

export const restaurantRow = (restaurant) => {
  return restaurant.map(({_id, name, company}) => {
    const tr = document.createElement('tr');

    tr.dataset.id = _id;

    tr.innerHTML = `
      <td>${name}</td>
      <td>${company}</td>
    `;

    return tr;
  });
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {days} = menu;

  let menuHTML = '';

  days.forEach((day) => {
    day.courses.forEach((course) => {
      menuHTML += `<p>${course.name}</p>`;
    });
  });

  return `
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
};
