import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import VanillaTilt from "vanilla-tilt"

require('../../style/tipscard.css')

function TipsCard() {
    const [api, setApi] = useState([

        {
            Tipno: 1,
            Tip: "START WITH A PLAN",
            Discription: "Just like any endeavour, the smart way to start is by planning. Success doesnt happen by accident, so come up with a business plan that takes into account your financial situation, your ideal crops, how much you plan to invest and hope to yield, and what kinds of equipment to buy."
        },

        {
            Tipno: 2,
            Tip: "CONSULT OTHER ORGANIC FARMERS",
            Discription: "In the planning stages of your process, talk to other people who are already farming organically. Find out what works for them. Ask them what they wish they had known in their beginning stages. You can also find helpful resources online including webinars, workshops, and certification programs for farmers across Ontario. The Canadian Organic Growers provides a number of these educations resources at http://www.cog.ca/"
        },
        {
            Tipno: 3,
            Tip: "KNOW THE CORRECT TIME TO PLANT",
            Discription: "Seeds respond to certain soil temperatures, so planting too soon can be wasteful. Corn seeds require that the soil be at least 12°C (55℉) in order to start sprouting. Any cooler, and they may take weeks to sprout, or worse, not sprout at all. Different vegetables will have different temperature tolerances, so make sure you research ideal planting times for the crops you choose."
        },
        {
            Tipno: 4,
            Tip: "WAIT UNTIL THE SOIL TEMP IS OPTIMAL FOR GERMINATION",
            Discription: "Corn is a warm-season crop. While it can survive at a minimum of 10°C (50℉), it is recommended that you wait until there are consistent warm temperatures in your region. Preferred soil temperature for corn seed germination ranges from 16°C-35°C (60.8℉ – 95℉). With this in mind, it’s important be patient and ensure that you are not planting too early."
        },
        {
            Tipno: 5,
            Tip: " INCREASING NUTRIENTS IN THE SOILS THROUGH COVER CROPS, MANURE, ETC",
            Discription: "Methods like adding manure and additional plants can provide benefits to your crops by adding extra nutrients and stabilizing the soil. Cover crops help prevent soil erosion, increase water infiltration, recycle nutrients, fight against insects, and prevent the growth of weeds through soil competition. Since cover crops also protect the soil from the impact of rain and wind, erosion will decrease and cause nutrient efficiency to rise."
        },
        {
            Tipno: 6,
            Tip: "CONSIDER THE CLIMATE",
            Discription: "Where you live will have an impact on which plants will thrive on your farm, when you plant, and when to harvest. Your decision of what to plant will also be influenced by what’s going to provide the best economic returns, and will be in demand for sale. Again, consulting local farmers will help, as well as researching which types of crops thrive using organic methods in your geographic region. For a summary of different growing regions in Canada, visit http://www.thecanadianencyclopedia.ca/en/article/crops/."
        }
    ])

    const history = useHistory();

    const gettips = () => {
        // const 
    }



    useEffect(() => {
        gettips();

        VanillaTilt.init(document.querySelectorAll(".TipsContainer"), {
            max: 25,
            speed: 400
        });
    }, [])
    return (
        <>

            {api.map((val) => {
                return (
                    <>

                        <div className="TipsContainer" onClick={() => history.push('/Tip')}>
                            <h1>Tip no.{val.Tipno}</h1>
                            <h2>{val.Tip}</h2>
                            <h3> {val.Discription}  </h3>

                        </div>
                    </>
                )
            })}



        </>
    )
}

export default TipsCard