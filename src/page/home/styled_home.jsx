import styled from "styled-components";
import { breakpoints } from "../../style/responsive";

export const MainLogin = styled.main`
  width: 100vw;
  height: 100vh;
  background: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
export const LeftLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1 {
    font-size: 3vw;
    color: var(--color-secondary);
  }
  & .astronauta {
    width: 30vw;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;

    h1 {
      display: none;
    }

    .astronauta {
      width: 50vw;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;

    h1 {
      display: none;
    }

    .astronauta {
      width: 50vw;
      margin-bottom: 1rem;
    }
  }
`;
export const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .card-login {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.87rem 2.18rem;
    background: var(--color-tertiary);
    border-radius: 1.25rem;
    box-shadow: 0rem 0.62rem 2.5rem var(--color-sombra);
    h2 {
      color: var(--color-active);
      font-weight: 800;
    }
    button {
      width: 100%;
      padding: 1rem 0;
      margin: 1.5rem;
      border: none;
      border-radius: 0.5rem;
      outline: none;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.18rem;
      color: var(--color-primary);
      background: var(--color-active);
      cursor: pointer;
      box-shadow: 0rem 0.62rem 2.5rem -0.75rem var(--box-shadow);
    }
    & form {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;

      label {
        color: var(--white);
        margin-bottom: 0.62rem;
        padding: 0.62rem;
      }

      input {
        width: 100%;
        border: none;
        border-radius: 0.62rem;
        padding: 0.93rem;
        background: var(--color-claro_tertiary);
        color: var(--white);
        font-size: 12pt;
        outline: none;
        box-shadow: 0rem 0.62rem 2.5rem var(--color-sombra);
      }
      input::placeholder {
        color: var(--color-placeholder);
      }
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 90%;
    }
      @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`;
