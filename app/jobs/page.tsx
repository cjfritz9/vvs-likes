import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import '@/styles/Jobs.css';

const JobsPage: React.FC = () => {
  return (
    <div className='jobs'>
      <div className='jobs-uppersection'>
        <div className='jobs-header'>
          <h1>Join Our Team.</h1>
        </div>
        <div className='jobs-description'>
          <p>
            Our company specializes in providing Instagram growth services for
            followers, likes, and views. Our services are designed to help
            businesses increase their reach and engagement on the platform, and
            achieve their marketing goals. Our CEO is passionate about customer
            satisfaction and leads a team of skilled marketers and robust
            support staff, who work together to deliver the best results for our
            clients.{' '}
          </p>
          <p>
            With their combined knowledge and experience, we are able to provide
            personalized, effective and efficient services that help our clients
            to grow their brand on Instagram. We strive to exceed our clients’
            expectations and provide them with the support they need to succeed
            on the platform.
          </p>
          <p>
            {' '}
            VVSlike has seen a 94% growth spike & spectacular retention rate in
            the past year, thanks to our reputation for providing top-notch
            service and delivering results for our clients.
          </p>
        </div>
        <div>
          <button className='jobs-button'>Apply Now</button>
        </div>
      </div>

      <div className='jobs-lowersection'>
        <div className='jobs-positions'>
          <div className='jobs-position-content'>
            <div className='jobs-position-header'>
              <h1>Positions</h1>
            </div>

            <div className='jobs-accordion'>
              <Accordion>
                <Accordion.Item eventKey='0' className='accordion-item'>
                  <Accordion.Header>
                    <h4>
                      <strong>Back-End Developer</strong>
                    </h4>
                    <span>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 12C9.74891 12.0003 9.50025 11.9505 9.2683 11.8537C9.03634 11.7568 8.82566 11.6147 8.64837 11.4356L0.536662 3.26444C0.188414 2.90115 -0.00428358 2.41457 7.22702e-05 1.90951C0.00442812 1.40446 0.205489 0.921329 0.55995 0.564186C0.91441 0.207043 1.39391 0.00446163 1.89517 7.28174e-05C2.39644 -0.00431599 2.87936 0.189839 3.23993 0.540722L10 7.35002L16.7601 0.540722C17.1206 0.189839 17.6036 -0.00431599 18.1048 7.28174e-05C18.6061 0.00446163 19.0856 0.207043 19.44 0.564186C19.7945 0.921329 19.9956 1.40446 19.9999 1.90951C20.0043 2.41457 19.8116 2.90115 19.4633 3.26444L11.3516 11.4356C11.1743 11.6147 10.9637 11.7568 10.7317 11.8537C10.4997 11.9505 10.2511 12.0003 10 12Z'
                          fill='#FF3E6C'
                        />
                      </svg>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#F3F7FC' }}>
                    <div className='content_block'>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <div className='row'>
                        <div className='col-sm-5 col-md-6'>
                          <h4>
                            <strong>Key Responsibilities Include:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Conducting user research and creating user
                                personas
                              </p>
                            </li>
                            <li>
                              <p>
                                Creating wireframes, prototypes, and
                                high-fidelity designs
                              </p>
                            </li>
                            <li>
                              <p>
                                Working with cross-functional teams to ensure a
                                seamless user experience
                              </p>
                            </li>
                            <li>
                              <p>
                                Staying up-to-date with the latest design trends
                                and technologies
                              </p>
                            </li>
                            <li>
                              <p>
                                Conducting user testing and iterating on designs
                                based on feedback
                              </p>
                            </li>
                            <li>
                              <p>
                                Presenting designs to stakeholders and
                                facilitating design reviews.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                          <h4>
                            <strong>Requirements:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Bachelor’s degree in UX design, human-computer
                                interaction, or related field
                              </p>
                            </li>
                            <li>
                              <p>Strong portfolio of previous work</p>
                            </li>
                            <li>
                              <p>
                                Experience using design software such as Sketch,
                                Figma, or Adobe Creative Suite
                              </p>
                            </li>
                            <li>
                              <p>Excellent problem-solving skills</p>
                            </li>
                            <li>
                              <p>
                                Strong communication and collaboration skills
                              </p>
                            </li>
                            <li>
                              <p>
                                Ability to handle multiple projects
                                simultaneously
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button className='jobs-button'>Apply Now</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1' className='accordion-item'>
                  <Accordion.Header>
                    <h4>
                      <strong>Social Media Graphic Designer</strong>
                    </h4>
                    <span>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 12C9.74891 12.0003 9.50025 11.9505 9.2683 11.8537C9.03634 11.7568 8.82566 11.6147 8.64837 11.4356L0.536662 3.26444C0.188414 2.90115 -0.00428358 2.41457 7.22702e-05 1.90951C0.00442812 1.40446 0.205489 0.921329 0.55995 0.564186C0.91441 0.207043 1.39391 0.00446163 1.89517 7.28174e-05C2.39644 -0.00431599 2.87936 0.189839 3.23993 0.540722L10 7.35002L16.7601 0.540722C17.1206 0.189839 17.6036 -0.00431599 18.1048 7.28174e-05C18.6061 0.00446163 19.0856 0.207043 19.44 0.564186C19.7945 0.921329 19.9956 1.40446 19.9999 1.90951C20.0043 2.41457 19.8116 2.90115 19.4633 3.26444L11.3516 11.4356C11.1743 11.6147 10.9637 11.7568 10.7317 11.8537C10.4997 11.9505 10.2511 12.0003 10 12Z'
                          fill='#FF3E6C'
                        />
                      </svg>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#F3F7FC' }}>
                    <div className='content_block'>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <div className='row'>
                        <div className='col-sm-5 col-md-6'>
                          <h4>
                            <strong>Key Responsibilities Include:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Conducting user research and creating user
                                personas
                              </p>
                            </li>
                            <li>
                              <p>
                                Creating wireframes, prototypes, and
                                high-fidelity designs
                              </p>
                            </li>
                            <li>
                              <p>
                                Working with cross-functional teams to ensure a
                                seamless user experience
                              </p>
                            </li>
                            <li>
                              <p>
                                Staying up-to-date with the latest design trends
                                and technologies
                              </p>
                            </li>
                            <li>
                              <p>
                                Conducting user testing and iterating on designs
                                based on feedback
                              </p>
                            </li>
                            <li>
                              <p>
                                Presenting designs to stakeholders and
                                facilitating design reviews.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                          <h4>
                            <strong>Requirements:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Bachelor’s degree in UX design, human-computer
                                interaction, or related field
                              </p>
                            </li>
                            <li>
                              <p>Strong portfolio of previous work</p>
                            </li>
                            <li>
                              <p>
                                Experience using design software such as Sketch,
                                Figma, or Adobe Creative Suite
                              </p>
                            </li>
                            <li>
                              <p>Excellent problem-solving skills</p>
                            </li>
                            <li>
                              <p>
                                Strong communication and collaboration skills
                              </p>
                            </li>
                            <li>
                              <p>
                                Ability to handle multiple projects
                                simultaneously
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button className='jobs-button'>Apply Now</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2' className='accordion-item'>
                  <Accordion.Header>
                    <h4>
                      <strong>Graphic Designer</strong>
                    </h4>
                    <span>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 12C9.74891 12.0003 9.50025 11.9505 9.2683 11.8537C9.03634 11.7568 8.82566 11.6147 8.64837 11.4356L0.536662 3.26444C0.188414 2.90115 -0.00428358 2.41457 7.22702e-05 1.90951C0.00442812 1.40446 0.205489 0.921329 0.55995 0.564186C0.91441 0.207043 1.39391 0.00446163 1.89517 7.28174e-05C2.39644 -0.00431599 2.87936 0.189839 3.23993 0.540722L10 7.35002L16.7601 0.540722C17.1206 0.189839 17.6036 -0.00431599 18.1048 7.28174e-05C18.6061 0.00446163 19.0856 0.207043 19.44 0.564186C19.7945 0.921329 19.9956 1.40446 19.9999 1.90951C20.0043 2.41457 19.8116 2.90115 19.4633 3.26444L11.3516 11.4356C11.1743 11.6147 10.9637 11.7568 10.7317 11.8537C10.4997 11.9505 10.2511 12.0003 10 12Z'
                          fill='#FF3E6C'
                        />
                      </svg>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#F3F7FC' }}>
                    <div className='content_block'>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <div className='row'>
                        <div className='col-sm-5 col-md-6'>
                          <h4>
                            <strong>Key Responsibilities Include:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Conducting user research and creating user
                                personas
                              </p>
                            </li>
                            <li>
                              <p>
                                Creating wireframes, prototypes, and
                                high-fidelity designs
                              </p>
                            </li>
                            <li>
                              <p>
                                Working with cross-functional teams to ensure a
                                seamless user experience
                              </p>
                            </li>
                            <li>
                              <p>
                                Staying up-to-date with the latest design trends
                                and technologies
                              </p>
                            </li>
                            <li>
                              <p>
                                Conducting user testing and iterating on designs
                                based on feedback
                              </p>
                            </li>
                            <li>
                              <p>
                                Presenting designs to stakeholders and
                                facilitating design reviews.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                          <h4>
                            <strong>Requirements:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Bachelor’s degree in UX design, human-computer
                                interaction, or related field
                              </p>
                            </li>
                            <li>
                              <p>Strong portfolio of previous work</p>
                            </li>
                            <li>
                              <p>
                                Experience using design software such as Sketch,
                                Figma, or Adobe Creative Suite
                              </p>
                            </li>
                            <li>
                              <p>Excellent problem-solving skills</p>
                            </li>
                            <li>
                              <p>
                                Strong communication and collaboration skills
                              </p>
                            </li>
                            <li>
                              <p>
                                Ability to handle multiple projects
                                simultaneously
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button className='jobs-button'>Apply Now</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3' className='accordion-item'>
                  <Accordion.Header>
                    <h4>
                      <strong>UX Designer</strong>
                    </h4>
                    <span>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 12C9.74891 12.0003 9.50025 11.9505 9.2683 11.8537C9.03634 11.7568 8.82566 11.6147 8.64837 11.4356L0.536662 3.26444C0.188414 2.90115 -0.00428358 2.41457 7.22702e-05 1.90951C0.00442812 1.40446 0.205489 0.921329 0.55995 0.564186C0.91441 0.207043 1.39391 0.00446163 1.89517 7.28174e-05C2.39644 -0.00431599 2.87936 0.189839 3.23993 0.540722L10 7.35002L16.7601 0.540722C17.1206 0.189839 17.6036 -0.00431599 18.1048 7.28174e-05C18.6061 0.00446163 19.0856 0.207043 19.44 0.564186C19.7945 0.921329 19.9956 1.40446 19.9999 1.90951C20.0043 2.41457 19.8116 2.90115 19.4633 3.26444L11.3516 11.4356C11.1743 11.6147 10.9637 11.7568 10.7317 11.8537C10.4997 11.9505 10.2511 12.0003 10 12Z'
                          fill='#FF3E6C'
                        />
                      </svg>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#F3F7FC' }}>
                    <div className='content_block'>
                      <p>
                        We are seeking a creative and experienced UX designer to
                        join our team. The ideal candidate will have a passion
                        for creating intuitive and user-friendly designs, a
                        strong understanding of user behavior, and an eye for
                        detail. As a UX designer, you will be responsible for
                        conducting user research, creating wireframes,
                        prototypes, and high-fidelity designs, and working
                        closely with cross-functional teams to ensure a seamless
                        user experience.{' '}
                      </p>
                      <div className='row'>
                        <div className='col-sm-5 col-md-6'>
                          <h4>
                            <strong>Key Responsibilities Include:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Conducting user research and creating user
                                personas
                              </p>
                            </li>
                            <li>
                              <p>
                                Creating wireframes, prototypes, and
                                high-fidelity designs
                              </p>
                            </li>
                            <li>
                              <p>
                                Working with cross-functional teams to ensure a
                                seamless user experience
                              </p>
                            </li>
                            <li>
                              <p>
                                Staying up-to-date with the latest design trends
                                and technologies
                              </p>
                            </li>
                            <li>
                              <p>
                                Conducting user testing and iterating on designs
                                based on feedback
                              </p>
                            </li>
                            <li>
                              <p>
                                Presenting designs to stakeholders and
                                facilitating design reviews.
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className='col-sm-5 offset-sm-2 col-md-6 offset-md-0'>
                          <h4>
                            <strong>Requirements:</strong>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                Bachelor’s degree in UX design, human-computer
                                interaction, or related field
                              </p>
                            </li>
                            <li>
                              <p>Strong portfolio of previous work</p>
                            </li>
                            <li>
                              <p>
                                Experience using design software such as Sketch,
                                Figma, or Adobe Creative Suite
                              </p>
                            </li>
                            <li>
                              <p>Excellent problem-solving skills</p>
                            </li>
                            <li>
                              <p>
                                Strong communication and collaboration skills
                              </p>
                            </li>
                            <li>
                              <p>
                                Ability to handle multiple projects
                                simultaneously
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button className='jobs-button'>Apply Now</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
