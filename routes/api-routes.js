const router = require("express").Router();
const Workout = require("../models/workout");
const { route } = require("./html-routes");

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    }).catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts/:id", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id).then(()=>{
        res.json(true);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}}).then((dbWorkout)=> {
        res.json(dbWorkout);
    });
});



module.exports = router;