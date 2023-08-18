import moment from "moment"

export function getFormattedDate(date) {
  return moment(date).format("MM/DD/YYYY h:mm A")
}
