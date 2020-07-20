import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
            height: theme.spacing(15),
            textAlign: "center",
        },
    },
}));

const useStylesTypography = makeStyles({
    root: {
        width: "100%",
        maxWidth: 500,
        textAlign: "center",
    },
});

export default function CountryData() {
    const classes = useStyles();
    const clss = useStylesTypography();

    const [countryData, setCountryData] = useState();
    const [dataLoading, setDataLoading] = useState(false);
    const [cty, setCty] = useState("US");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        let cod = event.target.innerText;
        setCty(cod[cod.length - 2] + cod[cod.length - 1]);

        setAnchorEl(null);
    };

    useEffect(() => {
        async function fetchGlobalData() {
            setDataLoading(true);
            const apiResponse = await fetch(
                "https://api.thevirustracker.com/free-api?countryTotal=" + cty
            );
            console.log(cty);

            const dataFromAPI = await apiResponse.json();
            setCountryData(dataFromAPI);
            console.log(dataFromAPI);
            setDataLoading(false);
        }
        fetchGlobalData();
    }, [cty]);

    if (dataLoading) {
        return ( <
            div >
            <
            Typography variant = "h4"
            gutterBottom style = {
                { color: "black" }
            } > { " " } { "Country Data" } { " " } <
            /Typography>{" "} <
            div >
            <
            Button ariaControls = "simple-menu"
            ariaHaspopup = "true"
            style = {
                { backgroundColor: "purple", color: "white" }
            }
            onClick = { handleClick } >
            Select Country { " " } <
            /Button>{" "} <
            Menu id = "simple-menu"
            anchorEl = { anchorEl }
            keepMounted open = { Boolean(anchorEl) }
            onClose = { handleClose } >
            <
            MenuItem value = { "US" }
            onClick = { handleClose } > { " " }
            United - States - US { " " } <
            /MenuItem>{" "} <
            MenuItem value = { "PK" }
            onClick = { handleClose } > { " " }
            Pakistan - PK { " " } <
            /MenuItem>{" "} <
            MenuItem value = { "GB" }
            onClick = { handleClose } > { " " }
            United - kingdom - GB { " " } <
            /MenuItem>{" "} <
            MenuItem onClick = { handleClose } > China - CN < /MenuItem>{" "} <
            MenuItem onClick = { handleClose } > Iran - IR < /MenuItem>{" "} <
            MenuItem onClick = { handleClose } > Canada - CA < /MenuItem>{" "} <
            MenuItem onClick = { handleClose } > Germany - GE < /MenuItem>{" "} < /
            Menu > { " " } <
            /div>{" "} <
            div className = { classes.root } > { " " } <
            Paper elevation = { 3 } >
            <
            div className = { clss.root } >
            <
            Typography variant = "h4"
            gutterBottom style = {
                { color: "black" }
            } > { " " } { "Loading" } { " " } <
            /Typography>{" "} <
            Typography variant = "subtitle1"
            gutterBottom style = {
                { color: "black", fontWeight: "bold" }
            } >
            Total cases { " " } <
            /Typography>{" "} < /
            div > { " " } <
            /Paper>{" "} <
            Paper elevation = { 3 } >
            <
            div className = { clss.root } >
            <
            Typography variant = "h4"
            gutterBottom style = {
                { color: "orange" }
            } > { " " } { "Loading" } { " " } <
            /Typography>{" "} <
            Typography variant = "subtitle1"
            gutterBottom style = {
                { color: "orange", fontWeight: "bold" }
            } >
            Active { " " } <
            /Typography>{" "} < /
            div > { " " } <
            /Paper>{" "} <
            Paper elevation = { 3 } > { " " } <
            div className = { clss.root } >
            <
            Typography variant = "h4"
            gutterBottom style = {
                { color: "green" }
            } > { " " } { "Loading" } { " " } <
            /Typography>{" "} <
            Typography variant = "subtitle1"
            gutterBottom style = {
                { color: "green", fontWeight: "bold" }
            } >
            Recovered { " " } <
            /Typography>{" "} < /
            div > { " " } <
            /Paper>{" "} <
            Paper elevation = { 3 } > { " " } <
            div className = { clss.root } >
            <
            Typography variant = "h4"
            gutterBottom style = {
                { color: "red" }
            } > { " " } { "Loading" } { " " } <
            /Typography>{" "} <
            Typography variant = "subtitle1"
            gutterBottom style = {
                { color: "red", fontWeight: "bold" }
            } >
            Fatalities { " " } <
            /Typography>{" "} < /
            div > { " " } <
            /Paper>{" "} < /
            div > { " " } <
            /div>
        );
    }

    return ( <
        div >
        <
        Typography variant = "h4"
        gutterBottom style = {
            { color: "black" }
        } > { " " } { "Country Data" } { " " } <
        /Typography>{" "} <
        div >
        <
        Button ariaControls = "simple-menu"
        ariaHaspopup = "true"
        style = {
            { backgroundColor: "purple", color: "white" }
        }
        onClick = { handleClick } >
        Select Country { " " } <
        /Button>{" "} <
        Menu id = "simple-menu"
        anchorEl = { anchorEl }
        keepMounted open = { Boolean(anchorEl) }
        onClose = { handleClose } >
        <
        MenuItem value = { "US" }
        onClick = { handleClose } > { " " }
        United - States - US { " " } <
        /MenuItem>{" "} <
        MenuItem value = { "PK" }
        onClick = { handleClose } > { " " }
        Pakistan - PK { " " } <
        /MenuItem>{" "} <
        MenuItem value = { "GB" }
        onClick = { handleClose } > { " " }
        United - kingdom - GB { " " } <
        /MenuItem>{" "} <
        MenuItem onClick = { handleClose } > China - CN < /MenuItem>{" "} <
        MenuItem onClick = { handleClose } > Iran - IR < /MenuItem>{" "} <
        MenuItem onClick = { handleClose } > Canada - CA < /MenuItem>{" "} <
        MenuItem onClick = { handleClose } > Germany - GE < /MenuItem>{" "} < /
        Menu > { " " } <
        /div>{" "} <
        div className = { classes.root } > { " " } <
        Paper elevation = { 3 } >
        <
        div className = { clss.root } >
        <
        Typography variant = "h4"
        gutterBottom style = {
            { color: "black" }
        } > { " " } {
            countryData &&
                countryData.countrydata &&
                countryData.countrydata[0].total_cases
        } { " " } <
        /Typography>{" "} <
        Typography variant = "subtitle1"
        gutterBottom style = {
            { color: "black", fontWeight: "bold" }
        } >
        Total cases { " " } <
        /Typography>{" "} < /
        div > { " " } <
        /Paper>{" "} <
        Paper elevation = { 3 } >
        <
        div className = { clss.root } >
        <
        Typography variant = "h4"
        gutterBottom style = {
            { color: "orange" }
        } > { " " } {
            countryData &&
                countryData.countrydata &&
                countryData.countrydata[0].total_active_cases
        } { " " } <
        /Typography>{" "} <
        Typography variant = "subtitle1"
        gutterBottom style = {
            { color: "orange", fontWeight: "bold" }
        } >
        Active { " " } <
        /Typography>{" "} < /
        div > { " " } <
        /Paper>{" "} <
        Paper elevation = { 3 } > { " " } <
        div className = { clss.root } >
        <
        Typography variant = "h4"
        gutterBottom style = {
            { color: "green" }
        } > { " " } {
            countryData &&
                countryData.countrydata &&
                countryData.countrydata[0].total_recovered
        } { " " } <
        /Typography>{" "} <
        Typography variant = "subtitle1"
        gutterBottom style = {
            { color: "green", fontWeight: "bold" }
        } >
        Recovered { " " } <
        /Typography>{" "} < /
        div > { " " } <
        /Paper>{" "} <
        Paper elevation = { 3 } > { " " } <
        div className = { clss.root } >
        <
        Typography variant = "h4"
        gutterBottom style = {
            { color: "red" }
        } > { " " } {
            countryData &&
                countryData.countrydata &&
                countryData.countrydata[0].total_deaths
        } { " " } <
        /Typography>{" "} <
        Typography variant = "subtitle1"
        gutterBottom style = {
            { color: "red", fontWeight: "bold" }
        } >
        Fatalities { " " } <
        /Typography>{" "} < /
        div > { " " } <
        /Paper>{" "} < /
        div > { " " } <
        /div>
    );
}