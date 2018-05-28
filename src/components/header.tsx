import * as React from 'react';
import { NavLink } from 'react-router-dom';
import TopPanel from './topPanel';

export default function(props:any){

    const launchFullscreen  = function(element: any) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    };

    const exitFullscreen = function() {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    };

    const toggleFullScreen = function() {
      var fullscreenEnabled = (document as any).fullscreenEnabled || (document as any).webkitFullscreenEnabled;
      if(fullscreenEnabled) {
        if(!(document as any).fullscreenElement && !(document as any).webkitFullscreenElement) {
          launchFullscreen(document.documentElement);
        } else{
          exitFullscreen();
        }
      }
    };

    return <div className='topbar'>

        <div className='topbar-left'>
            <div className='text-center'>
                <NavLink to='/' className='logo'><i
                    className='icon-c-logo md md-local-parking'></i><span id='h'>Privatix</span></NavLink>
            </div>
        </div>
        <nav className='navbar-custom'>

            <ul className='list-inline float-right mb-0'>

                <li className='list-inline-item dropdown notification-list'>
                    <a className='nav-link dropdown-toggle waves-effect waves-light nav-user' data-toggle='dropdown'
                       href='#' role='button'
                       aria-haspopup='false' aria-expanded='false'>
                        <img src='images/PrivatixIcon.jpg' alt='user' className='rounded-circle' />
                    </a>
                        <div className='dropdown-menu dropdown-menu-right profile-dropdown ' aria-labelledby='Preview'>
                            <NavLink to='/accounts' className='dropdown-item notify-item'>
                                <i className='md  md-account-child'></i> <span>Accounts</span>
                            </NavLink>
                            <NavLink to='#' className='dropdown-item notify-item'>
                                <i className='md md-help'></i> <span>Help</span>
                            </NavLink>
                            <NavLink to='#' onClick={props.onSwitchMode} className='dropdown-item notify-item'>
                                <i className='ion-arrow-swap'></i> <span>Switch to {props.mode === undefined || props.mode === 'agent' ? 'Client' : 'Agent'}</span>
                            </NavLink>
                            <NavLink to='/settings' className='dropdown-item notify-item'>
                                <i className='md md-settings'></i> <span>Settings</span>
                            </NavLink>
                            <NavLink exact to='/logs' activeClassName='active' className='dropdown-item notify-item'>
                                <i className='dripicons-blog'></i><span>Logs</span>
                            </NavLink>
                        </div>
                </li>

                <a className='nav-link waves-light waves-effect' href='#' onClick={toggleFullScreen} >
                    <i className='dripicons-expand noti-icon'></i>
                </a>
            </ul>

            <TopPanel mode={props.mode} />

            <ul className='list-inline menu-left mb-0'>
                <li className='float-left'>
                    <button className='button-menu-mobile open-left waves-light waves-effect'>
                        <i className='dripicons-menu'></i>
                    </button>
                </li>
            </ul>
        </nav>
    </div>;
}
