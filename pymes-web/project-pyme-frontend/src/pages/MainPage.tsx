import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";


const MainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid>
                <Card variant="outlined">
                    <CardHeader
                        title="Card Header"
                    />


                    <CardContent>
                        <Typography>Card content</Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}

export default MainPage;