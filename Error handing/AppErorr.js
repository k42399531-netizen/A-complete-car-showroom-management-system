//create the class error handing 
class AppError extends Error{
    constructor(statuscode,message){
        super(message); //storage the message
        this.statuscode = statuscode; // stirage the statuscode
        this.status = `${statuscode}`.startsWith('4') ? 'fail':'error'; //cpmparision two error
        this.isOperationl = true;//sure the operation
        Error.captureStackTrace(this,this.constructor); // search the file 
    }
}

module.exports = AppError;