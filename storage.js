export function saveToStorage(urls) {
  localStorage.setItem('urls', JSON.stringify(urls));
}

export function loadFromStorage() {
  return JSON.parse(localStorage.getItem('urls'));
}