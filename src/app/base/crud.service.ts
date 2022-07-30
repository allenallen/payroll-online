import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseEntity } from '../base/response-entity';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export abstract class CrudService<SingleEntity, ListEntity> {

    private baseUrl = environment.baseUrl;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor() {
    }

    abstract getApiUrl(): string;

    abstract getHttpClient(): HttpClient;

    abstract createFormGroup(): FormGroup;

    protected getHttpOptions() {
        return this.httpOptions;
    }

    getAll(): Observable<ResponseEntity<ListEntity>> {
        return this.getHttpClient().get<ResponseEntity<ListEntity>>(
            this.baseUrl + this.getApiUrl()
        ).pipe(
            catchError(this.errorHandler)
        );
    }

    create(entity: SingleEntity): Observable<ResponseEntity<SingleEntity>> {
        return this.getHttpClient().post<ResponseEntity<SingleEntity>>(
            this.baseUrl + this.getApiUrl(), JSON.stringify(entity), this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    find(id: number): Observable<ResponseEntity<SingleEntity>> {
        return this.getHttpClient().get<ResponseEntity<SingleEntity>>(
            this.baseUrl + this.getApiUrl() + '/' + id
        ).pipe(
            catchError(this.errorHandler)
        );
    }

    update(id: number, entity: SingleEntity): Observable<ResponseEntity<SingleEntity>> {
        return this.getHttpClient().put<ResponseEntity<SingleEntity>>(this.baseUrl + this.getApiUrl() + '/' + id, JSON.stringify(entity), this.httpOptions)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    delete(id: number): Observable<ResponseEntity<string>> {
      return this.getHttpClient().delete<ResponseEntity<string>>(this.baseUrl + this.getApiUrl() + '/' + id, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
        }
        const err = new Error(errorMessage);
        return throwError(() => err);
    }
}
