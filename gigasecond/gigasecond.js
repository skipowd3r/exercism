// Date object gives no. of milliseconds since 1 Jan 1970
// 1 Gigasecond = 1,000,000,000,000 milliseconds
export const gigasecond = (input) => {
  let date = new Date(input)
  let futureDate = date.getTime()+1000000000000
  return new Date(futureDate);
}