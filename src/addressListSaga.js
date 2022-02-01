import { takeEvery, call, put } from "redux-saga/effects";
import  { getAddresses } from "./api";

import { getAddressList, ADDRESS_LIST } from "./actions";

export function* getAddressListSaga(action) {
    const addresses = yield call(getAddresses);
    console.log(addresses);
    yield put(getAddressList(addresses));

}

export function* addressListSaga() {
    yield takeEvery(ADDRESS_LIST, getAddressListSaga);
}