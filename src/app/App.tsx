import {FC} from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './router.tsx';

interface Props {
}

export const App: FC<Props> = () => {

    return (
        <RouterProvider router={router} />
    );
};