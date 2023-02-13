/**
 * This function will format the passed values as arguments into its currency representation
 *
 * @author Aravinda Meewalaarachchi
 * @param number value that needed to convert to currency string.
 * @returns A Intl.NumberFormat object that enables language-sensitive number formatting.
 */

const intlNumberFormatValues: string[] = ['de-DE', 'currency', 'EUR'];

export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat(
  intlNumberFormatValues[0],
  {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  },
);
