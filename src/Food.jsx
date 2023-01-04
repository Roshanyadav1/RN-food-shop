import React from 'react'
import axios from 'axios';

import MainCard from './component/Card'
import Navbar from './component/Navbar'
import Grid from '@mui/material/Unstable_Grid2';
import Loader from './component/Loader';
import { Alert } from '@mui/material';
import Home from './component/Home';
import Boul from './assets/boul.gif'
import Err from './assets/error.gif'

const Food = () => {
    const [search, setSearch] = React.useState("");

    const [food, setFood] = React.useState([])
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const [firstReander, setFirstRender] = React.useState(false)

    const getFood = async () => {
        try {
            setLoading(true)
            let response = await axios.get(`https://api.edamam.com/search?app_id=c88a7772&app_key= 50044037b65719fb8fbf19b2d66aec6a&q=${search}`)

            setFood(response.data)
            setFirstRender(false)
            setLoading(false)
            setError("")
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    React.useEffect(() => {
        setFirstRender(true)
    }, [])

    return (
        <Grid >
            <Navbar search={search} setSearch={setSearch} searchFood={getFood} />

            {/* loading if searching */}
            {loading && (<Loader />)}


            {
                (error || (food?.hits?.length < 1)) && (
                    <>
                        {/* if caught in error */}
                        <Grid container justifyContent='center' my={4} >
                            <Grid item   >
                                {error && (
                                    <>
                                        <img style={{ maxHeight: '520px', margin: '10px' }} src={Err} alt="boul" />

                                        <Alert variant="outlined" severity="error">
                                            {error?.message}
                                        </Alert>
                                    </>
                                )}
                                {(food?.hits?.length < 1) && (
                                    <>
                                        <img style={{ maxHeight: '520px', margin: '10px' }} src={Boul} alt="boul" />
                                        <Alert variant="outlined" severity="info">
                                            Please try something else
                                        </Alert>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </>
                )
            }
            <Grid container display='flex' justifyContent='space-around' my={2} >
                {
                    food?.hits?.map((item, index) => {
                        return (
                            <>
                                <span key={index}>
                                    <MainCard key={index} item={item} />
                                </span>
                            </>
                        )
                    })
                }
            </Grid>

            {
                (!error && firstReander) && (
                    <Grid container justifyContent='center' >
                        <Home />
                    </Grid>
                )
            }

        </Grid>
    )
}

export default Food