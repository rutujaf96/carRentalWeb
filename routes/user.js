var express = require("express");
var exe = require("./connection");
var route = express.Router();
// const accountSid = 'your twilio accountSid ';
// const accountSid = 'your twilio authToken ';
// const client = require('twilio')(accountSid, authToken);
route.get("/",async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var tariff_data = await exe("SELECT * FROM tariffs");
  var car_collection = await exe(`SELECT * FROM slider`);

  res.render("user/home.ejs",{"basic_information":basic_information,"tariff_data":tariff_data,"car_collection":car_collection});
});
route.get("/about",async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var about_performance = await exe(`SELECT * FROM about_performance`);
  var car_safety = await exe(`SELECT * FROM car_safety`);
  var our_office = await exe(`SELECT * FROM our_office`);
  var who_we_are = await exe(`SELECT * FROM who_we_are`);
  var about_story = await exe(`SELECT * FROM about_story`);
  res.render("user/about.ejs",{"basic_information":basic_information,"about_performance":about_performance,"car_safety":car_safety,"our_office":our_office,"who_we_are":who_we_are,"about_story":about_story});
});


route.get("/become_an_partner", async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var features_data = await exe("SELECT * FROM features");
  var about_program_data = await exe(`SELECT * FROM about_our_program`);
  var program_info = await exe(`SELECT * FROM program_info`);
  // console.log(testimonial_data);
  res.render("user/become_an_partner.ejs", {
    features_data: features_data,
    about_program_data: about_program_data,
    basic_information:basic_information,
    program_info:program_info
  });
});
route.get("/privacy",async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var contact = await exe(`SELECT * FROM contact`);
  res.render("user/privacy.ejs",{"basic_information":basic_information,"contact":contact});
});
route.get("/disclaimer",async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var disclaimer = await exe(`SELECT * FROM disclaimer`);
  res.render("user/disclaimer.ejs",{"basic_information":basic_information,"disclaimer":disclaimer});
});


// ********************vaibhav************************************************//
// book cars
route.get("/bookCar/:id", async(req,res)=>{
  var basic_information = await exe(`SELECT * FROM basic_information`);
  var sql=`SELECT * FROM tariffs WHERE tariffs_id='${req.params.id}'`
  var data=await exe(sql);
  // res.send(data);
  res.render("user/bookCarPage.ejs",{"basic_information":basic_information,"booking_data":data})
});
route.post("/booked_car",async(req,res)=>{
  var d=req.body;
var sql=`INSERT INTO booked_car(customer_name,customer_mobile,pick_place,drop_place,pick_date,pick_time,car_name,car_id)VALUES('${d.customer_name}','${d.customer_mobile}','${d.pick_place}','${d.drop_place}','${d.pick_date}','${d.pick_time}','${d.car_name}','${d.car_id}')`
await exe(`UPDATE tariffs SET status='booked' WHERE tariffs_id='${d.car_id}'`)
await exe(sql)
res.redirect("/")
});
// contact
route.get("/contact", async function (req, res) {
  var basic_information = await exe(`SELECT * FROM basic_information`);
 
  res.render("user/contact.ejs",{"basic_information":basic_information,});
});
route.post("/save_contact" ,async (req,res)=>{
  var d=req.body;
  var mo=d.customer_mobile;
  var customer_name=d.customer_name;
  var sql=`INSERT INTO contact(customer_name,customer_email,customer_mobile,customer_message)VALUES('${d.customer_name}','${d.customer_email}','${d.customer_mobile}','${d.customer_message}')`;
  await exe(sql);
  // const sendsms=async (body)=>{
  //   let msgOption={
  //     from: 'your twilio mobile no',
  //     to: '+91'+mo,    
  //     body,
  //   };
  //   try{
  //   const message= await client.messages.create(msgOption);
  //   console.log(message);
  // }catch(err){
  //     console.log(err)
  
  //   }
  // };
  // sendsms("Thank you  Mr "+customer_name+" for contacting Us");
  res.redirect("/contact")
})


module.exports = route;
