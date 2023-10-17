import React, { useEffect, useRef, useState } from 'react';
import { PageContext } from './PageContext';
import './Page.scss';

interface PageProviderProps {
  children: React.ReactNode;
}

function Spacer() {
  return <div className="spacer" />;
}

export default Spacer;
