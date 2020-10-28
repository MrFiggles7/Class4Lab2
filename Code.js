$(document).ready(
    function () {

        function Calculate() {
            var total = 15.00;
            var priceTopping = 1.25;

            var toppings = parseFloat($("#toppings").val());
            var people = parseFloat($("#people").val());

            total += toppings * priceTopping;

            var newTotal = total / people;

            return newTotal;
        }

        $("button").click(function() {
            var total = Calculate();
            $('p').text(`Total Cost Per Person: $${total}`);
        });

    }
);