import React, { useMemo, useState } from "react"
import { isArray, isString, isEmpty, isFunction, isInteger } from "lodash"
import { FormattedMessage } from "react-intl"
import ContentLoader from "react-content-loader"
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DisplayItem from "../DisplayItem"
import { Col } from "react-bootstrap"
import { getAttr } from "../../../../../helpers"


const ItemLodaer = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={10}
    viewBox="0 0 100% 10"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="10" />
  </ContentLoader>
)

const Item = ({ field, object }) => {

  const [fetchedOptions, setFetchedOptions] = useState([])
  const { name, hide, hideOn, condition, options, label, html = false, icon = undefined, size = 12, loadOptions } = field

  const show = useMemo(() => {
    let hideField = hide
    if (isString(hideOn) && hideField) {
      const value = getAttr(object, hideOn, null)
      hideField = isArray(condition) ? !condition.includes(value) : condition !== value
    }
    return hideField
    // eslint-disable-next-line
  }, [object])


  const value = useMemo(() => {
    const attrValue = getAttr(object, name, <FormattedMessage id="GENERAL.EMPTY" />)
    global.attrValue = attrValue
    if (isArray(options)) {
      const selectedOption = options.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || <FormattedMessage id="GENERAL.EMPTY" />
    }
    if (isFunction(loadOptions)) {
      loadOptions(setFetchedOptions)
    }
    if (!isEmpty(fetchedOptions) && isArray(attrValue)) {
      let labels = []
      attrValue.map((val) => {
        const selectedOption = fetchedOptions.find((option) => option.value === val);
        if (selectedOption) { labels.push(selectedOption.label) }
      })
      return labels.map((val) =>
        <span
          className={`label label-xl label-light-primary label-inline mr-2`}
        >
          {val || <FormattedMessage id="GENERAL.EMPTY" />}
        </span>
      )
    }
    if (!isEmpty(fetchedOptions)) {
      const selectedOption = fetchedOptions.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || <FormattedMessage id="GENERAL.EMPTY" />
    }
    if (field.name == "rating") {
      return (
        <Rating
          name="customized-empty"
          defaultValue={0}
          value={attrValue}
          precision={0.5}
          disabled={true}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          size="large"
        />
      )
    }
    else if (isArray(attrValue)) {
      return attrValue.map((val, index) =>
        <span
          key={index}
          className={`label label-xl label-light-primary label-inline mr-2`}
        >
          {val}
        </span>
      )
      //return attrValue.join(', ')
    }

    return attrValue
    // eslint-disable-next-line
  }, [object, global])

  return (
    <Col lg={size} className={show ? 'd-none' : ''}>
      <DisplayItem
        primary={label}
        html={html}
        icon={icon}
        secondary={!isEmpty(object) ? value : <ItemLodaer />}
      />
    </Col>
  )
}


export default Item
