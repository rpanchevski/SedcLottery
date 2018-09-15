import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUserCodeAward } from "./winners-list.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WinnersListService {
    lotteryUrl: string = "http://localhost:13596/api/lottery/"
    constructor(private http: HttpClient) {}

    getAllWinners(): Observable<Array<IUserCodeAward>> {
        return this.http.get<Array<IUserCodeAward>>(this.lotteryUrl + "getAllWinners");
    }
}