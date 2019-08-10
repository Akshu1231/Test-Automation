// var request = require('request');
// var fs = require('fs');
// describe("student",function(){

//     function writedata(data){
//         //console.log("DATA:");
//         data=JSON.stringify(data);
//         console.log(data);
        
//         fs.appendFile('output_mtp_get.txt', data + '\n\n', function (err) {
//             if (err) throw err;
//             //console.log('Saved!');
//         });
//     }


//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     it("S2IC API Testing /categories", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/categories",function(error,response,body){
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
//     it("S2IC API Testing /exams", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/exams",function(error,response,body){
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
//     it("S2IC API Testing /mocktests", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/mocktests",function(error,response,body){
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
//     it("S2IC API Testing /students", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/students",function(error,response,body){
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
//     it("S2IC API Testing /providers", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/providers",function(error,response,body){
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
//     it("S2IC API Testing /studentmocktests", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/studentmocktests",function(error,response,body){
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
//     it("S2IC API Testing /exambookmarks", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/exambookmarks",function(error,response,body){
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
//     it("API Testing /categorybookmarks", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/categorybookmarks",function(error,response,body){
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
//     it("S2IC API Testing /purchases", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/purchases",function(error,response,body){
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
//     it("S2IC API Testing /mocktestproviders", function(done) {
//         request.get("http://s2ic.truminds.co.in:10010/mocktestproviders",function(error,response,body){
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









