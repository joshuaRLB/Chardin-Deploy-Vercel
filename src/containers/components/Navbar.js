import { ReactComponent as ProfileImg } from "../../assets/undraw_profile.svg";

const Navbar = ({ toggleSidebar }) => {
   const email = localStorage.getItem('email');
   const fullName = localStorage.getItem('firstName')+" "+localStorage.getItem('lastName');

  return (
    <nav className="px-3 navbar navbar-expand navbar-dark bg-100 topbar static-top topbar-border">
      <button className="btn btn-link d-md-none mr-3" onClick={toggleSidebar}>
        <i className="bi bi-list text-white"></i>
      </button>

      <div className="text-center d-none d-md-inline"></div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
               {fullName}
            </span>
            <ProfileImg className="img-profile rounded-circle" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
