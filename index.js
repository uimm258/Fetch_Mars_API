const getMars = () => {
    let CAMERA_NAME = $("#camera-name").val();
    let API_KEY = "yiLQSImPLKwRAHtLTQt23FMMEDWyFkgJaPKHPKAN";
    let searchURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&sol=1000&camera=${CAMERA_NAME}`;
    
    fetch(searchURL)
    .then(res => res.json())
    .then(responseJson => {
        let response = responseJson.photos;
        displayResults(response)
    })
    .catch(error => console.log(error));
}

function displayResults(response) {
    $("#results-list").empty();

    let results = "";
    let searchResult = $("#camera-name").val();
    console.log(searchResult)
  
    response.forEach((result) => {
            results +=
            `<div id="result-card">
                <h3>${result.rover.landing_date}</h3>
                <h4>${result.rover.launch_date}</h4>
                <img src="${result.img_src}" alt="MarsView"/>
            </div>`
    });

    $("#results").removeClass("hidden");
    $("#search-result").html(searchResult);
    $("#results-list").html(results);
    $("#title").removeClass("visible").addClass("hidden");
};

const watchForm = () => {
    $("form").submit(event => {
        event.preventDefault();
        getMars();
    });
}

const main = () => {
    watchForm()
}

$(main)