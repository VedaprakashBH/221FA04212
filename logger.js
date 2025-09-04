export function logEvent(event) {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push({ event, time: new Date().toLocaleString() });
  localStorage.setItem('logs', JSON.stringify(logs));
}