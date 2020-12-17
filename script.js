$(document).ready(function () {
    var arrayOfHours = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
    var background = $(".container"); //How to select the container
    var hour = moment().format('kk');
    var day = moment().format('dddd' + ', ' + 'MMMM' + ' ' + 'Do');

    // Displays the current day in the header
    $("#currentDay").text(day);

    for (var i = 0; i < arrayOfHours.length; i++) {
        // Row Creator
        var rowAdder = $("<div>");
        rowAdder.addClass("row");

        // Col Creator for time
        var colTime = $("<div>");
        colTime.addClass("col-2 time-block hour");

        // Time creator of the array?
        colTime.text(arrayOfHours[i]);
        // colTime.attr("id", arrayOfHours[i]);

        // Col Creator for textarea
        var colText = $("<div>");
        colText.addClass("col-8");
        if (hour === arrayOfHours[i]) {
            colText.addClass("present");
        } else if (hour < arrayOfHours[i]) {
            colText.addClass("future");
        } else if (hour > arrayOfHours[i]) {
            colText.addClass("past");
        }
        // colText.attr("id", arrayOfHours[i]);

        // text creator <textarea>
        var textCreator = $("<textarea>");
        textCreator.attr("id", arrayOfHours[i]);
        colText.append(textCreator);


        // Col Creator for textarea
        var colButton = $("<div>");
        colButton.addClass("col-2");

        // button creator  class="saveBtn"
        var buttonCreator = $("<button>");
        buttonCreator.text("Save");
        buttonCreator.addClass("saveBtn");
        colButton.append(buttonCreator);

        rowAdder.append(colTime, colText, colButton);

        // Append everything to the container <div>
        background.append(rowAdder);

    }
    getTasks();

    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().prev().parent().children(".hour").text();
        var text = $(this).parent().prev().children("textarea").val();

        // console.log(hour, text);

        localStorage.setItem(hour, text);
    })

    $

    function getTasks() {
        for (var i = 0; i < arrayOfHours.length; i++) {
            var currentHour = arrayOfHours[i];
            var currentTask = localStorage.getItem(currentHour);

            if (currentTask !== null) {
                $("#" + currentHour).text(currentTask);

            }
        }

    }

})