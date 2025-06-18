import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle(title: string) {
  const location = useLocation();
  
  useEffect(() => {
    // Set the document title
    document.title = title;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'My App';
    };
  }, [title, location.pathname]); // Update when title or path changes
}

export default usePageTitle;