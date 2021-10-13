import MeetupDetails from '../../../components/meetups/MeetupDetails';

const DUMMY_MEETUP = {
  id: 'm1',
  image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  title: 'First meetup',
  address: 'Some address 10, 231321 Some City',
  description: 'This is the first meetup!',
};

const MeetupDetailsPage = () => {
  return <MeetupDetails meetup={DUMMY_MEETUP} />;
};

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export function getStaticProps(context) {
  const { meetupId } = context.params;

  return {
    props: {
      ...DUMMY_MEETUP,
      id: meetupId,
    },
  };
};

export default MeetupDetailsPage;
