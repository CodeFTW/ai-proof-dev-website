import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import {Content} from "../home/Content.jsx";
import {CodeOfConduct} from "../home/CodeOfConduct.jsx";
import {TermsOfUse} from "../home/TermsOfUse.jsx";
import {About} from "../home/About.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CONTENT}
      element={
        <Layout>
          <Content />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CODE_OF_CONDUCT}
      element={
        <Layout>
          <CodeOfConduct />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.TERMS_OF_USE}
      element={
        <Layout>
          <TermsOfUse />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.ABOUT}
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
