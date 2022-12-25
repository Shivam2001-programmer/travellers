import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import "../styles/Home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';
import CalendarNavBar from './CalendarNavBar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { counterActions } from '../redux/State';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import Select from 'react-select';
import { IoLocationOutline } from "react-icons/io5";

import { LoginSocialGoogle } from 'reactjs-social-login';
import { StickyContainer, Sticky } from 'react-sticky';
import GoogleButton from 'react-google-button'

const Home = ({ toggle, setToggle }) => {

  const [inputValue, setInputeValue] = useState("");

  const [linkClickedVlaue, setLinkClickedValue] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  let [children, setChildren] = useState(0);

  let [infants, setInfants] = useState(0);

  const [verified, setVerified] = useState(false);

  const [userimage, setUserImage] = useState("");



  const adultsQuantity = useSelector((state) => state.counter.value);

  const dispacth = useDispatch();

  const increaeHandler = () => {
    dispacth(counterActions.increaseCount());
  }


  const decreaseHandler = () => {
    dispacth(counterActions.decrementCount());
  }

  const inputValueHandler = (e) => {
    setInputeValue(e.target.value);
  }

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ]

  const childrenAdd = () => {
    setChildren(children + 1)
  }

  const childrenLess = () => {
    if (children <= 0) {
      return
    }
    else {
      setChildren(children - 1)
    }
  }

  const infantsAdd = () => {
    setInfants(infants + 1)
  }

  const infantsLess = () => {
    if (infants <= 0) {
      return
    }
    else {
      setInfants(infants - 1)
    }
  }



  const placesArray = [
    {
      id: "1",
      place: "london"
    },
    {
      id: "2",
      place: "russia"
    },
    {
      id: "3",
      place: "spain"
    },
    {
      id: "4",
      place: "brazil"
    },
    {
      id: "5",
      place: "india"
    },
    {
      id: "6",
      place: "france"
    },

    {
      id: "9",
      place: "italy"
    },
    {
      id: "10",
      place: "australia"
    },
    {
      id: "11",
      place: "canada"
    },
    {
      id: "12",
      place: "spain"
    },
    {
      id: "13",
      place: "usa"
    },
    {
      id: "14",
      place: "kyiv"
    },
    {
      id: "15",
      place: "ukraine"
    },
    {
      id: "16",
      place: "newyork"
    },
    {
      id: "17",
      place: "europe"
    },

  ]


  return (


    <div>
      <nav className=" bg-white w-full navBar flex relative justify-between items-center mx-auto px-8 h-20">
        {/* logo */}
        <div className="inline-flex">
          <Link className="_o6689fn" to={"/"}>
            <div className="hidden md:block">
              <img src="logo.jpg" alt="" srcset="" width={102} height={32}/>
            </div>
          </Link>
        </div>

        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">



              <label htmlFor='my-modal-4' className='navbarAnyHold flex inpWidth2 cursor-pointer'>
                <p className=' inline-block'> Anywhere <p className=' inline-block ml-1'> | </p> </p>
                <p className=' inline-block'> Any Week <p className=' inline-block ml-1'> | </p> </p>
                <p className=' text-gray-400 whitespace-nowrap '> Add guests <AiOutlineSearch className=' whitespace-nowrap inline-block' /> </p>
              </label>


              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <input placeholder="Search For Your Destanation" onChange={inputValueHandler} onClick={() => setToggle(!toggle)} value={inputValue} type="text" className="flex outline-none items-center flex-grow-0 flex-shrink pl-2 relative inputBox  border  px-1  py-1" />





                  <div className='searchTabsHold relative flex top-28 right-1'>
                    <Tabs variant='soft-rounded' colorScheme='red'>
                      <TabList>
                        <Tab>PLACE</Tab>
                        <Tab>DATES</Tab>
                        <Tab>GUESTS</Tab>
                      </TabList>


                      <TabPanels>

                        <TabPanel>

                          <div className='absolute z-50 tabContentPlaces'>
                            {inputValue === "" ? <> <div className='tabContent1Hold cursor-pointer'>
                              <Link to={`/location/usa`}>
                                <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' className='tabContent1Image' />
                              </Link>
                              <Link to={`/location/europe`}>
                                <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                              <Link to={`/location/london`}>
                                <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='tabContent1Image' />
                              </Link>

                            </div>

                              <div className='secImages'>
                                <Link to={`/location/canada`}>
                                  <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                                <Link to={`/location/italy`}>
                                  <img src='https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320' className='tabContent1Image mr-1' />
                                </Link>
                                <Link to={`/location/kyiv`}>
                                  <img src='https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320' className='tabContent1Image' />
                                </Link>
                              </div>

                              <div className='secText flex  gap-20  top-24 relative left-16'>
                                <p className='fs'> SouthEast Asia </p>
                                <p className='fs'> Indonesia </p>
                                <p className='fs'> MiddleEast </p>
                              </div>


                              <div className='imgCaptionHold flex flex-wrap'>
                                <p className='fs'> I'm flexible  </p>
                                <p className='fs'> Europe</p>
                                <p className='fs'> United Kingdom </p>

                              </div>  </> : <>
                              <div className='serachResultsHold'>
                                <p className=' fof text-xl text-center mt-3'> MOST TRAVELLED PLACES </p>
                                <div className=' flex flex-row flex-wrap searchDisplayParent'>
                                  {placesArray.filter((item) => {

                                    if (inputValue === "") {
                                      return ""
                                    }
                                    else if (item.place.toLocaleLowerCase().includes(inputValue)) {
                                      return item
                                    }
                                  }).map((item) => {
                                    return (
                                      <div className='searcdisplayIndivitual'>
                                        <div>
                                          <Link to={`/location/${linkClickedVlaue}`}>
                                            <IoLocationOutline className=' inline-block mb-2 text-2xl' />
                                            <p onMouseOver={(e) => setLinkClickedValue(e.target.innerText)} className="capitalize fof inline-block">  {item.place} </p>
                                          </Link>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            </>}


                          </div>



                        </TabPanel>
                        <TabPanel>
                          <CalendarNavBar />
                        </TabPanel>

                        <TabPanel>
                          <div className='tab3MainHold flex flex-col'>
                            <div className='adultsKidsHold flex-col flex text-lg font-medium fof'>
                              <p> Adults  </p>
                              <p>Children</p>
                              <p>Infants  </p>
                              <p> Pets </p>
                            </div>

                            <div className='adultCriteriaHold flex flex-col relative'>
                              <p className=' text-gray-400'> Ages 13 or above </p>
                              <p className=' text-gray-400'> Ages 2-12 </p>
                              <p className=' text-gray-400'> Under 2 </p>
                              <p className=' text-gray-400'> Select pet friendly </p>
                            </div>


                            <div className='divideLineHold flex flex-col'>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                              <p className='navLine'>  </p>
                            </div>

                            <div className='btnControlsPlus flex flex-col relative'>
                              <AiOutlinePlusCircle className='fss' onClick={increaeHandler} />
                              <AiOutlinePlusCircle className='fss' onClick={childrenAdd} />
                              <AiOutlinePlusCircle className='fss' onClick={infantsAdd} />
                            </div>

                            <div className='btnControlMinus flex flex-col relative cursor-pointer' id='btnmin'>
                              <AiOutlineMinusCircle className='fss' onClick={decreaseHandler} />
                              <AiOutlineMinusCircle className='fss' onClick={childrenLess} />
                              <AiOutlineMinusCircle className='fss' onClick={infantsLess} />

                            </div>

                            <div className='navQtyHold relative'>
                              <p className=' w-3'> {adultsQuantity} </p>
                              <p className=' w-3'> {children}</p>
                              <p className=' w-3'>{infants} </p>
                            </div>


                            <div className='selectWrapper'>
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="outline-none"
                              />
                            </div>



                          </div>
                        </TabPanel>

                      </TabPanels>
                    </Tabs>

                  </div>

                </label>
              </label>

            </div>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
              </div>
              <div className="block relative">
                <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="block">
              <div className="inline relative">
                {<button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div className="pl-1 googleAuthBtnHold w-10">
                    <LoginSocialGoogle
                      client_id={`${process.env.REACT_APP_AUTH_CLIENT}.apps.googleusercontent.com`}
                      scope="openid profile email"
                      discoveryDocs="claims_supported"
                      access_type="offline"
                      onResolve={({ provider, data }) => {
                        (data.email_verified === true ? setUserImage(data.picture) : setVerified(false));

                      }}
                      onReject={(err) => {
                        console.log(err)
                      }}
                    >
                      <GoogleButton type='dark' label='' className='googleAuthBtn' />
                    </LoginSocialGoogle>
                  </div>
                  {userimage.length > 2 ? <img src={userimage} className="UserLoginImage ml-5" /> : <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>}

                </button>}

              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav >

    </div >
  )
}

export default Home
