import React, { lazy, Suspense } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import routeData from './routes.json'
const RouterHandler = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    {routeData.map(({path,location,exact,name})=>{
                        const Component = lazy(()=> import(`../Components/${location}`))

                    return(<Route 
                                path={path}
                                exact={exact} 
                                key={name} 
                                element={
                                    <Suspense fallback='Loading...'>
                                    <Component />
                                    </Suspense>
                                }/>)
                    }
                )}
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterHandler