import { environment } from '../../../environments/environment';
export class DomainUtills {
    baseUrl = new BaseUrl();
    GetDomain(): any {
        return this.baseUrl.ApiUrl + "";
    }
};
export class BaseUrl {
    private applicationUrl: string;
    private apiUrl: string;
    constructor() {
        this.applicationUrl = window.location.origin + "/";
        this.apiUrl = this.getApiUrl();
    }
    get ApplicationUrl() {
        return this.applicationUrl;
    }
get ApiUrl() {
        return this.apiUrl;
    }
    getApiUrl() {
        let originalPath = window.location.origin;
        let domain: string = environment.apiUrl;
        if (originalPath.includes("localhost")) {
            // domain = "http://localhost:3000/";
            // domain = "http://localhost:7001/api/";
            domain = "http://sammwebbackend-env-1.eba-vqk24sk3.ap-southeast-2.elasticbeanstalk.com/api/"; //ngrok

        }
        return domain;
    }
}
