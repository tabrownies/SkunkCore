const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const argon2 = require('argon2');
const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: false
}));
const PermissionSchema = mongoose.Schema({
  colorshemes: {
    type: Boolean,
    default: true,
  },
  inspiration: {
    type: Boolean,
    default: true,
  },
  //projects is the same for materials
  projects: {
    type: Boolean,
    default: false,
  },
  shop: {
    type: Boolean,
    default: false,
  },
  tools: {
    type: Boolean,
    default: false,
  },
  parts: {
    type: Boolean,
    default: false,
  },
  users: {
    type: Boolean,
    default: false,
  }
})
//const Permissions = mongoose.model('Permissions', PermissionSchema);
const AdminSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
 /*permissions: {
    type: mongoose.Schema.ObjectId,
    ref: 'Permissions'
  }*/
})
// This is a hook that will be called before a admin record is saved,
// allowing us to be sure to salt and hash the password first.
AdminSchema.pre('save', async function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password'))
    return next();

  try {
    // generate a hash. argon2 does the salting and hashing for us
    const hash = await argon2.hash(this.password);
    // override the plaintext password with the hashed one
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// This is a method that we can call on Admin objects to compare the hash of the
// password the browser sends with the has of the admin's true password stored in
// the database.
AdminSchema.methods.comparePassword = async function (password) {
  try {
    // note that we supply the hash stored in the database (first argument) and
    // the plaintext password. argon2 will do the hashing and salting and
    // comparison for us.
    const isMatch = await argon2.verify(this.password, password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

// This is a method that will be called automatically any time we convert a admin
// object to JSON. It deletes the password hash from the object. This ensures
// that we never send password hashes over our API, to avoid giving away
// anything to an attacker.
AdminSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  console.log('Deleted Password');
  return obj;
}

// create a Admin model from the Admin schema
const Admin = mongoose.model('Admin', AdminSchema);

/* Middleware */

// middleware function to check for logged-in users
/*const hasPermission = async (req, res, next) => {
  if (!req.session.userID)
    return res.status(403).send({
      message: "not logged in"
    });
  try {
    const admin = await Admin.findOne({
      _id: req.session.userID
    });
    if (!admin) {
      return res.status(403).send({
        message: "not logged in"
      });
    }
    // set the admin field in the request
    req.admin = admin;
  } catch (error) {
    // Return an error if admin does not exist.
    return res.status(403).send({
      message: "not logged in"
    });
  }

  // if everything succeeds, move to the next middleware
  next();
};*/
router.post('/login', async (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.sendStatus(400);
  try {
    const admin = await Admin.findOne({
      username: req.body.username,
    });
    console.log(admin);
    if (!admin) {
      console.log("username wrong");
      return res.status(403).send({
        message: "username or password is wrong"
      });
    }
    if (!await admin.comparePassword(req.body.password)) {
      console.log("password wrong");
      return res.status(403).send({
        message: "username or password is wrong"
      });
    }
    console.log(admin);
    console.log(`${admin.firstname} ${admin.lastname} logged in! :)`);
    return res.send({
      admin: admin
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
})
module.exports = {
  routes: router,
  model: Admin,
};