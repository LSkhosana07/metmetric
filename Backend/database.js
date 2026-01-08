const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');
const path = require('path');

// Initialize database
const db = new Database(path.join(__dirname, 'careers.db'), { verbose: console.log });

// Create tables
const initDatabase = () => {
    // Users table
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Positions table
    db.exec(`
        CREATE TABLE IF NOT EXISTS positions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            requirements TEXT NOT NULL,
            posted_date DATE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('Database tables created/verified');

    // Create default admin user if doesn't exist
    createDefaultUser();
};

// Create default admin user
const createDefaultUser = () => {
    const checkUser = db.prepare('SELECT * FROM users WHERE username = ?');
    const existingUser = checkUser.get('admin');

    if (!existingUser) {
        const hashedPassword = bcrypt.hashSync('admin123', 10);
        const insertUser = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        insertUser.run('admin', hashedPassword);
        console.log('Default admin user created (username: admin, password: admin123)');
        console.log('IMPORTANT: Change the default password in production!');
    }
};

// User operations
const getUserByUsername = (username) => {
    const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
    return stmt.get(username);
};

const createUser = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    const info = stmt.run(username, hashedPassword);
    return { id: info.lastInsertRowid, username };
};

// Position operations
const createPosition = (positionData) => {
    const stmt = db.prepare(`
        INSERT INTO positions (title, description, requirements, posted_date) 
        VALUES (?, ?, ?, ?)
    `);
    const info = stmt.run(
        positionData.title,
        positionData.description,
        positionData.requirements,
        positionData.posted_date
    );
    
    return {
        id: info.lastInsertRowid,
        ...positionData
    };
};

const getAllPositions = () => {
    const stmt = db.prepare('SELECT * FROM positions ORDER BY posted_date DESC');
    return stmt.all();
};

const getPositionById = (id) => {
    const stmt = db.prepare('SELECT * FROM positions WHERE id = ?');
    return stmt.get(id);
};

const updatePosition = (id, positionData) => {
    const stmt = db.prepare(`
        UPDATE positions 
        SET title = ?, description = ?, requirements = ?, posted_date = ? 
        WHERE id = ?
    `);
    const info = stmt.run(
        positionData.title,
        positionData.description,
        positionData.requirements,
        positionData.posted_date,
        id
    );
    return info.changes > 0;
};

const deletePosition = (id) => {
    const stmt = db.prepare('DELETE FROM positions WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
};

// Initialize database on module load
initDatabase();

// Export functions
module.exports = {
    db,
    getUserByUsername,
    createUser,
    createPosition,
    getAllPositions,
    getPositionById,
    updatePosition,
    deletePosition
};
