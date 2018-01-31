import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/operators';

import { HttpClient, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

import { Configuration } from '../../app.constants';
//import { Promise } from 'q';

@Injectable()
export class DataService {

    private _actionUrl: string;

    public elementName: string = "values"

    get actionUrl():string {
        return this._actionUrl + this.elementName + "/";
    }

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this._actionUrl = _configuration.ServerWithApiUrl;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(item: any): Observable<T> {
        const toAdd = JSON.stringify(item);

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, itemToUpdate);
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }

    public async test(){
        var x = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Async Work Complete");
                resolve(1);
              }, 1000);
        });
        var o = await x.then(function(){});
        return o;
    }

}


import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
/*
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private authService: AuthService) {}

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token }})
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return next.handle(this.addToken(req, this.authService.getAuthToken()))
            .catch(error => {
                if (error instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>error).status) {
                        case 400:
                            return this.handle400Error(error);
                        case 401:
                            return this.handle401Error(req, next);
                    }
                } else {
                    return Observable.throw(error);
                }
            });
    }

    handle400Error(error) {
        if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
            return this.logoutUser();
        }

        return Observable.throw(error);
    }

    handle401Error(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;

            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);

            return this.authService.refreshToken()
                .switchMap((newToken: string) => {
                    if (newToken) {
                        this.tokenSubject.next(newToken);
                        return next.handle(this.addToken(this.getNewRequest(req), newToken));
                    }

                    // If we don't get a new token, we are in trouble so logout.
                    return this.logoutUser();
                })
                .catch(error => {
                    // If there is an exception calling 'refreshToken', bad news so logout.
                    return this.logoutUser();
                })
                .finally(() => {
                    this.isRefreshingToken = false;
                });
        } else {
            return this.tokenSubject
                .filter(token => token != null)
                .take(1)
                .switchMap(token => {
                    return next.handle(this.addToken(this.getNewRequest(req), token));
                });
        }
    }

    
        //This method is only here so the example works.
        //Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
    /
    getNewRequest(req: HttpRequest<any>): HttpRequest<any> {
        if (req.url.indexOf('getData') > 0) {
            return new HttpRequest('GET', 'http://private-4002d-testerrorresponses.apiary-mock.com/getData');
        }

        return new HttpRequest('GET', 'http://private-4002d-testerrorresponses.apiary-mock.com/getLookup');
    }

    logoutUser() {
        // Route to the login page (implementation up to you)
        return Observable.throw("");
    }
}*/
