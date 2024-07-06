import Product from "../../models/Product.js";

export default async function handler(req, res) {
    const productsData = req.body; 
   
    if (req.method === 'POST') {
        try {
        
            const createdProducts = await Product.create(productsData);

            res.status(200).json(createdProducts);
        } catch (error) {
            console.error("Error creating products:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(400).json({ message: "Method not supported!" });
    }
}
