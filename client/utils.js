import moment from 'moment'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

const calculateTotalEmails = (list) => {
  return list.map(campaign => campaign.emails_sent).reduce((a, b) => a + b)
}

// If number is less than one conver to %
// If not then it's already in percentage format
const convertToPercentage = (num) => {
  return num > 1 ? num.toFixed(2) : (num * 100).toFixed(2)
}

module.exports = {
  convertDate,
  calculateTotalEmails,
  convertToPercentage
}
