import moment from 'moment'

export default (time) => {
  return moment(time).format('MMMM DD, YYYY')
}
