import numeral from 'numeral'
import "numeral/locales/fr";
numeral.locale('fr')
export default (context, inject) => {
  inject('numeral', numeral)
}
