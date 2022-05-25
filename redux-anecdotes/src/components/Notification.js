import { useSelector, useDispatch } from 'react-redux'
import { sendof } from '../reducers/notificationReducer'

  
const Notification = (props) => {
  const dispatch = useDispatch()
   dispatch(sendof(props.id))


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = useSelector(state => state.notification)

  return (
    <div style={style}>
      {notification}
      </div>
  )
}

export default Notification