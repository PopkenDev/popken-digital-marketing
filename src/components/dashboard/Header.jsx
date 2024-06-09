import HamburgerMenu from "./HamburgerMenu";
import { RiAddFill, RiNotification4Fill } from "@remixicon/react";
import DropdownMenu from "./DropdownMenu";

const DashboardHeader = () => {
  const icons = {
    notification: (
      <RiNotification4Fill className="dashboard-header_header_notification-icon" />
    ),
    add: <RiAddFill className="dashboard-header_header_notification-icon" />,
  };

  return (
    <header className="dashboard-header">
      <div className="dashboard-header_container">
        <HamburgerMenu />
        <div className="dashboard-header_button-container">
          <DropdownMenu
            icon={icons.notification}
            update={true}
            label="notifications"
          />
          <div className="vertical-line"></div>
          <DropdownMenu icon={icons.add} update={false} label="add" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
