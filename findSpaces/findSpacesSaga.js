import { takeEvery, put } from 'redux-saga/effects';
import httpRequests from '../../helpers/httpRequests';
import * as actions from '../../reducers/map';

export function* loadMap() {
    try {
        httpRequests.getUserLocation().then(response => {
            yield put({ type: actions.mapLoadSuccess.type, response });
        }).catch(
            error=>yield put({ type: actions.mapLoadError.type, error })
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        yield put({ type: actions.mapLoadError.type, response: error });
    }
}

export default function* watchers() {
    yield takeEvery(actions.mapLoad.type, loadMap);
}
