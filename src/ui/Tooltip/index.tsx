import React, { ReactNode } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import Tippy styles

interface TooltipProps {
  content: ReactNode | (() => ReactNode);
  children: React.ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?:number;
  duration?:number;
  
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, placement = 'top',delay }) => {
  return (
    <Tippy
      content={typeof content === 'function' ? content() : content}
      placement={placement}
      arrow={true}
      delay={200}
      duration={200}
      animation="fade"
      trigger="mouseenter focus"
      interactive={true} // Added 'interactive' option
    >
      {children}
    </Tippy>
  );
};
