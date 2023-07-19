
// to create collection

db.student.insertMany([
    {
        "studentid": 1,
        "fullname": "Kavitha Subramanian",
        "email": "kavitha@example.com",
        "mobile": "9034563343",
        "college": "Panimalar College",
        "currentCity": "Chennai",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 2,
        "fullname": "Ramesh Kumar",
        "email": "ramesh@example.com",
        "mobile": "8745962130",
        "college": "MIT",
        "currentCity": "Bangalore",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 3,
        "fullname": "Guru",
        "email": "guru@example.com",
        "mobile": "7845963210",
        "college": "IIT Madras",
        "currentCity": "Chennai",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 4,
        "fullname": "Mani",
        "email": "mani@example.com",
        "mobile": "9034563343",
        "college": "NIT",
        "currentCity": "Pune",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 5,
        "fullname": "Pushpa",
        "email": "pushpa@example.com",
        "mobile": "9034565643",
        "college": "KEC",
        "currentCity": "Madurai",
        "mentorid": 2,
        "courseid": 1
    },
    {
        "studentid": 6,
        "fullname": "Tamilselvi",
        "email": "tamilselvi@example.com",
        "mobile": "987463251",
        "college": "Kongu Engineering College",
        "currentCity": "Erode",
        "mentorid": 2,
        "courseid": 1
    },
    {
        "studentid": 7,
        "fullname": "Sundaram",
        "email": "sundaram@example.com",
        "mobile": "9034563343",
        "college": "PEC",
        "currentCity": "Puducherry",
        "mentorid": 3,
        "courseid": 2
    },
    {
        "studentid": 8,
        "fullname": "Agathiyan",
        "email": "agathiyan@example.com",
        "mobile": "8759641230",
        "college": "Anna University",
        "currentCity": "Chennai",
        "mentorid": 3,
        "courseid": 2
    },
    {
        "studentid": 9,
        "fullname": "Priya",
        "email": "priya@example.com",
        "mobile": "9846258712",
        "college": "SMVEC",
        "currentCity": "Trichy",
        "mentorid": 4,
        "courseid": 3
    },
    {
        "studentid": 10,
        "fullname": "Riya",
        "email": "riya@example.com",
        "mobile": "9568479513",
        "college": "NIT",
        "currentCity": "Hamirpur",
        "mentorid": 4,
        "courseid": 3
    }
]);

db.mentor.insertMany([
    {
        "mentorid": 1,
        "mentorname": "Vishnu Menon",
        "designation": "Senior Software Engineer",
        "courseid": 1,
        "totalstudents": 20
    },
    {
        "mentorid": 2,
        "mentorname": "Sneha Iyer",
        "designation": "Full Stack Developer",
        "courseid": 1,
        "totalstudents": 30
    }, 
    {
        "mentorid": 3,
        "mentorname": "Arun Kapoor",
        "designation": "Software Architect",
        "courseid": 2,
        "totalstudents": 10
    }, 
    {
        "mentorid": 4,
        "mentorname": "Shreya Patel",
        "designation": "System Analyst",
        "courseid": 3,
        "totalstudents": 38
    },
]);

db.course.insertMany([
    {
        "courseid": 1,
        "coursename": "full stack web development(mern)",
        "courseduration": 5,
        "fees": 40000,
        "mode": "online",

    },
    {
        "courseid": 2,
        "coursename": "Fornt end(REACT)",
        "courseduration": 4,
        "fees": 20000,
        "mode": "offline",

    },
    {
        "courseid": 3,
        "coursename": "DSA",
        "courseduration": 2,
        "fees": 40000,
        "mode": "online",

    },

])
db.task.insertMany([
    {
        "taskid": 1,
        "taskurl": "www.newtaskurl1.com",
        "date": ISODate("2022-07-10"),
        "courseid": 1,
        "topicid": 1,
    },
    {
        "taskid": 2,
        "taskurl": "www.newtaskurl2.com",
        "date": ISODate("2022-07-15"),
        "courseid": 1,
        "topicid": 2,
    },
    {
        "taskid": 3,
        "taskurl": "www.newtaskurl3.com",
        "date": ISODate("2022-07-20"),
        "courseid": 1,
        "topicid": 2,
    },
    {
        "taskid": 4,
        "taskurl": "www.newtaskurl4.com",
        "date": ISODate("2022-07-12"),
        "courseid": 2,
        "topicid": 4,
    },
    {
        "taskid": 5,
        "taskurl": "www.newtaskurl5.com",
        "date": ISODate("2022-07-18"),
        "courseid": 2,
        "topicid": 5,
    },
    {
        "taskid": 6,
        "taskurl": "www.newtaskurl6.com",
        "date": ISODate("2022-07-05"),
        "courseid": 3,
        "topicid": 6,
    },
    {
        "taskid": 7,
        "taskurl": "www.newtaskurl7.com",
        "date": ISODate("2022-07-23"),
        "courseid": 3,
        "topicid": 6,
    },
    {
        "taskid": 8,
        "taskurl": "www.newtaskurl8.com",
        "date": ISODate("2022-07-25"),
        "courseid": 3,
        "topicid": 7,
    },
    {
        "taskid": 9,
        "taskurl": "www.newtaskurl9.com",
        "date": ISODate("2022-07-27"),
        "courseid": 3,
        "topicid": 7,
    }
]);

