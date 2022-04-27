import { fetchAuthApi, authApiAdapter, authApiReducer } from './auth-api.slice.ts.orig';

describe('authApi reducer', () => {
  it('should handle initial state', () => {
    const expected = authApiAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(authApiReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchAuthApis', () => {
    let state = authApiReducer(undefined, fetchAuthApi.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = authApiReducer(
      state,
      fetchAuthApi.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = authApiReducer(
      state,
      fetchAuthApi.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
