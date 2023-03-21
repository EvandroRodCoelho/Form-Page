import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Label } from "../Label";
import { Paragraph } from "../Paragraph";
import * as C from "./styles";
import { SubmitHandler,useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver } from "@hookform/resolvers/zod"

export interface FormData {
    email: string;
    password: string;
}
export function FormLoginPage() {

    const schema = z.object({
        email: z.string().email("Digite um email valido"),
        password: z.string().min(8, "Senha incoreta")
    })

    const { register, handleSubmit,
        formState: { errors, isSubmitting } } = useForm<FormData>({
            resolver: zodResolver(schema),
        });
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await new Promise(async (resolve) => {
          await setTimeout(() => {
            console.log(data);
            resolve(undefined);
          }, 3000);
        });
      };


    return (

        <C.Container onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <C.Input type="email" placeholder="Digite seu e-mail"
                        disabled={isSubmitting}
                        {...register('email')}
                    />
                    <span>{errors.email && (errors.email?.message)}</span>
                </div>
                    <div>
                        <C.ContainerPasswordInformation>
                            <Label htmlFor='password'>
                                Senha
                            </Label>
                            <Link to="/">Esqueceu a senha</Link>
                        </C.ContainerPasswordInformation>

                    <C.ContainerPasswordInput>
                       <C.Input type="password" disabled={isSubmitting} placeholder="Digite sua senha" {...register('password')} />
                    </C.ContainerPasswordInput>
                    {errors.password && (
                            <span>{errors.password.message }</span>
                        )}
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


