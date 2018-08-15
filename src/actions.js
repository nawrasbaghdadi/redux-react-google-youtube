import C from './constants'

export const geoChanged = (lat,lng) => 
    ({
      type : C.GEO_CHANGED,
      payload :{lat,lng}
  })  


export const videoLike = (i=0) =>  
    ({
        type:C.VIDEO_LIKE,
        payload:i
    })

export const addError = (message) => 
   ({
      type: C.ADD_ERROR,
      payload: message
   })

export const clearError = index => 
   ({
       type: C.CLEAR_ERROR,
       payload: index
   })   


export const fetchedVideos = (lat , lng) => (dispatch) => {
        
    dispatch({
        type : C.FETCH_VIDEOS
    })

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&location=${lat}%2C${lng}&locationRadius=10mi&chart=mostPopular&type=video&key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(videos => {
            let items =  videos.items.map(function (el) {
                let o = Object.assign({},el);
                o.numberOfLikes = 0;
                return o;
               })
            dispatch({
                type: C.VIDEO_LIST_UPDATE,
                payload: items
            })
          
                dispatch({
                    type: C.DONE_FETCHING
                })
            

        })  
        .catch(error => {
            dispatch(
                addError(error.message)
            )
            dispatch({
                type: C.DONE_FETCHING
            })
           

        })
      
}