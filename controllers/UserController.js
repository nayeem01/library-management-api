const User = require("../model/user");
const { valid } = require("../middleware/valid");

exports.getStdBymobile = async (req, res) => {
    if (req.query.mobile != undefined) {
        try {
            let user = User.find(req.query);
            const userInfo = await user;
            console.log(req.query);
            //console.log(userInfo);
            if (!userInfo[0].isLibrarian) {
                res.status(200).json({
                    success: true,
                    data: userInfo,
                });
            } else {
                res.status(203).json({
                    success: true,
                    message: "you are not allow",
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ success: false });
        }
    } else {
        try {
            let user = User.find({ isDeleted: false, isLibrarian: false });
            const userInfo = await user;

            res.status(200).json({
                success: true,
                count: userInfo.length,
                data: userInfo,
            });
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ success: false });
        }
    }
};
exports.getUser = async (req, res) => {
    try {
        let user = User.find({ isDeleted: false });
        const users = await user;

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.getLibrarian = async (req, res) => {
    try {
        let user = User.find(req.query);
        const users = await user;

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.getdeletedUser = async (req, res) => {
    try {
        let user = User.find({ isDeleted: true });
        const users = await user;

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};

exports.newUser = async (req, res) => {
    try {
        let number = req.body.mobile;

        if (valid(number)) {
            const user = await User.create(req.body);
            res.status(201).json({
                success: true,
                data: user,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "mobile number is valid or bangladeshi",
            });
        }
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

exports.deleteUserByID = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            isDeleted: true,
        });
        res.status(200).json({
            success: true,
            message: "user deleted",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
exports.updateUser = async (req, res) => {
    try {
        if (req.body.mobile != undefined) {
            let number = req.body.mobile;
            if (valid(number)) {
                const user = await User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                        runValidators: true,
                    }
                );
                res.status(200).json({
                    success: true,
                    data: user,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "invalid number",
                });
            }
        } else {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            res.status(200).json({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false });
    }
};
