import styled from "styled-components";

export const PlanSection = styled.section`
  height: 750px;
  background: linear-gradient(
    180deg,
    rgba(1, 25, 134, 1) 0%,
    rgba(0, 28, 155, 1) 26%,
    rgba(0, 40, 218, 1) 63%,
    rgba(0, 49, 255, 1) 100%
  );
  display: flex;  
  flex-direction: column;
  border: 1px solid red;
  

  .container {
    display: flex;
    flex-direction: column;    
    align-items: center;
    
  }

  .container-plan{    
    display: flex; 
    flex-direction: column;
    justify-content: end;
    align-items: end;

  }

  h2 {
    font-family: "Gilroy-Regular", sans-serif;
    color: white;
    margin-top: 60px;
    position: relative;
    font-size: 24px;
  }

  p {
    color: #03dff3;
    font-size: 14px;
    text-align: right;
    padding: 10px;
    font-family: "Gilroy-Bold", sans-serif;
  }

  .container-buttons{
    margin-top: 10px;
    display: flex;
    justify-content: end; 
    flex-direction: column ;
  }

  .container-cards{
    display: flex;
    flex-direction: row;
    border: 3px solid green;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
    }
`;
