document.getElementById('lastupdate').textContent = document.lastModified;

const options = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);
