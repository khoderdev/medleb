import { store } from '../../app/store'
import { drugsApiSlice } from '../drugs/drugsApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    useEffect(() => {
        store.dispatch(drugsApiSlice.util.prefetch('getDrugs', 'drugsList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch
