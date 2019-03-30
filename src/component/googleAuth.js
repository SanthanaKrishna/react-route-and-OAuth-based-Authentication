import React from 'react';

class GoogleAuth extends React.Component {
    state={ isSignedIn: null}

    //gapi(libary) is multipurpose Oauth google for all services 
    componentDidMount(){
          //Loads the JavaScript client library
        window.gapi.load('client:auth2', ()=>{ 
            // Initializes the client with the API key
            //init return promise
            window.gapi.client.init({
                clientId:'996416063942-jl3h1ksqpr9kh23oevc6bgovdfu7dsfm.apps.googleusercontent.com',
                scope:'email' // 'emil' is type of scope: scope ofemail
            }).then(()=>{
                //
                this.auth = window.gapi.auth2.getAuthInstance(); //gaip.auth2.getInstance().signIn()  => to sign in try out in console
                console.log('this.auth.isSignedIn.get()', this.auth.isSignedIn.get());
                this.setState({ isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            }); 
        });
    }

    onAuthChange=()=>{
        //return is user signed in or not
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    onSignInClick=()=>{
        this.auth.signIn();
    }

    onSignOutClick=()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        console.log('this.state.isSignedI', this.state.isSignedI)
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
            return(
                <button className="ui red googl button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                        Sign Out
                </button>
                )
        }else{
            return(
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign In
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;