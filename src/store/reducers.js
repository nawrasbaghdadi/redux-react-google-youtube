import C from '../constants';
import { combineReducers } from 'redux'

export const marker = (state=null,action)=>
    (action.type === C.GEO_CHANGED)?
        action.payload :
         state;

  

export const videoList = (state=[],action)=>{
    let likedVidesindexOf = state.findIndex(video => video.id.videoId == action.payload);
    switch(action.type) {
        case C.VIDEO_LIKE :
        return state.map( (item, index) => {
            if(index !== likedVidesindexOf) return item;
            return {...item, numberOfLikes : item.numberOfLikes + 1};
        });
        case C.VIDEO_LIST_UPDATE :
            return [
              ...action.payload
           ]
        default : 
            return state;  
    }
    }


export const fetching = (state =false , action) =>{

    switch(action.type) {
  
      case C.FETCH_VIDEOS :
         return true
  
      case C.DONE_FETCHING :
        return false
  
      default : 
        return state;  
    }
    
  }
    
  export const errors = (state=[], action) => {
    switch(action.type) {
      case C.ADD_ERROR :
          return [
           ...state,
           action.payload
          ]
      case C.CLEAR_ERROR : 
        return state.filter((message, i) => i !== action.payload)
        default: 
            return state
    }
  }  
export default combineReducers({
        marker,
        errors,
        allVideos: combineReducers({
            fetching,
            videoList
          })
    })  