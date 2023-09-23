import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { isEmpty } from "lodash";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { ProtectedContent } from "../../../../../../components/wrappers";
import StorefrontIcon from "@material-ui/icons/Storefront";

import { fetchList } from "./../../store/actions";
import routes from "./../../routes/edit";

const EditList = ({ param }) => {
  const dispatch = useDispatch();

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, list } = useSelector(
    (state) => ({
      refresh: state.admin.list.refresh,
      isFetching: state.admin.list.isFetching,
      list: state.admin.list.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isEmpty(list) || list.id !== param) {
      dispatch(fetchList({ param }));
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(list)]);

  return (
    <>
      {/*<!--begin::Aside-->*/}
      <div className="flex-row-auto">
        {/*<!--begin::Profile Card-->*/}
        <div className="card card-custom card-stretch">
          {/*<!--begin::Body-->*/}
          <div className="card-body">
            {/*<!--end::Contact-->*/}
            <div className="py-5 navi navi-bold navi-hover navi-active navi-link-rounded">
              <ProtectedContent rule={routes.listForm}>
                <div className="navi-item mb-2">
                  <span className="navi-text font-size-lg">
                    <FormattedMessage id="LIST.MENU.EDIT.TITLE" />
                  </span>
                  <br />
                  <br></br>
                  <span>
                    <h1>{list === null ? "" : list["name"]}</h1>
                  </span>
                </div>
              </ProtectedContent>
              {/*<ProtectedContent rule={routes.serviceList}>
                <div className="navi-item mb-2">
                  <NavLink to={routes.serviceList.path.replace(":param", param)} className="navi-link py-4">
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <StoreIcon />
                      </span>
                    </span>
                    <span className="navi-text font-size-lg"><FormattedMessage id="MENU.SERVICES" /></span>
                  </NavLink>
                </div>
          </ProtectedContent>*/}
            </div>
          </div>
          {/*<!--end::Body-->*/}
        </div>
        {/*<!--end::Profile Card-->*/}
      </div>
      {/*<!--end::Aside-->*/}
    </>
  );
};

export default EditList;
