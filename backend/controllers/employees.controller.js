import { Employee, } from "../models/employees.model.js";


export async function createEmployee(req,res){
    try {
        const {name, email, department, salary} = req.body;

    
   
        const existingEmployee = await Employee.findOne({email})
        if(existingEmployee){
            return res.status(409).json({message: "Employee already exist"})
        }

        if(salary<0){
            return res.status(400).json({message:"Salary must be greater than zero"})
        }


       const employee = new Employee({name,email,department, salary})
       await employee.save()

    


      return res.status(201).json({success:true,message: "Employee created Successfully", employee})



    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
}


export async function UpdateEmployee(req,res){
    try {
        const employeeId = req.params.employeeId;
        const {name, email, department, salary} = req.body;

         const existingEmployee = await Employee.findOne({email})
        if(!existingEmployee){
            return res.status(400).json({message: "Employee not exist"})
        }

         if(salary<0){
            return res.status(400).json({message:"Salary must be greater than zero"})
        }

         

       const employee = await Employee.findByIdAndUpdate(employeeId, {name, email, department, salary})

       
      return res.status(200).json({success:true,message: "Employee updated Successfully", employee})

     

        


    } catch (error) {
          res.status(400).json({ message: error.message });
        
    }
}



export async function GetEmployee(req,res){
    try {
        const employeeId = req.params.employeeId;
         console.log("employeeId", employeeId)

         const existingEmployee = await Employee.findById(employeeId)
         console.log("existingEmployee", existingEmployee)
        if(!existingEmployee){
            return res.status(400).json({message: "Employee not exist"})
        }

       
         

       const employee = await Employee.findById(employeeId)

       
      return res.status(200).json({success:true,message: "Employee fetched Successfully", employee})

     

        


    } catch (error) {
          res.status(400).json({ message: error.message });
        
    }
}





export async function DeleteEmployee(req,res){
    try {
        const employeeId = req.params.employeeId;
        
         const existingEmployee = await Employee.findOne({email})
        if(!existingEmployee){
            return res.status(400).json({message: "Employee not exist"})
        }

        
         

       await Employee.findByIdAndDelete(employeeId);

       
      return res.status(200).json({success:true,message: "Employee deleted Successfully"})

     

        


    } catch (error) {
          res.status(400).json({ message: error.message });
        
    }
}




export async function GetEmployees(req,res){
    try {
      
        

     

   const { search } = req.query;
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};
  const employees = await Employee.find(query).select('-password').sort({ _id: -1 });
  

      
       
    return res.status(200).json({success:true,message: "Employee fetched Successfully", employeesData: employees})

     

        


    } catch (error) {
          res.status(400).json({ message: error.message });
        
    }
}




export async function ListEmployees(req,res){
    try {
        
    } catch (error) {
         res.status(400).json({ message: error.message });
        
    }
}