import { Grid, TextField, Stack, Button, Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "urql";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";
import { GetOneUserNameDocument } from "@/graphql/types";

import type { GetOneUserNameQuery } from "@/graphql/types";

export const UserName: NextPage = () => {
  const router = useRouter();
  const details = DETAIL_PAGE_CONSTANTS.username;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [result, reexecuteQuery] = useQuery<GetOneUserNameQuery>({
    query: GetOneUserNameDocument,
    variables: {
      id: "ef3eabbe-9f27-4fa9-976b-1954311841c1",
    },
  });
  const { data, fetching, error } = result;
  const myFirstName = result?.data?.userEntityByPk?.firstName;
  const myLastName = result?.data?.userEntityByPk?.lastName;
  const saveName = () => {
    // TODO: 名前を保存する機能の実装
    // console.log("元の名前は" + myLastName + myFirstName);
    // console.log("変更後は" + lastName + firstName);
  };

  const cancell = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };

  return (
    <DetailLayout {...details}>
      <Box sx={{ pt: "16px", pb: "16px" }}>
        <Typography
          color="text.secondary"
          pl={{ xs: "0px", sm: "16px" }}
          sx={{ mb: "4px", fontSize: 12 }}
        >
          名前の更新
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          sx={{
            px: "24px",
            mt: "24px",
          }}
        >
          <TextField
            label="名"
            id="firstName"
            value={firstName}
            variant="standard"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            label="姓"
            id="lastName"
            value={lastName}
            variant="standard"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="end"
          sx={{
            width: 1,
            mt: "24px",
            mb: "8px",
            px: "16px",
          }}
        >
          <Button onClick={cancell}>キャンセル</Button>
          <Button
            disabled={lastName === "" && firstName === ""}
            variant="contained"
            onClick={saveName}
          >
            保存
          </Button>
        </Stack>
      </Box>
    </DetailLayout>
  );
};

export default UserName;
