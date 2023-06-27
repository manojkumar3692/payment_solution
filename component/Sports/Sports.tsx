"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import someImage from "../../images/batminton.svg";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  Container,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#38383a",
    },
  },
});
const Batminton = require("../../images/batminton.svg");
const Swimming = require("../../images/swimming.svg");
const TableTennis = require("../../images/tt.svg");
const Football = require("../../images/football.svg");
const Jercy = require("../../images/jercy.svg");
const Tournament = require("../../images/tournament.svg");
const SPORT_DATA = [
  {
    id: 1,
    name: "Book Batminton",
    image: Batminton,
    description: "ABC",
    avatar: "B",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNe7CEcnrVHBPNpFTypN2ce",
  },
  {
    id: 2,
    name: "Book Swimming",
    image: Swimming,
    description: "Swiming....",
    avatar: "S",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNetNEcnrVHBPNpKBuq086I",
  },
  {
    id: 3,
    name: "Book Table Tennis",
    image: TableTennis,
    description: "Tennis....",
    avatar: "T",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNemFEcnrVHBPNpAvq8uFAP",
  },
  {
    id: 4,
    name: "Book Footbal",
    image: Football,
    description: "Footbal....",
    avatar: "F",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNesYEcnrVHBPNpVCZsr4x5",
  },
  {
    id: 5,
    name: "Book Jercy",
    image: Jercy,
    description: "Jercy....",
    avatar: "J",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNetNEcnrVHBPNpKBuq086I",
  },
  {
    id: 6,
    name: "Book Tournaments",
    image: Tournament,
    description: "Tour....",
    avatar: "S",
    location: "https://maps.app.goo.gl/TRXQ3ujwwMygQk5L6?g_st=iw",
    avenue: "We Meet Sports - DIP",
    priceId: "prctbl_1NNeplEcnrVHBPNpLtQlQBkZ",
  },
];
export default function Sports() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onSubmit = async (priceId: string) => {
    let res = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        productPriceId: priceId,
      }),
    });
    const body = await res.json();
    console.log("res", body.data.url);

    window.location.href = body.data.url;
  };

  return (
    <Container>
      <Box style={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          {SPORT_DATA.map((each: any, index: number) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#38383a" }} aria-label="recipe">
                        {each.avatar}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={each.name}
                    subheader={each.avenue}
                  />
                  <Image
                    src={each.image}
                    alt="Some text"
                    style={{ width: "100%", height: "250px" }}
                  />
                  {/* <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent> */}
                  <CardActions disableSpacing>
                    <Link
                      href={{
                        pathname: "/sports",
                        query: { priceTableId: each.priceId },
                      }}
                      style={{ width: "100%" }}
                    >
                      <ThemeProvider theme={darkTheme}>
                        <Button
                          //   onClick={() => onSubmit(each.priceId)}
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Book Now
                        </Button>
                      </ThemeProvider>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
