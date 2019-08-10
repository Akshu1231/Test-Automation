// var request = require('request');
// var fs = require('fs');
// describe("student",function(){

//     function writedata(data){
//         //console.log("DATA:");
//         data=JSON.stringify(data);
//         console.log(data);
        
//         fs.appendFile('output_s2ic_get.txt', data + '\n\n', function (err) {
//             if (err) throw err;
//             //console.log('Saved!');
//         });
//     }


//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     it("S2IC API Testing /students", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/students",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /postings", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/postings",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /institutes", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/institutes",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /enterprises", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/enterprises",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /roles", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/roles",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400 || response.statusCode==500 ){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /enterpriseusers", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/enterpriseusers",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400 || response.statusCode==500){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /instituteusers", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/instituteusers",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400 || response.statusCode==500){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("API Testing /accesspermissions", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/accesspermissions",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400 || response.statusCode==500){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
//     it("S2IC API Testing /portalfeatures", function(done) {
//         request.get("http://s2ic.truminds.co.in:10011/portalfeatures",function(error,response,body){
//             if(error){
//                 writedata("RESPONSE :");
//                 writedata(error);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else if(response.statusCode==400 || response.statusCode==500){
//                 //console.log(body);
//                 writedata("RESPONSE :");
//                 writedata(response);
//                 expect(response.statusCode).toBe(200);
//                 done();    
//             }
//             else{
//                 //console.log(response.message);
//                 //writedata(body.message);
//                 expect(response.statusCode).toBe(200);
//                 done();
//             }
//         });
//     });
// });









