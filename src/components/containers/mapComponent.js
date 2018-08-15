import SimpleMap from '../ui/mapComponent'
import { geoChanged , fetchedVideos} from'../../actions'
import { connect } from 'react-redux'



const mapStateToProps = (state) => { 
    return {
        "lat":state.marker.lat,
        "lng":state.marker.lng
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGeoChanged(marker){
            dispatch(
                geoChanged(marker.lat , marker.lng)
            ),
            dispatch(
                fetchedVideos(marker.lat , marker.lng)
            )
        }
    }
}
const Container = connect(mapStateToProps,mapDispatchToProps)(SimpleMap)
export default Container;

	