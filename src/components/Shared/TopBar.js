function TopBar() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center"><span>0954 458 7864</span></i>
          <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 8:00 AM - 5:00 PM</span></i>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
