function isTouching(movingRect,fixedRect,rect3){
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
      fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
      movingRect.x-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
      fixedRect.x-movingRect.y<fixedRect.height/2+movingRect.height/2){
        return true; 
      }
  
      else{return false};
  
  }
