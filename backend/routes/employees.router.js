import Router from "express";
import { createEmployee, DeleteEmployee, GetEmployee, GetEmployees, UpdateEmployee} from "../controllers/employees.controller.js";

const router = Router();

router.post("/employee", createEmployee );
router.put("/employee/:employeeId", UpdateEmployee );
router.delete("/employee/:employeeId", DeleteEmployee );

router.get("/employees", GetEmployees );
router.get("/employee/:employeeId", GetEmployee );



export default router;