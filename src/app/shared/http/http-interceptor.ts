import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 
    let access_token =  localStorage.getItem("access_token");
    if(!access_token){
      access_token = '';
    }
  

    const customReq = request.clone({      
      headers: request.headers
                  .set("authorization","bearer "+access_token)
        });    
    


    return next.handle(customReq).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
 
        }
      }),
      catchError(response => {
        if (response instanceof HttpErrorResponse) {
        }
        return throwError(response);
      })
    );
  }
}
