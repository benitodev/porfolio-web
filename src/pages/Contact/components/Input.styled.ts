import styled from 'styled-components';
import { devices } from '../../../utility/responsive';

export const Container = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
`;

export const InputField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--gray-color-text);
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 9s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .formLabel {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .formLabel {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media ${devices.tabletS} {
    font-size: 1.6rem;
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    width: 450px;
    height: 70px;
  }
`;

export const TextareaField = styled.textarea`
  font-family: inherit;
  resize: none;
  width: 100%;
  border: 0;
  height: 100px;
  border-bottom: 2px solid var(--gray-color-text);
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.9s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .formLabel {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .formLabel {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media ${devices.tabletS} {
    font-size: 1.6rem;
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    width: 450px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--gray-color-text);
  @media ${devices.tabletS} {
    font-size: 1.3rem;
  }
`;
