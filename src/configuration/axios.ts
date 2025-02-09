import { AxiosResponse, Axios } from 'axios';
import { useAuthStore } from '@/store/auth';

let count = 0;

export const setupAxios = (axios: Axios) => {
    axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;
    // @ts-ignore
    axios.defaults.headers['Accept'] = 'application/json';
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        async (error: any) => {
            const originalRequest = error?.config;
            if (error?.response?.status === 401 && count === 0) {
                originalRequest._retry = true;
                count++;
                let isError = false;
                let request: Promise<any> = Promise.resolve();

                try {
                    const refreshResp = await useAuthStore.getState().refreshFarmer();

                    if (refreshResp.success === false) {
                        // Handle logout or token cleanup here
                        return Promise.reject(error);
                    }

                    // Retry the original request
                    request = axios.request(originalRequest);
                } catch (err: any) {
                    // Handle errors during refresh
                    return Promise.reject(err);
                } finally {
                    // Reset count after handling
                    count = 0; // Reset count after retry attempt
                }

                return Promise.resolve(request);
            } else if (JSON.parse(JSON.stringify(error))?.status === null) {
                // const toast = withReactContent(Swal).mixin({
                // 	toast: true,
                // 	position: 'top-end',
                // 	showConfirmButton: false,
                // 	timer: 3000,
                // 	// @ts-ignore
                // 	customClass: 'mls-custom',
                // })
                // toast.fire({
                // 	icon: 'error',
                // 	title: 'Network Error',
                // 	padding: '10px 20px',
                // })
            }

            return Promise.reject(error);
        }
    );
};