db.topic.insertMany([
    {
        "topicid": 1,
        "topic": "Netlify deployment",
        "courseid": 1,
        "date": ISODate("2022-07-05")
    },
    {
        "topicid": 2,
        "topic": "HTML",
        "courseid": 1,
        "date": ISODate("2022-07-10")
    }, 
    {
        "topicid": 3,
        "topic": "stack",
        "courseid": 1,
        "date": ISODate("2022-07-15")
    }, 
    {
        "topicid": 4,
        "topic": "time complexity",
        "courseid": 2,
        "date": ISODate("2022-07-20")
    }, 
    {
        "topicid": 5,
        "topic": "CSS",
        "courseid": 2,
        "date": ISODate("2022-07-12")
    }, 
    {
        "topicid": 6,
        "topic": "Javascript",
        "courseid": 3,
        "date": ISODate("2022-07-23")
    }, 
    {
        "topicid": 7,
        "topic": "React",
        "courseid": 3,
        "date": ISODate("2022-07-25")
    },
    {
        "topicid": 8,
        "topic": "queue",
        "courseid": 3,
        "date": ISODate("2022-07-27")
    }
]);

db.studenttask.insertMany([
    {
        "studentid": 1,
        "taskid": 1,
        "submitteddate": ISODate("2020-09-30"),

    }, {
        "studentid": 1,
        "taskid": 2,
        "submitteddate": ISODate("2020-10-20")

    }, {
        "studentid": 1,
        "taskid": 3,
        "submitteddate": ISODate("2020-11-15"),

    }, {
        "studentid": 3,
        "taskid": 4,
        "submitteddate": ISODate("2020-09-30")

    }, {
        "studentid": 3,
        "taskid": 5,
        "submitteddate": ISODate("2020-10-10")

    }, {
        "studentid": 10,
        "taskid": 6,
        "submitteddate": ISODate("2020-09-10")

    }, {
        "studentid": 10,
        "taskid": 7,
        "submitteddate": ISODate("2020-10-29")

    }, {
        "studentid": 10,
        "taskid": 8,
        "submitteddate": ISODate("2020-11-04")

    }, {
        "studentid": 10,
        "taskid": 9,
        "submitteddate": ISODate("2020-11-10")
    }
])
db.attendance.insertMany([
    {
        "date": ISODate("2020-10-12"),
        "absentees": [1, 3],
    },
    {
        "date": ISODate("2020-10-13"),
        "absentees": [3, 10],
    },
    {
        "date": ISODate("2020-10-16"),
        "absentees": [2],
    },
    {
        "date": ISODate("2020-10-17"),
        "absentees": [4, 5],
    },
    {
        "date": ISODate("2020-10-19"),
        "absentees": [1, 3, 6]
    }
])
db.companydrive.insertMany([
    {
        "companyname": "HCL",
        "driveid": 1,
        "ctc": 6,
        "studentsappeared": [1, 2, 3],
        "date": ISODate("2020-09-28")
    },
    {
        "companyname": "zoho",
        "driveid": 2,
        "ctc": 12,
        "studentsappeared": [3, 4],
        "date": ISODate("2020-10-17")
    }, {
        "companyname": "tcs",
        "driveid": 3,
        "ctc": 10,
        "studentsappeared": [5, 6, 7, 2],
        "date": ISODate("2020-10-28")
    }])
db.codekata.insertMany([
    {
        "problemno": 1,
        "solvedstudentid": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 2,
        "solvedstudentid": [1, 2, 4, 5, 6],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 3,
        "solvedstudentid": [2, 3, 4, 6],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 4,
        "solvedstudentid": [1, 6],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 5,
        "solvedstudentid": [6, 7, 10],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 6,
        "solvedstudentid": [1, 5, 7, 9],
        "geekcoins": 30,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 7,
        "solvedstudentid": [1, 5, 4, 7],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 8,
        "solvedstudentid": [6, 7, 8, 9, 10],
        "geekcoins": 30,
        "programming_lang": ["java", "nodejs", "python"]
    },
])



// Find all the topics and tasks taught in the month of October (assuming the data is for 2022)
db.task.find({ "date": { $gte: ISODate("2022-10-01"), $lt: ISODate("2022-10-31") } }).forEach(item => {
    db.topic.find({ "topicid": item.topicid }).forEach((val) => {
        if (val.date.getUTCMonth() === 9) { // Corrected to check for October (month index 9)
            print("taskid:" + item.taskid,
                "taskurl:" + item.taskurl,
                "topicid:" + val.topicid,
                "topicname:" + val.topic
            );
        }
    });
});

// Find all the company drives which appeared between 15th October and 30th October 2022
db.companydrive.find({ "date": { $gte: ISODate("2022-10-15"), $lt: ISODate("2022-10-31") } }).pretty();

// Find all the company drives and students who appeared for the placement
db.companydrive.find().forEach(value => {
    value.studentsappeared.forEach(item => {
        db.student.find({ "studentid": item }).forEach(val => {
            print("studentid:" + val.studentid,
                "studentname:" + val.fullname,
                "companyname:" + value.companyname);
        });
    });
});

// Find the number of problems solved by each student in codekata (assuming data is for 2022)
db.student.find().forEach(value => {
    let count = 0;
    db.codekata.find().forEach(item => {
        item.solvedstudentid.forEach(val => {
            if (val === value.studentid) {
                count++;
            }
        });
    });
    print("studentid:" + value.studentid,
        "studentname:" + value.fullname,
        "problemsolved:" + count);
});

// Find all the mentors with more than 15 mentees
db.mentor.find({ "totalstudents": { $gt: 15 } }).pretty();
