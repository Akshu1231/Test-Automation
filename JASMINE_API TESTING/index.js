var request = require('request');
function random_address(address) {
  return address[Math.floor(Math.random() * address.length)];
}
function random_students(students) {
  return students[Math.floor(Math.random() * students.length)];
}
const qualification = [{ qualification: "MCA" }, { qualification: "BCA" }, { qualification: "B.TECH" }, { qualification: "MBA" }, { qualification: "B.A" }, { qualification: "M.A" }, { qualification: "B.COM" }]
function random_skills(skills) {
  return skills[Math.floor(Math.random() * skills.length)];
}
function random_qualification(qualification) {
  return qualification[Math.floor(Math.random() * qualification.length)];
}
function random_gpa() {
  return gpa[Math.floor(Math.random() * gpa.length)];
}
function random_project() {
  return project[Math.floor(Math.random() * project.length)];
}

const gpa = [{ gpa: "1" }, { gpa: "2" }, { gpa: "3" }, { gpa: "4" }, { gpa: "5" }, { gpa: "6" }, { gpa: "7" }, { gpa: "8" }, { gpa: "9" }]
const skills = [{ skills: "c++" }, { skills: "java" }, { skills: "python" }, { skills: "kotlin" }, { skills: "sql" }, { skills: "swift" }, { skills: "c#" }, { skills: "php" }, { skills: "jsp" }, { skills: "web programming" }, { skills: "html" }, { skills: "node" }, { skills: "react" }, { skills: "ruby" }]
const address = [{ address: "123" }, { address: "456" }, { address: "556" }, { address: "999" }, { address: "149" }, { address: "584" }, { address: "695" }, { address: "795" }, { address: "505" }];
const project = [{ project: "panasonic" }, { project: "LED" }, { project: "DELL" }, { project: "APPLE" }, { project: "SAMSUNG" }, { project: "Mi" }, { project: "NOKIA" }, { project: "LENOVO" }, { project: "HP" }, { project: "LED" }]
const students = [
  { name: "roy", gender: "male", email: "roy@gmail.com", phone: "9999999901" },
  { name: "lily", gender: "female", email: "lily@hmail.com", phone: "9999999902" },
  { name: "popy", gender: "male", email: "popy@gmail.com", phone: "9999999903" },
  { name: "Jack", gender: "male", email: "jack@gmail.com", phone: "9999999904" },
  { name: "rom", gender: "male", email: "rom@gmail.com", phone: "9999999905" },
  { name: "rock", gender: "male", email: "rock@gmail.com", phone: "9999999906" },
  { name: "ram", gender: "male", email: "ram@gmail.com", phone: "9999999907" },
  { name: "fara", gender: "female", email: "fara@gmail.com", phone: "9999999908" },
  { name: "zoli", gender: "female", email: "zoli@gmail.com", phone: "9999999909" },
  { name: "sana", gender: "female", email: "sana@gmail.com", phone: "2999994150" },
  { name: "naveen", gender: "male", email: "naveen@gmail.com", phone: "399995240" },
  { name: "ankit", gender: "male", email: "ankit@gmail.com", phone: "4999996240" },
  { name: "amit", gender: "male", email: "amit@gmail.com", phone: "5999997240" },
  { name: "kavi", gender: "female", email: "kavi@gmail.com", phone: "6999998240" },
  { name: "sachin", gender: "male", email: "sachin@gmail.com", phone: "7999999240" },
  { name: "ajit", gender: "male", email: "sachin@gmail.com", phone: "7999999240" },
  { name: "Ramesh", gender: "male", email: "ramesh@gmail.com", phone: "7999999240" },
  { name: "sanchit", gender: "male", email: "sanchit@gmail.com", phone: "7999999240" },
  { name: "rakesh", gender: "male", email: "sachin@gmail.com", phone: "7999999240" },
  { name: "manish", gender: "male", email: "sachin@gmail.com", phone: "7999999240" },
  { name: "pranav", gender: "male", email: "pranav@gmail.com", phone: "7999999240" },
  { name: "tarun", gender: "male", email: "tarun@gmail.com", phone: "7999999240" },
  { name: "abhi", gender: "male", email: "abhi@gmail.com", phone: "7999999240" },
  { name: "shivi", gender: "female", email: "shivi@gmail.com", phone: "7999999240" },
  { name: "Loki", gender: "male", email: "loki@gmail.com", phone: "7999999240" },
  { name: "spider", gender: "male", email: "spider@gmail.com", phone: "7999999240" },
  { name: "ironman", gender: "male", email: "iron@gmail.com", phone: "7999999240" },
  
  

];

for (i = 1; i < 5; i++) {
  var stu = {};
  setTimeout(()=>{
    stu = JSON.parse(JSON.stringify(random_students(students)));
    // console.log(stu)
    stu['qualification'] = random_qualification(qualification)['qualification'];
    stu['address'] = random_address(address)['address'];
    stu['skills'] = random_skills(skills)['skills'];
    stu['gpa'] = random_gpa()['gpa'];
    stu['experience'] = Math.floor(Math.random() * 20).toString();
    stu['project'] = random_project(project)['project'];
     stu['phone'] = Math.floor(Math.random() * 10000000000).toString();
    stu['email'] = stu.email.replace('@', '_' + i + '@');
    console.log(stu);

    // var options = {
    //   url: 'http://localhost:3000/students',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   json: stu
    // };
    // request(options, function (err, res, body) {
    //   if (res && (res.statusCode === 200 || res.statusCode === 201)) {
    //     console.log(body);
    //   }
    // });
  },20);
}