var express = require("express");
var exe = require("./connection");
var route = express.Router();
const fs = require('fs');
const accountSid = 'AC7ba3d1d4322930d2b6ca7e89c7eb94f0';
const authToken = '764ac429a691f12ddcb51fc953d6f8eb';
const client = require('twilio')(accountSid, authToken);

/********login page ******** */
// route.get("/", async function (req, res) {
//   if (req.session.user_id != undefined) var username = req.session.username;
//   else var username = undefined;

//   var obj = { username: username };
//   res.render("admin/login.ejs");
// });

// route.post("/login_now", async function (req, res) {
//   const { username, password } = req.body;

//   var sql = `SELECT * FROM login WHERE username='${username}' AND  password='${password}'`;

//   var data = await exe(sql);

//   if (data.length > 0) {
//     req.session.user_id = data[0]["user_id"];
//     req.session.username = data[0]["username"];
//     res.redirect("/admin/basic_info/basic_info");
//   } else {
//     res.send(`
//         <script>
//             alert('Login Failed');
//             window.location.href='/admin';
//         </script>
//     `);
//   }
// });

// route.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.redirect("/admin");
//     }
//   });
// });


route.get("/",async function(req,res){
  var sql=`SELECT * FROM booked_car JOIN tariffs ON booked_car.car_id = tariffs.tariffs_id ORDER BY booked_car.book_car_id DESC `
  var booked_cars=await exe(sql);
  var obj={"booked_cars":booked_cars}
  res.render("admin/home.ejs",obj)
});


// Disclaimer
route.get("/disclaimer",async function(req,res){
  var disclaimer_data = await exe("SELECT * FROM disclaimer");
  // console.log(disclaimer_data);
  res.render("admin/disclaimer.ejs",{"disclaimer_data":disclaimer_data});
});

route.post("/save_disclaimer",async function(req,res){
  var d = req.body;
  var sql = await exe(`INSERT INTO disclaimer (disclaimer_title,disclaimer_desc) VALUES ('${d.disclaimer_title}','${d.disclaimer_desc}')`);
  // res.send(sql);
  res.redirect("/admin/disclaimer");
});

route.get("/edit_disclaimer_data/:disclaimer_id",async function(req,res){
  var disclaimer_id = req.params.disclaimer_id;
  var edit_diclaimer_data = await exe(`SELECT * FROM disclaimer WHERE disclaimer_id = '${disclaimer_id}'`)
  res.render("admin/edit_diclaimer_data.ejs",{"edit_diclaimer_data":edit_diclaimer_data});
  // console.log(edit_diclaimer_data);
});

route.post("/update_disclaimer", async function(req,res){
  var d = req.body;
  var update_disclaimer = await exe(`UPDATE disclaimer SET disclaimer_title = '${d.disclaimer_title}',disclaimer_desc = '${d.disclaimer_desc}' WHERE disclaimer_id = '${d.disclaimer_id}'`);
  res.redirect("/admin/disclaimer");
});

route.get("/delete_disclaimer_data/:disclaimer_id",async function(req,res){
  var disclaimer_id = req.params.disclaimer_id;
  var delete_disclaimer = await exe(`DELETE FROM disclaimer WHERE disclaimer_id = '${disclaimer_id}'`);
  res.redirect("/admin/disclaimer");
})

// Become an Partner
route.get("/features",async function(req,res){
  var features_data = await exe("SELECT * FROM features");
  res.render("admin/features.ejs",{"features_data":features_data});
});

route.post("/save_features", async function(req,res){
  var d = req.body;
 await exe(`INSERT INTO features(features_title,features_desc) VALUES ('${d.features_title}','${d.features_desc}')`);
  res.redirect("/admin/features");
});

route.get("/edit_features/:features_id",async function(req,res){
  var features_id = req.params.features_id;
  var edit_features = await exe(`SELECT * FROM features WHERE features_id = '${features_id}'`);

  res.render("admin/edit_features.ejs",{"edit_features":edit_features});
  // console.log(edit_features);
});

route.post("/update_features",async function(req,res){
  var d = req.body;
  var update_features = await exe(`UPDATE features SET features_title = '${d.features_title}', features_desc = '${d.features_desc}' WHERE features_id = '${d.features_id}'`);
  res.redirect("/admin/features");
});

