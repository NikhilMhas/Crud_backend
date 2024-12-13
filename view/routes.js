import express from "express";
import { addEmp, getAllEmp,updateEmp,deleteEmp } from "../controller/userController.js";
const router=express.Router();

router.get("/getAll",getAllEmp);
router.post("/addEmp",addEmp);
router.put("/updateEmp/:empId", updateEmp);
router.delete("/deleteEmp/:empId",deleteEmp);
export default router;