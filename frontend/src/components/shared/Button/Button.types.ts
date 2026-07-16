export interface ButtonProps {
    children: React.ReactNode;
  
    type?: "button" | "submit";
  
    variant?: "primary" | "danger" | "secondary";
  
    disabled?: boolean;
  
    onClick?: () => void;
  }