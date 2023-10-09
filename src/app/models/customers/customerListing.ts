export interface customerInfo {
    id: number
    company: string
    address: string
    contactPersonName: string
    contactPersonNumber: string
    mail: any
    notes: any
    userInfo: UserInfo[]
  }
  
  export interface UserInfo {
    id: number
    PCID: string
    name: string
    notes: any
    apps:string[]
  }
  