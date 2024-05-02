var timeoutIds = {};

function toggleDropdown(id) {
  var dropdownContent = document.getElementById('dropdown' + id);
  var allDropdowns = document.querySelectorAll('.dropdown-content');

  // Toggle display of clicked div's content
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    // Show content of clicked div
    dropdownContent.style.display = 'block';
    
    // Close other dropdowns and clear timeouts
    allDropdowns.forEach(function(dropdown) {
      if (dropdown.id !== 'dropdown' + id) {
        dropdown.style.display = 'none';
        clearTimeout(timeoutIds[dropdown.id]);
      }
    });

    // Set timeout to close the dropdown after 5 seconds
    timeoutIds['dropdown' + id] = setTimeout(function() {
      dropdownContent.style.display = 'none';
    }, 10000);
  } else {
    // Hide content of clicked div
    dropdownContent.style.display = 'none';
    clearTimeout(timeoutIds['dropdown' + id]);
  }
}
// function toggleDropdown(id) {
//   var dropdownContent = document.getElementById('dropdown' + id);
//   var allDropdownContents = document.querySelectorAll('.dropdown-content');
  
//   // Close all other dropdowns
//   allDropdownContents.forEach(function(content) {
//     if (content.id !== 'dropdown' + id) {
//       content.style.display = 'none';
//     }
//   });

//   // Toggle display of clicked div's content
//   if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
//     dropdownContent.style.display = 'block';
//   } else {
//     dropdownContent.style.display = 'none';
//   }
// }
