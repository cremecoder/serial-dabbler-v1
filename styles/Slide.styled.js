import styled from "styled-components"

export const Slide = styled.div`
  .slide {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  .slide-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: red;
    opacity: 0.5;
    padding: 1em;
    color: white;
    transition: transform 0.3s ease;
  }

  .slide:hover .slide-content {
    transform: translate(0, 0);
  }

  /* directions */
  .slide-top .slide-content {
    transform: translate(0, -100%);
  }

  .slide-left .slide-content {
    transform: translate(100%, 0);
  }

  .slide-bottom .slide-content {
    transform: translate(0, 100%);
  }

  .slide-right .slide-content {
    transform: translate(-100%, 0);
  }
`
