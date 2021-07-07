import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

const reqRep = (req: NextApiRequest, res: NextApiResponse) => {
    
    console.log('API', services )
    
    res.status(200).json({services}) 

}
export default reqRep;