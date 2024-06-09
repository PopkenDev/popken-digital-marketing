import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header_container">
        <HamburgerMenu />
        <div>
          <figure className="dashboard-header_profile-img-container">
            <Image
              height={300}
              width={300}
              src="/images/dashboard/herman-profile-img.jpg"
              alt="profile-img"
              className="dashboard-header_profile-img"
            />
            <figcaption>Herman Popken</figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
