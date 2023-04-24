import giveResult from "../pseudoServer/GiveResult";

export const searchRequestData = async (search) =>{
  try {
    const response = await giveResult(search);
    return response;
  } catch(e) { throw new Error(e.message) }
  
}
