import { Avatar, Menu, Tooltip } from "antd";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineExitToApp } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import Link from "next/link";
import React from "react";

const SiderbarMenu = ({ collapsed = true }) => {
  return (
    <>
      <div className="text-center text-white w-full float-left my-5">
        <Tooltip
          placement="rightTop"
          title={
            collapsed && (
              <div>
                <h3
                  className={`${
                    collapsed ? "text-sm" : "text-xl"
                  } font-bold tracking-tight dark:text-gray-400`}
                >
                  <a href="#" className="hover:text-white">
                    Admin
                  </a>
                </h3>
              </div>
            )
          }
        >
          <Avatar size={75} src="img/user.png" className="mx-auto mb-4 rounded-full" />
        </Tooltip>
        {!collapsed && (
          <div>
            <h3
              className={`${
                collapsed ? "text-sm" : "text-xl"
              } font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              <a href="#">Admin</a>
            </h3>
          </div>
        )}
      </div>
      <Menu
        mode="inline"
        className="!bg-transparent"
        defaultSelectedKeys={["/dashboard"]}
        items={[
          {
            key: "/dashboard",
            icon: <LuLayoutDashboard size="25" />,
            label: <Link href="/dashboard">Ana Sayfa</Link>,
          },
          {
            key: "/services",
            icon: <RiServiceFill size="25" />,
            label: <Link href="/services">Hizmetler</Link>,
          },
          {
            key: "10",
            icon: <MdOutlineExitToApp size="25" color="red" />,
            label: "Çıkış",
          },
        ]}
      />
    </>
  );
};

export default SiderbarMenu;
