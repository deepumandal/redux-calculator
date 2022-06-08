import React from 'react'
import { act } from 'react-dom/test-utils'


export const reducer=(state,action) =>{
console.log(state,action)
switch(action.type){
    case "decrement" :{
        state.count--
        // alert(' cant read negative value')
        return {...state}
    }
    case "increment" :{
        state.count++
        return {...state}
    }
    case "Add" :{
        state.count += Number(action.value)       
        return {...state}
    }
    case "Multiply" :{
        state.count *= Number(action.value)       
        return {...state}
    }
    case "Subtract" :{
        state.count -= Number(action.value)       
        return {...state}
    }
    case "Divide" :{
        state.count /= Number(action.value)       
        return {...state}
    }


    default :{
        return {...state}
    }
}


return state
}