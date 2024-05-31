import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { getProfileAction } from "../../profile/redux/action/profileAction";
export const Dashboard = ({ profile, user, getProfileAction }) => {
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Welcome {user.name}
        </p>

        <div class="my-2">
          <button class="btn btn-danger">
            <i class="fas fa-user-minus"></i>
            Create Profile
          </button>
        </div>

        <div class="my-2">
          <button class="btn btn-danger">
            <i class="fas fa-user-minus"></i>
            Delete My Account
          </button>
        </div>
      </section>
    </>
  );
};
Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
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
