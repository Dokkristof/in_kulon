import { Router } from "express";
import ProductController from "./controllers/productController.js";

const router = Router()

router.get('/products', ProductController.index)
router.post('/products', ProductController.store)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)


router.patch('/products', (req, res) => {
    res.send({msg: "termékek PATCH"})
})

router.get('/employees', (req, res) => {
    res.send({msg: " GET employees"})
})

export default router