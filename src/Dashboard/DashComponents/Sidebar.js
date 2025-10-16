import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { GoChecklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import logo from '../../Assets/hero.png';
import prof from '../../Assets/Avatar [1.1].png'

const screens = [
  { id: 1, label: 'Overview', path: '/overview', icon: <MdOutlineSpaceDashboard size={18} /> },
  { id: 2, label: 'Products', path: '/products', icon: <RxCounterClockwiseClock size={18} /> },
  { id: 3, label: 'Orders', path: '/orders', icon: <GoChecklist size={18} /> },
  { id: 4, label: 'Reviews', path: '/reviews', icon: <IoPricetagsOutline size={18} /> },
  { id: 5, label: 'Discount', path: '/discount', icon: <CiDiscount1 size={18} /> },
  { id: 6, label: 'Announcement', path: '/announcement', icon: <GoBell size={18} /> },
  { id: 7, label: 'Settings', path: '/settings', icon: <IoSettingsOutline size={18} /> },
  { id: 8, label: 'LogOut', path: '/', icon: <IoIosLogOut size={18} /> },

];

const Sidebar = () => {
  const styles = {
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      width: '240px',
      height: '100vh',
      color: '#484848',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderRight: '1px solid var(--stroke-soft-200, #EBEBEB)',
    },
    Logo: {
      width: '92%',
      padding: '5px 10px',
      margin: '0 auto 15px auto',
      textAlign: 'start',
      borderBottom: '1px solid var(--stroke-soft-200, #EBEBEB)',
      marginBottom: '15px',

    },
    sLogo: {
      width: '100px',
    },
    navList: {
      width: '92%',
      margin: '0 auto',
      listStyleType: 'none',
      padding: 0,
      flexGrow: 1,
    },
    navItem: {
      padding: '9px 15px',
      cursor: 'pointer',
      fontSize: '13px',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#484848',
      transition: 'background-color 0.3s, color 0.3s',
      gap: '12px',
    },
    activeNavItem: {
      backgroundColor: '#FFF5F8',
      color: '#620120',
      borderRadius: '5px',
    },
    profile: {
      width: '92%',
      margin: '0 auto',
      padding: '20px 0px',
      borderTop: '1px solid var(--stroke-soft-200, #EBEBEB)',
      color: '#484848',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
    },
   
    profileName: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    profileEmail: {
      fontSize: '13px',
      color: '#5C5C5C',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#666',
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.Logo}><img src={logo} alt="Logo" style={styles.sLogo}/></div>

      <ul style={styles.navList}>
        {screens.map((screen) => (
          <li key={screen.id}>
            <NavLink
              to={screen.path}
              end
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navItem, ...styles.activeNavItem }
                  : styles.navItem
              }
            >
              {screen.icon}
              {screen.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div style={styles.profile} onClick={() => alert('Profile clicked!')}>
        <img src={prof} alt='profile' style={styles.profileImage}/>
        <div>
          <h5 style={styles.profileName}>John Doe</h5>
          <p style={styles.profileEmail}>john@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
