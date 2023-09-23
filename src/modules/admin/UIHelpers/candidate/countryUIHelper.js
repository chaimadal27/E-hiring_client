

import countryList from 'react-select-country-list'



export const countryUIHelper = (intl) =>
    countryList().getData().map((country) => ({
        value: country.value,
        label: country.label,
    }))
