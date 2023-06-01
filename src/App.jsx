import { RouterProvider } from 'react-router-dom';

import router, { routerJSX } from './router/router';

const App = () => (
  <RouterProvider router={routerJSX} />
)

export default App