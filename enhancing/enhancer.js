module.exports = { succeed,fail,repair,get };

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
       return {...item, durability: item.durability - 5 };

    case (item.enhancement > 16):
      return {...item, enhancement: item.enhancement - 1 };

    case (item.enhancement >= 15):
      return {...item, durability: item.durability - 10 };

    default:
      return item;
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  switch (true) {
    case (item.enhancement > 0):
      return { ...item, name: `[+${item.enhancement}]${item.name}`, durability: 100};
    case (item.enhancement < 1):
      return { ...item, durability: 100};
    default:
      return item;
  }
}