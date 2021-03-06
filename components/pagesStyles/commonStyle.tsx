import Head from "next/head";
import {PropsWithChildren} from "react";
import {GenericContainer} from "../layout/GenericContainer";
import {Navigation} from "../navbar/Navigation";

export function getCommonHead() {
    function getBootstrap() {
        return <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                  crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
                    crossOrigin="anonymous"></script>
        </>;
    }

    return (
        <Head>
            <title>Model DB</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta charSet="utf-8"></meta>

            {getBootstrap()}

            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                  integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                  rel="stylesheet"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"/>
        </Head>
    );
}

export function CommonStyle(props: PropsWithChildren<any>): JSX.Element {
    return <>
        {getCommonHead()}
        <Navigation/>
        <GenericContainer>
            {props.children}
        </GenericContainer>
    </>;
}