import express from 'express'
import { addPlanet ,deletePlanet,searchPlanet ,updatePlanet } from '../controller/planetController.js';

const router = express.Router();

router.post("/add",addPlanet);
router.get("/planets/:name",searchPlanet)
router.put("/planets/:name",updatePlanet)
router.delete("/planets/:name",deletePlanet)


export default router