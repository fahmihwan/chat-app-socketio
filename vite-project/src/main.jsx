import { Suspense } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from './routes';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
// import { store } from './redux/app/store.js'
import { persistor, store } from './redux/app/store.js'

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    //     <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={routes} />
            </Suspense>
        </PersistGate>
    </Provider>
    //     </BrowserRouter>
    // </StrictMode>
);
