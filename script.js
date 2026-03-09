fetch("https://marcus-resume-api-amezgvaaaefffugw.westus2-01.azurewebsites.net/api/GetVisitorCount")
  .then(response => response.json())
  .then(data => {
    document.getElementById("counter").innerText = data.count;
  })
  .catch(error => {
    console.error(error);
    document.getElementById("counter").innerText = "Error loading counter";
  });