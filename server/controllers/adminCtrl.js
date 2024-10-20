const User = require('../models/userModel')



const adminCtrl = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      // console.log(users);
      if (!users || users.length === 0) {
        return res.status(404).json({ msg: "No USER FOUND" });
      }
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUsers: async (req, res) => {
    try {
      const { name, email } = req.body;

      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
          email,
        }
      );

      res.json({ msg: "User Profile Updated" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ msg: "User Deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

 module.exports = adminCtrl;