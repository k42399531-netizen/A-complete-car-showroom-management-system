const jwt = require('jsonwebtoken')
const users = require('../data/users')
const AppError = require('../Error handing/AppErorr')
exports.IsAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(new AppError(401, 'No token provided'));
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.jwt_secret);
        
        const user = await users.findById(decoded._id);
        
        // --- أضف هذا للـ Debugging ---
        console.log("المستخدم الموجود في قاعدة البيانات:", user); 
        // -----------------------------

        if (!user) return next(new AppError(404, 'User not found'));

        // تأكد من التطابق التام
        if (user.accessbility !== 'admin') {
            return next(new AppError(403, 'Access denied, you are not an admin'));
        }

        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};