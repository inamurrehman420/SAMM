import { Injectable } from '@angular/core';
import { REQUESTTYPE } from 'src/app/models/enum/request-type.enum';
import { DataService } from 'src/app/shared/http/data.service';
@Injectable({
  providedIn: 'root'
})
export class TeamManagmentService {

  constructor(private _dataService: DataService) { }


  GetUser(formData: any) {
    let obj = {
      "page":1,
      "limit":100
  }
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'user/get-all-users', obj)
  }

  AddUpdateUser(formData: any) {
    delete formData.profile_picture;
    delete formData.phone_number;
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'user/add-update-user', formData)
  }

  RemoveUser(id: any) {
    return this._dataService.genericServiceCaller(REQUESTTYPE.GET, `user/delete-user/${id}`)
  }

  GetRole(formData: any) {
    let obj = {
      "page":1,
      "limit":10
  }
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'role/get-all-roles', obj)
  }

  
  UploadProfilePic(user_id, file: File) {
debugger
    var formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('file', file);    

    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'user/upload-profile', formData)
    
}

}
