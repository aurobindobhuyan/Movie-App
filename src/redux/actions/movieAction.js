export const addMovie = (n) => {
     return {
          type: "ADD_MOVIE",
          payload: n
     }
}

export const removeMovie=(id)=>{
     return {
          type:"REMOVE_MOVIE",
          payload:id
     }
}