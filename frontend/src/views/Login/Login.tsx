import { Component } from "solid-js";
import { Form } from "solid-start/data/Form";
import { netInit } from "~/common";
import { Button, Flex, Input, Text } from "~/components";
import { loginRootStyle } from "./styles.css";
import { FaSolidDiceD20 } from "solid-icons/fa";
import { themeVars } from "~/common/theme.css";

export const Login: Component = () => {
    let username: HTMLInputElement;
    let passwd: HTMLInputElement;


    const login = () => {
        if (!username || !passwd) return;
        netInit(username.value, passwd.value);
    }

    return <div class={loginRootStyle}>
        <Flex align="center" gap="medium">
            <FaSolidDiceD20 fill={themeVars.primary900} />
            <Text fontSize="big">Roller login</Text>
        </Flex>
        <Form onSubmit={login} >
            <Flex direction="column" align="center" gap="large">
                <Input ref={(e) => username = e} label="Username" />
                <Input ref={(e) => passwd = e} type="password" label="Password" />
                <Button type="submit">Login</Button>
            </Flex>
        </Form>
    </div>
}