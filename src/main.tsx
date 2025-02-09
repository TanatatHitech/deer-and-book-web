import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import axios from 'axios';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tippy JS
import 'tippy.js/dist/tippy.css';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Flatpickr
import 'flatpickr/dist/flatpickr.css';

// Leaftlet
import 'leaflet/dist/leaflet.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Context
import ContextProvider from './Context';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// React Date Range
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// React PDF
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { setupAxios } from '@/configuration/axios';
setupAxios(axios);

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense>
            <ContextProvider>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </ContextProvider>
        </Suspense>
    </React.StrictMode>
);
