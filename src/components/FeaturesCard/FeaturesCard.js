import './FeaturesCard.css';

const FeaturesCard = () => {
    return (
        <div className='CardContiner'>
            <div>
                <p>Oficial Reseller</p>
                <div className='FeaturesImgContainer'><img  src='http://cms.info.yorku.ca/files/2018/05/hand-shake.gif?x86445'/></div>
            </div>
            <div>
                <p>Fast Shipping</p>
                <div className='FeaturesImgContainer'><img  src='https://farmaciapilartaboada.com/wp-content/uploads/2022/08/108-box-package-open-close-morph-outline.gif'/></div>
            </div>
            <div>
                <p>Phisical Shop</p>
                <div className='FeaturesImgContainer'><img src='https://www.citypng.com/public/uploads/small/11641399158vhyq4xddmek9vhhhiyexf955q4szfpnhuyilsimnvql5s3banquo37bnko8xtnsg3pzs3vqbsk0lhovdibfsaa4igauprk5qsl4b.png'/></div>
            </div> 
        </div>
    )
}

export default FeaturesCard