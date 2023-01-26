// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  //Get form values
  let siteName = document.getElementById('siteName').value;
  let siteURL = document.getElementById('siteURL').value;

  if (!validateForm(siteName, siteURL)) {
    return false;
  }

  let bookmark = {
    name: siteName,
    url: siteURL
  }

  // Local storage test
  // localStorage.setItem('test', 'Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');

  // Test if bookmarks is null
  if (localStorage.getItem('bookmarks') === null) {
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from LocalStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmarks
function deleteBookmark(url) {
  // Get bookmarks from LocalStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop trought bookmarks
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1)
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks from LocalStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Get output ID
  let bookmarkResults = document.getElementById('bookmarksResults');

  // build output
  bookmarkResults.innerHTML = '';
  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    bookmarkResults.innerHTML += `<div class="card card-body bg-light  mb-3">
      <h3>
        ${name}
        <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
        <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="#">Delete</a>
      </h3>
    </div>`;
  }
}

// Validate form
function validateForm(siteName, siteURL) {

  if (!siteName || !siteURL) {
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteURL.match(regex)) {
    alert('Please use a valid URL');
    return false;
  }

  return true;
}