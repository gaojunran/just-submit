interface IHomeworks {
  id: number;
  category: string;
  name: string;
  end_time: string;
}

interface IForm {
  id?: number;
  stuId: number;
  stuName: string;
  hwId: number;
}

interface ISubmission extends IForm {
  dirId: number;
  
}

export type IHomeworkChoices = [string, IHomeworks[]][];
