import moment from 'moment'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

const calculateTotalEmails = (list) => {
  return list.map(campaign => campaign.emails_sent).reduce((a, b) => a + b)
}

const convertToPercentage = (num) => {
  return (num * 100).toFixed(1)
}

module.exports = {
  convertDate,
  calculateTotalEmails,
  convertToPercentage
}
