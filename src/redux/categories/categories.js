//Action
const CHECKSTATUS = "categories/CHECKSTATUS";
const categories = [];

//Reducer
export default function reducerCategories (state= categories, action= {}){
 switch(action.type){
  case CHECKSTATUS:
   return "Under Construction"

   default:
    return state;
  }

}

//Action Creation
export default function checkStatus(){
 return {type:CHECKSTATUS}
}