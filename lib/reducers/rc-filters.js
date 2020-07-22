import {createSlice} from '@reduxjs/toolkit';

export const rcFilterSlice = createSlice({
    name: 'rcFilter',
    initialState: {
        rcName: '',
        devName: '',
        address: '',
        active: 'all'
    },
    reducers: {
        setFilters: (action, payload) => {
            state.rcName = payload.rcName;
            state.devName = payload.devName;
            state.address = payload.address;
            state.active = payload.active;
        }
    }
})

export const {setFilters} = rcFilterSlice.actions;
export default rcFilterSlice.reducer;