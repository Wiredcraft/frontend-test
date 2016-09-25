import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../app/actions/regions'
import { FETCH_REGION } from '../../app/constants/ActionTypes'
import {FILTER_STATE, FILTER_DISTRICT, FILTER_TOWNSHIP} from '../../app/constants/FilterTypes'
import * as API from '../../app/constants/Api'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  // for success
  it('creates FETCH_REGION with success status', () => {
    nock(API.BASE_URL)
      .get('/region')
      .reply(200, [{name: 'state'}])

    const expectedActions = [
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'PENDING', 
          records: [],
        } 
      },
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'SUCCESS', 
          records: [{name: 'state'}],
          filter: FILTER_STATE
        } 
      }
    ]

    const store = mockStore({ records: [] })

    return store.dispatch(actions.fetchRegions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })


  // for failed
  it('creates FETCH_REGION with error status', () => {
    nock(API.BASE_URL)
      .get('/region')
      .replyWithError({'message': 'an error occured', 'code': 505});

    const expectedActions = [
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'PENDING', 
          records: [],
        } 
      },
      { 
        type: FETCH_REGION, 
        payload: { 
          status: 'FAILED', 
          records: [],
        } 
      }
    ]

    const store = mockStore({ records: [] })

    return store.dispatch(actions.fetchRegions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
