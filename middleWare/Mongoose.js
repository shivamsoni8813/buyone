import handler from "@/pages/api/Pincode";
import mongoose from "mongoose";

const connetdb = handler => async (req,res)=>{
    if (mongoose.Connection[0]) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req,res)
}
export default connetdb