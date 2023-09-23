#!/bin/bash

dash_regex='(^[a-z]+)(-)([a-z]+$)'
str_regex='^[a-z]+$'

con="src/modules/admin/containers/"
uih="src/modules/admin/UIHelpers/"
rou="src/modules/admin/routes/"
i18="src/i18n/I18nProvider.js"
loc="src/locales/"
adm="src/modules/admin/rootReducer.js"

find $con -type d -name "$1"        | xargs -I {} rm -rf {}
find $rou -type d -name "$1"        | xargs -I {} rm -rf {}
find $loc -type f -name "${1}.json" | xargs -I {} rm -rf {}
sed -i '/'"$(echo "${1}")"'/d' $i18

if [[ $1 =~ $dash_regex ]]; then
  find $uih -type d -name "${BASH_REMATCH[1]}${BASH_REMATCH[3]}" | xargs -I {} rm -rf {}
  sed -i '/'"$(echo "${BASH_REMATCH[1]}${BASH_REMATCH[3]^}")"'/d' "${rou}index.js"
  sed -i '/'"$(echo "${BASH_REMATCH[1]}${BASH_REMATCH[3]}")"'/d' "${uih}index.js"
  sed -i '/'"$(echo "${BASH_REMATCH[1]}${BASH_REMATCH[3]^}")"'/d' "${adm}"
elif [[ $1 =~ $str_regex ]]; then
  find $uih -type d -name "${BASH_REMATCH}" | xargs -I {} rm -rf {}
  sed -i '/'"$(echo "${BASH_REMATCH[0]}")"'/d' "${rou}index.js"
  sed -i '/'"$(echo "${BASH_REMATCH[0]}")"'/d' "${uih}index.js"
  sed -i '/'"$(echo "${BASH_REMATCH[0]}")"'/d' "${adm}"
fi
