import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'First meetup',
    address: 'Some address 10, 231321 Some City',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'Second meetup',
    address: 'Some address 54, 6334 Some City',
    description: 'This is the second meetup!',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
