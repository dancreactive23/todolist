import React from 'react';
import { useEffect } from 'react';

export function useLocalStorage(itemName, initialValue){

    const [item,setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);

    useEffect(()=>{
      setTimeout(() =>{
        try{
          const itemListLocal = localStorage.getItem(itemName);
      
          let parsedItemListLocal;
        
          if(!itemListLocal){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItemListLocal = initialValue;
          }else{
            parsedItemListLocal = JSON.parse(itemListLocal);
            setItem(parsedItemListLocal);
          }
          setLoading(false);
       }catch(error){
          setLoading(false);
          setError(true);
       }
      },2000);
    },[]);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {item,saveItem,loading,error};
  }