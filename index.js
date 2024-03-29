function openDoor(key, code) {
    if (key && code > 100) {
        console.log("Двері магічно відчиняються!");
    } else if (!key || code <= 100) {
        console.log("Двері залишаються закритими міцно.");
    } else {
        console.log("Хм... Нічого не відбувається.");
    }
  
    switch (code) {
        case 42:
            console.log("Відповідь на все! Двері розкриваються широко.");
        break;
        case 7:
            console.log("Щасливий номер 7! Двері скрипляться відчиняються.");
        break;
        case 13:
            console.log("Нещасливе число 13! Двері захлопуються.");
        break;
        default:
            console.log("Хм... Нічого не відбувається з цим кодом.");
    }
  }
  
  
  openDoor(true, 105);   
  openDoor(false, 50);  
  openDoor(true, 42);    
  openDoor(false, 7);   
  openDoor(true, 13);    
  openDoor(false, 200); 
  