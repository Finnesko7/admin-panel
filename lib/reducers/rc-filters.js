import {createSlice} from '@reduxjs/toolkit';

const rcFilterSlice = createSlice({
    name: 'rcFilter',
    initialState: {
        rcName: '',
        devName: '',
        address: '',
        active: 'all'
    },
    reducers: {
        setFilters: (state, action) => {
            console.log("Payload => ", action.payload)
            state.rcName = action.payload.rcName;
            state.devName = action.payload.devName;
            state.address = action.payload.address;
            state.active = action.payload.active;
        }
    }
})

export const {setFilters} = rcFilterSlice.actions

export default rcFilterSlice.reducer