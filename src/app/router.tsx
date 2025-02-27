import {createBrowserRouter, Navigate} from 'react-router-dom';
import {Layout} from './Layout.tsx';
import {APP_URL, DASHBOARD_URL, FINALIZE_URL, RESULTS_URL} from '../shared/config/route.config.ts';
import {Dashboard} from '../pages/Dashboard/Dashboard.tsx';
import {Results} from '../pages/Results/Results.tsx';
import {Finalize} from '../pages/Finalize/Finalize.tsx';

const router = createBrowserRouter([
    {
        path: APP_URL,
        element: <Layout />,
        children: [
            {path: '', element: <Navigate to={DASHBOARD_URL} replace />},
            {path: DASHBOARD_URL, element: <Dashboard />},
            {path: RESULTS_URL, element: <Results />},
            {path: FINALIZE_URL, element: <Finalize />}
        ],
    }
    ])

export default router