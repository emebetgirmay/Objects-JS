//1.  Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() that calculates and 
// returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.


//create an object that has parametrs of string, key-value pairs and two methods 
// find sum of steps
// find length
//find average by deviding sum to length but length must be different from zero
// log the function
const User = {
    name: "Emebet",
    stepsWalked: [
        { day: "Monday", steps: 6000 },
        { day: "Tuesday", steps: 8200 },
        { day: "Wednesday", steps: 4500 },
        { day: "Thursday", steps: 9000 },
        {day:"Friday", steps:0},
        {day:"Saturday", steps:2200},
        {day : "Sunday", steps:5}
    ],
    totalSteps:function() {
        let total = 0;
        for (const item of this.stepsWalked) {
            total += item.steps;
        }
        return total;
    },
    averageSteps:function() {
        if (this.stepsWalked.length === 0) return 0;
        let sum = 0;
        for (let i = 0; i < this.stepsWalked.length; i++) {
            sum += this.stepsWalked[i].steps;
        }
        return sum / this.stepsWalked.length;
    }
};
console.log(User.totalSteps());
console.log(User.averageSteps());

// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name and all
//  ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.

//create a constructor
// log the name and the ingridents in 2 lines
// use condition(ternary) to return boolean if the condition fulfiled

function Recipe (name, ingridents, cookTime){
this.name = name;
this.ingridents = ingridents;
this.cookTime = cookTime;

this.displayRecipe = function(){
    return `Recipe ingridents for ${this.name} are \n  ${this.ingridents}`
    
    
};
this.isQuickMeal = function() {
    return this.cookTime <= 30 ? true : false;
};
}
const foods= new Recipe("Injera", ["Teff", "Water", "Starter"], 5)
console.log(foods.displayRecipe());
console.log(foods.isQuickMeal());


3.// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates).
//  Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.

// create an object
// add an element to an array
//log the last element
const car = {
    model: "Camry",
    mileage: 80000,
    serviceHistory: ["20-03-2023", "02-02-2024", "24-10-2025"],
    addService:function(date) {
       return this.serviceHistory.push(date);
    },
    lastServiceDate:function() {
        return this.serviceHistory[this.serviceHistory.length -1]
    }
};
car.addService("02-10-2025");
console.log(car.serviceHistory);
console.log(car.lastServiceDate());

//4. Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song, 
// removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

//create an object
// add an element to an array
//remove an element from the array
//list the elements of the array
const Playlist = {
        songs: ["Song-1", "Song-2", "Song-3"],
        addSong:function(title) {
        return this.songs.push(title);
         
        },
        removeSong:function(title) {
            this.songs = this.songs.filter(song => song !== title);
        },
        listSongs:function() {
            console.log("Playlist Songs:");
            this.songs.forEach((song, index) => console.log(`${index + 1}. ${song}`));
        }
    };

    Playlist.addSong("Song-4");
    console.log(Playlist.songs);
    console.log(Playlist.removeSong("Song-2"));
    Playlist.listSongs();


    //5. Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) 
    // that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
   //create a constructor
   // push an element to an empty array
   //return a string that interpolates variables 
    function Course(title, lessons) {
            this.title = title;
            this.lessons = lessons;
            this.completedLessons = [];
        
        this.markComplete = function(lesson) {
            // const index = this.lessons.indexOf(lesson);
            if (lesson !== this.lessons.at(-1)) {
         this.completedLessons.push(lesson);
            }
         
        };
        this.getProgress = function() {
            const completed = this.completedLessons.size;
            const total = this.lessons.length;
            return `${completed} out of ${total} lessons completed`;
        };

    };
    const course = new Course('Frontend web', ['Objects', 'Array', 'String', 'Variables', 'Inheritance'])

course.markComplete('Inheritance');
// course.markComplete();
console.log(course.completedLessons);
console.log(course.getProgress());

