import React, { useContext } from "react";

import PropTypes from "prop-types";
import userContext from "../../contexts/userContext";
import { useMutation } from "react-query";
import { postGoogleAuth } from "../profile/api/crud";
import { LoginLightBox } from "../../components/loginLightBox";

export const LoginHeaderContainer = ({ handleClickCloseLogin, openLogin }) => {
  const { setUserData } = useContext(userContext);

  const { mutateAsync } = useMutation(`googleAuth`, (data) => postGoogleAuth(data));

  const handleGoogleAuth = async (response) => {
    const result = await mutateAsync({ access_token: response.accessToken });
    console.log(result?.data);
    const authUserData = {
      authenticated: true,
      user: {
        id: result?.data?.UserID,
        Avatar: result?.data?.Avatar,
        FullName: result?.data?.FullName,
        accessToken: result?.data?.accessToken,
        refreshToken: result?.data?.refreshToken
      }
    };
    setUserData(authUserData);
    localStorage.setItem('authUserData', JSON.stringify(authUserData));
    localStorage.setItem('authToken', result?.data?.accessToken);
    handleClickCloseLogin();
  }

  const handleGoogleAuthFail = (response) => {
    console.log(response);
    //Notification
  }

  return (
    <>
      <LoginLightBox handleClickCloseLogin={handleClickCloseLogin}
             openLogin={openLogin}
             handleGoogleAuth={handleGoogleAuth}
             handleGoogleAuthFail={handleGoogleAuthFail}/>
    </>
  );
};

LoginHeaderContainer.propTypes = {
  handleClickCloseLogin: PropTypes.func.isRequired,
  openLogin: PropTypes.bool.isRequired,
}