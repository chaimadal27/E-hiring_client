#!/bin/bash
string_dash_regex='(^[a-z]+)(-)([a-z]+$)'
string_regex='^[a-z]+$'
R='\033[0;31m'
G='\033[0;32m'
B='\033[0;34m'
bold=$(tput bold)
mkdir PlaceHolder
type_template_name="${G}${bold}type your template name"
files_to_rename="${G}${bold}type the names of files you want to rename"
new_files="${G}${bold}type the new names of files"
new_name_root_dir="${G}${bold}type the root dir name"
error_exit="${R}${bold} Error: the root dir is a string. It could contain a dash in the middle"
echo -e "${type_template_name}"
read template_name
# THIS MAY NOT WORK
case "$OSTYPE" in
    linux*)  cp -R "${template_name}" PlaceHolder/;;
    darwin*) brew install cp && cp -R "${template_name}" PlaceHolder/;;
    *)       echo "unknown: $OSTYPE"
esac
# cp -R "${template_name}" PlaceHolder/
# renaming files
echo -e "${files_to_rename}"
read _to_rename
echo -e "${new_files}"
read _new_name
find PlaceHolder/ -type f -exec perl-rename 's/'"$(echo $_to_rename)"'/'"$(echo $_new_name)"'/g' {} \;
# renaming root dir
echo -e "${new_name_root_dir}"
read _root_dir
mv PlaceHolder/"${template_name}" PlaceHolder/"${_root_dir}"
# moving root dir to component dir
mv PlaceHolder/"${_root_dir}" .
rmdir PlaceHolder
if [[ "${_root_dir}" =~ $string_regex ]]; then
    # renaming the contecnts of files
    find "${_root_dir}" -type f -exec sed -i 's/'"$(echo $_to_rename)"'/'"$(echo $_new_name)"'/g' {} \;
    find "${_root_dir}" -type f -exec sed -i 's/'"$(echo $template_name)"'/'"$(echo $_root_dir)"'/g' {} \;
elif [[ "${_root_dir}" =~ $string_dash_regex ]]; then
    _new_root_dir="${BASH_REMATCH[1]}${BASH_REMATCH[3]^}"
    # renaming the contecnts of files
    find "${_root_dir}" -type f -exec sed -i 's/'"$(echo $_to_rename)"'/'"$(echo $_new_name)"'/g' {} \;
    find "${_root_dir}" -type f -exec sed -i 's/'"$(echo $template_name)"'/'"$(echo $_new_root_dir)"'/g' {} \;
else
    echo -e "${error_exit}"
    exit 1
fi
