import styled from "styled-components";

export const HeaderComponent = styled.header `
background-image: url("https://beam-images.warnermediacdn.com/2024-07/grid-br-dsk_0.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=2530");
background-repeat: no-repeat;
background-size: cover;
position: relative;
z-index: 0;
height: 60vw;
padding-top: 30vw;

.container{
    background: linear-gradient(0deg, rgb(0 0 0) 10%, rgba(0, 0, 0, 0) 80%);
}
.container-text{    
    display: flex;
    flex-direction: column;
    align-items: center;  
    background-color:  rgb(0, 0, 0, 0.2);
}

h1{
    margin-top: 10px;
}

h2{
    margin-top: 30px;
    margin-bottom: 15px;
    
}

h1, h2{
    color: white;
    font-family: 'Gilroy-Regular', sans-serif;
}
.price{
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 25px;    
}
button{
    margin-bottom: 60px;
}
`