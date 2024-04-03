import React from "react";
import styled from "styled-components";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBitcoin } from "react-icons/io";
import { IoLogoChrome } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Trusted = () => {
  return (
    <>
      <Wrapper className="brand-section">
        <div className="container">
          <h3>Trusted By 1000+ Companies</h3>

          <div className="brand-section-slider">
            <IoLogoApple className="icon" />
            <IoLogoBitcoin className="icon" />
            <IoLogoChrome className="icon" />
            <IoLogoFacebook className="icon" />
            <IoLogoLinkedin className="icon" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: grey;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
