import { json } from "express"

const ProductController = {
    index(req, res) {
        res.status(200)
        res.json({msg: "Ez már a kontrollerből futt"})
    },
    store(req, res){
        if(!req.body.name){
            res.status(400)
            res.json({
                success: false,
                msg: "Bad request: Rossz kérés"
            })

        }
        res.status(201)
        res.json({msg: "Üdv: " + req.body.name})
    },
    update(req, res){
        if(!req.params.id || !req.body.name){
            res.status(400)
            res.json({
                success: false,
                msg: "Bad request!"
            })
        }
        res.json({
            success: true,
            msg: "Sikeres"
        })
    },
    delete(req, res){
        if(!req.params.id){ 
            res.status(400)
            res.json({
                success: false,
                msg: "Bad request: Kötelező az ID"
            })
        }

        res.json({
            success: true,
            msg: "Törlés lesz..." + req.params.id,
            valami: 'valami'
        })
    }
}

export default ProductController