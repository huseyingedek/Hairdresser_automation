import React from 'react';
import { MdNotifications, MdHelpOutline } from 'react-icons/md';

const Header = () => {
  return (
    <div className="max-w-full bg-secondary p-4">
      <div>
        <ul className="flex justify-end items-center gap-7 mr-5 text-white">
          <li className="flex items-center gap-2 cursor-pointer">
            <MdNotifications size={24} />
            <span>Bildirim</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdHelpOutline size={24} />
            <span>Yardım</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
