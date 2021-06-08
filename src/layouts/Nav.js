import React from "react";
import { Button, Menu, Container } from 'semantic-ui-react'

export default function Nav() {
  return (
    <div>
      <Menu inverted fixed="top">
          <Container>
        <Menu.Item name="Anasayfa" />
        <Menu.Item name="Şirketler" />
        <Menu.Item name="İş Arayanlar" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Kayıt ol!</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Giriş Yap</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
