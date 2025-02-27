import {FC} from 'react';
import {Outlet} from 'react-router-dom';

interface Props {
}

export const Layout: FC<Props> = () => {

    return (
        <>
            <header>Header</header>
            <Outlet />
        </>
    );
};