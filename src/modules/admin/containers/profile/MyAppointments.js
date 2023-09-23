import React, { useEffect, useState } from "react"
import _ from "lodash"
import moment from "moment"
import { FormattedMessage, injectIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import { Button, Col, Row, Card as CardB } from "react-bootstrap"
import { toAbsoluteUrl } from "../../../../helpers"
import SVG from "react-inlinesvg"
import { Card, CardBody, CardHeaderTitle, CardHeader, ModalProgressBar, Chips, CalendarView } from "../../../../components/partials/controls"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { appointmentTypeUIHelper, APPOINTMENT_TYPE } from "./../../UIHelpers"
import { fetchMyAppointments, clearError, fetchMyRecentAppointments } from "./store/actions"
import dialogRoutes from "../../routes/profile";
import OfferAppoinmentSpontaneousDialog from "../offer/components/dialog/appointment/OfferAppoinmentSpontaneousDialog";
import OfferAppoitmentShowDialog from "../offer/components/dialog/appointment/OfferAppointmentShowDialog";
const Appointment = ({params, history, intl }) => {

    const suhbeader = useSubheader()

    const dispatch = useDispatch()
    const { isLoading, appointments, recentAppointments,isFetching, error } = useSelector((state) => ({
        appointments: state.admin.profile.appointments/* getFilteredAppointments(state) */,
        recentAppointments: state.admin.profile.recentAppointments,
        isLoading: state.admin.profile.isLoading,
        isFetching: state.admin.profile.isFetching,
        error: state.admin.profile.error,
    }), _.isEqual)
    const [filtredElements, setFiltredElements] = useState([])
    const [recentAppts, setrecentAppts] = useState(recentAppointments);

    //const eventNature = eventNatureUIHelper(intl)

    useEffect(() => {
        suhbeader.setTitle(<FormattedMessage id="FOLDER.APPOINTMENT.TITLE" />)
        dispatch(fetchMyRecentAppointments())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        setrecentAppts(recentAppointments)
    }, [recentAppointments]);


    const fetchEvents = (date) => {
        dispatch(fetchMyAppointments(date))
    }
    console.log(recentAppts)
    const loadEvents = (successCallback, failureCallback) => {
        if (!_.isEmpty(appointments)) {
            successCallback(appointments.map((appointment) => ({
                appointment: appointment.id,
                subject: appointment.subject,
             //   offer: appointment.offerDetails.title,
                isExpired: moment().isSameOrBefore(moment(`${appointment.date} ${appointment.endHour}`, "DD/MM/YYYY HH:mm:ss").toDate()),
                eventColor: "green",
                backgroundColor: "green",
                title: intl.formatMessage({ id: (APPOINTMENT_TYPE[appointment.type] || "GENERAL.EMPTY") }),
                start: moment(`${appointment.date} ${appointment.startHour}`, "DD/MM/YYYY HH:mm:ss").toDate(),
                end: moment(`${appointment.date} ${appointment.endHour}`, "DD/MM/YYYY HH:mm:ss").toDate()
            })))
        }

        if (!isFetching && !_.isEmpty(error)) {
            failureCallback(false)
        }
    }

    const onHide = () => {
        history.push(routes.myAppointments.path)
    }

    const renderRoute = ({ component, history, match }) => {
        const Component = component
        const params = (match && match.params) ? { ...match.params } : {}

        return <Component
            params={params}
            show={match !== null}
            history={history}
            onHide={onHide}
        />
    }
    const [showAppointmentModal, setShowAppointmentModal] = useState(false)
    const [showAppointmenteventModal, setShowAppointmenteventModal] = useState(false)

  //    const openEditAppointmentDialog = ({ event }) => {
  //     const { extendedProps: { appointment } } = event._def
  //     history.push(appointmentDialogs.showAppointmentDialog.path.replace(":param", appointment))
  // }

  //   const openCreateAppointmentDialog = ({ event }) => {
  //     history.push(routes.OfferAppointmentDialog.path)
  // }
    //CreateAppointmentDialog: routes.OfferAppointmentDialog




    return (
        <Row>
            {/* { Object.keys(appointmentDialogs).map(key => (*/}
            {/*    <ProtectedDialogRoute key={key} path={appointmentDialogs[key].path}>*/}
            {/*        {({ history, match }) => renderRoute({ component: appointmentDialogs[key].component, history, match })}*/}
            {/*    </ProtectedDialogRoute>*/}
            {/*))}*/}
            <Col lg="2">
            {/*    <AppointmentSearchCard/>*/}
                {/*<Card>*/}
                {/*    <CardHeader>*/}
                {/*        {(isLoading || isFetching) && <ModalProgressBar />}*/}
                {/*        <div className="card-title">*/}
                {/*            <CardHeaderTitle>*/}
                {/*                <FormattedMessage id="FOLDER.APPOINTMENTS.FILTER" />*/}
                {/*            </CardHeaderTitle>*/}
                {/*        </div>*/}
                {/*    </CardHeader>*/}
                {/*    <CardBody>*/}
                {/*        <div className="d-flex flex-column">*/}
                {/*            {!_.isEmpty(recentAppts) && recentAppts.map((element, index) => {*/}
                {/*                return (<div key={element.id} index={index}>*/}
                {/*                    <CardB border="secondary" className="mb-3" style={{ padding: 8, backgroundColor: "#f0f7ff" }}>*/}
                {/*                        <div className="w-100 d-flex justify-content-between align-items-center gap-5" >*/}
                {/*                            <div >*/}
                {/*                                <h5>{element.subject || "----"}</h5>*/}
                {/*                                <div>{element.date} - {element.startHour}</div>*/}
                {/*                            </div>*/}
                {/*                            {element.isDone ?*/}
                {/*                                <span className="svg-icon svg-icon-lg svg-icon-success">*/}
                {/*                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Done-circle.svg")} />*/}
                {/*                                </span> :*/}
                {/*                                <span className="svg-icon svg-icon-lg svg-icon-danger">*/}
                {/*                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")} />*/}
                {/*                                </span>*/}
                {/*                            }*/}
                {/*                        </div>*/}
                {/*                    </CardB>*/}
                {/*                </div>)*/}

                {/*            })*/}
                {/*            }*/}

                {/*        </div>*/}
                {/*    </CardBody>*/}
                {/*</Card>*/}
            </Col>
            <Col lg="9">
                <CalendarView
                    isLoading={isLoading || isFetching}
                    toolBar={
                        <Button
                            type="button"
                            className="btn btn-sm btn-primary mx-2"
                            onClick={() => setShowAppointmentModal(true)}
                        >
                                Ajouter une Tâche
                        </Button>


                    }
                    error={error}
                    onClose={clearError}
                    title={<FormattedMessage id="USER.APPOINTMENTS.TITLE" />}
                    fetchEvents={fetchEvents}
                    loadEvents={loadEvents}
                    eventClick={() => setShowAppointmenteventModal(true)}
                />

            </Col>
            <Col lg="1"></Col>
            <OfferAppoinmentSpontaneousDialog show={showAppointmentModal} onHide={()=>setShowAppointmentModal(false)}></OfferAppoinmentSpontaneousDialog>
            <OfferAppoitmentShowDialog show={showAppointmenteventModal} onHide={()=>setShowAppointmenteventModal(false)}></OfferAppoitmentShowDialog>
        </Row>
    )

}

export default injectIntl(Appointment)
