import  styled  from 'styled-components';
import backgroundImage from '../../../assets/img/img.svg';
export const Main = styled.main`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    div {
        flex:1;
    }

    @media (max-width:700px) {
        flex-direction: column;
        overflow-y: auto;
    }
`;

export const ContainerImage = styled.div`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size:cover;
    object-fit: cover;

    width: 100%;
    height: 100vh;
    @media (max-width:900px) {
        display: none;
    }
`;
export const ContainerForm = styled.div`
    display: flex;
    justify-content:space-around;
    flex-direction: column;
    height: 100%;
    margin-left: 80px;
    & > div,& > header {
        margin-left: 12px;
    }
    & > header {
        flex: 0.5;
        img {
            margin-top: 40px;
        }
    }
    & > div {
        max-width: 351px;
        button,input {
            width:100%;
        }
    }
    @media (max-width: 1400px) {
        & > header {
            flex: 0.3;
        }
    }
    @media (max-width: 700px) {
        margin-left: 30px;
        & > header {
           height: 100vh;
           margin-bottom: 10px;
        }
        & > div,& > header {
        margin-left: 0;
    }
    }
`;
export const HeaderForm = styled.header`

    width: 100%;
    margin-bottom: 38px;
    h1 {
        margin-bottom: 16px;
    }
`;

