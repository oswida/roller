import { Component, createSignal } from "solid-js";
import { Form } from "solid-start/data/Form";
import { setStateJwtToken } from "~/common";
import { Button, Flex, Input, Text } from "~/components";
import { loginRootStyle } from "./styles.css";
import { FaSolidDiceD20 } from "solid-icons/fa";
import { themeVars } from "~/common/theme.css";

export const Login: Component = () => {
    const [username, setUsername] = createSignal("");
    const [passwd, setPasswd] = createSignal("");


    const login = () => {
        if (username().trim() === "" || passwd().trim() === "") return;
        const uri = import.meta.env.DEV ? "/api/login" : "login";
        fetch(uri, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username(),
                password: passwd(),
            })
        }).then((resp) => {
            if (resp.status == 200) {
                resp.text().then((t) => {
                    setStateJwtToken(t);
                })
            } else {
                console.error(resp);
            }
        }).catch((err) => {
            console.error("login err", err);
        })
    }

    return <div class={loginRootStyle}>
        <Flex align="center" gap="medium">
            <FaSolidDiceD20 fill={themeVars.primary900} />
            <Text fontSize="big">Roller login</Text>
        </Flex>
        <Form onSubmit={login} >
            <Flex direction="column" align="center" gap="large">
                <Input onInput={(e) => setUsername(e.target.value)} label="Username" />
                <Input onInput={(e) => setPasswd(e.target.value)} type="password" label="Password" />
                <Button type="submit" onClick={login}>Login</Button>
            </Flex>
        </Form>
    </div>
}