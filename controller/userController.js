    import { userModel } from "../postgres/postgres.js";

    export const getAllEmp = async (req, res) => {
        try {
            const users = await userModel.findAll();
            if (users.length === 0) {
                return res.status(200).json({ "error": "No users found" });
            }
            return res.status(200).json(users); // Send the users if found
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    };
    
    export const addEmp = async (req, res) => {
        const { name, email, designation, empId } = req.body;
        try {
            // Check if the employee already exists by empId
            const emp = await userModel.findOne({ where: { empId: empId } });
    
            if (emp) {
                return res.status(400).json({ message: "Employee already exists" });
            }
    
            // If no existing employee, create the new user
            await userModel.create(req.body);
            return res.status(201).json({ message: "Employee added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    export const updateEmp=async(req,res)=>{
        let empId=req.params.empId;
        try{
       const emp=await userModel.update(req.body , // New values
              { where: { empId } }  )
              if(emp[0]==0){
                return res.status(302).json({message:"not found"}) 
              }
              console.log(empId);
     return res.status(202).json({message:"updated successfully"}) 
        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
    }
    
    export const deleteEmp=async(req,res)=>{
        let empId=req.params.empId;
        try {
            const emp=await userModel.findOne({where:{empId}});
            if(emp===null){
                return res.status(404).json({message:"empolyee not found"}) 
              }
              await emp.destroy();
        return res.status(202).json({message:"Deleted successfully"}) 
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }