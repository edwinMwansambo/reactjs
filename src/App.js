import React from "react";
import LoginForm from "./Components/logInForm";
import SearchFilters from "./Components/searchFilter";
import BookingCalendar from "./Components/bookingCalender";
import HostelListings from "./Components/hostellisting";
import PaymentForm from "./Components/paymentForm";
import RegistrationForm from "./Components/registrationForm";

export default function App () {
    return (
        <>
        <div>
            <br/>
            <SearchFilters/>
            <br/>
            <LoginForm/>
            
        
            <br/>
            <HostelListings/>
            <br/>
            <PaymentForm/>
            <br/>
            <RegistrationForm/>
            
        </div>
        </>
    )
}