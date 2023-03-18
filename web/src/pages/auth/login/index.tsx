import * as C from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { Title } from '../../../components/Title';
import { Paragraph } from '../../../components/Paragraph';
import { Label } from '../../../components/Label';
import { Input } from '../../../components/Input';
import { FormLoginPage } from '../../../components/FormLoginPage';
export function Login() {
    return (
        <C.Main>
            <C.ContainerForm>
                <C.ContainerForm>
                    <header>
                        <img src={logo} alt="Vetigo's logo" />
                    </header>
                    <div>
                        <C.HeaderForm>
                            <Title>
                                Acesse a plataforma
                            </Title>
                            <Paragraph>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</Paragraph>
                        </C.HeaderForm>
                       <FormLoginPage />
                    </div>
                </C.ContainerForm>

            </C.ContainerForm>
            <C.ContainerImage  />


        </C.Main>
  );
}
