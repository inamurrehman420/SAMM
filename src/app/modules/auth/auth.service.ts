import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REQUESTTYPE } from 'src/app/models/enum/request-type.enum';
import { DataService } from 'src/app/shared/http/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _dataService: DataService) { }


  login(formData: FormGroup) {
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'auth/login', formData)
  }
}
