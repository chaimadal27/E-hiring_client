import React, {useMemo, useState} from "react"
import _ from "lodash"
import { Page, Text, View, StyleSheet, Document } from "@react-pdf/renderer";
import {getAttr} from "../../../../helpers";
import {isRLTLang} from "../../../../i18n";
import {NESTED_LIST_OF_ITEMS, TABLE_OF_ITEMS} from "../display/item-types/item-types";
import baseStyles, {fontList} from "./styleSheet"

let count = 0

const PdfDocument = ({ fields = [], object, title, intl }) => {

  const [size, setSize] = useState("A4")
  const styles = StyleSheet.create({ ...baseStyles, page: { fontFamily: fontList[count] } })
  count = count === (fontList.length - 1) ? 0 : count+1
  console.log(fontList[count])

  const getFieldData = (object, field) => {
    const { options, name, formatter, component, columns } = field
    const attrValue = getAttr(object, name, intl.formatMessage({ id: "GENERAL.EMPTY" }))
    if (component === NESTED_LIST_OF_ITEMS){
      const nestedList = formatter(attrValue)
      setSize("A2")
      return {
        header: columns.map((col) => col.text),
        body: Object.keys(nestedList).map((key) => ([
          ( key || intl.formatMessage({ id: "GENERAL.EMPTY" }) ),
          ( nestedList[key] || []).map((value) => ( value || intl.formatMessage({ id: "GENERAL.EMPTY" }) )).join(", ")
        ]))
      }
    }
    if (component === TABLE_OF_ITEMS) {
      setSize("A2")
      let body = []
      for (let i=0;i<attrValue.length;i++){
        body.push(columns.map((col) => getAttr(attrValue[i], col.dataField, intl.formatMessage({ id: "GENERAL.EMPTY" }))))
      }
      return {
        header: columns.map((col) => col.text),
        body
      }
    }
    if (_.isArray(options)) {
      const selectedOption = options.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || intl.formatMessage({ id: "GENERAL.EMPTY" })
    }
    return attrValue
  }

  const documentFields = useMemo(() => {
    const documentFields = {}
    fields.forEach((field) => {
      const fieldName = _.isString(field.name) && field.name.replace("Fr", "").replace("Ar", "")
      const fieldValue = getFieldData(object, field)
      const label = isRLTLang() ? field.label.replace(")", "(").replace("(", ")") : field.label

      documentFields[fieldName] = !_.isString(fieldValue) ? { ...fieldValue, label } : [label, fieldValue, ...(documentFields[fieldName] || [])]
      documentFields[fieldName] = (isRLTLang() && _.isString(fieldValue))
        ? documentFields[fieldName].reverse()
        : documentFields[fieldName]
      documentFields[fieldName] = (isRLTLang() && !_.isString(fieldValue))
        ?  ({ ...documentFields[fieldName], body: documentFields[fieldName].body.map((col) => col.reverse()), header: documentFields[fieldName].header.reverse() })
        : documentFields[fieldName]
    })
    return Object.values(documentFields)

    // eslint-disable-next-line
  }, [])

  return (
    <Document onRender={() =>  false}>
      <Page style={styles.page} size={size} wrap>
        <View style={[ styles.body, styles.table]}>
          <View style={[styles.row]}>
            <Text style={[styles.cell, styles.title]}>{ title }</Text>
          </View>
        </View>
        <View style={[ styles.body, styles.table]}>
          { documentFields.map((row) => {
            if (_.isPlainObject(row)){
              return (
                <>
                  <View style={[styles.row]}>
                    <Text style={[styles.cell]}> { row.label } </Text>
                  </View>
                  <View style={[styles.row]}>
                    { row.header.map((header) => (<Text style={[styles.cell]}> { header } </Text>)) }
                  </View>
                  { !_.isEmpty(row.body) ? row.body.map((body) => (
                    <View style={[styles.row]}>
                      { body.map ( (column) => (<Text style={[styles.cell]}> { column } </Text>)) }
                    </View>
                  )) : <></> }
                </>
              )
            }else if (_.isArray(row)) {
              return (<View style={[styles.row]}>
                { row.map((value) => (<Text style={[styles.cell]}> { value } </Text>)) }
              </View>)
            }
            return <></>
          } )}
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  )
}


export default React.memo(PdfDocument)
