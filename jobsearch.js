function getJobSearch() {
    var queries = $('#queries-input').val()
    var location = $('#location-input').val()
    var jobType = $('#jobType-input').val()
    var url = 'http://api.indeed.com/ads/apisearch?publisher=9327050513995141&q='+ queries + '&l' + location + 'sort=&radius=&st=&jt=' + jobType +  '&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json' 

    // Using YQL and JSONP
    $.ajax({
    url: url,
 
    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
 
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // Tell YQL what we want and that we want JSON
    data: {
        format: "json"
    },
 
    // Work with the response
    success: function(res) {
        console.log(res)
       
        for (i = 0; i < (res.results).length; i++) {
          var resultRow = document.createElement("div")
          $(resultRow).append("<h2>"+res.results[i]['jobtitle']+"</h2>")
          $(resultRow).append("<h2>"+res.results[i]['company']+"</h2>")
          $(resultRow).append("<h2>"+res.results[i]['formattedLocation']+"</h2>")
          $(resultRow).append("<h2>"+res.results[i]['date']+"</h2>")
          $(resultRow).append("<h2>"+res.results[i]['snippet']+"</h2>")
          $(resultRow).append("<h2>"+res.results[i]['url']+"</h2>")
          $("#result-container").append(resultRow)
        }
    }
});
}

$(function() {
    getJobSearch()

    $('#submit').on('click', function() {
        getJobSearch()
    })
})




