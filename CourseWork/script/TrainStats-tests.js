/// <reference path="TrainStat.js" />
module("Train Stat tests");

test("Testing Trainee class constructor,properties and functions", function () {

    var name = "Pesho";
    var age = 20;
    var weight = 80;
    var height = 185;
    var personalTrainer = "Joro Krika";
    var diet = "NVD";

    var person = new TrainStat.Trainee(name, age, weight, height);
    person.addTrainer(personalTrainer);
    person.addDiet(diet);

    equal(person.name, name, "Name correctly applied in constructor");
    equal(person.age, age, "Age correctly applied in constructor");
    equal(person.weight, weight, "Weight correctly applied in constructor");
    equal(person.height, height, "Height correctly applied in constructor");
    equal(person.showDiet(), diet, "Diet shows correctly");
    equal(person.showTrainer(), personalTrainer, "Personal trainer shows correctly");

});

test("Testing Workout class and adding cycling as exercise", function () {

    //var exerciseType = "Cardio";
    var name = "cycling";
    var duration = 15;
    var intensity = "high";
    var speed = 20;
    var distance = 10;

    var workOut = new TrainStat.Workout;
    workOut.addCardioExcercice({
        name: name,
        duration: duration,
        intensity: intensity,
        speed: speed,
        distance: distance
    });

    var testCycling = workOut.getWorkout();
    equal(testCycling[0].name, name, "Exercise name correctly applied in constructor");
    equal(testCycling[0].duration, duration, "Duration correctly applied in constructor");
    equal(testCycling[0].intensity, intensity, "Intensity correctly applied in constructor");
    equal(testCycling[0].speed, speed, "Speed correctly applied in constructor");
    equal(testCycling[0].distance, distance, "Distance correctly applied in constructor");
});

test("Testing addingPower exercises", function () {

    var name = "benchPressEx";
    var sets = 4;
    var reps = 15;
    var weight = 100;

    var workOut = new TrainStat.Workout;
    workOut.addPowerExcercies({
        name: "benchPressEx",
        sets: sets,
        reps: reps,
        weight: weight
    });

    var testPower = workOut.getWorkout();

    equal(testPower[0].name, name, "Exercise name correctly applied in constructor");
    equal(testPower[0].sets, sets, "Sets correctly applied in constructor");
    equal(testPower[0].reps, reps, "Reps correctly applied in constructor");
    equal(testPower[0].weight, weight, "Weight correctly applied in constructor");
});

test("Testing adding 2 different exercises", function () {

    var nameCyc = "cycling";
    var duration = 15;
    var intensity = "high";
    var speed = 20;
    var distance = 10;

    var name = "benchPressEx";
    var sets = 4;
    var reps = 15;
    var weight = 100;


    var workOut = new TrainStat.Workout();
    workOut.addCardioExcercice({
        name: nameCyc,
        duration: duration,
        intensity: intensity,
        speed: speed,
        distance: distance
    });
    workOut.addPowerExcercies({
        name: "benchPressEx",
        sets: sets,
        reps: reps,
        weight: weight
    });

    var testWorkOut = workOut.getWorkout();
    equal(testWorkOut[0].name, nameCyc, "Exercise name correctly applied in constructor");
    equal(testWorkOut[0].duration, 15, "Duration correctly applied in constructor");
    equal(testWorkOut[0].intensity, "high", "Intensity correctly applied in constructor");
    equal(testWorkOut[0].speed, speed, "Speed correctly applied in constructor");
    equal(testWorkOut[0].distance, distance, "Distance correctly applied in constructor");
    equal(testWorkOut[1].name, name, "Exercise name correctly applied in constructor");
    equal(testWorkOut[1].sets, sets, "Sets correctly applied in constructor");
    equal(testWorkOut[1].reps, reps, "Reps correctly applied in constructor");
    equal(testWorkOut[1].weight, weight, "Weight correctly applied in constructor");
});