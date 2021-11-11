import { FIND_POSITION,INCRMENT_POSITION,DELETE_POSITION,UPDATE_POSITION } from "../../constant/StroeContant";

const position = {

  incrmentPosition : [],
  deletePosition : [],
  updatePosition : []

}

export default function PositionReducer(prevValue = position,action) {

  const {type,data} = action
  switch (type) {
    case FIND_POSITION:
      position.incrmentPosition = data
      return position
    case DELETE_POSITION : 
    if (data.length > 0) {
      for(let j = 0;j<position.incrmentPosition.length;j++){
          for(let i = 0; i< data.length ;i++){
          if (data[i].id != undefined && data[i].id == position.incrmentPosition[j].id) {
            position.incrmentPosition.splice(j,1)
            position.deletePosition.push(data)
          }else if(data[i].id === undefined){
            position.incrmentPosition.splice(j,1)
          }
        }
      }
    }
    return position
    case INCRMENT_POSITION :
    if (data.id != undefined) {
      const positionArr = position.incrmentPosition.filter(positions => {
        return positions.id != data.id
      })
      position.incrmentPosition = positionArr
      position.incrmentPosition.push(data)
      position.updatePosition.push(data)
    }else {
      position.incrmentPosition.push(data)
    }
    return position;


    default:
      return prevValue;
  }

}