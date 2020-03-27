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
  switch (true) {    
    case (item.enhancement < 15):   
       return {...item, durability: item.durability - 5 }

    case (item.enhancement > 16):
      return {...item, enhancement: item.enhancement - 1 }

    case (item.enhancement >= 15):
      return {...item, durability: item.durability - 10 }

    default:
      return item;
  }
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
// }




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