import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'
import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        address: '123 Elm St, Springfield, IL',
        phone: 5551234567,
        password: 'password123',
        isOnline: false
    },
    {
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        address: '456 Oak St, Springfield, IL',
        phone: 5552345678,
        password: 'securepassword1',
        isOnline: false
    },
    {
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        address: '789 Pine St, Springfield, IL',
        phone: 5553456789,
        password: 'charlie123',
        isOnline: false
    },
    {
        name: 'David Lee',
        email: 'david.lee@example.com',
        address: '321 Maple Ave, Springfield, IL',
        phone: 5554567890,
        password: 'davidpassword2024',
        isOnline: false
    },
    {
        name: 'Eva White',
        email: 'eva.white@example.com',
        address: '654 Cedar Dr, Springfield, IL',
        phone: 5555678901,
        password: 'eva2024white',
        isOnline: false
    },
    {
        name: 'Frank Green',
        email: 'frank.green@example.com',
        address: '987 Birch Blvd, Springfield, IL',
        phone: 5556789012,
        password: 'greenfrank2024',
        isOnline: false
    },
    {
        name: 'Grace King',
        email: 'grace.king@example.com',
        address: '123 Spruce Ln, Springfield, IL',
        phone: 5557890123,
        password: 'graceking123',
        isOnline: false
    },
    {
        name: 'Hank Miller',
        email: 'hank.miller@example.com',
        address: '456 Redwood Rd, Springfield, IL',
        phone: 5558901234,
        password: 'hankmiller2024',
        isOnline: false
    },
    {
        name: 'Ivy Scott',
        email: 'ivy.scott@example.com',
        address: '789 Willow Way, Springfield, IL',
        phone: 5559012345,
        password: 'ivyscott2024',
        isOnline: false
    },
    {
        name: 'Jack Taylor',
        email: 'jack.taylor@example.com',
        address: '321 Pinehill St, Springfield, IL',
        phone: 5550123456,
        password: 'jack2024taylor',
        isOnline: false
    }
];

const userWithHashed = users.map((user) => {
        user.password = bcrypt.hashSync(user.password, 10);
        return user;
    }
)
const usersWithHash = await User.insertMany(userWithHashed);
console.log(usersWithHash)