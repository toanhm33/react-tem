import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

// const LayoutCustom: React.FC = ({ children }) => {
//   return <div>{children}
//   </div>;
// };
export interface LayoutCustomProps {
  route: any;
}
export default function LayoutCustom(props: LayoutCustomProps) {
  return (
    <div className="">
      {/* <Header /> */}
      <div className="lg:w-10/12 w-full min-h-screen mx-auto py-28">
        <Suspense fallback={null}>{renderRoutes(props.route.routes)}</Suspense>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