route.get("/delete_features/:features_id",async function(req,res){
  var features_id = req.params.features_id;
  var delete_features = await exe(`DELETE FROM features WHERE features_id = '${features_id}'`);
  res.redirect("/admin/features");
});

// Program Information
route.get("/program_info",async function(req,res){
  var program_info = await exe(`SELECT * FROM program_info`);
  res.render("admin/program_info.ejs",{"program_info":program_info});
});

route.post("/save_program_info",async function(req,res){
  var d = req.body;
  if(req.files!=null){
    var program_info_image = new Date().getTime() + req.files.program_info_image.name;
    req.files.program_info_image.mv("public/encoded_files/" + program_info_image);
    // 
      var data1 = await exe(`SELECT program_info_image FROM program_info `);
  const imagePath = 'public/encoded_files/'+data1[0].program_info_image; // Path to the image file you want to remove
  fs.unlink(imagePath, (err) => {
    if (err) {
            console.error(err);
            return;
          }
          console.log('Image file has been removed successfully');
          });
    // 
    await exe(`UPDATE program_info SET program_info_image='${program_info_image}'`)
  }
  await exe(`UPDATE program_info SET program_info_title = '${d.program_info_title}',program_info_desc = '${d.program_info_desc}',program_info_feature1 = '${d.program_info_feature_1}',program_info_feature2 = '${d.program_info_feature_2}',program_info_feature3 = '${d.program_info_feature_3}'`);
  res.redirect("/admin/program_info");
});
// About Our Program
route.get("/about_our_program",async function(req,res){
  var about_program_data = await exe(`SELECT * FROM about_our_program`);
  res.render("admin/about_our_program.ejs",{"about_program_data":about_program_data});
});

route.post("/save_about_our_program",async function(req,res){
  // res.send(req.body);
  var d = req.body;
await exe(`INSERT INTO about_our_program (about_our_program_title,about_our_program_desc) VALUES ('${d.about_our_program_title}','${d.about_our_program_desc}')`);
  res.redirect("/admin/about_our_program");
});

route.get("/edit_about_program_data/:about_our_program_id",async function(req,res){
  var about_our_program_id = req.params.about_our_program_id;
  // console.log(about_our_program_id);
  var edit_about_program_data = await exe(`SELECT * FROM about_our_program WHERE about_our_program_id = '${about_our_program_id}'`);
  res.render("admin/edit_about_program_data.ejs",{"edit_about_program_data":edit_about_program_data});
});

route.post("/update_about_our_program",async function(req,res){
  var d = req.body;
  var update_about_our_program = await exe(`UPDATE about_our_program SET about_our_program_title = '${d.about_our_program_title}',about_our_program_desc = '${d.about_our_program_desc}' WHERE about_our_program_id = '${d.about_our_program_id}'`);
  res.redirect("/admin/about_our_program");
});

route.get("/delete_about_program_data/:about_our_program_id",async function(req,res){
  var about_our_program_id = req.params.about_our_program_id;
  var delete_about_our_program = await exe(`DELETE FROM about_our_program WHERE about_our_program_id = '${about_our_program_id}'`);
  res.redirect("/admin/about_our_program");
})

// About Page
// Performance
route.get("/about_performance",async function(req,res){
  var about_performance = await exe(`SELECT * FROM about_performance`);
  res.render("admin/about_performance.ejs",{"about_performance":about_performance});
});

