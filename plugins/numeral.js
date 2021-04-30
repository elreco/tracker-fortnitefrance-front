import numeral from 'numeral'

export default (context, inject) => {
  inject('numeral', numeral)
}
