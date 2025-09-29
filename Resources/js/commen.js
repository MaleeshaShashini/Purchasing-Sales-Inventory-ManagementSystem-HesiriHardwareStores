function includeHTML(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.log("Error loading " + file, err));
}