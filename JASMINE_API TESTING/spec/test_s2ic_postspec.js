var request = require('request');
var fs = require('fs');


describe("TESTING PUT APIS /",function(){


function random_required_skills(required_skills) {
    return required_skills[Math.floor(Math.random() * required_skills.length)];
}
function random_posting_type(posting_type) {
    return posting_type[Math.floor(Math.random() * posting_type.length)];
}
function random_business_type(business_type) {
    return business_type[Math.floor(Math.random() * business_type.length)];
}
function random_title(title) {
    return title[Math.floor(Math.random() * title.length)];
}
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
function random_location(location) {
  return location[Math.floor(Math.random() * location.length)];
}
function random_type(type) {
  return type[Math.floor(Math.random() * type.length)];
}
function random_name(name) {
    return name[Math.floor(Math.random() * name.length)];
}
function random_description(description) {
    return description[Math.floor(Math.random() * description.length)];
}

const required_skills =  [{ required_skills: "c++" }, { required_skills: "java" }, { required_skills: "python" }, { required_skills: "kotlin" }, { required_skills: "sql" }, { required_skills: "swift" }, { required_skills: "c#" }, { required_skills: "php" }, { required_skills: "jsp" }, { required_skills: "web programming" }, { required_skills: "html" }, { required_skills: "node" }, { required_skills: "react" }, { required_skills: "ruby" }]
const posting_type = [{posting_type:"full time"},{posting_type:"part time"},{posting_type:"permanent"}]
const business_type = [{business_type:"fulltime"},{business_type:"Parttime"},{business_type:"half"}];
const title = [{title:"GLA University"},{title:"manipal University"},{title:"Delhi Univrsity"},{title:"paras University"},{title:"GNM University"}];
const name = [{name:"GLA University"},{name:"manipal University"},{name:"Delhi Univrsity"},{name:"paras University"},{name:"GNM University"}];
const description = [{description:"UP"},{description:"MP"},{description:"Delhi"},{description:"Goa"},{description:"City Center "},{description:"manipal"}]
const gpa = [{ gpa: "1" }, { gpa: "2" }, { gpa: "3" }, { gpa: "4" }, { gpa: "5" }, { gpa: "6" }, { gpa: "7" }, { gpa: "8" }, { gpa: "9" }]
const skills = [{ skills: "c++" }, { skills: "java" }, { skills: "python" }, { skills: "kotlin" }, { skills: "sql" }, { skills: "swift" }, { skills: "c#" }, { skills: "php" }, { skills: "jsp" }, { skills: "web programming" }, { skills: "html" }, { skills: "node" }, { skills: "react" }, { skills: "ruby" }]
const address = [{ address: "123" }, { address: "456" }, { address: "556" }, { address: "999" }, { address: "149" }, { address: "584" }, { address: "695" }, { address: "795" }, { address: "505" }];
const project = [{ project: "panasonic" }, { project: "LED" }, { project: "DELL" }, { project: "APPLE" }, { project: "SAMSUNG" }, { project: "Mi" }, { project: "NOKIA" }, { project: "LENOVO" }, { project: "HP" }, { project: "LED" }]
const location = [{location:"Delhi"},{location:"Mathura"},{location:"jaipur"},{location:"Ghaziyabad"},{location:"gurgaon"},{location:"Agra"},{location:"Chhata"},{location:"Delhi"},{location:"Delhi"},{location:"Bangalore"},{location:"Chennai"},{location:"Mumbai"},{location:"Delhi"},{location:"hyderabad"},{location:"Pune"},{location:"Kolkata"},] 
const  type =   [{type:"student"}, {type:"test_provider"}, {type:"admin"}]
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

function writedata(data){
    //console.log("DATA:");
    data=JSON.stringify(data);
    console.log(data);
    
    fs.appendFile('output_post.txt', data + '\n\n', function (err) {
        if (err) throw err;
        //console.log('Saved!');
    });
}
function test_student(stu) {
    //console.log(stu);
it("S2IC API Testing /put/students", function(done) {
    
    var options = {
        //url:  'http://localhost:3000/students',
          url: 'http://s2ic.truminds.co.in:10011/students',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          json: stu
    };
    request(options,function(error,response,body){
        if(error)
        {
            //console.log(error);
            writedata("RESPONSE :");
            writedata(error);
            expect(response.statusCode).toBe(201);
            done();
            
        }
        else if(response.statusCode==400){
            //console.log(body);
            writedata("RESPONSE :");
            writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();    
        }
        else{
            //console.log(response.message);
            //writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();
        }
    });
});
}
function test_institute(inst) {
    //console.log(inst);
it("S2IC API Testing /put/institutes", function(done) {
    
    var options = {
        //url:  'http://localhost:3000/students',
          url: 'http://s2ic.truminds.co.in:10011/institutes',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          json: inst
    };
    request(options,function(error,response,body){
        if(error)
        {
            console.log(error);
            done();
            
        }
        else if(response.statusCode==400){
            //console.log(body);
            writedata("RESPONSE :");
            writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();    
        }
        //console.log(response);
        else{
            //console.log(response.message);
            //writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();
        }
    });
});
}
function test_enterprise(eprise) {
    //console.log(eprise);
it("S2IC API Testing /put/enterprises", function(done) {
    
    var options = {
        //url:  'http://localhost:3000/students',
          url: 'http://s2ic.truminds.co.in:10011/enterprises',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          json: eprise
    };
    request(options,function(error,response,body){
        if(error)
        {
            console.log(error);
            done();
            
        }
        else if(response.statusCode==400){
            //console.log(body);
            writedata("RESPONSE :");
            writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();    
        }
        //console.log(response);
        else{
            //console.log(response.message);
            //writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();
        }
    });
});
}
function test_posting(post) {
    console.log(post);
it("S2IC API Testing /put/postings", function(done) {
    
    var options = {
        //url:  'http://localhost:3000/students',
          url: 'http://s2ic.truminds.co.in:10011/postings',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          json: post
    };
    request(options,function(error,response,body){
        if(error)
        {
            //console.log(error);
            writedata("RESPONSE :");
            writedata(error);
            expect(response.statusCode).toBe(201);
            done();
            
        }
        else if(response.statusCode==400){
            //console.log(body);
            writedata("RESPONSE :");
            writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();    
        }
        //console.log(response);
        else{
            //console.log(response.message);
            //writedata(body.message);
            expect(response.statusCode).toBe(201);
            done();
        }
    });
});
}


for (i = 1; i < 5; i++) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL=10000;
    console.log("RUNNING API......",i);
    //FOR STUDENTS
    var stu = {};

    stu = JSON.parse(JSON.stringify(random_students(students)));
    //  console.log(stu)
    stu['qualification'] = random_qualification(qualification)['qualification'];
    stu['address'] = random_address(address)['address'];
    stu['skills'] = random_skills(skills)['skills'];
    stu['gpa'] = random_gpa()['gpa'];
    stu['experience'] = Math.floor(Math.random() * 20).toString();
    stu['project'] = random_project(project)['project'];
    stu['phone'] = Math.floor(Math.random() * 10000000000).toString();
    stu['email'] = stu.email.replace('@', '_' + Math.floor(Math.random() * 1000000).toString() + '@');
    stu['institute_id'] = Math.floor(Math.random() * 26).toString();
    stu['location'] = random_location(location)['location'];
    stu['role_id'] = Math.floor(Math.random() * 4).toString();
    stu['type'] = random_type(type)['type'];
    stu['addmission_year']= Math.floor(Math.random() * 10000).toString();
    stu['passing_year'] = Math.floor(Math.random() * 10000).toString();

    //console.log(stu);
    //test_student(stu);

    //FOR INSTITUTES
    var inst = {};
    inst = JSON.parse(JSON.stringify(random_name(name)));
    inst['name'] = random_name(name)['name'];
    inst['description'] = random_description(description)['description'];
    inst['address'] = random_address(address)['address'];
    inst['location'] = random_location(location)['location'];

    //console.log(inst);
    //test_institute(inst);

    //FOR ENTERPRISES
    var eprise = {};
    //eprise = JSON.parse(JSON.stringify(random_name(name)));
    eprise['title'] = random_title(title)['title'];
    eprise['description'] = random_description(description)['description'];
    eprise['address'] = random_address(address)['address'];
    eprise['business_type'] = random_business_type(business_type)['business_type'];
    eprise['location'] = random_location(location)['location'];
    //console.log(eprise);
    //test_enterprise(eprise);

    //FOR POSTINGS
    var post = {};
    

    //post = JSON.parse(JSON.stringify(random_title(title)));
    //  console.log(stu)
    post['title'] = random_title(title)['title'];
    post['description'] = random_description(description)['description'];
    post['no_of_opening'] = Math.floor(Math.random() * 100).toString();
    post['required_exp'] = Math.floor(Math.random() * 20).toString();
    post['required_skills'] = random_required_skills(required_skills)['required_skills'];
    post['posting_type'] = random_posting_type(posting_type)['posting_type'];
    post['qualification'] = random_qualification(qualification)['qualification'];
    post['address'] = random_address(address)['address'];
    post['location'] = random_location(location)['location'];
    post['min_gpa'] =   Math.floor(Math.random() * 10).toString();

    //console.log(post);
    test_posting(post);

}

});