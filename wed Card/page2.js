document.addEventListener('DOMContentLoaded', function() {
  const guestList = document.getElementById('guestList');
  const addButton = document.getElementById('addButton');

  function updateGuestList() {
    // Get the stored guest list from local storage
    const storedList = JSON.parse(localStorage.getItem('guestList')) || [];

    // Clear the existing list
    guestList.innerHTML = '';

    // Populate the list
    storedList.forEach((name, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <button class="deleteButton" data-index="${index}">DEL</button>
        <span>${index + 1}. ${name}</span>
        <input type="checkbox" id="checkbox${index}" />
      `;
      guestList.appendChild(listItem);

      // Set checkbox state based on local storage
      const checkbox = document.getElementById(`checkbox${index}`);
      checkbox.checked = localStorage.getItem(`checkbox${index}`) === 'checked';

      // Add event listener to save checkbox state
      checkbox.addEventListener('change', function() {
        localStorage.setItem(`checkbox${index}`, this.checked ? 'checked' : '');
      });

      // Add event listener for delete button
      const deleteButton = listItem.querySelector('.deleteButton');
      deleteButton.addEventListener('click', function() {
        deleteGuest(index);
      });
    });
  }

  addButton.addEventListener('click', function() {
    const newName = prompt('Enter a new name:');
    if (newName) {
      const storedList = JSON.parse(localStorage.getItem('guestList')) || [];
      storedList.push(newName);
      localStorage.setItem('guestList', JSON.stringify(storedList));
       updateGuestList();
    }
  });

  function deleteGuest(index) {
    const storedList = JSON.parse(localStorage.getItem('guestList')) || [];
    storedList.splice(index, 1);
    localStorage.setItem('guestList', JSON.stringify(storedList));
    updateGuestList();
  }

  updateGuestList();
});
