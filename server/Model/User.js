import sequelize from "../db.js";
import {DataTypes} from "sequelize";
import {compare, hash} from "bcryptjs";
import jwt from "jsonwebtoken";


const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Username can not be empty."
            },
            is: {
                args: /^[a-zA-Z ]+$/,
                msg: "Username may only consist of lower- and uppercase letters."
            },
            len: {
                args: [2, 100],
                msg: "Username must be between 2 - 100 characters."
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Email already exists."
        },
        validate: {
            isEmail: {
                msg: "Please enter a valid email."
            },
            notEmpty: {
                msg: "Email can not be empty."
            }
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Password can not be empty."
            }
        }
    }

}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await hash(user.password, 10);
            }
        }
    }
})

User.prototype.validatePassword = async function (password) {
    return await compare(password, this.password);
}

User.prototype.generateAuthToken = function () {
    const token = jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}


export const seedUsers = async () => {
    try {
        const userCount = await User.count();

        if (userCount === 0) {
            await User.create({
                username: "Test User",
                email: "test@example.com",
                password: "password"
            })

            console.log("Test User created successfully.")
        } else {
            console.log("User-Table contains data. No seeder has been started.")
        }
    }

    catch (error) {
        console.error("Error seeding User-Table:", error);
    }
}

export default User