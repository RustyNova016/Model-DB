import express, { Request, Response } from "express";
import * as ModelFileService from "./modelFile.service";
import {ModelFile, ModelFilePrototype} from "./modelFile.interface";
import {Row} from "mysqlx";
const cors = require('cors');

export const modelFilesRouter = express.Router();

// GET items

modelFilesRouter.get("/", cors(), async (req: Request, res: Response) => {
    try {
        const items: Row[][] = await ModelFileService.findAll();

        res.status(200).send(items);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET items/:id

modelFilesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const item: ModelFile = await ModelFileService.find(id);

        if (item) {
            return res.status(200).send(item);
        }

        res.status(404).send("item not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items

modelFilesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: ModelFilePrototype = req.body;

        const newItem = await ModelFileService.create(item);

        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT items/:id

modelFilesRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: ModelFile = req.body;

        const existingItem: ModelFile = await ModelFileService.find(id);

        if (existingItem) {
            const updatedItem = await ModelFileService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await ModelFileService.create(itemUpdate);

        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE items/:id

modelFilesRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ModelFileService.remove(id);

        res.sendStatus(204);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});