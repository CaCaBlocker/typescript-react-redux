import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type User = {
    firstname: string,
    lastname: string,
    phone: string;
}

interface InitialState {
    form: User,
    userlist: User[],
    error: boolean,
    index: number,
}

const initialState: InitialState = {
    form: {
        firstname: '',
        lastname: '',
        phone: '',
    },
    userlist: [],
    error: false,
    index: -1,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state) => {
            return {
                ...state,
                userlist: [...state.userlist, {...state.form}],
                form: {
                    firstname: '',
                    lastname: '',
                    phone: ''
                }
            };
        },
        updateForm: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                form: {
                    ...action.payload
                }
            };
        },
        deleteUser: (state, action: PayloadAction<{index: number}>) => {
            return {
                ...state,
                userlist: [
                    ...state.userlist.slice(0, action.payload.index),
                    ...state.userlist.slice(action.payload.index + 1, state.userlist.length)
                ]
            }
        },
        editUser: (state, action: PayloadAction<{index: number}>) => {
            return {
                ...state,
                index: action.payload.index,
                form: {
                    ...state.userlist[action.payload.index]
                }
            }
        },
        updateUser: (state) => {
            return {
                ...state,
                index: -1,
                userlist: [
                    ...state.userlist.slice(0, state.index),
                    {...state.form},
                    ...state.userlist.slice(state.index + 1, state.userlist.length)
                ],
                form: {
                    firstname: '',
                    lastname: '',
                    phone: ''
                }
            }
        },
        setError: (state, action: PayloadAction<{error: boolean}>) => {
            return {
                ...state,
                error: action.payload.error
            }
        }
    }
})

export const {addUser, editUser, deleteUser, updateUser, updateForm, setError} = userSlice.actions;

export default userSlice.reducer;