route.post("/save_about_performance",async function(req,res){
  var d = req.body;
  if(req.files!=null){
    if(req.files.about_performance_image1!=undefined){
        var about_performance_image1 = new Date().getTime() + req.files.about_performance_image1.name;
        req.files.about_performance_image1.mv("public/encoded_files/" + about_performance_image1);
        var data1 = await exe(`SELECT about_performance_image1 FROM about_performance `);
        const imagePath = 'public/encoded_files/'+data1[0].about_performance_image1; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
        await exe(`UPDATE about_performance SET about_performance_image1='${about_performance_image1}'`)
    }
    if(req.files.about_performance_image2!=undefined){
      var about_performance_image2 = new Date().getTime() + req.files.about_performance_image2.name;
      req.files.about_performance_image2.mv("public/encoded_files/" + about_performance_image2);
          var data1 = await exe(`SELECT about_performance_image2 FROM about_performance `);
        const imagePath = 'public/encoded_files/'+data1[0].about_performance_image2; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
      await exe(`UPDATE about_performance SET about_performance_image2='${about_performance_image2}'`)

    }
    if(req.files.about_performance_image3!=undefined){
      var about_performance_image3 ="performanse"+ new Date().getTime() + req.files.about_performance_image3.name;
      req.files.about_performance_image3.mv("public/encoded_files/" + about_performance_image3);
          var data1 = await exe(`SELECT about_performance_image3 FROM about_performance `);
        const imagePath = 'public/encoded_files/'+data1[0].about_performance_image3; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
      await exe(`UPDATE about_performance SET about_performance_image3='${about_performance_image3}'`)
    }
  }
  await exe(`UPDATE about_performance SET about_performance_title = '${d.about_performance_title}',about_performance_desc = '${d.about_performance_desc}'`);
  res.redirect("/admin/about_performance");
});
// Car Safety
route.get("/car_safety",async function(req,res){
  var car_safety = await exe(`SELECT * FROM car_safety`);
  res.render("admin/car_safety.ejs",{"car_safety":car_safety});
});

route.post("/save_car_safety",async function(req,res){
  var d = req.body;
  if(req.files!=null){
    if(req.files.car_safety_image1!=undefined){
      var car_safety_image1 = new Date().getTime() + req.files.car_safety_image1.name;
      req.files.car_safety_image1.mv("public/encoded_files/" + car_safety_image1);
        var data1 = await exe(`SELECT car_safety_image1 FROM car_safety `);
        const imagePath = 'public/encoded_files/'+data1[0].car_safety_image1; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
        await exe(`UPDATE car_safety SET car_safety_image1='${car_safety_image1}'`)
    }
    if(req.files.car_safety_image2!=undefined){
      var car_safety_image2 = new Date().getTime() + req.files.car_safety_image2.name;
      req.files.car_safety_image2.mv("public/encoded_files/" + car_safety_image2);
        var data1 = await exe(`SELECT car_safety_image2 FROM car_safety `);
        const imagePath = 'public/encoded_files/'+data1[0].car_safety_image2; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
        await exe(`UPDATE car_safety SET car_safety_image2='${car_safety_image2}'`)
    }
    if(req.files.car_safety_image3!=undefined){
      var car_safety_image3 = new Date().getTime() + req.files.car_safety_image3.name;
      req.files.car_safety_image3.mv("public/encoded_files/" + car_safety_image3);
        var data1 = await exe(`SELECT car_safety_image3 FROM car_safety `);
        const imagePath = 'public/encoded_files/'+data1[0].car_safety_image3; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
          if (err) {
                  console.error(err);
                  return;
                }
                console.log('Image file has been removed successfully');
                });
        await exe(`UPDATE car_safety SET car_safety_image3='${car_safety_image3}'`)
    }
  }
  await exe(`UPDATE car_safety SET car_safety_title = '${d.car_safety_title}',car_safety_desc = '${d.car_safety_desc}'`);
  res.redirect("/admin/car_safety");
});
// Our Office
route.get("/our_office",async function(req,res){
  var our_office = await exe(`SELECT * FROM our_office`);
  res.render("admin/our_office.ejs",{"our_office":our_office});
});

route.post("/save_our_office",async function(req,res){
  var d = req.body;
  await exe(`UPDATE our_office SET our_office_title = '${d.our_office_title}',our_office_desc = '${d.our_office_desc}',our_office_address = '${d.our_office_address}'`);
  res.redirect("/admin/our_office");
});
// About Story Title
route.get("/about_story",async function(req,res){
  var about_story = await exe(`SELECT * FROM about_story`);
  res.render("admin/about_story.ejs",{"about_story":about_story});
});

route.post("/save_about_story",async function(req,res){
  var d = req.body;
   await exe(`UPDATE about_story SET about_story_title1 = '${d.about_story_title1}',about_story_title2 = '${d.about_story_title2}',about_story_desc = '${d.about_story_desc}'`);
  res.redirect("/admin/about_story");
});
// Who We Are
route.get("/who_we_are",async function(req,res){
  var who_we_are = await exe(`SELECT * FROM who_we_are`);
  res.render("admin/who_we_are.ejs",{"who_we_are":who_we_are});
});

