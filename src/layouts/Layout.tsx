import './layout.scss';
import { ReactElement, useEffect } from 'react';
import { LayoutProps } from '../types/LayoutProps';

const Layout = ({ children, pageTitle }: LayoutProps): ReactElement => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return <main>{children}</main>;
};

export default Layout;
