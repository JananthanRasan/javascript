let student = [
    {
        "firstname": "Jananthan",
        "lastname": "Rasan",
        "age": 25,
        "gender": "male",
        "subjects": {
            "english": 90,
            "maths": 80,
            "ict": 70
        }
    },
    {
        "firstname": "Mathivarman",
        "lastname": "Vasantharaj",
        "age": 24,
        "gender": "male",
        "subjects": {
            "english": 50,
            "maths": 60,
            "ict": 90
        }
    },
    {
        "firstname": "Mathivathan",
        "lastname": "Kamalanathan",
        "age": 23,
        "gender": "male",
        "subjects": {
            "english": 40,
            "maths": 70,
            "ict": 80
        }
    }
];
for (let x of student) {
    for (let x of student) {
        let eng = x.subjects.english;
        let math = x.subjects.maths;
        let ict = x.subjects.ict;
        let total = eng + math + ict;
        let avg = total / 3;
        
    console.log(x.firstname, x.lastname, x.age, x.gender, eng, math, ict, total, avg);
}