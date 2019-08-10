var loadtest = require('loadtest');
//var fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.all("*", (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With, auth');
  res.header('Access-Control-Allow-Credentials', true);
  next()
})


app.post("/myapi",function(req,res){
  //req.header('x-access-token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs');
  console.log("postdata",req.body)
  if(req.body.req_typE=='POST'){
    api_loadtest_post(req,function(err,result){
      if(err){
        res.send(err);
      }
      else{
        console.log("success");
        console.log(result);
        res.send(result);
      }
    });
  }
  else if(req.body.req_typE=='PUT'){
    api_loadtest_put(req,function(err,result){
      if(err){
        res.send(err);
      }
      else{
        console.log("success");
        console.log(result);
        res.send(result);
      }
    });
  }
  else{
    api_loadtest_get(req,function(err,result){
      if(err){
        res.send(err);
      }
      else{
        console.log("success");
        console.log(result);
        res.send(result);
      }
    });
  }    
})

//FOR GET REQUESTS
function api_loadtest_get(req,callback){
  console.log('Running..........');
  //console.log(req.body);
  
  const options = {
    url: req.body.urL + '/' +req.body.tablE,
    maxRequests: req.body.maxreQ,
    concurrency: req.body.concurR,
    timeout:req.body.touT,
    requestsPerSecond: req.body.rpS,
    headers:{
      "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
    }
  
  };
  console.log(options);
  loadtest.loadTest(options, function(error, result)
  {
      if(error){
        return callback(error);
      }
      else{
        //console.log(result);
        callback(null,result);
      }
  });
}
 
