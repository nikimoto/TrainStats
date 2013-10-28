var TrainStat = (function () {

    var Athlete = Class.create({
        init: function (name, age, weight, height, sex) {
            this.name = name;
            this.age = age;
            this.workouts = [];
            this.weight = weight;
            this.height = height;
            this.sex = sex;
            this.dateStarted = Date.now;
        }
    });

    var Trainee = Athlete.extend({
        init: function (name, age, weight, height, sex) {
            this._super(name, age, weight, height, sex);
            this.personalTrainer = [];
            this.diets = [];
        },
        addWorkout: function (excercise) {
            this.workouts.push(excercise);
        },

        addTrainer: function (trainer) {
            this.personalTrainer.push(trainer);
        },

        addDiet: function (diet) {
            this.diets.push(diet);
        },

        getWorkout: function () {
            return this.workouts;
        },

        showDiet: function () {
            return this.diets;
        },

        showTrainer: function () {
            return this.personalTrainer;
        },
        savePerson: function (name, age, height, weight, sex) {
            var person = {
                name: name,
                age: age,
                weight: weight,
                height: height,
                sex: sex,
                workouts: this.getWorkout(),
            }

            localStorage.setObject(name, person);
        }
    });

    var Workout = Class.create({
        init: function (param) {
            this.excercises = [];
        },
        addCardioExcercice: function (param) {
            this.param = param;
            if (param.name === "running") {
                var runningExc = new Running(param);
                this.excercises.push(runningExc);
            }

            else if (param.name === "cycling") {
                var cyclingExc = new Cycling(param);
                this.excercises.push(cyclingExc);
            }

            else if (param.name === "ropeJumping") {
                var ropeJumping = new RopeJumping(param);
                this.excercises.push(ropeJumping);
            }
        },

        addPowerExcercies: function (param) {
            if (param.name === "benchPressEx") {
                var benchPressEx = new BenchPress(param);
                this.excercises.push(benchPressEx);
            }
            else if (param.name === "deadLiftEx") {
                var deadLift = new DeadLift(param);
                this.excercises.push(deadLift);
            }
            else if (param.name === "squat") {
                var squat = new Squat(param);
                this.excercises.push(squat);
            }
        },

        getWorkout: function () {
            return this.excercises;
        }
    });

    var Cardio = Workout.extend({
        init: function (param) {
            this.duration = param.duration;
            this.intensity = param.intensity;
        }
    });

    var Cycling = Cardio.extend({
        init: function (param) {
            this._super(param);
            this.name = param.name;
            this.type = "Cardio";
            this.speed = param.speed;
            this.distance = param.distance;
        }
    });

    var Running = Cardio.extend({
        init: function (param) {
            this._super(param);
            this.duration = param.duration;
            this.distance = param.distance;
            this.name = param.name;
            this.type = "Cardio";
        }
    });

    var RopeJumping = Cardio.extend({
        init: function (param) {
            this._super(param);
            this.RPM = param.RPM;
            this.name = param.name;
            this.type = "Cardio";
        }
    });

    var WeighLifting = Workout.extend({
        init: function (param) {
            this.param = param;
            this.sets = param.sets;
            this.reps = param.reps;
            this.weight = param.weight;
            this.name = param.name;
            this.type = "Power";
        }
    });

    var BenchPress = WeighLifting.extend({
        init: function (param) {
            this._super(param);
        }
    });

    var Squat = WeighLifting.extend({
        init: function (param) {
            this._super(param);
        }
    });

    var DeadLift = WeighLifting.extend({
        init: function (param) {
            this._super(param);
        }
    });

    return {
        Trainee: Trainee,
        Workout: Workout
    };
})();
