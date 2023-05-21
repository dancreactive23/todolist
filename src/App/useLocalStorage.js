import React from 'react';

export function useLocalStorage(itemName, initialValue){

    const itemListLocal = localStorage.getItem(itemName);
  
    let parsedItemListLocal;
  
    if(!itemListLocal){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItemListLocal = initialValue;
    }else{
      parsedItemListLocal = JSON.parse(itemListLocal);
    }
  
    const [item,setItem] = React.useState(parsedItemListLocal);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item,saveItem];
  }