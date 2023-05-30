import { Request, Response } from "express"
import { coffeCreate } from "../model/coffeModal"
import { ObjectId } from "mongodb"

class CoffeController {
    public async allItems(req: Request, res: Response): Promise<Response> {
        const allItems = await coffeCreate.find()
        return res.status(200 || 400).json(allItems)
    }
    public async createItem(req: Request, res: Response): Promise<Response> {
        try {
            const { contents, tags, name, description, photo, price } = req.body
            const newItem = await coffeCreate.create({ contents, tags, name, description, photo, price })
            return res.status(200).json(newItem) || res.status(404).json({ msg: "data not found" })
        } catch (e) {
            console.log(e)
            return res.status(400).json({ error: "dados nao inseridos" })
        }
    }
    public async updateItem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const updateDatas = req.body
        try {
            const editData = await coffeCreate.findByIdAndUpdate(id, { $set: updateDatas }, { new: true })
            return res.status(200).json(editData) || res.status(404).json({ error: 'Documento não encontrado.' })
        } catch (err) {
            console.log(err)
            return res.status(400).json({ error: "dados nao inseridos" })
        }

    }
}

export default new CoffeController