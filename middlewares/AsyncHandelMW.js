

function asyncHandler(routeHandler) {
    return async (req,res,nxt)=>{
    try {
      await routeHandler(req,res) 
            
    } catch (error) {
      nxt(error);      
    }

  }
  
}

module.exports = asyncHandler;