route.post("/save_who_we_are",async function(req,res){
  var d = req.body;
 await exe(`UPDATE who_we_are SET who_we_are_title = '${d.who_we_are_title}',who_we_are_desc = '${d.who_we_are_desc}'`);
  res.redirect("/admin/who_we_are");
});
// Contact Page
route.get("/contact_list",async function(req,res){
  var contact_list = await exe(`SELECT * FROM contact`);
  res.render("admin/contact_list.ejs",{"contact_list":contact_list});
});
// Privacy Policy99
route.get("/privacy_policy",async function(req,res){
  // var privacy_policy = await exe(`SELECT * FROM privacy_policy`);
  // var contact_list = await exe(`SELECT * FROM contact_list`);
  res.render("admin/privacy_policy.ejs");
});

route.post("/save_privacy_policy",async function(req,res){
  var d = req.body;
  await exe(`INSERT INTO privacy_policy (privacy_policy_title,privacy_policy_desc1,privacy_policy_desc2,privacy_policy_desc3) VALUES ('${d.privacy_policy_title}','${d.privacy_policy_desc1}','${d.privacy_policy_desc2}','${d.privacy_policy_desc3}')`);
  res.redirect("/admin/privacy_policy");
});
// ===================vaibhav===========================
route.post("/sms",async(req,res)=>{
var mo=req.body.mobile;
var customerName=req.body.name;
var car_name=req.body.car;
var pick_date=req.body.date;
var pick_time=req.body.time;
const sendsms=async (body)=>{
  let msgOption={
    from: '+19382533449',
    to: '+91'+mo,    
    body,
  };
  try{
  const message= await client.messages.create(msgOption);
  console.log(message);
}catch(err){
    console.log(err)

  }
};
sendsms("Congratulations Mr "+customerName+" you booked the "+car_name+" at "+pick_date+" on "+pick_time+"clock , Have a Nice Jurney .The owner will Call You For  Confirmation");
res.redirect("/admin")


});
// Basic Information
route.get("/basic_information",async function(req,res){
  var basic_information = await exe(`SELECT * FROM basic_information`);
  res.render("admin/basic_information.ejs",{"basic_information":basic_information});
  
});
route.post("/save_basic_information",async(req,res)=>{
  // res.send(req.body);
  var d=req.body;
  // var sql=`INSERT INTO basic_information(contact_heading,contact_number,email,facebook_link,instagram_link,twitter_link,linkedin_link,google_map_link,address)VALUES('${d.contact_heading}','${d.contact_number}','${d.email}','${d.facebook_link}','${d.instagram_link}','${d.twitter_link}','${d.linkedin_link}','${d.google_map_link}','${d.address}')`;
  var sql=`UPDATE basic_information SET contact_heading='${d.contact_heading}'  ,contact_number='${d.contact_number}',email='${d.email}',facebook_link='${d.facebook_link}',instagram_link='${d.instagram_link}',twitter_link='${d.twitter_link}',linkedin_link='${d.linkedin_link}',google_map_link='${d.google_map_link}',address='${d.address}'`
  await exe(sql);
  res.redirect("/admin/basic_information")

})
// home slider
route.get("/home_slider",async(req,res)=>{
  var sql=`SELECT * FROM slider`;
  var slides=await exe(sql);
  res.render("admin/home_slider.ejs",{"slides":slides})
});
route.post("/save_slider",async(req,res)=>{
  // res.send(req.files)
  var slider_img=new Date().getTime()+req.files.slider_image.name;
  req.files.slider_image.mv("public/encoded_files/"+slider_img);
  var sql=  `INSERT INTO slider(slider_img)VALUES('${slider_img}')`
  await exe(sql);
  res.redirect("/admin/home_slider")
});
route.get("/edit_slider/:id",async(req,res)=>{
  var sql=`SELECT * FROM slider WHERE id='${req.params.id}'`;
  var slider_info=await exe(sql);
  res.render("admin/update_slider.ejs",{"slider_info":slider_info})

})
route.post("/update_slider",async(req,res)=>{
  // res.send(req.files)
  var slider_img=new Date().getTime()+req.files.slider_image.name;
  req.files.slider_image.mv("public/encoded_files/"+slider_img);
  // 
  var data1 = await exe(`SELECT slider_img FROM slider WHERE id='${req.body.id}'  `);
  const imagePath = 'public/encoded_files/'+data1[0].slider_img; // Path to the image file you want to remove
  fs.unlink(imagePath, (err) => {
    if (err) {
            console.error(err);
            return;
          }
          console.log('Image file has been removed successfully');
          });
  // 
  var sql=`UPDATE slider SET slider_img='${slider_img}' WHERE id='${req.body.id}'`
  await exe(sql);
  res.redirect("/admin/home_slider")

});
route.get("/del_slider/:id",async(req,res)=>{
  var data1 = await exe(`SELECT slider_img FROM slider WHERE id='${req.params.id}'  `);
  const imagePath = 'public/encoded_files/'+data1[0].slider_img; // Path to the image file you want to remove
  fs.unlink(imagePath, (err) => {
    if (err) {
            console.error(err);
            return;
          }
          console.log('Image file has been removed successfully');
          });
  var sql=`DELETE FROM slider WHERE id='${req.params.id}'`;
  await exe(sql);
  res.redirect("/admin/home_slider")

  

})
// Tariffs
route.get("/tariffs",async function(req,res){
  var tariff_data = await exe("SELECT * FROM tariffs");
  // console.log(tariff_data);
  res.render("admin/tariffs.ejs",{"tariff_data":tariff_data});
});
route.post("/save_tariffs",async function(req,res){
  var d = req.body;
  var car_image = new Date().getTime() + req.files.car_image.name;
  req.files.car_image.mv("public/encoded_files/" + car_image);

  var sql = await exe(`INSERT INTO tariffs (car_name,how_many_seats,engine_type,peakHours,car_image,status) VALUES ('${d.car_name}','${d.how_many_seats}','${d.engine_type}','${d.peakHours}','${car_image}','notBooked')`);
  res.redirect("/admin/tariffs");
});
route.get("/edit_tariff_data/:tariffs_id",async function(req,res){
  var tariffs_id = req.params.tariffs_id;
  var edit_tariffs_data = await exe(`SELECT * FROM tariffs WHERE tariffs_id = '${tariffs_id}'`);
  res.render("admin/edit_tariffs_data.ejs",{"edit_tariffs_data":edit_tariffs_data});
});
route.post("/update_tariffs",async function(req,res){
  var d = req.body;
  if(req.files!=null){
    var car_image ="car_image"+ new Date().getTime() + req.files.car_image.name;
    req.files.car_image.mv("public/encoded_files/" + car_image);
    
    var data1 = await exe(`SELECT car_image FROM tariffs  WHERE tariffs_id='${d.tariffs_id}'`);
    const imagePath = 'public/encoded_files/'+data1[0].car_image; // Path to the image file you want to remove
        fs.unlink(imagePath, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Image file has been removed successfully');
          });

  await exe(`UPDATE tariffs SET car_image = '${car_image}' WHERE tariffs_id = '${d.tariffs_id}'`);


  }

   await exe(`UPDATE tariffs SET car_name = '${d.car_name}',how_many_seats = '${d.how_many_seats}',engine_type = '${d.engine_type}',peakHours = '${d.peakHours}' WHERE tariffs_id = '${d.tariffs_id}'`);
  res.redirect("/admin/tariffs");
});
route.get("/delete_tariff_data/:tariffs_id",async function(req,res){
  var tariffs_id = req.params.tariffs_id;
  var data1 = await exe(`SELECT car_image FROM tariffs  WHERE tariffs_id='${tariffs_id}'`);
  const imagePath = 'public/encoded_files/'+data1[0].car_image; // Path to the image file you want to remove
  fs.unlink(imagePath, (err) => {
    if (err) {
            console.error(err);
            return;
          }
          console.log('Image file has been removed successfully');
          });
   await exe(`DELETE FROM tariffs WHERE tariffs_id = '${tariffs_id}'`);
  res.redirect("/admin/tariffs");
});
// contact
route.get("/contact",async(req,res)=>{
  var sql= `SELECT * FROM contact ORDER BY customer_id DESC;`;
  var contacts=await exe(sql);
  res.render("admin/contact.ejs",{"contact":contacts})
})
module.exports = route;

