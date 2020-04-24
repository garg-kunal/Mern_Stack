const router = require('express').Router();
let User = require('../models/usermodels');

router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
User.find({},(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        res.send(data);
    }
})
});

router.route('/add').post((req, res) => {
new User({
    username:req.body.username
}).save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// router.route('/add').post((req, res) => {
//     const username = req.body.username;
  
//     const newUser = new User({username});
  
//     newUser.save()
//       .then(() => res.json('User added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });


module.exports = router;