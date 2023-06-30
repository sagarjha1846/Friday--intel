import React from 'react';
import { useNavigate } from 'react-router-dom';
import constants from '../constant/routesConstant';
import { logOut } from '../store/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { ReactComponent as Email } from '../images/svg/email.svg';
import { ReactComponent as Building } from '../images/svg/building.svg';
import { ReactComponent as Exit } from '../images/svg/exit.svg';

const Profile = ({ profileDetail }) => {
  const { ROUTES } = constants;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!profileDetail) {
    // Render dummy data or loading state if profileDetail is not available
    return <div></div>; // or render a dummy profile data
  }

  return (
    <div>
      <span className="pro">
        <div>
          <div className="pro-data">
            <h2>{profileDetail[0]?.fullname || 'Dummy Fullname'}</h2>

            <article>
              <span className="pro-icon">
                <Email style={{ fill: 'var(--primary-color)' }} />
              </span>
              <h4>{profileDetail[0]?.email || 'dummy@example.com'}</h4>
            </article>
            <article>
              <span className="pro-icon">
                <button className="">
                  <Building style={{ fill: 'var(--primary-color)' }} />
                </button>
              </span>
              <h4>{profileDetail[0]?.agency_name || 'Dummy Agency'}</h4>
            </article>
            <button
              className="member_btn_edit"
              onClick={() => navigate(ROUTES.member)}
            >
              Edit Profile
            </button>
            <button
              className="member_btn_membership"
              onClick={() => navigate(ROUTES.member)}
            >
              Membership info
            </button>
          </div>
          <span
            className="logout-bn"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <Exit style={{ fill: 'var(--primary-color)' }} />
            <h4>Log Out</h4>
          </span>
        </div>
        <div className="pro-triangle"></div>
      </span>
    </div>
  );
};

export default Profile;







