import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { Header, SidebarMenu } from '@/Core/index';
import { LuArrowRightFromLine, LuArrowLeftToLine } from "react-icons/lu";

export type LayoutProps = {
  children: React.ReactNode;
};

const { Sider } = Layout;

const MyLayout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex-col">
      <div className="flex h-full">
        <Sider
          className="hidden lg:block relative h-full bg-secondary"
          trigger={null}
          width={200}
          collapsible
          collapsed={collapsed}
        >
          <SidebarMenu collapsed={collapsed} />
          <div className="bottom-0 absolute w-full">
            <Button
              className=" float-right -mr-8 p-0"
              type="text"
              icon={
                collapsed ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />
              }
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
        </Sider>
        <Layout>
          <Header />
          <div className="overflow-x-hidden pb-0">
            {children}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default MyLayout;
