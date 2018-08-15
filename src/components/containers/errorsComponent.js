import ErrorsComponent from '../ui/errorsComponent'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClearError(index) {
			dispatch(
				clearError(index)
			)
		}
	}
}

const Container = connect(mapStateToProps,mapDispatchToProps)(ErrorsComponent)
export default Container;
