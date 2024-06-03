export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemesterName = "Automn" | "Summar" | "Fail";
export type TAcademicSemesterCode = "01" | "02" | "03";

export type TAcademicSemester = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  year: String;
  startMonth: TMonth;
  endMonth: TMonth;
};


export   type TAcademicSemesterNameCodeMapper = {
  [key : string] : string;
}
