import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { AuthConfig, DEFAULT_AUTH_CONFIG } from '@eui/core';
 
export const AUTH_CONFIG_TOKEN = new InjectionToken<AuthConfig>('AUTH_CONFIG');
 
@Injectable()
export class AuthService {
 
    // default must be false, it should be update after login
    isLoggedIn = true;
 
    // it should be integrated with user state,and navigate to passed url after login
    redirectUrl: string;
    loginPageUrl: string;

    constructor(@Optional() @Inject(AUTH_CONFIG_TOKEN) config: AuthConfig) {
        const authConfig = Object.assign({}, DEFAULT_AUTH_CONFIG, config);
        this.isLoggedIn = authConfig.isLoggedIn;
        this.redirectUrl = authConfig.redirectUrl;
        this.loginPageUrl = authConfig.loginPageUrl;
        console.log(this.loginPageUrl,"login")
    }
 
    setLoggedIn(status: boolean) {
        this.isLoggedIn = status;
    }
 
    setRedirectUrl(url: string) {
        this.redirectUrl = url;
    }
}