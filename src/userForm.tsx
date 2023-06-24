
import { useAppDispatch, useAppSelector } from "./hook/hooks";

import { addUser, updateUser, updateForm, setError } from "./reducer/userReducer";

const UserForm = () => {

    const {error, index, form: {firstname, lastname, phone}} = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (index !== -1) {
            dispatch(updateUser());
        }
        else {
            if (!firstname.length || !lastname.length || !phone.length || !/^[1-9][0-9]{9}$/.test(phone)) {
                dispatch(setError({error: true}));
            }
            else {
                dispatch(setError({error: false}));
                dispatch(addUser());
            }
        }
    }

    const onCancel = () => {
        dispatch(updateForm({firstname: '', lastname: '', phone: ''}));
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input 
                    name="firstname" 
                    onChange={(e) => {
                        dispatch(updateForm({firstname: e.target.value, lastname, phone}));
                    }}
                    value={firstname}
                />
                <input
                    name="lastname"
                    onChange={(e) => {
                        dispatch(updateForm({firstname, lastname: e.target.value, phone}));
                    }}
                    value={lastname}
                />
                <input
                    name="phone"
                    onChange={(e) => {
                        dispatch(updateForm({firstname, lastname, phone: e.target.value}));
                    }}
                    value={phone}
                />
                {
                    error && <span style={{color: 'red'}}>Invalid Inputs</span>
                }
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add/Edit User</button>
            </form>
        </div>
    )
}

export default UserForm;