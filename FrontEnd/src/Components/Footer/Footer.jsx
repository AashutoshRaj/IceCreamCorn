import React from "react";
import styled from "styled-components";
import footerLogo from "../../assets/Images/ice-cream-cup 1.png"

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  color:  ${({ theme }) => theme.colors.whiteColor};
  padding: 60px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:${({ theme }) => theme.fonts.alegreya};

  .footer-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px;
    }
  }

  .footer-logo {
    flex: 1;
    min-width: 200px;

    h2 {
      font-size: ${({ theme }) => theme.size.pFont};
      font-weight: bold;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    p {
     font-size: ${({ theme }) => theme.size.large};
      line-height: 1.6;
      color: #fbeaea;
      max-width: 250px;
    }
  }

  .footer-links {
    display: flex;
    flex: 2;
    justify-content: space-around;
    flex-wrap: wrap;
    min-width: 300px;

    h3 {
      font-size: ${({ theme }) => theme.size.large};
      margin-bottom: 15px;
      font-weight: bold;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 8px;
       font-size: ${({ theme }) => theme.size.large};
        color: ${({ theme }) => theme.colors.whiteColor};
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #fff;
          transform: translateX(3px);
        }
      }
    }
  }

  .subscribe {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: 16px;
      margin-bottom: 15px;
      font-weight: 600;
    }

    .input-group {
      display: flex;
      border: 1px solid #fff;
      border-radius: 4px;
      overflow: hidden;

      input {
        padding: 10px;
        border: none;
        outline: none;
        background: transparent;
        color: #fff;
        width: 180px;

        &::placeholder {
          color: #fbeaea;
        }
      }

      button {
        background: #fff;
        color: #e74c3c;
        font-weight: 600;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: #fbeaea;
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #fbeaea;
    padding-top: 20px;
    font-size: 13px;
    text-align: center;
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-top">
        {/* Logo & Description */}
        <div className="footer-logo">
          <h2><img src={footerLogo} alt="footerlogo"/> Frosty Delights</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Quick Links & Social Media */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Buy Ice Cream</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3>Social Media</h3>
            <ul>
              <li> Facebook</li>
              <li> Instagram</li>
              <li>Linkedin</li>
              <li> Twitter</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="subscribe">
          <h3>Join Us</h3>
          <div className="input-group">
            <input type="email" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        FrostyDelights.com © All rights reserved
      </div>
    </FooterContainer>
  );
};

export default Footer;
