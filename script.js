

const getData = () => {
    fetch("./tv-shows.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("url Error");
            }
            return res.json();
        })
        .then((data) => screen(data));
};


const screen = (data) => {

    data.forEach((films) => {
        document.querySelector(".tvShowList").innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${films.show.image.medium} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${films.show.name}</h5>
    <a href=${films.show.url} class="btn btn-primary">View</a>
  </div>
</div>
        
   
        
        `});
}
getData();