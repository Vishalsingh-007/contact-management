// ContactPage
// Imports
import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { AddContact, DeleteContact, EditContact } from '../redux/action/contact'
import { v4 } from "uuid"
import { FaUserAlt } from "react-icons/fa"
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineSignalWifiStatusbar4Bar } from "react-icons/md"
import { IoMdCreate } from "react-icons/io"
import { RxCross1 } from "react-icons/rx"

const Contact = ({ AddContact, contacts, EditContact, DeleteContact }) => {
    // useState
    const [displayModal, setdisplayModal] = useState(false)
    const [editContact, seteditContact] = useState(false)
    const [currentContact, setcurrentContact] = useState('')
    const [status, setStatus] = useState("active");
    const [view, setview] = useState(false)
    const [contact, setcontact] = useState({
        name: "",
        mobileNumber: "",
        active: status,
        id: ""
    })
    // UseEffect Fot Set Title
    useEffect(() => {
        document.title = 'Contact Management';
      });
    // Function For set status of contact
    const handleStatusChange = (event) => {
        console.log('Status changed:', event.target.value);
        setStatus(event.target.value);
    };
    // Using UseEffect for set status of when status is changed it will run
    useEffect(() => {
        setcontact((prevContact) => ({
            ...prevContact,
            active: status,
        }));
    }, [status])
    // Toogle The Add Contact Modal Visiblity
    const modalopenclose = () => {
        setdisplayModal(!displayModal)
    }
    // Toogle the Edit Modal Visiblity
    const modalopencloseEdit = () => {
        seteditContact(!editContact)
    }
    // Function For Add Contact
    const addContact = (e) => {
        e.preventDefault()
        AddContact({ ...contact, id: v4() })
        setdisplayModal(!displayModal)

    }
    // Function For Update Contact
    const handelUpdate = (e) => {
        e.preventDefault()
        EditContact(contact, currentContact.id)
        seteditContact(!editContact)

    }
    // Function For set Cliked Contact
    const handelEditContact = (clickedContact) => {
        seteditContact(!editContact)
        setcurrentContact(clickedContact)
        console.log("Editing contact", clickedContact)
        setview(false)

    }
    // Function For Delete Contact
    const handelDelete = (clickedContact) => {
        console.log("Deleting contact", clickedContact)
        DeleteContact(clickedContact.id)
        setview(false)
    }
    // Function For View Contact 
    const handelView = (clickedContact) => {
        setview(!view)
        setcurrentContact(clickedContact)
        console.log("Viewing contact", clickedContact)
    }
    return (
        <>
            <div className="lg:w-[74%] lg:ml-[26%] md:w-[80%] md:ml-[20%] w-screen h-screen bg-slate-700  p-6 ">
                <div className="mt-2">
                    <div className="relative overflow-x-auto  rounded-lg" style={{boxShadow:"0px 0px 152px -38px rgb(141 187 251)"}}>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                {/* Heading */}
                                <div className="mt-4 flex justify-between ">
                                    My Contacts
                                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex" onClick={modalopenclose}>
                                    <IoMdCreate className='mx-2 mt-1' />   Create Contact
                                    </button>
                                </div>
                            </caption>
                            {/* Table Head */}
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 ">
                                        Contact name
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Mobile Number
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            {/* Display All Contact From map */}
                            {contacts.length > 0 && contacts.map((con, index) => {
                                return (
                                    <tbody key={index} >
                                        <tr className="bg-white dark:bg-gray-800 ">
                                            <th
                                                scope="row"
                                                className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {con.name}
                                            </th>
                                            <td className="px-6 py-4 ">
                                                {con.mobileNumber}
                                            </td>
                                            <td className="text-center lg:text-center px-0 py-0 sm:flex sm:px-2 sm:py-2 md:flex md:px-3 md:py-3 lg:px-4 lg:py-4 ">
                                                {/* View Buttton */}
                                                <button data-popover-target="popover-user-profile" className="relative text-center inline-flex items-center justify-center p-0.5 mt-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={() => handelView(con)}>
                                                    <span className="relative lg:px-5  lg:py-4  px-1 py-1 md:px-3 md:py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-center text-sm">
                                                        View Contact
                                                    </span>
                                                </button>
                                            {/* Edit Button */}
                                                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm lg:px-5  lg:py-2.5  px-1 py-1 md:px-3 md:py-3 text-center mr-2 mb-2" onClick={() => handelEditContact(con)}>
                                                    Edit
                                                </button>
                                                {/* Delete Button  */}
                                                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm lg:px-5  lg:py-2.5  px-1 py-1 md:px-3 md:py-3 text-center mr-2 mb-2" onClick={() => handelDelete(con)}>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>

                                )
                            }) }
                        </table>
                        {/* When contact.length is equal to zero this will show  */}
                             {contacts.length === 0 && <div className='text-xl font-bold text-white items-center justify-center  p-3 dark:bg-gray-800 flex '>
                               <RxCross1  className='mx-2 mt-1' /> No Contact Found Please Add Contact From Create Contact Button
                                </div>}

                    </div>
                    <div className="mt-4">
                        {/* Display Contact from View Contact Button  */}
                        {view &&
                            <div data-popover id="popover-user-profile" role="tooltip" className="absolute z-10 top-[120px]  xl:right-[400px] sm:right-[200px] md:right-[190px]  bottom-0 inline-block w-80 text-sm text-gray-500  duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  h-[250px] dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                                <div className="p-3 flex flex-col items-start ">
                                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" onClick={handelView}>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <h2 className='text-xl  text-white'>Contact Details</h2>
                                    <div className='mt-3 text-lg text-white flex '>
                                        <FaUserAlt className='mx-2 mt-1' /> Name:  {currentContact.name}
                                    </div>
                                    <div className='mt-3 text-lg text-white flex'>
                                       <BsTelephoneFill className='mx-2 mt-1' /> Mobile Number : {currentContact.mobileNumber}
                                    </div>
                                    <div className='mt-3 text-lg text-white flex'>
                                      <MdOutlineSignalWifiStatusbar4Bar className='mx-2 mt-1' />   Active : <span className={`${currentContact.active === "active" ? "bg-green-600" : "bg-red-600"} top-[141px] left-[10rem] absolute  w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full`}></span> {currentContact.active}
                                    </div>
                                </div>
                            </div>

                        }
                    </div>
                </div>
                {/* Modal For Add Contact */}
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${displayModal ? "block" : "hidden"}  top-[80px]  xl:right-[400px] sm:right-[200px] md:right-[190px] xs:w-[18rem] sm:w-[18rem] lg:w-[28rem] xl:w-[28rem] 2xl:w-[30rem] z-50  absolute  p-4 overflow-x-hidden overflow-y-auto  `}>
                    <div className="relative  max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Button For Close Modal */}
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" onClick={modalopenclose}>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                {/* Heading Add Contact */}
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Contact</h3>
                                {/* Form For Add Contact */}
                                <form className="space-y-6" action="/" onSubmit={addContact}>
                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Name" required onChange={(e) => setcontact({ ...contact, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                        <input type="text" name="number" id="number" placeholder="Enter Mobile Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setcontact({ ...contact, mobileNumber: e.target.value })} />
                                    </div>
                                    {/* Radio For Status */}
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-radio-1"
                                            type="radio"
                                            value={"active"}
                                            name="default-radio"
                                            checked={status === 'active'} // Check if status is active
                                            onChange={handleStatusChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="default-radio-1"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Active
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="default-radio-2"
                                            type="radio"
                                            value={"inactive"}
                                            name="default-radio"
                                            checked={status === 'inactive'} // Check if status is inactive
                                            onChange={handleStatusChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="default-radio-2"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Inactive
                                        </label>
                                    </div>
                                    {/* Button For Add Contact */}
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add Contact</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal For Update Contact  */}
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${editContact ? "block" : "hidden"}  top-[80px]  xl:right-[400px] sm:right-[200px] md:right-[190px] z-50  absolute  p-4 overflow-x-hidden overflow-y-auto xs:w-[18rem] sm:w-[18rem] lg:w-[28rem] xl:w-[28rem] 2xl:w-[30rem] `}>
                    <div className="relative  max-w-md max-h-full">
                        {/* Button For Close Modal */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" onClick={modalopencloseEdit}>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                {/* Heading Update Contact */}
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update Contact</h3>
                                {/* Form For Update Contact */}
                                <form className="space-y-6" action="/" onSubmit={handelUpdate}>
                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Update Your Name" required onChange={(e) => setcontact({ ...contact, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                        <input type="text" name="number" id="number" placeholder="Update Your Mobile Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={(e) => setcontact({ ...contact, mobileNumber: e.target.value })} />
                                    </div>
                                    {/* Radio of status */}
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-radio-1"
                                            type="radio"
                                            value={"active"}
                                            name="default-radio"
                                            checked={status === 'active'} // Check if status is active
                                            onChange={handleStatusChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="default-radio-1"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Active
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="default-radio-2"
                                            type="radio"
                                            value={"inactive"}
                                            name="default-radio"
                                            checked={status === 'inactive'} // Check if status is inactive
                                            onChange={handleStatusChange}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="default-radio-2"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Inactive
                                        </label>
                                    </div>
                                    {/* Button For Update Contact */}
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Update Contact</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
// Function for get state from reducer
const mapStateToProps = (state) => {
    return { contacts: state.contactReducer }
}
// Dispatch function from contact-reducer
const mapDispatchToProps = (dispatch) => ({
    AddContact: (contact) => (dispatch(AddContact(contact))),
    EditContact: (contact, id) => (dispatch(EditContact(contact, id))),
    DeleteContact: (id) => (dispatch(DeleteContact(id)))
})
// ... (mapStateToProps, mapDispatchToProps, and connect statements)
export default connect(mapStateToProps, mapDispatchToProps)(Contact)