import { Accordion } from 'react-bootstrap';
import downArrow from '@/assets/svg/down_arrow.svg';
import { IPackage } from '@/components/details_about_instagram_likes/real_instagram_likes';
import Image from 'next/image';
import useIsClient from '@/lib/hooks/useIsClient';
import '@/styles/packages.css'

interface IProps {
  packagelistArray: IPackage[];
  selected: any;
  handleChangeRadio: any;
  isSelectedRadio: any;
  heading?: any;
  content?: any;
  saveUpto?: any;
  instantlyDelivery?: any;
  btnText: any;
  savingPillData?: any;
}
const PackageList = (props: IProps) => {
  const {
    packagelistArray,
    selected,
    handleChangeRadio,
    isSelectedRadio,
    heading,
    content,
    saveUpto,
    instantlyDelivery,
    btnText,
    savingPillData
  } = props;

  const { isClient } = useIsClient();

  if (!isClient) return null;

  const location = window.location.pathname;
  return (
    <div>
      {packagelistArray.map((item, index) => {
        return (
          <div
            className={item.price?.length !== 1 ? 'pl-2' : 'pl-3'}
            style={{
              width: '100%',
              flexGrow: 1,
              backgroundColor: selected === item.id ? '#c5d6f2' : '#f3f6fc',
              marginBottom: '16px',
              borderRadius: '10px'
            }}
            key={index}
          >
            <div className='d-flex justify-content-between form-check align-items-center'>
              <div
                className='d-flex justify-content-between align-items-center'
                style={{
                  gap: '6px',
                  width: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <input
                    className='form-check-input'
                    type='radio'
                    value={item.name}
                    name={item.name}
                    onChange={handleChangeRadio}
                    style={{
                      margin: '12px 0px',
                      backgroundColor:
                        selected === item.id ? '#FF3E6C' : 'white',
                      boxShadow: 'none',
                      border:
                        selected === item.id
                          ? 'transparent'
                          : '1px solid #02111b',
                      height: '24px',
                      width: '24px'
                    }}
                    checked={isSelectedRadio === item.name}
                    id={item.id}
                  />
                  <label
                    className='form-check-label ms-2'
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#02111B'
                    }}
                  >
                    {item.name}:
                  </label>
                  <div className='packages pkgs-2'>
                    {item?.price &&
                      item?.price.map((price, i) => {
                        return (
                          <button
                            key={i}
                            className='btn rounded-3'
                            style={{
                              padding: 0,
                              border: '',
                              color: '#02111B',
                              background: 'transparent',
                              fontWeight: '700'
                            }}
                          >
                            {price}
                          </button>
                        );
                      })}
                  </div>
                </div>
                <span
                  style={{
                    backgroundColor: '#dce7f7',
                    color: '#0863eb',
                    padding: '4px 8px',
                    borderRadius: '12px !important',
                    fontSize: '16px',
                    fontWeight: '700',
                    justifySelf: 'flex-end',
                    marginRight: '12px'
                  }}
                  className='badge rounded-pill'
                >
                  Save {item.save}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {content && (
        <div>
          <div className='form-check reallike-main-acc'>
            <div className='d-flex justify-content-between align-items-center reallike-acc'>
              <Accordion className='reallike-accordion w-100'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <Image src={downArrow} alt='downArrow' />
                    {heading}
                  </Accordion.Header>
                  <Accordion.Body>{content}</Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <span
                style={{
                  backgroundColor: '#FACC05',
                  color: '#0863eb',
                  padding: '8px 20px',
                  marginRight: '41px',
                  marginTop: '5px',
                  borderRadius: '18px !important'
                }}
                className='badge rounded-pill'
              >
                {saveUpto}
              </span>
            </div>
          </div>
        </div>
      )}{' '}
      {location !== '/free-automatic-likes' && instantlyDelivery && (
        <div
          className='d-flex justify-content-end align-items-end gap-3 mobile_flex'
          style={{
            marginTop: '16px'
          }}
        >
          <span
            style={{
              backgroundColor: '#FACC05',
              color: '#0863eb',
              padding: '8px 20px',
              marginRight: '41px',
              marginTop: '5px',
              borderRadius: '18px !important'
            }}
            className='badge rounded-pill'
          >
            {savingPillData}
          </span>
          <h4
            style={{
              color: '#02111B'
            }}
          >
            {instantlyDelivery}
          </h4>
          <button
            className='btn text-white'
            style={{
              width: '144px',
              height: '50px',
              padding: '17px, 44px, 17px, 44px',
              borderRadius: '25px',
              gap: '10px',
              background: '#FF3E6C',

              fontWeight: '700'
            }}
          >
            {btnText}
          </button>
        </div>
      )}
    </div>
  );
};
export default PackageList;
