// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../../Modals/Product"
import connetdb from "../../../middleWare/Mongoose"


let handler = async (req, res)=> {
    let prod = await Product.find()

    let cate= {}

    for (let items of prod) {
        if (items.title in cate) { 
          if(!cate[items.title].color.includes(items.color) && items.AvailableQuantity > 0){
            cate[items.title].color.push(items.color)
          }
          if(!cate[items.title].size.includes(items.size) && items.AvailableQuantity > 0){
            cate[items.title].size.push(items.size)
          }
        }else{
          cate[items.title] = JSON.parse(JSON.stringify(items))
          if (items.AvailableQuantity > 0) {
              cate[items.title].color = [items.color]
              cate[items.title].size = [items.size]
          }
        }
    }
    res.status(200).json({ cate })
  }
export default connetdb(handler)
  