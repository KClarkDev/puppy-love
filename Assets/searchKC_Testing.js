var apiUrl = "https://nominatim.openstreetmap.org/search?amenity=";
var ul = document.createElement("ul");
var data = {
  name: "Store",
};

var fetchData = {
  method: "GET",
  mode: "no-cors",
  // body: JSON.stringify(data),
  headers: new Headers({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

fetch("https://nominatim.openstreetmap.org/search?q=garden/")
  .then((response) => {
    //handle the response
    return response.json();
  })
  .then((data) => {
    var stores = data;
    console.log(stores);
    stores.map(function (stores) {
      var li = document.createElement("li");
      var name = document.createElement("h3");

      name.innerHTML = `${stores.name}`;

      li.appendChild(name);
      list.appendChild(li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
