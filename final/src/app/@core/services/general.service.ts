import { environment } from '../../../environments/environment';


export class GeneralService {
    protected apiBaseUrl = 'http://localhost:8080/api';

    constructor() {
        if (environment.production)
            this.apiBaseUrl = 'https://sonyadev.herokuapp.com/api';
    }

    protected handleError(error: any): Promise<any> {
        console.error('handleError', error);
        return Promise.reject(error.message || error);
    }
}