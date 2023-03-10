// Add event listeners to the tab links
const tabLinks = document.querySelectorAll('.tabs a');

tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove the active class from all the tab links
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the active class to the clicked tab link
    link.classList.add('active');

    // Show the corresponding tab pane
    const tab = link.dataset.tab;
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabPanes.forEach(pane => {
      if (pane.dataset.tab === tab) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  });
});
