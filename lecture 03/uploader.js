var uploaddiv = document.getElementById("uploadform")
var picturesdiv = document.getElementById("pictures")
var uploadfield = document.getElementById("uploadfield")

/**
 * 
 * Event listener for the uploadfield element that is used to help users upload new files
 * @param {string} type - the type of event listened to
 * @param {EventListener} listener - the function to call when the event is triggered
 * 
 */
uploadfield.addEventListener('change', function(){

    // if a file was selected
    if (uploadfield.files.length > 0) 
    {
    var reader = new FileReader() // File reader to read the file 

    reader.readAsText(uploadfield.files[0]); // read the uploaded file
    
    // event listener, if the reader has read the file
    reader.addEventListener('load', function() {
        var result = JSON.parse(reader.result); // parse the result into a JSON object (no error checking at this point) 
        showPictures(result)
        //console.log(result)
    })
    }  

})


/**
 * 
 * @param {JSON} result - the json object containing information about pictures to display 
 * 
 */
function showPictures(result)
{
   // update the visibility of divs
    uploaddiv.style.display = "none"
    picturesdiv.style.display = "block"
    let pictures = result.features
    let i = 0
    for (const element of pictures) 
    {
        console.log(element)
        i++    
        let key = `pic${i}`
        console.log(key)
        // dom manipulation
        document.getElementById(key).innerText = `${element.properties.poiname}, ${element.properties.cityname}`
        document.getElementById(key).href = element.properties.link
    }

}