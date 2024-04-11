import { Component } from "react";
import LinearChart from "../LinearChart";
import DivisonComponent from "../DivisonComponent";
import "./index.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="sideBarContainer">
          <h1 className="homeBoardHeading">Board.</h1>
          <ul>
            <li className="options">
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711907656/dashboard_icon_cv2kha.png"
                alt="dashBoard"
                className="icon"
              />
              <p className="dashboard">Dashboard</p>
            </li>
            <li className="options">
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711942443/Vector_cjbdze.png"
                alt="dashBoard"
                className="icon"
              />
              <p className="dashboard">Transactions</p>
            </li>
            <li className="options">
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711942619/schedule_icon_fbn8lb.png"
                alt="dashBoard"
                className="icon"
              />
              <p className="dashboard">Schedules</p>
            </li>
            <li className="options">
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711944212/user_icon_igcgln.png"
                alt="dashBoard"
                className="icon"
              />
              <p className="dashboard">Users</p>
            </li>
            <li className="options">
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711944314/setting_icon_anu6ag.png"
                alt="dashBoard"
                className="icon"
              />
              <p className="dashboard">Settings</p>
            </li>
          </ul>
        </div>
        <div className="dashBoardContainer">
          <div className="dashBoardDetailsContainer">
            <h1>Dashboard</h1>
            <div className="searchAndProfileContainer">
              <div className="searchContainer">
                <input
                  type="search"
                  placeholder="search"
                  className="searchBox"
                />
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711945987/Search_icon_aeft71.png"
                  alt="searchIcon"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711948154/Vector_3_rcq9in.png"
                alt="bell"
                className="bellIcon"
              />
              <img
                src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711948640/image_1_p0ow68.png"
                alt="profileImage"
                className="profile"
              />
            </div>
          </div>
          <div className="transactionsDetailsContainer">
            <div className="totalRevenuesContainer greenBackground">
              <div className="iconWithText">
                <div className="text">
                  <h1 className="revenuePara">Total Revenues</h1>
                  <p className="value">$ 2,129,430</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711949808/Vector_4_wwvvsc.png"
                  alt="incomeIcon"
                  className="income"
                />
              </div>
            </div>
            <div className="totalRevenuesContainer orangeBackground">
              <div className="iconWithText">
                <div className="text">
                  <h1 className="revenuePara">Total Transactions</h1>
                  <p className="value">1520</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711951804/total_transactions_icon_edoxyq.png"
                  alt="transactions"
                  className="income"
                />
              </div>
            </div>
            <div className="totalRevenuesContainer pinkBackground">
              <div className="iconWithText">
                <div className="text">
                  <h1 className="revenuePara">Total Likes</h1>
                  <p className="value">9,721</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711952004/Vector_5_agk2tb.png"
                  alt="likes"
                  className="income"
                />
              </div>
            </div>
            <div className="totalRevenuesContainer purpleBackground">
              <div className="iconWithText">
                <div className="text">
                  <h1 className="revenuePara">Total Users</h1>
                  <p className="value">892</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dowjvitxs/image/upload/v1711952086/Vector_6_sivlhb.png"
                  alt="users"
                  className="income"
                />
              </div>
            </div>
          </div>
          <div className="lineChartContainer">
            <h1>Activities</h1>
            <LinearChart />
          </div>
          <div className="chartsContainer">
            <div className="pieChartContainer">
              <h1>Top products</h1>
              <DivisonComponent />
            </div>
            <div className="listChartContainer">
              <h1>Today's schedule</h1>
              <div className="details greenBorder">
                <h1 className="meetingHeading">
                  Meeting with suppliers from kuta Bali
                </h1>
                <p className="timePara">14:00-15:00</p>
                <p className="locationPara">at Sunset Road Kuta, Bali</p>
              </div>
              <div className="details purpleBorder">
                <h1 className="meetingHeading">
                  Check operations at Giga Factory 1
                </h1>
                <p className="timePara">18:00-20:00</p>
                <p className="locationPara">at Central Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
