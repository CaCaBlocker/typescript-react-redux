
import { useAppDispatch, useAppSelector } from "./hook/hooks";
import { editUser, deleteUser } from './reducer/userReducer';

const UserList = () => {

    const {userlist} = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const onEdit = (index: number) => {
        dispatch(editUser({index}));
    }

    const onDelete = (index: number) => {
        dispatch(deleteUser({index}))
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={() => onEdit(index)}>Edit</button>
                                    <button onClick={() => onDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList;