import {GetStaticProps, GetStaticPaths} from 'next'

import {User} from '../../interfaces'
import {sampleUserData} from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ENVIRONMENT} from "../../environment/config";
import {useTheme} from "@mui/system";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery
} from "@mui/material";

type Props = {
    item?: User
    errors?: string
}
type StaticPropsDetailQueryParams = {
    id: string;
    hello: string;
}
const StaticPropsDetail = ({item, errors}: Props) => {
    const router = useRouter()
    const queryParams = router.query as StaticPropsDetailQueryParams;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        fetch(ENVIRONMENT.host + '/posts/1')
            .then((res) => res.json())
            .then((data) => {
                console.log('Hello data',data)
                console.log('queryParams',queryParams)
            })
    }, [])
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript Example">
                <p>
                    <span style={{color: 'red'}}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout
            title={`${
                item ? item.name : 'User Detail'
            } | Next.js + TypeScript Example`}
        >
            {item && <ListDetail item={item}/>}
            <p>
                Hola
            </p>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open responsive dialog
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Layout>
    )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sampleUserData.map((user) => ({
        params: {id: user.id.toString()},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const id = params?.id
        const item = sampleUserData.find((data) => data.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return {props: {item}}
    } catch (err: any) {
        return {props: {errors: err.message}}
    }
}
