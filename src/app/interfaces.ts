export const allUserRes = {
    id: '',
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    role: '',
  };
export const allLonaResponse = {
  id: '',
  userid: '',
  fname: '',
  lname: '',
  email: '',
  gender: '',
  aadhar: '',
  pan: '',
  profession: '',
  income: '',
  loanAmt: '',
  duration: '',
  address1: '',
  address2: '',
  pincode: '',
  place: '',
  country: '',
  mobile: '',
  status: '',
  remark: '',
  };

  export interface userApi {
    status: number;
    error: string;
    data: typeof allUserRes[];
    totalpages: number;
  }