import { takeEvery, put, call } from 'redux-saga/effects';
import searchService from '../../../services/search';

import * as searchActions from '../../reducers/search';

export function* search({ payload }) {
    try {
        const response = yield call(searchService.searchSubmit, payload);
        if (response) {
            yield put({ type: searchActions.searchSubmitSuccuss.type, response });
        } else {
            yield put({ type: searchActions.searchSubmitError.type, response });
        }
    } catch (error) {
        yield put({ type: searchActions.searchSubmitError.type, response: error.response });
    }
}

export default function* watchers() {
    yield takeEvery(searchActions.searchSubmit.type, search);
}
