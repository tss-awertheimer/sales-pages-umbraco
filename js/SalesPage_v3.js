$(document).ready(function () {
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: "https://staging.trafficsafetystore.com/Resellerratings/GetLatestSellerReviews",
    }).success(function (data, textStatus, jqXHR) {

        var testimonials = getRandom(data, 4)
        createTestimonialsDiv();

        function getRandom(arr, n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        }

        function createTestimonialsDiv(){
            $.each(testimonials, function(index, item){

                    var content= '<div class="testimonial">   '+
                            '<img src="https://media.trafficsafetystore.com/image/upload/v1598281267/SalesPages/img-desktop1-5stars.png" alt="5 Star Rating">'+
                            '<p class="sales-p">"'+ item.review +'"</p>'+
                            '<p class="sales-p">-'+ item.username +'</p>'+
                            '</div>';

                    var newdiv = document.createElement("div");
                    newdiv.innerHTML = content
                    newdiv.className = "col-12 col-md-3"

                    var container = document.querySelector("#testimonials-row-1")
                    container.appendChild(newdiv);

                return;
            });
        }

    });
});