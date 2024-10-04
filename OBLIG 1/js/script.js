






let printedPosts = 0;

function fetchPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
            if (!response.ok) {
                  throw new Error("Error with status: " + response.status);
            }
            return response.json().then((posts) => {

                  let page = document.getElementById("page");

                  for (let i = 0; i < 3; i++) {
                        if (printedPosts < posts.length) {
                              let post = document.createElement("div");
                              post.id = "post";
                              let title = document.createElement("p");
                              title.textContent = posts[printedPosts].title;
                              post.appendChild(title);
                              let article = document.createElement("article");
                              article.textContent = posts[printedPosts].body;
                              post.appendChild(article);

                              page.appendChild(post);

                              console.log(posts[printedPosts]);
                              printedPosts++;
                        }
                  }

                  

            }).catch((error) => {
                  console.log(error.message);
            })
      });
}









function fetchWeather() {

      let urls = ["https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true",
                  "https://api.open-meteo.com/v1/forecast?latitude=59.911491&longitude=10.757933&current_weather=true",
                  "https://api.open-meteo.com/v1/forecast?latitude=25.761681&longitude=-80.191788&current_weather=true",
                  "https://api.open-meteo.com/v1/forecast?latitude=-33.918861&longitude=18.423300&current_weather=true",
                  "https://api.open-meteo.com/v1/forecast?latitude=-33.865143&longitude=151.209900&current_weather=true"];
      let cities = ["Tokyo",
                    "Oslo",
                    "Miami",
                    "Cape Town",
                    "Sydney"];

      let weatherdiv = document.getElementById("weatherdiv");
      while (weatherdiv.lastElementChild) {                     // this removes all content in section.
            weatherdiv.removeChild(weatherdiv.lastElementChild);   // we do this to reset the section and prepare it for being filled with data
      }




      let table = document.createElement("table");
      let row = table.appendChild(document.createElement("tr"));
      let entry = row.appendChild(document.createElement("th"));
      entry.innerText = "CITY";
      entry = row.appendChild(document.createElement("th"));
      entry.innerText = "TEMPERATURE";
      entry = row.appendChild(document.createElement("th"));
      entry.innerText = "WIND SPEED";
      entry = row.appendChild(document.createElement("th"));
      entry.innerText = "WIND DIRECTION";


      for (let i = 0; i < urls.length; i++) {
            fetch(urls[i])
            .then((response) => {
                  if (!response.ok) {
                        throw new Error("ERROR: " + response.status);
                  }

                  return response.json().then((data) => {
     
                        row = table.appendChild(document.createElement("tr"));
                        entry = row.appendChild(document.createElement("td"));
                        entry.innerText = cities[i];

                        entry = row.appendChild(document.createElement("td"));
                        entry.innerText = data.current_weather.temperature + " " + data.current_weather_units.temperature;

                        entry = row.appendChild(document.createElement("td"));
                        entry.innerText = data.current_weather.windspeed + " " + data.current_weather_units.windspeed;

                        entry = row.appendChild(document.createElement("td"));
                        entry.innerHTML = "&#8593;";
                        entry.style.rotate = `${data.current_weather.winddirection}deg`;
                  })
                  .catch((error) => {
                        console.log(error.message);
                  })
            });
      }

      document.getElementById("weatherdiv").appendChild(table);
}














//fetchWeather();
















/*
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))

      

function fetchHomedata() {
      fetch(url)
      .then((response) => {
            if (!response.ok) {
                  throw new Error("error with status: " + response.status);
            }
      })
      .then((posts) => {
            console.log(posts);

            let container = document.getElementById();
            container.innerHTML = "";

            for (post of posts) {
                  const article = document.createElement("article");
                  const title = document.createElement("h1");
                  title.textContent = post.title;
                  const body = document.createElement("p");

                  container.appendChild(article);
            }
      })
}





clear fix






async function getData() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      try {
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
            }
          
            const json = await response.json();
            console.log(json);

            json.types.forEach(element => {

            });      
        
        
      } catch (error) {
            console.error(error.message);
      }
}
*/