import styled from "styled-components"

const Fade = styled.h1`
  @keyframes rollout {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  position: relative;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ bgColor }) => bgColor};
  -webkit-animation: rollout 600ms ease;
  -webkit-animation-delay: ${({ delay }) => delay};

  @media (min-width: ${({ theme }) => theme.breaks.desktop}) {
    h1 {
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: none;
    }
  }
`

export default Fade
