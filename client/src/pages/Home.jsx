import Hurricane from '../assets/hurricane.png';
import Wildfire from '../assets/wildfire.png';
import Flood from '../assets/flood.png';

const shelters = [
    {
        name: 'Hurricane Debby, West Bengal',
        description: 'A hurricane has hit the town of Kolkata in West Bengal',
        capacity: 250,
        disasterType: Hurricane
    },
    {
        name: 'Ranchi Flooding',
        description: 'The city of Namkum in Ranchi has been flooded due to heavy rains',
        capacity: 250,
        disasterType: Flood
    },
    {
        name: 'Wildfire at Haryana',
        description: 'A huge wildfire in haryana',
        capacity: 250,
        disasterType: Wildfire
    },
    {
        name: 'Wildfire at Haryana',
        description: 'A huge wildfire in haryana',
        capacity: 250,
        disasterType: Wildfire
    },
    {
        name: 'Wildfire at Haryana',
        description: 'A huge wildfire in haryana',
        capacity: 250,
        disasterType: Wildfire
    },
]

function Home() {
  return (
    <div className='bg-zinc-100 h-fit min-h-screen'>
        <div className='text-3xl font-bold p-10 pb-5'>Active Relief Sites</div>
        <div className='flex flex-wrap'>
        {shelters.map((shelter) => {
            return (
                <div className='flex justify-between w-[40rem] items-center rounded-lg px-10 m-10 bg-white shadow-2xl'>
                    <div className='flex flex-col'>
                        <div className='text-xl font-semibold my-2'>{shelter.name}</div>
                        <div>{shelter.description}</div>
                    </div>
                    <img src={shelter.disasterType} className='h-40' />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Home