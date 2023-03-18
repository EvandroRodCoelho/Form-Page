import { Link } from "react-router-dom";
import { Button } from "../Button";
import * as I from "../Input";
import { Label } from "../Label";
import { Paragraph } from "../Paragraph";
import * as C from "./styles";
export function FormLoginPage() {

 return(
     <C.Container >
         <div>
            <div>
                <Label htmlFor='email'>
                    Email
                </Label>
                <I.InputPure type='email' id='email'
                placeholder='Digite seu e-mail'  />
            </div>
                <div>
                    <C.ContainerPasswordInformation>
                        <Label htmlFor='password'>
                            Senha
                        </Label>
                        <Link to="/">Esqueceu a senha</Link>
                    </C.ContainerPasswordInformation>

                 <C.ContainerPasswordInput>
                    <I.InputWithIcon type='password' id='password'
                         placeholder='Digite sua senha' icon >

                    </I.InputWithIcon>

                 </C.ContainerPasswordInput>

                </div>
        </div>
        <div>
            <Button type='submit'>
                Entrar
            </Button>
         </div>

         <div>
            <Paragraph>Ainda não tem conta?<Link to="/auth/register">Inscreva-se</Link></Paragraph>
         </div>
        </C.Container>
)
}
