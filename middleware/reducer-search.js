import { createSlice } from '@reduxjs/toolkit';

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

export const initialState = {
    searchForm: {
        where: '',
        when: '',
        what: '',
    },
    searchData: {
        loading: false,
        data: null,
        error: null,
    },
};

const createdSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchSubmit(state, { payload }) {
            return {
                ...state,
                searchForm: { ...state.searchForm, loading: true },
            };
        },
        searchSubmitSuccuss(state, { response }) {
            return {
                ...state,
                searchForm: {
                    ...state.searchForm,
                    loading: false,
                    data: response.data,
                    error: null,
                },
            };
        },
        searchSubmitError(state, { response }) {
            return {
                ...state,
                searchForm: {
                    ...state.searchForm,
                    loading: false,
                    data: initialState.searchForm.data,
                    error: response ? iff(response.data, response.data.message, response.data) : null,
                },
            };
        },
    },
});

const { actions, reducer } = createdSlice;

export const { searchSubmit, searchSubmitSuccuss, searchSubmitError } = actions;

export default reducer;
