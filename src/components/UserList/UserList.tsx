import React, {useEffect} from 'react';
import './UserList.scss';
import {Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {customUseSelector} from "../../hooks/customUseSelector";
import {fetchUsers} from "../../store/action-creators/user";
import Loader from "../Loader/Loader";
import {useActions} from "../../hooks/useActions";

interface UserListProps {}

const UserList: React.FC = (props: UserListProps) => {
    const {users, loading, error} = customUseSelector(state => state.user)
    // const dispatch = useDispatch();
    const {fetchUsers} = useActions();

    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers();
    },[]);

    function updateButtonClick() {
        // dispatch(fetchUsers())
        fetchUsers();
    }

    return (
        <Container className={`UserList`}>
            <h1>UserList</h1>

            <Button
                variant={"success"}
                className={`UserList__button mb-2`}
                onClick={() => updateButtonClick()}
            >
                Обновить
            </Button>

            {!!loading && <Loader />}

            {!!error && (<h1 style={{color: "red"}}>{error}</h1>)}

            {!!users.length && users.map(user => (
                <div className={`UserList__userCard`} key={user.id}>{user.name}</div>
            ))}
        </Container>
    )
}

export default UserList