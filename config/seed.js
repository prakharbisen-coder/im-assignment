const User = require('../models/User');

// seed demo users if they don't already exist
const seedUsers = async () => {
    try {
        const users = [
            { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
            { name: 'Regular User', email: 'user@example.com', password: 'user123', role: 'user' }
        ];

        for (const u of users) {
            const exists = await User.findOne({ email: u.email });
            if (!exists) {
                await User.create(u);
                console.log(`Seeded: ${u.email} (${u.role})`);
            }
        }
    } catch (err) {
        console.error('Seeding error:', err.message);
    }
};

module.exports = seedUsers;
