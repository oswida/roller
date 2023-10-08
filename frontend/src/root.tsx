// @refresh reload
import { Show, Suspense, createEffect, createMemo } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Style,
  Title,
} from "solid-start";
import {
  stateCurrentUser,
  // queueInit,
  stateJwtToken,
} from "./common";
import { rootStyle } from "./root.css";
import { Login } from "./views/Login/Login";
import { colorThemeType, themeFontFamilyType } from "./common/theme.css";
import { netConnect } from "./net";
import { loadUserRooms } from "./net/room";

export default function Root() {
  // queueInit();

  const theme = createMemo(() => {
    const lu = stateCurrentUser();
    if (!lu || !lu.settings.appTheme) return "blue";
    return lu.settings.appTheme;
  });

  const font = createMemo(() => {
    const lu = stateCurrentUser();
    if (!lu || !lu.settings.appFont) return "Roboto";
    return lu.settings.appFont;
  })

  const validToken = createMemo(() => {
    if (stateJwtToken().trim() === "") return false;
    return true;
  });

  createEffect(() => {
    // if logged in, connect to centrifuge
    if (stateJwtToken().trim() === "") return;
    netConnect();
  });

  createEffect(() => {
    // if connected to centrifuge, load user rooms
    const cu = stateCurrentUser();
    if (!cu) return;
    loadUserRooms();
  });


  return (
    <Html
      lang="en"
      class={rootStyle({
        theme: theme() as colorThemeType,
        font: font() as themeFontFamilyType,
      })}
    >
      <Head>
        <Title></Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Oxanium:wght@400;700&family=Quattrocento:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <Style>
          {`input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
    
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
    
          ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(86, 112, 145, 0.7);
            border-radius: 10px;
          }
    
          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(86, 112, 145, 0.9);
          }
    
          ::-webkit-scrollbar-corner {
          }`}
        </Style>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Show when={validToken()}>
              <Routes>
                <FileRoutes />
              </Routes>
            </Show>
            <Show when={!validToken()}>
              <Login />
            </Show>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
