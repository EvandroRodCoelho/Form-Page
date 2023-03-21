import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Label } from "../Label";
import { Paragraph } from "../Paragraph";
import * as C from "./styles";
import { useForm } from "react-hook-form";


export interface FormData {
    email: string;
    password: string;
}
export function FormLoginPage() {
    const {register, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));
    return (

        <C.Container onSubmit={onSubmit}>
            <div>
                <div>
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <C.Input type="email" placeholder="Digite seu e-mail"
                        {...register('email')}
                    />
                </div>
                    <div>
                        <C.ContainerPasswordInformation>
                            <Label htmlFor='password'>
                                Senha
                            </Label>
                            <Link to="/">Esqueceu a senha</Link>
                        </C.ContainerPasswordInformation>

                    <C.ContainerPasswordInput>
                       <C.Input type="password" placeholder="Digite sua senha" {...register('password')} />


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


