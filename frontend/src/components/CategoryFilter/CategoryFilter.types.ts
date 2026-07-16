export interface CategoryFilterProps {

    categories:string[];
   
    value:string;
   
    onChange:(
     value:string
    )=>Promise<void>;
   
   }