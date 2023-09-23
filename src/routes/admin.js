import { lazy } from "react"

const GULayout = lazy(() =>  import("./../modules/admin/layout/Layout"))

export const admin = {
  path: "/gu",
  component: GULayout
}
