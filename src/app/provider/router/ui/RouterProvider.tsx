import { FC } from "react"
import { RouterProvider as Provider } from 'react-router-dom';
import { router } from "../config/router";

export const RouterProvider: FC = () => {
    return (
        <Provider router={router} />
    )
}
