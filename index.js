
const push = ["Bench Press", "Tricep Extentions", "Dips",
              "Incline Press", "Butterflys", "Skull Crushers",
              "Dumbell Press",
];
const pull = ["Pullups", "Lat Pull Downs", "Deadlift", "Bicep Curls",
              "Bent Over Rows", "Seated Rows", "One Arm Dumbell Rows",
              "Reverse Fly", "Dumbell Pullover"
            ];
const leg = ["Squats", "Leg Extentions", "Leg Curls",
             "Lunges", "Calf Raises (3x15)", "Glute Bridge",
             "Leg Press",
            ];

let finalWorkout = [];

createWorkout = (muscleGroup) => {
    const excersizes = [];
    while(excersizes.length < 3){
        let randomExcersize = muscleGroup[Math.floor(Math.random() * push.length)];
        if(!excersizes.includes(randomExcersize)){
            excersizes.push(randomExcersize);
        }
    } 
    finalWorkout.push(excersizes);
}

$("h2").hide();

$("#create-workout").click(function(){
    finalWorkout = [];
    $("h2").show();
    createWorkout(push);
    $("#push").html(`<h1>Push</h1>
                     <p>${finalWorkout[0][0]}</p>
                     <p>${finalWorkout[0][1]}</p>
                     <p>${finalWorkout[0][2]}</p>`);
    createWorkout(pull);
    $("#pull").html(`<h1>Pull</h1>
                     <p>${finalWorkout[1][0]}</p>
                     <p>${finalWorkout[1][1]}</p>
                     <p>${finalWorkout[1][2]}</p>`);
    createWorkout(leg);
    $("#legs").html(`<h1>Legs</h1>
                     <p>${finalWorkout[2][0]}</p>
                     <p>${finalWorkout[2][1]}</p>
                     <p>${finalWorkout[2][2]}</p>`);
    console.log(finalWorkout)
});

