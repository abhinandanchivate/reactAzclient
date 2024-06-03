import React, { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { getProfileAction } from "../../profile/redux/action/profileAction";
import { Link } from "react-router-dom";
import DashboardAction from "./DashboardAction";

export const Dashboard = ({ user, profile, getProfileAction }) => {
  useEffect(() => {
    getProfileAction();
  }, [getProfileAction]);

  const createProfile = (
    <div class="my-2">
      <Link to="/profile/create" class="btn btn-danger">
        <i class="fas fa-user-minus"></i>
        Create Profile
      </Link>
    </div>
  );
  const profilePart = (
    <>
      <DashboardAction></DashboardAction>
    </>
  );
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Welcome {user && user.name}
        </p>
        {profile !== null ? profilePart : <> {createProfile}</>}
      </section>
    </>
  );
};
Dashboard.propTypes = {
  profile: PropTypes.object,
  user: PropTypes.object.isRequired,
  getProfileAction: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,

  user: state.authReducer.user,
});

const mapDispatchToProps = {
  getProfileAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
