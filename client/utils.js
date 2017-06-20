import moment from 'moment'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

module.exports = { convertDate }
