import { Injectable } from '@angular/core';
import { Quilt } from './quilt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Block } from './block';
import { Piece } from './piece';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add quilt
  AddQuilt(data: Quilt): Observable<any> {
    let API_URL = `${this.endpoint}/add-quilt`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Add block
  AddBlock(data: Block): Observable<any> {
    let API_URL = `${this.endpoint}/add-block`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

    // Add piece
    AddPiece(data: Piece): Observable<any> {
      let API_URL = `${this.endpoint}/add-piece`;
      return this.http.post(API_URL, data)
        .pipe(
          catchError(this.errorMgmt)
        )
    }

  // Get all quilts
  GetQuilts() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all blocks
   GetBlocks() {
    return this.http.get(`${this.endpoint}`);
  }

    // Get all pieces
    GetPieces() {
      return this.http.get(`${this.endpoint}`);
    }

  // Get quilt
  GetQuilt(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-quilt/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

    // Get block
    GetBlock(id: any): Observable<any> {
      let API_URL = `${this.endpoint}/read-block/${id}`;
      return this.http.get(API_URL, { headers: this.headers })
        .pipe(
          map((res) => {
            return res || {}
          }),
          catchError(this.errorMgmt)
        )
    }

        // Get piece
        GetPiece(id: any): Observable<any> {
          let API_URL = `${this.endpoint}/read-piece/${id}`;
          return this.http.get(API_URL, { headers: this.headers })
            .pipe(
              map((res) => {
                return res || {}
              }),
              catchError(this.errorMgmt)
            )
        }

  // Update quilt
  UpdateQuilt(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-quilt/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

    // Update block
    UpdateBlock(id: any, data: any): Observable<any> {
      let API_URL = `${this.endpoint}/update-block/${id}`;
      return this.http.put(API_URL, data, { headers: this.headers })
        .pipe(
          catchError(this.errorMgmt)
        )
    }

        // Update piece
        UpdatePiece(id: any, data: any): Observable<any> {
          let API_URL = `${this.endpoint}/update-piece/${id}`;
          return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(
              catchError(this.errorMgmt)
            )
        }

  // Delete quilt
  DeleteQuilt(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-quilt/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

    // Delete block
    DeleteBlock(id: any): Observable<any> {
      var API_URL = `${this.endpoint}/delete-block/${id}`;
      return this.http.delete(API_URL)
        .pipe(
          catchError(this.errorMgmt)
        )
    }

  
    // Delete piece
    DeletePiece(id: any): Observable<any> {
      var API_URL = `${this.endpoint}/delete-piece/${id}`;
      return this.http.delete(API_URL)
        .pipe(
          catchError(this.errorMgmt)
        )
    }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
