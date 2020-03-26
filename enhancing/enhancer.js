module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {    
     return {...item,enhancement: item.enhancement + 1 };
  } else {
    return item;
  }
}

function fail(item) {
  let newItem = {};
  switch (true) {    
    case (item.enhancement < 15):   
      newItem = {...item, durability: item.durability - 5 }   
      return newItem;
    case (item.enhancement > 16):
      
      newItem = {...item, enhancement: item.enhancement - 1 }
      return newItem;
    case (item.enhancement >= 15):
      newItem = {...item, durability: item.durability - 10 }
      return newItem;  
    default:
      console.log('********************************************************************************************************************************************************************************',item)
      newItem = {...item};
      return newItem;
  }

  


  // if(item.enhancement < 15){
  //   const newItem = {
  //     ...item,
  //     durability: item.durability - 5,      
  //   };
  //   return newItem;
  // } else if (item.enhancement > 16){
  //   const newItem = {
  //     ...item,
  //     enhancement: item.enhancement - 1
  //   };
  //   return newItem
  // } else if (item.enhancement >= 15){
  //   const newItem = {
  //     ...item,
  //     durability: item.durability - 10,      
  //   };
  //   return newItem
  // } else {
  //   return item
  // }
}




function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  if (item.enhancement > 0){
    const newItem = {
      name: `[+${item.enhancement}]${item.name}`,
      durability: 100,
      enhancement: item.enhancement
    };
    return newItem
  } else if (item.enhancement < 1) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
    }
    return newItem
  } else {
    return item
  }
}