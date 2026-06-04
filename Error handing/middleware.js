const Error_fetching = (err, req, res, next) => {
    err.statuscode = Number(err.statuscode) || 500;
    err.status = err.status || 'errors';
    
    if (err.code === 11000) {
        err.message = 'هذا المستخدم أو رقم الهاتف موجود بالفعل، يرجى اختيار بيانات مختلفة.';
        err.statuscode = 400;
    }
    res.status(err.statuscode).json({ 
        status: err.status,
        message: err.message || 'something went wrong',
        error: {
            statuscode: err.statuscode,
            status: err.status
        },
        stack: err.stack
    });
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined;
};

module.exports = Error_fetching;