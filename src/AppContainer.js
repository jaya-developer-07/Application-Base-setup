import { connect } from 'react-redux'
import App from './App'
import authSelector from 'modules/Auth/selectors'

const mapStateToProps = state => ({
  token: authSelector.getToken(state),
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