//GENERATE RANDOM DATA
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
function random_posting(posting) {
  return posting[Math.floor(Math.random() * posting.length)];
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
function random_post_title(post_title) {
  return post_title[Math.floor(Math.random() * post_title.length)];
}
function random_institution_name(institution_name) {
  return institution_name[Math.floor(Math.random() * institution_name.length)];
}
function random_gender(gender) {
  return gender[Math.floor(Math.random() * gender.length)];
}
function random_instruction(instruction) {
  return instruction[Math.floor(Math.random() * instruction.length)];
}
function random_email(email) {
  return email[Math.floor(Math.random() * email.length)];
}
function random_subscription_type(subscription_type) {
  return subscription_type[Math.floor(Math.random() * subscription_type.length)];
}
function random_exam_name(exam_name) {
  return exam_name[Math.floor(Math.random() * exam_name.length)];
}


const exam_name = [{exam_name:"Engineering"},{exam_name:"BSchool"},{exam_name:"Law"},{exam_name:"Medicine"},{exam_name:"Competition"},{exam_name:"Hospitality and Tourism"},{exam_name:"Finance and Accounts"},{exam_name:"Computer Applications"}]
const subscription_type = [{ subscription_type: "free" }, { subscription_type: "paid" }]
const email = [{ email: "roy@gmail.com" }, { email: "kavi@gmail.com" }, { email: "lax@gmail.com" }, { email: "ravi@gmail.com" }]
const instruction = [{ instruction: "Multiple choice" }, { instruction: "theory" }]
const title = [{ title: "Bank PO" }, { title: "CAT" }, { title: "GRE" }, { title: "IBPS" }, { title: "UPSC" }, { title: "CDS" }]
const gender = [{ gender: "male" }, { gender: "female" }]
const institution_name = [{ institution_name: "GLA University" }, { institution_name: "manipal University" }, { institution_name: "Delhi Univrsity" }, { institution_name: "paras University" }, { institution_name: "GNM University" }];
const name = [{ name: "aman" },
{ name: "Raghav" },
{ name: "Rachana" },
{ name: "Ankit" },
{ name: "sanjiv" },
{ name: "chetan" },
{ name: "Naveen" },
{ name: "Amit" }]
const address = [{ address: "agra" }, { address: "Delhi" }, { address: "mathura" }, { address: "Vindravan" }, { address: "Noida" }, { address: "Jaipur" }, { address: "Ramghad" }, { address: "Hathras" }, { address: "Alighar" }];


//////
const posting =[{title:"software Devloper",description:" you'll be playing a key role in the design, installation, testing and maintenance of software systems",address:"gugram sector 57 ,plot no 43"},
{title:"Budget analyst",description:"Work with program and project managers to develop the organization's budget.",address:"Mathura near by krishna nagar plot no"},
{title:"Cash manager",description:"flow of cash coming into and going out of the organization",address:"Delhi "},
{title:"Accounts receivable",description:"Maintains records by microfilming invoices, debits, and credits.", address:"ghaziyabad naer vaishali metro station"},
{title:"Tax specialist",description:"Tax Specialist. Responsible for quarterly and annual Federal and selected international tax compliance.",address:"Kauchambi metro station "},
{post_title:"HR coordinator",description:"A Human Resources (HR) Coordinator is a professional who completes administrative duties for the human resources department of an organization",address:"sarta bihar"}]
const required_skills = [{ required_skills: "c++" }, { required_skills: "java" }, { required_skills: "python" }, { required_skills: "kotlin" }, { required_skills: "sql" }, { required_skills: "swift" }, { required_skills: "c#" }, { required_skills: "php" }, { required_skills: "jsp" }, { required_skills: "web programming" }, { required_skills: "html" }, { required_skills: "node" }, { required_skills: "react" }, { required_skills: "ruby" }]
const posting_type = [{ posting_type: "full time" }, { posting_type: "part time" }, { posting_type: "permanent" }]
const business_type = [{ business_type: "fulltime" }, { business_type: "Parttime" }, { business_type: "half" }];
const enp_title = [{ title: "GLA University" }, { title: "manipal University" }, { title: "Delhi Univrsity" }, { title: "paras University" }, { title: "GNM University" }];
const inst_name = [{ name: "GLA University" }, { name: "manipal University" }, { name: "Delhi Univrsity" }, { name: "paras University" }, { name: "GNM University" }];
const description = [{ description: "UP" }, { description: "MP" }, { description: "Delhi" }, { description: "Goa" }, { description: "City Center " }, { description: "manipal" }]
const gpa = [{ gpa: "1" }, { gpa: "2" }, { gpa: "3" }, { gpa: "4" }, { gpa: "5" }, { gpa: "6" }, { gpa: "7" }, { gpa: "8" }, { gpa: "9" }]
const skills = [{ skills: "c++" }, { skills: "java" }, { skills: "python" }, { skills: "kotlin" }, { skills: "sql" }, { skills: "swift" }, { skills: "c#" }, { skills: "php" }, { skills: "jsp" }, { skills: "web programming" }, { skills: "html" }, { skills: "node" }, { skills: "react" }, { skills: "ruby" }]
//const address = [{ address: "123" }, { address: "456" }, { address: "556" }, { address: "999" }, { address: "149" }, { address: "584" }, { address: "695" }, { address: "795" }, { address: "505" }];
const project = [{ project: "panasonic" }, { project: "LED" }, { project: "DELL" }, { project: "APPLE" }, { project: "SAMSUNG" }, { project: "Mi" }, { project: "NOKIA" }, { project: "LENOVO" }, { project: "HP" }, { project: "LED" }]
const location = [{ location: "Delhi" }, { location: "Mathura" }, { location: "jaipur" }, { location: "Ghaziyabad" }, { location: "gurgaon" }, { location: "Agra" }, { location: "Chhata" }, { location: "Delhi" }, { location: "Delhi" }, { location: "Bangalore" }, { location: "Chennai" }, { location: "Mumbai" }, { location: "Delhi" }, { location: "hyderabad" }, { location: "Pune" }, { location: "Kolkata" },]
const type = [{ type: "student" }, { type: "test_provider" }, { type: "admin" }]
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

//FOR STUDENTS
function student_data(){
  var stu = {};
  stu = JSON.parse(JSON.stringify(random_students(students)));

  stu['qualification'] = 'test_'+ random_qualification(qualification)['qualification'];
  stu['address'] = 'test_'+ random_address(address)['address'];
  stu['skills'] = 'test_'+ random_skills(skills)['skills'];
  stu['gpa'] = random_gpa()['gpa'];
  stu['experience'] = Math.floor(Math.random() * 20).toString();
  stu['project'] = 'test_'+ random_project(project)['project'];
  stu['phone'] = Math.floor(Math.random() * 10000000000).toString();
  stu['email'] = stu.email.replace('@', '_' + Math.floor(Math.random() * 1000000).toString() + '@');
  stu['institute_id'] = Math.floor(Math.random() * 26).toString();
  stu['location'] = 'test_'+ random_location(location)['location'];
  stu['role_id'] = Math.floor(Math.random() * 4).toString();
  stu['type'] = 'test_'+ random_type(type)['type'];
  stu['addmission_year'] = Math.floor(Math.random() * 10000).toString();
  stu['passing_year'] = Math.floor(Math.random() * 10000).toString();
  return stu;
}

//FOR INSTITUTES
function institute_data(){
  var inst = {};
  inst = JSON.parse(JSON.stringify(random_name(inst_name)));

  inst['name'] = 'test_'+ random_name(inst_name)['name'];
  inst['description'] = 'test_'+ random_description(description)['description'];
  inst['address'] = 'test_'+ random_address(address)['address'];
  inst['location'] = 'test_'+ random_location(location)['location'];
  inst['created_by']=1;
  return inst;
}

//FOR ENTERPRISES
function enterprise_data(){
  var eprise = {};
  eprise = JSON.parse(JSON.stringify(random_title(enp_title)));

  eprise['title'] = 'test_'+ random_title(enp_title)['title'];
  eprise['description'] = 'test_'+ random_description(description)['description'];
  eprise['address'] = 'test_' + random_address(address)['address'];
  eprise['business_type'] = 'test_' + random_business_type(business_type)['business_type'];
  eprise['location'] = 'test_' + random_location(location)['location'];
  eprise['created_by']=1;
  return eprise;
}

//FOR POSTINGS
function posting_data(){
  var posti ={};
  posti = JSON.parse(JSON.stringify(random_posting(posting)));
  posti['enterprise_id'] =Math.floor(Math.random() * 5).toString();
  posti['no_of_opening'] = Math.floor(Math.random() *10000).toString();
  posti['required_exp'] = Math.floor(Math.random() * 20).toString();
  posti['required_skills'] = random_required_skills(required_skills)['required_skills'];
  posti['posting_type'] = random_posting_type(posting_type)['posting_type'];
  posti['qualification'] = random_qualification(qualification)['qualification'];
  posti['location'] = random_location(location)['location'];
  posti['min_gpa'] = Math.floor(Math.random() * 10).toString();
  posti['created_by']=1;
  return posti;
}

// FOR CATEGORIES
function categories_data(){
  var cat = {};
  cat['name'] = random_exam_name(exam_name)['name'];
  cat['description'] = random_description(description)['description'];
  cat['parent'] = Math.floor(Math.random() * 20).toString();
  cat['created_by']=1;
  return cat;
}

//FOR EXAMS
function exam_data(){
  var exam = {}; 
  exam['category_id'] = Math.floor(Math.random() * 5).toString();
  exam['title'] = random_title(title)['title'];
  exam['description'] = random_description(description)['description'];
  exam['instruction'] = random_instruction(instruction)['instruction'];
  exam['created_by']=1;
  return exam;
}

//FOR MOCK TESTS
function mocktest_data(){
  var mock = {};
  mock['title'] = random_title(title)['title'];
  mock['description'] = random_description(description)['description'];
  mock['min_marks'] = "30";
  mock['max_marks'] = "80";
  mock['subscription_type'] = random_subscription_type(subscription_type)['subscription_type'];
  mock['price'] = "5400";
  mock['created_by']=1;
  return mock;
}

//FOR PURCHASES


//PROVIDERS




//FOR POST REQUESTS
function api_loadtest_post(req,callback){
  console.log('Running..........');
  console.log(req.body);
  if(req.body.tablE=='students'){
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: student_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='institutes'){
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: institute_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='enterprises')
  {
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: enterprise_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='postings')
  {
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: posting_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='categories')
  {
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: categories_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='exams')
  {
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: exam_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='mocktests')
  {
    const options = {
      url: req.body.urL + '/' +req.body.tablE,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"post",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      body: mocktest_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
}


//FOR PUT REQUESTS
function api_loadtest_put(req,callback){
  console.log('Running..........');
  console.log(req.body);
  if(req.body.tablE=='students'){
    id = Math.floor(Math.random() * 30);
    const options = {
      url: req.body.urL + '/' + req.body.tablE + '/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: student_data() , 
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='institutes'){
    id = Math.floor(Math.random() * 3);
    const options = {
      url: req.body.urL + '/' +req.body.tablE + '/' +id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: institute_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='enterprises')
  {
    id = Math.floor(Math.random() * 3);
    const options = {
      url: req.body.urL + '/' +req.body.tablE +'/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: enterprise_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='postings')
  {
    id = Math.floor(Math.random() * 6);
    const options = {
      url: req.body.urL + '/' +req.body.tablE + '/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: posting_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='categories')
  {
    id = Math.floor(Math.random() * 4);
    const options = {
      url: req.body.urL + '/' +req.body.tablE + '/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: categories_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='exams')
  {
    id = Math.floor(Math.random() * 5);
    const options = {
      url: req.body.urL + '/' +req.body.tablE+'/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: exam_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
  else if(req.body.tablE=='mocktests')
  {
    id = Math.floor(Math.random() * 7);
    const options = {
      url: req.body.urL + '/' +req.body.tablE +'/'+id,
      maxRequests: req.body.maxreQ,
      //concurrency: req.body.concurR,
      //timeout:req.body.touT,
      requestsPerSecond: req.body.rpS,
      method:"PUT",
      headers:{
        "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MCwibmFtZSI6IkFuYW5kIiwiZW1haWwiOiJ5b3V0dWJlMkBnbWFpbC5jb20iLCJwaG9uZSI6IjcwMTg2MjYzNDYiLCJleHAiOjE1NjUwNzM0MTk0OTR9.qOVcs7my4YE9iFCAw6u0427V_PhpO5Eq-b8axyU3KUs"
      },
      contentType:"application/json",
      json:true,
      body: mocktest_data()  
    };
    console.log(options);
    loadtest.loadTest(options, function(error, result)
    {
        if(error){
          return callback(error);
        }
        else{
          callback(null,result);
        }
    });
  }
}

app.listen(5000,function(){
  console.log("Listening on port 5000"); 
}); 