import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGetPostsByTypeQuery } from '../../redux/slice/NewsCheckSlice';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import NewsCard from '../NewsCard/NewsCard';
import './Home.css'
import { useGetSerchedNewsQuery } from '../../redux/slice/NewsSearchSlice';



const Home :React.FC= () => {

   //getting the types of news like arts science world 
    const news = useSelector((news: any) => news.newsType.newsType)

    //RTK Query for getting the data based on selected news type
    const NewYorkNews = useGetPostsByTypeQuery(news)
   // const searchedNews = useSelector((state: any) => state.searchedvalue.value)

   //here checking if api is in pending state
    if (!NewYorkNews.data || NewYorkNews.isLoading) return <div>Loading....</div>
    


    return (
        <>
            <Header />
            <Grid container spacing={-1}>
                {NewYorkNews.data.results.map((item: any, index: any) => {
                    
                    return (
                        <>
                            <Grid item xs={12} sm={6} md={4} lg={3}>

                                <NewsCard key={index} data={item} index={index} />
                            </Grid>

                        </>
                    )

                })}

            </Grid>
        </>
    )

}

export default Home
