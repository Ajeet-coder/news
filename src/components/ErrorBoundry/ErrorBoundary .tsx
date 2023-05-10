import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
  }

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    info: React.ErrorInfo | null;
  }
export const ErrorBoundary=({ children }: ErrorBoundaryProps)=> {
    const [state, setState] = React.useState<ErrorBoundaryState>({
      hasError: false,
      error: null,
      info: null,
    });
  
    if (state.hasError) {
      // Fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{state.error && state.error.toString()}</p>
          <p>Stack trace:</p>
          <pre>{state.info && state.info.componentStack}</pre>
        </div>
      );
    }
  
    return <>{children}</>;
  }
  