import { Router } from "express";
const router = Router()

router.get('/products', (req, res) => {
    res.send({msg: "termékek GET"})
})
router.post('/products', (req, res) => {
    res.send({msg: "termékek POST"})
})
router.put('/products', (req, res) => {
    res.send({msg: "termékek PUT"})
})
router.patch('/products', (req, res) => {
    res.send({msg: "termékek PATCH"})
})
router.delete('/products', (req, res) => {
    res.send({msg: "termékek DELETE"})
})

router.get('/employees', (req, res) => {
    res.send({msg: " GET employees"})
})

export default router