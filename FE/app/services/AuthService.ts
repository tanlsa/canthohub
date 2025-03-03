import createApiClient from '@service/ApiService';
const apiClient = createApiClient();

import { LoginRequest } from "@type/taikhoan/auth.request"
import { FogetPasswordRequest, CheckTokenRequest, ResetPasswordRequest , RegisterRequest} from '@type/taikhoan'
import { API } from "@config/auth.config"

class AuthService {
    async Login(request: LoginRequest): Promise<any> {
        try {
            const data = await apiClient.post(API.LOGIN , request)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async Refresh(token : string): Promise<any> {
        try {
            const data = await apiClient.post(API.REFRESH , {} , token )
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async Register(request: RegisterRequest ): Promise<any> {
        try {
            const data = await apiClient.post(API.REGISTER , request)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async ForgotPassword(request: FogetPasswordRequest): Promise<any> {
        try {
            const response = await apiClient.post(API.FOGET_PASSWORD , request)
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async CheckToken(request: CheckTokenRequest): Promise<any> {
        try {
            const response = await apiClient.post(API.CHECK_TOKEN, request)
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async ResetPassword(request: ResetPasswordRequest): Promise<any> {
        try {
            const response = await apiClient.post(API.RESET_PASSWORD , request)
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }
        

    
}
const instance = new AuthService();
export default instance
