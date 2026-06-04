//teleport the tool
const logic = require('../services/logic.cjs')

// دالة إتمام التأجير
exports.rentalId = async(req,res,next) =>{
    try{
        const {rentalID, carID} = req.params;
        const result = await logic.rentalcars(rentalID, carID)
        res.status(200).json({ status: 'success', data: result });
    }
    catch(err){
        next(err)
    }
}; // إغلاق الدالة الأولى هنا

// دالة حساب السعر - مستقلة في الخارج
exports.calculateRental = async (req, res, next) => {
    try {
        const { days, price } = req.body;
        const finalPrice = logic.totalprice(days, price);
        res.status(200).json({ 
            status: 'success', 
            totalAmount: finalPrice 
        });
    } catch (err) {
        next(err);
    }
};