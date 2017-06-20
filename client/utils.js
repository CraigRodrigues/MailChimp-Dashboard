import moment from 'moment'

const convertDate = (time) => {
  return moment(time).format('MMMM DD, YYYY')
}

const calculateTotalEmails = (list) => {
  return list.map(campaign => campaign.emails_sent).reduce((a, b) => a + b)
}

module.exports = { convertDate, calculateTotalEmails }
