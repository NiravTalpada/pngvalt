import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn : 'root',
})

export class Apiservice{
    private endpoint = 'src';
    private domain: string | undefined

    constructor( private httpClient : HttpClient){
        this.domain = environment.domain
    }

    get(){
        return this.httpClient.get(`${this.domain}${this.endpoint}`);
    }
}