// export * from "@type/vieclam/career"
// export * from "@type/vieclam/experience"
// export * from "@type/vieclam/form"
// export * from "@type/vieclam/level"
// export * from "@type/vieclam/master"
export interface SearchPaging {
    pageSize : number 
    page     : number
    query    : string
}
export interface Id {
    id : number
}
enum FileType{
    Image , PDF , Video
}
export interface File extends Id{
    url : string ,
    type : FileType
}
export interface Province extends Id{
    name : string 
}
export interface District extends Id{
    name : string 
    province : Province
}
export interface Ward extends Id{
    name : string 
    district : District 
}
export interface Address extends Id{
    ward? : Ward
    district? : District
    province? : Province
    address : string
}
export interface JobInfo extends Id{
    title: string;
    company: string;
    company_logo: string;
    address: string;
    career: string;
    level: string;
    form: string;
    salary: string;
    experience: string;
    user_upload: string;
    avatar: string;
    quantity: number;
    apply_from: string;
    apply_to: string;
}
export interface Career extends Id{
  name : string 
}
export interface Experience extends Id{
  name : string
}
export interface JobPost extends Id {
  company_name : string
  company_cover_image : File
  quantity : number
  job_description: string
  requirement : string
  benefits : string 
  jd_file : File
  salary_from : number
  salary_to : number
  address : Address
  career : Career
  experience : Experience
  level : Level
  form : Form
}
export enum Level {
  Director = "Director",
  DeputyDirector = "Deputy Director",
  DepartmentHead = "Department Head",
  BranchManager = "Branch Manager",
  Manager = "Manager",
  TeamLeader = "Team Leader",
  Employee = "Employee",
  Intern = "Intern"
}
export enum Form {
  Full = "Full-Time" ,
  Part = "Part-Time" ,
  Remote = "Remote"
}
export interface JobFilter extends SearchPaging {
  carrer? : Career
  level? : Level[]
  address? : Address[]
  form? : Form[]
  salary_from? : number
  salary_to? : number
}

