import moment from 'moment'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

const calculateTotalEmails = (list) => {

}

module.exports = { convertDate, calculateTotalEmails }
