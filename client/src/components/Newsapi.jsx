import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import NewsCard from './card/NewsCard';

require('../style/newsapi.css')


function Newsapi() {

    const [news, setnews] = useState([]);
    const history = useHistory();

    const fetchNews = async () => {

        const url2 = `https://gnews.io/api/v4/top-headlines?q=farmer&lang=en&token=41e3c847093004b495a310bc932a56eb`

        // const url2 = `https://gnews.io/api/v4/top-headlines?q=farmer&lang=en&token=20a748200744dcd93bd28d07af2451e2`

 

        const data = await fetch(url2);
        const json_data = await data.json();
        console.log(json_data);
        setnews(json_data.articles)
    }

    useEffect(() => {
        fetchNews();

    }, [])

    return (
        <>
            <div className="news_card">

            {news.map((val) => {
                return (
                    <> 
                        <div className="dfdf">

                            <div className="newscard" onClick={()=>window.open(val.url)}>
                                <img className='newscardimg' src={val.image} alt="image" />
                                <div className="black"></div>

                                <div className="newscardholder">    

                                    <h1 className='newsTitle'>{val.title}</h1>
                                    <hr />
                                    <div className='news_disc'>
                                        <h2 className='newsDescription'>{val.description}</h2>
                                    </div>
                                    {/* <div className="newsReadMorebtn"> */}
                                        {/* <div className="btnreadmore">
                                            <a href={val.url}>Read More</a>
                                        </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}
            </div>


        </>
    )
}

export default Newsapi