import React from "react";
import "../styles/Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <header>
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white overflow-auto"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/236/236831.png?w=740&t=st=1687699392~exp=1687699992~hmac=efc652fa17b04d06bdffa783beb2515dff59d4853d7c044c6f8965bb47d5598c"
                  className="rounded-circle"
                  height="88"
                  alt="Avatar"
                  loading="lazy"
                />
                <span className="dropdown-profile  big text-dark fw-bold">
                  User Name
                </span>
              </div>

              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas  fa-building me-3 "></i>
                <span className="  big text-dark fw-bold">Company Details</span>
              </a>
              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-briefcase me-3"></i>
                <span className="  big text-dark fw-bold">Add a job</span>
              </a>

              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fa-solid fa-business-time me-3"></i>
                <span className="fw-bold">Jobs</span>
              </a>
              <ul
                className="list-group list-group-flush "
                style={{ marginLeft: 30 }}
              >
                <li className="list-group-item small">Posted Jobs</li>
                <li className="list-group-item small">Drafts </li>
                <li className="list-group-item small">Closed Jobs</li>
              </ul>

              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fa-solid fa-floppy-disk me-3"></i>

                <span className="fw-bold">Applications</span>
              </a>
              <ul
                className="list-group list-group-flush "
                style={{ marginLeft: 30 }}
              >
                <li className="list-group-item small">View Applications</li>
                <li className="list-group-item small">
                  Shortlisted Candidates
                </li>
                <li className="list-group-item small">Hired Candidates</li>
                <li className="list-group-item small">Rejected Candidates</li>
              </ul>

              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fa-solid fa-gear  me-3"></i>
                <span className="  big text-dark fw-bold">Setting</span>
              </a>

              <a
                href="!#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i class="fa-solid fa-right-to-bracket me-3"></i>
                <span className="  big text-dark fw-bold">Logout</span>
              </a>
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        {/* Navbar */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-md-0 pt-3 pb-3 "
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Brand */}
            <a className="navbar-brand d-none d-md-flex" href="!#">
              <svg
                width="57"
                height="43"
                viewBox="0 0 57 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.016 40.4935C24.9819 38.8231 22.766 38.4594 20.3682 39.4023"
                  stroke="#834FF6"
                  stroke-width="2"
                />
                <path
                  d="M27.6426 0C28.828 0 30.0067 0 31.1787 0C38.197 0.740898 45.0268 2.27658 51.6679 4.60704C54.8066 5.71165 56.5713 7.69187 56.962 10.5477C57.0697 11.3559 56.9485 13.7605 56.5982 17.7613C55.0222 35.3004 46.879 49.721 32.1688 61.0231C30 62.7069 27.7773 62.781 25.5007 61.2453C9.94187 50.7785 1.44848 34.4114 0.0205719 12.144C-0.181491 9.05916 1.10498 6.82973 3.87999 5.4557C10.4672 2.19575 18.3881 0.377185 27.6426 0ZM50.1726 7.88046C34.7754 1.75121 19.614 2.17555 4.68823 9.15346C4.12245 9.43635 3.75875 9.98192 3.73854 10.6083C3.05153 30.6799 10.7771 46.5553 26.9152 58.2346C27.7436 58.8408 28.8752 58.8408 29.7238 58.2548C44.7573 47.7475 52.7927 32.8555 53.83 13.5786C53.9647 10.8036 52.7456 8.90425 50.1726 7.88046Z"
                  fill="#133D7A"
                />
                <path
                  d="M20.9743 30.5924C19.7013 30.067 18.9739 28.7536 19.1962 27.3998C20.22 21.1628 23.0825 16.4682 27.7839 13.316C28.3766 12.9119 29.0165 12.7233 29.7035 12.7502C32.1686 12.858 32.2697 13.6865 30.0066 15.2356C29.4408 15.6195 29.0367 16.1449 28.8548 16.7309C27.7233 20.4488 27.0564 24.2611 26.8544 28.1677C26.6927 31.3064 24.7327 32.1146 20.9743 30.5924Z"
                  fill="#B33EED"
                  fill-opacity="0.996"
                />
                <path
                  d="M43.2214 33.9264C40.9313 37.6039 39.49 37.7858 38.8972 34.4719C38.7962 33.9264 39.1397 33.401 39.7055 33.1989C41.2008 32.6601 42.137 31.6902 42.5142 30.2892C42.6556 29.7234 42.3727 29.097 41.807 28.7535C39.3283 27.3122 36.6678 26.4702 33.8255 26.2277C31.8048 26.0526 30.4375 25.7495 29.7236 25.3185C27.7568 24.1465 27.8242 22.5435 29.9257 20.5094C30.3904 20.0648 31.0168 19.8021 31.6836 19.8223C34.4721 19.8897 36.9574 20.698 39.1397 22.2471C41.3624 23.8232 42.9116 25.2983 43.7872 26.6723C45.1208 28.7603 44.9322 31.1783 43.2214 33.9264Z"
                  fill="#EE344E"
                />
                <path
                  d="M27.0163 40.4934C24.9822 38.823 22.7662 38.4593 20.3684 39.4022C19.8026 38.6344 18.3545 37.2469 16.0241 35.2397C11.4978 31.3332 11.2621 27.2717 15.3168 23.0553C15.7816 22.5704 16.408 22.3279 17.0344 22.4087C19.6612 22.7051 18.9472 24.2004 14.8925 26.8945C13.8418 27.5816 13.862 29.1374 14.9127 29.8245C19.6275 32.8554 24.8475 34.1217 30.5726 33.6232C36.6076 33.0844 37.8806 34.8087 34.3916 38.7961C34.0077 39.2204 33.4217 39.5235 32.7145 39.6245L27.0163 40.4934Z"
                  fill="#5460FF"
                />
                <path
                  d="M27.016 40.4935C27.501 43.1877 28.9491 44.2384 31.3604 43.6457C31.9464 43.5042 32.4717 43.5446 32.7546 43.7467C33.2396 44.0835 32.9163 44.4607 31.7847 44.8783C26.3425 46.8719 22.537 45.0466 20.3682 39.4023C22.766 38.4594 24.9819 38.8231 27.016 40.4935Z"
                  fill="#B33EED"
                  fill-opacity="0.996"
                />
              </svg>
            </a>
            <div className="d-none d-md-flex input-group w-auto my-auto">
              Securing Digital World !
            </div>

            <div>
              <form className="input-group w-auto my-auto d-md-none">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search Candidates"
                  style={{ minWidth: 100, marginRight: 3 }}
                />
                <span
                  className="input-group-text border-0"
                  style={{ marginRight: 10 }}
                >
                  <i className="fas fa-search" />
                </span>
                <a
                  className="nav-link dropdown-toggle mt-1 hidden-arrow"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  style={{ marginRight: 10 }}
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </form>
            </div>
            <ul className=" d-none d-md-flex navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/52/52961.png?w=740&t=st=1687700410~exp=1687701010~hmac=5ff00fbf978f941ad752c7de7725dec3e550dae65449382afd5790084cacbeb5"
                    className=""
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className=" small text-dark">Search Candidate</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/52/52782.png?w=740&t=st=1687700672~exp=1687701272~hmac=886d0307311a5f26e4084fdd44a23f5f666881922f62f57ed2f5b8c3bcda9333"
                    className=""
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className=" small text-dark">Post New Job</span>
                </a>
              </li>

              {/* Avatar */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/236/236831.png?w=740&t=st=1687699392~exp=1687699992~hmac=efc652fa17b04d06bdffa783beb2515dff59d4853d7c044c6f8965bb47d5598c"
                    className="rounded-circle"
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className="dropdown-profile small text-dark">
                    My profile <i className="fas fa-caret-down"></i>
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
  <li>
    <a className="dropdown-item" href="!#">
      <i className="fas fa-user"></i> View profile
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="!#">
      <i className="fas fa-edit"></i> Edit Profile
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="!#">
      <i className="fas fa-lock"></i> Security
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="!#">
      <i className="fas fa-shield-alt"></i> Privacy
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="!#">
      <i className="fas fa-sign-out-alt"></i> Logout
    </a>
  </li>
</ul>

              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
      {/*Main Navigation*/}

      {/*Main layout*/}
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
      {/*Main layout*/}
    </>
  );
};

export default Dashboard;
