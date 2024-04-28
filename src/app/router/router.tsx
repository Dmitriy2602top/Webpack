import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "~/components/App";
import { PageOne, PageTwo } from "~/pages";
import { Loader } from "~/shared/ui";


export const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            { path: "one", element: <Suspense fallback={<Loader />}><PageOne /></Suspense> },
            { path: 'two', element: <Suspense fallback={<Loader />}> <PageTwo /></Suspense> }
        ]
    }
])