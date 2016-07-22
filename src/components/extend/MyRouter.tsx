import {Router} from 'react-router';
import * as React from 'react';

export function Router(target: any) {
    target.contextTypes = target.contextTypes || {};
    target.contextTypes.router = React.PropTypes.func.isRequired;
}

// export interface IRouterContext {
//     router: ReactRouter.Router;
// }
export interface IRouter {
    replaceWith(path: string);
}
export interface IRouterContext {
    router: IRouter;
}