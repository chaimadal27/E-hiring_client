import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";

import GlobalContext from "./GlobalContext";
import dayjs from "dayjs"

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload]
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      )

  }
}
