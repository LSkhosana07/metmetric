const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from parent directory (your project root)
app.use(express.static(path.join(__dirname, '../')));

// Session configuration
app.use(session({
    secret: 'your-secret-key-change-this-in-production',
    resave: false,
    saveUninitialized: false,
    name: 'sessionId',
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        sameSite: 'lax'  // CHANGE THIS FROM 'none' TO 'lax'
    }
}));

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized. Please login.' });
    }
};

// Routes

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {
        const user = db.getUserByUsername(username);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        req.session.userId = user.id;
        req.session.username = user.username;

        // IMPORTANT: Save the session before responding
        req.session.save((err) => {
            if (err) {
                console.error('Session save error:', err);
                return res.status(500).json({ error: 'Session error' });
            }
            
            console.log('Session saved successfully:', req.session);
            res.json({ 
                success: true, 
                message: 'Login successful',
                user: { id: user.id, username: user.username }
            });
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Could not log out' });
        }
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

// Check authentication status
app.get('/api/auth/check', (req, res) => {
    console.log('Auth check - Session ID:', req.sessionID);
    console.log('Auth check - User ID:', req.session.userId);
    
    if (req.session.userId) {
        res.json({ authenticated: true, username: req.session.username });
    } else {
        res.json({ authenticated: false });
    }
});

// Create position (protected)
app.post('/api/positions', requireAuth, (req, res) => {
    const { position, description, requirements, postedDate } = req.body;

    if (!position || !description || !requirements || !postedDate) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newPosition = db.createPosition({
            title: position,
            description,
            requirements,
            posted_date: postedDate
        });

        res.status(201).json({ 
            success: true, 
            message: 'Position created successfully',
            position: newPosition 
        });
    } catch (error) {
        console.error('Error creating position:', error);
        res.status(500).json({ error: 'Server error creating position' });
    }
});

// Get all positions (protected)
app.get('/api/positions', requireAuth, (req, res) => {
    try {
        const positions = db.getAllPositions();
        res.json({ success: true, positions });
    } catch (error) {
        console.error('Error fetching positions:', error);
        res.status(500).json({ error: 'Server error fetching positions' });
    }
});

// Delete position (protected)
app.delete('/api/positions/:id', requireAuth, (req, res) => {
    const { id } = req.params;

    try {
        const result = db.deletePosition(id);
        if (result) {
            res.json({ success: true, message: 'Position deleted successfully' });
        } else {
            res.status(404).json({ error: 'Position not found' });
        }
    } catch (error) {
        console.error('Error deleting position:', error);
        res.status(500).json({ error: 'Server error deleting position' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Database initialized successfully');
});