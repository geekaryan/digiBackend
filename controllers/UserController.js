const User = require("./../models/UserModel");

//get all users
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      length: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//get one user

exports.getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//create user
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      message: "user created successfully",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//update user

exports.updateUser = async (req, res, next) => {
  try {
    const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//delete user

exports.deletUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
