// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../../Modals/Product"
import connetdb from "../../../middleWare/Mongoose"


let handler = async (req, res)=> {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            
        let p = new Product({
            title : req.body[i].title,
            slug : req.body[i].slug,
            description : req.body[i].description,
            img : req.body[i].img,
            category : req.body[i].category,
            size : req.body[i].size,
            color : req.body[i].color,
            price : req.body[i].price,
            AvailableQuantity : req.body[i].AvailableQuantity       
         })
         await p.save()
        }
        res.status(200).json({success:"success"})

    }else{
        res.status(400).json({error:"not found"})
    }
    
  }
export default connetdb(handler)
  