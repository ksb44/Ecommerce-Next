import connectDB from "../../databases/index.js";
import Product from "../../models/Product.js";
connectDB()
export default async function handler(req,res){
let Products=await Product.find()
let tshirts={}
for(let item of Products){
if(item.title in tshirts){
    if(!tshirts[item.title].color.includes(item.color) && item.availableQty>0)

    {
        tshirts[item.title].color.push(item.color)

    }
    if(!tshirts[item.title].size.includes(item.size) && item.availableQty>0)

    {
        tshirts[item.title].size.push(item.size)

    }
}
else {
    tshirts[item.title]=JSON.parse(JSON.stringify(item))
    if(item.availableQty >0){
        tshirts[item.title].color=[item.color]
        tshirts[item.title].size=[item.size]
    }
}

}
return res.json({tshirts})

}