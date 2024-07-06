import Product from "../../models/Product.js";

export default async function handler(req, res) {
    const { _id, ...updateData } = req.body; 

    if (req.method === 'POST') {
        try {
           
            const updatedProduct = await Product.findByIdAndUpdate(_id, updateData, { new: true });

            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({ product: updatedProduct });
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.status(400).json({ message: "Method not supported!" });
    }
}
