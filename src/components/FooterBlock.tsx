import React from "react";
import "../assets/css/ContactBlock.css";
import gmailLogo from "../assets/images/gmail-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import linkedinLogo from "../assets/images/toppng.com-linkedin-icon-black-linkedin-logo-495x499.png";
import { Tooltip, ClickAwayListener } from "@mui/material";

function FooterBlock() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  function copyToClipboard() {
    navigator.clipboard.writeText("tylerpmorrissey@gmail.com");
    handleTooltipOpen();
  }

  return (
    <div className="contact-content">
      <div>made by</div>
      <div className="name">Tyler Morrissey</div>
      <div className="title">Software Engineer</div>
      <div className="logos">
        <div className="gmail">
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title="Copied to clipboard"
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <a className={"gmail-logo"} onClick={() => copyToClipboard()}>
                <img
                  className="logo"
                  style={{ width: 25, height: 25 }}
                  src={gmailLogo}
                  alt="gmail.logo"
                />
              </a>
            </Tooltip>
          </ClickAwayListener>
        </div>
        <div className="github">
          <a href="https://github.com/tylermorrissey">
            <img
              className="logo"
              style={{ width: 25, height: 25 }}
              src={githubLogo}
              alt="gmail.logo"
            />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/tylermorrissey/">
            <img
              className="linkedin-logo"
              style={{ width: 25, height: 25 }}
              src={linkedinLogo}
              alt="gmail.logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterBlock;
