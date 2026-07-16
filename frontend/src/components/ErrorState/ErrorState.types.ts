export interface ErrorStateProps {
    title?: string;
  
    message?: string | null;
  
    onRetry?: () => void;
  }