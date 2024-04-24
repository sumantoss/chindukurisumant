 
document.addEventListener("DOMContentLoaded", function () {
            var seeMenuButton = document.querySelector('.custom-button');
            var exploreMenuSection = document.getElementById('exploreMenuSection');     
            seeMenuButton.addEventListener('click', function (event) {

                event.preventDefault();
                exploreMenuSection.scrollIntoView({
                    behavior: 'smooth' 
                });
            });
        });

function redirectToRestaurantWebsite() {
window.location.href = 'index.html'; 
}                        


    document.getElementById("viewAllButton").addEventListener("click", function() {
        window.location.href = "web-foods-cards-deserts.html";
    });


    function indianBreads() {
        window.location.href = 'web-foods-cards-salads.html'; 
        } 

        function desserts() {
            window.location.href = 'web-foods-cards-deserts.html'; 
            } 
        
            function mainCourse() {
                window.location.href = 'web-foods-cards-main-course.html'; 
                } 

                function nonVegCurries() {
                    window.location.href = 'web-foods-cards-noodles.html'; 
                    } 

                    function vegCurries() {
                        window.location.href = 'web-foods-cards-sea-foods.html'; 
                        } 
                    
                        function soups() {
                            window.location.href = 'web-foods-cards-soups.html'; 
                            } 

                            function vegStarters() {
                                window.location.href = 'web-foods-cards-veg-starters.html'; 
                                } 

                                function nonVegStarters() {
                                    window.location.href = 'web-foods-cards.html'; 
                                    } 


