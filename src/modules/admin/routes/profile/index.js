import { lazy } from "react"
import { VIEW, MODULES_PERMISSIONS } from "../../../../constants"

const AccountInformation = lazy(() => import("./../../containers/profile/AccountInformation"))
const UpdateAccount = lazy(() => import("./../../containers/profile/UpdateProfile"))
const MyAppointments = lazy(() => import("./../../containers/profile/MyAppointments"))


const { USER } = MODULES_PERMISSIONS
export const profile = {
  path: "/profile",
  component: AccountInformation,
}

export const myAppointments = {
  path: "/my-appointments",
  component: MyAppointments,
  can: USER.permissions[VIEW]
}

export const updateProfile = {
  path: "/update-profile",
  component: UpdateAccount,
}
