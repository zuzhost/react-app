import React, { Component } from 'react';
import AppContext from "./AppContext";

//CSS
import "./css/props.css";
import "./css/App.css";

//global baseurl
global.baseurl = "http://localhost:3000/";

function AppLoader(props){
    
    const splash = () => {
        return (
            <div className="splash abs abc">
                <img src={global.baseurl + "ui/app-icon.png"} className="logo" />
            </div>
        )
    }


    const loadApp = async (context) => {
        setTimeout(() => {
            context.setAppLoaded(true);
        }, 1000);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                            <div>App Loaded</div>
                            :
                            <AppContext.Consumer>
                                {
                                    context => {
                                        loadApp(context);
                                        return ( splash(context) )
                                    }
                                }
                            </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}

export default AppLoader;