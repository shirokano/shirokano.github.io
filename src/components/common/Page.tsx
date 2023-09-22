import React, { useEffect, useRef, useState } from 'react';
import { PageContext } from './PageContext';
import './Page.scss';

interface PageProviderProps {
  children: React.ReactNode;
}

function Page({ children }: PageProviderProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isPageAtTop, setIsPageAtTop] = useState<boolean>(false);

  useEffect(() => {
    const pageRefDiv = pageRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsPageAtTop(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    /* eslint-disable no-debugger */
    // debugger;
    if (pageRefDiv) {
      observer.observe(pageRefDiv);
    }

    return () => {
      if (pageRefDiv) {
        observer.unobserve(pageRefDiv);
      }
    };
  }, [isPageAtTop]);

  return (
    <PageContext.Provider value={[isPageAtTop]}>
      <div ref={pageRef} className="page">
        {children}
      </div>
    </PageContext.Provider>
  );
}

export default Page;
