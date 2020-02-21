import axios from 'axios'
import { takeEvery } from 'redux-saga/effects';


function* deleteSaga() {
    yield takeEvery('DELETE_ENTRY', deleteEntry);
}

function* deleteEntry(action) {
    try {
        console.log('in DELETE_ENTRY saga', action.payload)
      
        yield axios.delete(`/api/entry/${action.payload}`);
        
        // console.log(response.data);
    }
    catch (error) {
        console.log('Error deleting', error)
    }
}

export default deleteSaga