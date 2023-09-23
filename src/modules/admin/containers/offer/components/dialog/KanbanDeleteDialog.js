/* eslint-close no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { changeCandidateStageUIHelper } from "../../../../UIHelpers"
import { useOffersUIContext } from "../../context/OffersUIContext"
import { deleteKanban, fetchKanbanCandidates } from "../../store/actions"
import _ from "lodash"

const KanbanDeleteDialog = ({ params, show, onHide, id }) => {
    // Offers UI Context
    const offersUIProps = useOffersUIContext()

    // Offers Redux state
    const dispatch = useDispatch()
    const { isLoading, success } = useSelector(
        (state) => ({ isLoading: state.admin.offer.isLoading, success: state.admin.offer.success }),
        shallowEqual
    )

    const onDeleteKanaban = () => {
        // server request for deleting smsSkeleton by id
        console.log(id)
        if (!_.isNull(id)) {
            dispatch(deleteKanban(id))
        }
        //dispatch(fetchKanbanCandidates(params))
    }

    const onRefresh = () => {
        //dispatch(fetchOffers(offersUIProps.queryParams))
    }

    return (
        <ActionModal
            show={show}
            onHide={onHide}
            onRefresh={onRefresh}
            onClick={onDeleteKanaban}
            isLoading={isLoading}
            success={success.isClosed}
            title={<FormattedMessage id="OFFER.KANBAN.DELETE" />}
            body={<FormattedMessage id="OFFER.KANBAN.DELETE.MSG" />}
        />
    )
}


export default KanbanDeleteDialog
