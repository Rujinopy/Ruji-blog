import Image from 'next/image'

function ProfileImage() {
    return (
        <div className='w-auto'>
            
            <br />

            <img
                src={"https://scontent.fbkk8-4.fna.fbcdn.net/v/t31.18172-8/17972326_1283380185073668_2362015912335926672_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFa89_1Y7BHqiC4XGpu8ywTx3nWu6PJCJ3Heda7o8kInbyNAWbXKmQE_a0WeFwIepGYpFnmmheor2RXSJnpFhOf&_nc_ohc=zeuK52k08egAX924JOA&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfCjpcscLtdiRH4zrq3lgZdJYSlBDO7OiJcEuubqcbgdUw&oe=6509DEF4"}
                alt=""
                className='shadow-blue-300 shadow-md border-2 border-black rounded-3xl'
                width="200" height="400" />
        </div>
    )
}

export default function MyProfile() {
    return <ProfileImage />
}
