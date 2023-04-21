import React from "react";
import {render,  fireEvent, screen, waitFor} from "@testing-library/react";
import {  MemoryRouter, useNavigate } from 'react-router-dom';

// import Facelogy, { ResponseContext } from '../Facelogy';
// import Fbshow, {getLogout} from "../Fbshow";
import { useContext,createContext } from "react";
import { useState } from "react";
import Facelogy from "../Facelogy";




describe("unit-test", () => {
    // test("renders the right component with following path '/'", () => {
    //     const fbs = render(<MemoryRouter><Facelogy/></MemoryRouter>)    
    // })

    // test("renders the right component with following path '/show'", () => {
    //     const data = {id: "118028471238806",first_name: "Raju",last_name: "Tripathi",email: "rajutripathi0298@gmail.com",picture: {data: {height: 50,is_silhouette: true,url: "https://scontent.fpnq7-6.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=GCswlcCrBvYAX9KSkuv&_nc_ht=scontent.fpnq7-6.fna&edm=AP4hL3IEAAAA&oh=00_AfDs1shdR8F4_XUPoMmYYaCW9NEExKMiz0ueOmVHscfA5w&oe=64533FD9",width: 50}}};
    //     const setData = jest.fn();
    //     const fbs = render (
    //      <ResponseContext.Provider value={{data,setData}}>
    //          <MemoryRouter><Facelogy/></MemoryRouter>
    //      </ResponseContext.Provider>
    //     );
    //  })

    test("Login Component", () => {
        const fbs = render(<MemoryRouter><Facelogy/></MemoryRouter>)    
        const nameElement = fbs.getByText("Login with Facebook")
        expect(nameElement).toBeInTheDocument()
    })

    // test("Logout Component", () => {
    //     const fbs = render(<MemoryRouter><Fbshow/></MemoryRouter>)    
    //     const nameElement = fbs.getByText("Logout")
    //     expect(nameElement).toBeInTheDocument()
    // })

    //  test("Logout Component", () => {
    //    const data = {id: "118028471238806",first_name: "Raju",last_name: "Tripathi",email: "rajutripathi0298@gmail.com",picture: {data: {height: 50,is_silhouette: true,url: "https://scontent.fpnq7-6.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=GCswlcCrBvYAX9KSkuv&_nc_ht=scontent.fpnq7-6.fna&edm=AP4hL3IEAAAA&oh=00_AfDs1shdR8F4_XUPoMmYYaCW9NEExKMiz0ueOmVHscfA5w&oe=64533FD9",width: 50}}};
    //    const setData = jest.fn();
    //    const fbs = render (
    //     <ResponseContext.Provider value={{data,setData}}>
    //         <MemoryRouter><Fbshow/></MemoryRouter>
    //     </ResponseContext.Provider>
    //    );
    // //    const [value,setValue] = useContext(ResponseContext);
       
    //    const nameElement = fbs.getByText('Logout');
    //    expect(nameElement).toBeInTheDocument();
    // })

    test("Login Button Component", () => {
        window.FB = {
            login: jest.fn()
        };
        const { getByText } = render(<MemoryRouter><Facelogy/></MemoryRouter>);  
        const btn = getByText('Login with Facebook');
        fireEvent.click(btn);
        expect(window.FB.login).toHaveBeenCalled();
    })

    // test("Logout Button Component", () => {
    //     window.FB = {
    //         getLoginStatus: jest.fn((callback) => callback({status: 'connected'})),
    //         logout: jest.fn()
    //     };
    //     const { getByText } = render(<MemoryRouter><App/></MemoryRouter>);  
    //     const btn = getByText('Logout');
    //     fireEvent.click(btn);
    //     expect(window.FB.getLoginStatus).toHaveBeenCalled();
    //     expect(window.FB.logout).toHaveBeenCalled();

    // })

    // test("Logout Button Component", () => {
    //     window.FB = {
    //         getLoginStatus: jest.fn((callback) => callback({status: 'connected'})),
    //         logout: jest.fn()
    //     };
    //     const data = {id: "118028471238806",first_name: "Raju",last_name: "Tripathi",email: "rajutripathi0298@gmail.com",picture: {data: {height: 50,is_silhouette: true,url: "https://scontent.fpnq7-6.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=GCswlcCrBvYAX9KSkuv&_nc_ht=scontent.fpnq7-6.fna&edm=AP4hL3IEAAAA&oh=00_AfDs1shdR8F4_XUPoMmYYaCW9NEExKMiz0ueOmVHscfA5w&oe=64533FD9",width: 50}}};
    //     const setData = jest.fn();

    //     const { getByText } = render(
    //         <ResponseContext.Provider value={{data,setData}}>
    //             <MemoryRouter><Fbshow/></MemoryRouter>
    //         </ResponseContext.Provider>
    //     );  
        
    //     const btn = getByText('Logout');
    //     fireEvent.click(btn);
    //     expect(window.FB.getLoginStatus).toHaveBeenCalled();
    //     expect(window.FB.logout).toHaveBeenCalled();
    // })

    // test('Login function returns true if username and password is correct', ()=> {
    //     const username = 'rajutripathi0298@gmail.com';
    //     const password = 'Apple@123';
    //     expect(login(username))
    // })

    // const mockResponse = {
    //     id: '1234567908',
    //     first_name: 'Kishan',
    //     last_name: 'Shetty',
    //     email: 'kishancan@gmail.com',
    //     picture: {
    //         data: {
    //             url: 'https://example.com/picture.jpg',
    //         },
    //     },
    // };

    window.FB = {
        login: jest.fn(),
    };
    test('calls FB Login Function when button is clicked', () => {
        const { getByText } = render(<MemoryRouter><Facelogy/></MemoryRouter>);  
        const btn = getByText('Login with Facebook');
        fireEvent.click(btn);
        expect(window.FB.login).toHaveBeenCalled();
    })
    

    test('call Facebook Api and get userdata', async() => {
        const onLoginSuccessMock = jest.fn();
        const onLoginFailureMock = jest.fn();

        window.FB.login = jest.fn((callback) => callback({authResponse: {accessToken: '1234567890'}}));
        const { getByText } = render(<MemoryRouter><Facelogy onLoginSuccess={onLoginSuccessMock} onLoginFailure={onLoginFailureMock} /></MemoryRouter>);  
        const btn = getByText('Login with Facebook');
        fireEvent.click(btn);

        const mockResponse = {
                id: '1234567908',
                first_name: 'Kishan',
                last_name: 'Shetty',
                email: 'kishancan@gmail.com',
                picture: {
                    data: {
                        url: 'https://example.com/picture.jpg',
                    },
                },
            };

    

    
        // expect(window.FB.api).toHaveBeenCalledWith(
        //     '/me',
        //     'GET', 
        //     {
        //         locale: 'en_US', 
        //         fields: 'id,first_name,last_name,email,picture',
        //         access_token: localStorage.getItem('accessToken'),
        //     },
            
        // );
        // // expect(window.FB.api).toHaveBeenCalled();
    
        // expect(component.state('data')).toEqual(mockResponse);

        window.FB.api = jest.fn((endpoint, method, params, callback)=> {
            expect(endpoint).toBe('/me');
            expect(method).toBe('GET');
            expect(params).toEqual({
                locale: 'en_US', 
                fields: 'id,first_name,last_name,email,picture',
                access_token: localStorage.getItem('accessToken'),
            });
            callback(mockResponse);
        });

        await waitFor(() => expect(onLoginSuccessMock).toHaveBeenCalledWith(mockResponse, 'connected'));
    });


   
})