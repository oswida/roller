// @refresh reload
import { Suspense, createEffect } from "solid-js";
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
  Title,
} from "solid-start";
import {
  centConnect,
  centConnectionStatus,
  centLoadRolls,
  currentRoom,
  queueInit,
  updateStoreSize,
} from "./common";

export default function Root() {
  updateStoreSize();
  queueInit();

  createEffect(() => {
    if (!centConnectionStatus()) {
      centConnect();
      return;
    }
    const room = currentRoom();
    if (!room) return;
    centLoadRolls(room.id);
  });

  return (
    <Html lang="en">
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
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
