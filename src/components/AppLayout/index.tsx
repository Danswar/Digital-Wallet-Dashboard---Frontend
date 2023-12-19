import React, { ReactNode } from "react";
import MainAppBar from "../MainAppBar";
import { Container, styled } from "@mui/material";

const ContentContainer = styled(Container)(() => ({
  "& .MuiContainer-root": {
    padding: "2rem 5rem",
  },
}));

interface AppLayoutProps {
  showInputSearchBar?: boolean;
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  showInputSearchBar = true,
  children,
}) => {
  return (
    <>
      <MainAppBar showSearchInput={showInputSearchBar} />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

export default AppLayout;
