<<<<<<< HEAD

$(document).ready(() => {


 $('#ipsumCreate').on('click', (event) => {
    event.preventDefault();
    
    $.get("/api/ipsum", function(data) {
        console.log("clicked")
        console.log(data)
        
    })
  })

});
=======
// START OF FOUNDATION JAVASCRIPT ===========================================================================================
$("[data-menu-underline-from-center] a").addClass("underline-from-center");
>>>>>>> dff09d7c6b2a7cc3c425241ed85cec2faf7cdbda