import Image from 'next/image';
import clock_icon from '@/assets/images/clock_icon.png';
import '@/styles/blogcards.css';
import '@/styles/BlogAuthorCard.css';
import Link from 'next/link';

interface IProps {
  handleCardDetails?: any;
  item?: any;
  img: any;
  type: any;
  date: any;
  blogHeader: any;
  blogDescription: any;
  authorProfilePic?: any;
  authorName: any;
  slug: string;
  prefetch: boolean;
}

function Blogcards(props: IProps) {
  const handleCardDetails = props.handleCardDetails;
  const item = props.item;
  return (
    <div className='blog-card col-sm-12 col-lg-4' style={{ cursor: 'pointer' }}>
      <Link
        prefetch={props.prefetch}
        href={`/blogs/${props.slug}`}
        style={{ textDecoration: 'none' }}
      >
        <div className='card'>
          <Image
            src={props.img}
            height={316}
            width={390}
            className='card-img-top tw-h-[316px] tw-w-[390px] tw-object-cover tw-object-center'
            alt='blog card image'
          />
          <div className='card-body' style={{ padding: '1rem' }}>
            <div className='blog-type-container'>
              <p className='card-type'>{props.type}</p>
              <div className='blog-date-container'>
                <Image
                  src={clock_icon}
                  height={18}
                  width={18}
                  style={{
                    height: '18px',
                    width: '18px',
                    marginTop: '4px'
                  }}
                  alt='clock icon'
                />
                <p className='card-date'>{props.date}</p>
              </div>
            </div>
            <h2
              style={{ fontWeight: 600, height: '60px' }}
              dangerouslySetInnerHTML={{ __html: props.blogHeader }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: props.blogDescription }}
              style={{
                height: '192px',
                marginBottom: '8px',
                textAlign: 'left'
              }}
            />
            <div className='blog-author-container'>
              {props.authorProfilePic && (
                <Image
                  src={props.authorProfilePic}
                  height={40}
                  width={40}
                  alt='Photo of Author'
                />
              )}
              <p className='tw-ml-2 tw-my-4'>{props.authorName}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blogcards;
