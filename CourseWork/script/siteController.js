/// <reference path="jquery-1.10.1.min.js" />
(function () {
    var person = new TrainStat.Trainee();
    var workout = new TrainStat.Workout();

    //Register form event Listener
    $("#submitBtn").on('click', function () {
        var name = $('#fullname').val();
        var age = $('#age').val();
        var height = $('#height').val();
        var weight = $('#weight').val();
        var sex = $("input:radio[name='sex']:checked").val();
        person = new TrainStat.Trainee(name, age, height, weight, sex);
        person.savePerson(name, age, height, weight, sex);
        FillInfoPage(person);
        return this;
    });

    $("#ressetBtn").on('click', function () {
        $("input:text").val("");
        $("input:radio[name='sex']").attr("checked", false);
        return this;
    });

    function FillInfoPage(person) {
        $("<div id=\"personalInfo\"></div>").appendTo("#profile");
        $("<p>Name: " + person.name + "</p>").appendTo("#personalInfo");
        $("<p>Age: " + person.age + "</p>").appendTo("#personalInfo");
        $("<p>Height: " + person.height + " cm." + "</p>").appendTo("#personalInfo");
        $("<p>Weight: " + person.weight + " kg. " + "</p>").appendTo("#personalInfo");
        $("<p>Sex: " + person.sex + "</p>").appendTo("#personalInfo");
    }

    //Excercises event listener
    $(".exercises").on("click", function (ev) {
        var selector = ev.target.alt;

        if ($("#exWindow")) {
            $("#exWindow").remove();
        }

        $("<div id=\"exWindow\"></div>").appendTo("body");
        var exWindow = $("#exWindow");

        $("<h2>Excercise Info:</h2>").appendTo(exWindow);

        if (selector === "runningEx" || selector === "cyclingEx" || selector == "ropeJumpingEx") {
            $("<label for=\"exDuration\">Duration: </label>").appendTo(exWindow);
            $("<input type=\"text\" id=\"exDuration\"/><br/>").appendTo(exWindow);
            $("<label for=\"exIntensity\">Intensity: </label>").appendTo(exWindow);
            $("<input type=\"text\" id=\"exIntensity\"/><br/>").appendTo(exWindow);

            if (selector === "runningEx" || selector === "cyclingEx") {
                $("<label for=\"exDistance\">Distance: </label>").appendTo(exWindow);
                $("<input type=\"text\" id=\"exDistance\"/><br/>").appendTo(exWindow);

                if (selector === "cyclingEx") {
                    $("<label for=\"exSpeed\">Speed: </label>").appendTo(exWindow);
                    $("<input type=\"text\" id=\"exSpeed\"/><br/>").appendTo(exWindow);
                }
            }

            else if (selector === "ropeJumpingEx") {
                $("<label for=\"exRPM\">RPM: </label>").appendTo(exWindow);
                $("<input type=\"text\" id=\"exRPM\"/><br/>").appendTo(exWindow);
            }
        }

        $("<input type='button' id='addExcerciseBtn' value= 'Add Excercise'/>").appendTo(exWindow);

        $("#addExcerciseBtn").click(function (ev) {
            var duration;
            var intensity;
            var speed;
            var distance;
            var speed;
            var RPM;
            var name;
            var type = "Cardio";

            if ($("#exDuration")) {
                duration = $("#exDuration").val();
            }

            if ($("#exIntensity")) {
                intensity = $("#exIntensity").val();
            }

            if ($("#exDistance")) {
                distance = $("#exDistance").val();
                name = "running";
            }

            if ($("#exSpeed")) {
                speed = $("#exSpeed").val();
                name = "cycling";
            }

            if ($("#exRPM")) {
                RPM = $("#exRPM").val();
                name = "ropeJumping";
            }

            workout.addCardioExcercice({ name: name, duration: duration, intensity: intensity, speed: speed, RPM: RPM, distance: distance });
            person.addWorkout(workout);
        })
    });

    $("#logInBtn").on("click", function () {
        var userName = $("#userName").val();
        person = localStorage.getObject(userName);
        FillInfoPage(person);
    });
})();