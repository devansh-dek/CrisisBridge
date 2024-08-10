import Hurricane from '../assets/hurricane.png';
import Wildfire from '../assets/wildfire.png';
import Flood from '../assets/flood.png';
import Earthquake from '../assets/earthquake.png';
import Tornado from '../assets/tornado.png';
import Other from '../assets/other.png';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { sheltersAtom } from '@/store/shelters';
import { ArrowRight } from 'lucide-react';
import { currentShelterAtom } from '@/store/currentShelter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const disasterTypes = ['Hurricane', 'Earthquake', 'Flood', 'Wildfire', 'Tornado', 'Other'];
const disasterImages = [Hurricane, Earthquake, Flood, Wildfire, Tornado, Other];

function Home() {
    const shelters = useRecoilValueLoadable(sheltersAtom);
    const setCurrentShelter = useSetRecoilState(currentShelterAtom);
    const navigate = useNavigate();

    function handleClick(shelter) {
        // const orgs = shelter.organizations.map(async (org) => {
        //     const orggg = await axios.get('http://localhost:3000/api/v1/organization/'+org.orgId);
        //     return (orggg.name);
        // });
        // console.log(orgs);
        // shelter = { ...shelter, orgnames: []};
        setCurrentShelter(shelter);
        navigate('/shelter');
    }
    return (
        <div className='bg-zinc-100 h-fit min-h-screen'>
            <div className='text-3xl font-bold p-10 pb-5'>Active Relief Sites</div>
            <div className='flex flex-wrap'>
            {shelters.state == 'loading' ? <div className='p-10'>Loading...</div> : shelters.contents.map((shelter, i) => {
                return (
                    <div onClick={() => {handleClick(shelter)}} key={i} className='flex group hover:scale-105 cursor-pointer transition justify-between w-[40rem] items-center rounded-lg px-10 m-10 bg-white shadow-2xl'>
                        <div className='flex flex-col'>
                            <div className='text-xl font-semibold my-2'>{shelter.name}</div>
                            <div>{shelter.description}</div>
                        </div>
                        <img src={disasterImages[disasterTypes.indexOf(shelter.disasterType)]} className='h-40 my-3' />
                        <ArrowRight className='group-hover:translate-x-3 transition' />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Home