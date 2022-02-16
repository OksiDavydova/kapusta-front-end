//for test only
import styled from "@emotion/styled";
import { device } from "../styles/utils/device";
// import { colors } from "../styles/utils";
// import { device } from "../styles/utils";
import cabbagesBottom from "../assets/img/cabbagesBottom.png";
import setCabbage from "../assets/img/setCabbage.png";
import pairCabbages from "../assets/img/pairCabbages.png";
import oneCabbageRT from "../assets/img/oneCabbageRT.png";
import oneCabbageLB from "../assets/img/oneCabbageLB.png";

// import cabbagesBottom from "../assets/img/cabbagesBottom.png";
// grey back first then cabbage
export const BgBottomAuth = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -5;
  width: 100%;
  height: 100%;

  background-color: #ffffff;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    // background-image: url(${pairCabbages});
    // background-position: calc((100% / 2) + 280px) calc(100% - 64px);
  }

  @media ${device.desktop} {
    background-image: url(${cabbagesBottom});
    background-position: 50% calc(100% + 25px);
  }
`;

export const BgBottom = styled.div`
  z-index: -4;
  position: absolute;
  width: 100%;
  height: 856px;
  background-repeat: no-repeat;

  left: 0px;
  top: 0px;
  background-image: url(${oneCabbageRT});
  background-position: calc((100% / 2) - 90px) bottom;

  @media ${device.tablet} {
    z-index: 1;
    left: 0px;
    top: 0px;
    height: 1024px;
    background-image: url(${pairCabbages});
    background-position-x: calc(50% - 200px);
    background-position-y: 830px;
  }

  @media ${device.desktop} {
    z-index: -4;
    height: 850px;
    left: 0px;
    top: 0px;
    background-position: calc((100% / 2) - 410px) 658px;
  }
`;

export const BgTopAuth = styled.div`
  z-index: -4;
  display: block;
  position: absolute;
  left: 0px;
  top: 56px;
  height: 286px;
  width: 100%;
  border-radius: 0 0 0 150px;
  background-color: #f2f5fc;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    height: 526px;
  }
`;

export const BgTop = styled.div`
  z-index: -4;
  display: block;
  position: absolute;
  background-color: #f5f6fb;
  background-repeat: no-repeat;

  left: 0px;
  top: 56px;
  height: 345px;
  width: 100%;
  border-radius: 0 0 0 150px;
  background-image: url(${oneCabbageLB});
  background-position: calc((100% / 2) + 150px) 105px;

  @media ${device.tablet} {
    left: 0px;
    top: 56px;
    height: 526px;
    width: 100%;
    border-radius: 0 0 0 150px;
    background-image: url(${setCabbage});
    background-position: 50% 28px;
  }
`;
