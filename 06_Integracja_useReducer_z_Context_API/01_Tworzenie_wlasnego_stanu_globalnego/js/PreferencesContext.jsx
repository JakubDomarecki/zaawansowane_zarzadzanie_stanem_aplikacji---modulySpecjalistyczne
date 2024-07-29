    import { createContext, useEffect } from "react";
    import { useReducer } from "react";
    import { useContext } from "react";
    import './css.css'

    const actions = {
        SET_THEME_DARK:'SET_THEME_DARK',
        SET_THEME_LIGHT:'SET_THEME_LIGHT',
        SET_LANGUAGE: 'SET_LANGUAGE',
        TOGGLE_NOTIFICATIONS_ON: 'TOGGLE_NOTIFICATIONS_ON',
        TOGGLE_NOTIFICATIONS_OFF: 'TOGGLE_NOTIFICATIONS_OFF',
    }


    const UserPreferencesContext = createContext();

    const UserPreferencesReducer = (state, action) => {
        switch(action.type) {
            case actions.SET_THEME_DARK: {
                return{...state, theme: 'dark'}
            }
            case actions.SET_THEME_LIGHT: {
                return{...state, theme: 'light'}
            }
            case actions.TOGGLE_NOTIFICATIONS_ON: {
                return{...state, notifications: true}
            }
            case actions.TOGGLE_NOTIFICATIONS_OFF: {
                return{...state, notifications: false}
            }
            case actions.SET_LANGUAGE: {
                return{ ...state, language: action.payload}
            }
            default: {
                return state;
            }
        }
    } 


    export const UserPreferencesProvider = ({children}) => {

        const [state, dispatch] = useReducer(UserPreferencesReducer, { 
            theme: 'light', 
            language: 'en', 
            notifications: true 
        })

        const handleNewLanguage = (e) => {
            dispatch({type: actions.SET_LANGUAGE, payload: e.target.value})
        }

        const handleChangeThemeDark = () =>{
            dispatch({type: actions.SET_THEME_DARK})
        }

        const handleChangeThemeLight = () =>{
            dispatch({type: actions.SET_THEME_LIGHT})
        }

        const handleNotificationsOff = () => {
            dispatch({type: actions.TOGGLE_NOTIFICATIONS_OFF})
        }

        const handleNotificationsOn = () => {
            dispatch({type: actions.TOGGLE_NOTIFICATIONS_ON})
        }

        useEffect(() => {
            document.body.className = state.theme;
        }, [state.theme])

        return(
            <UserPreferencesContext.Provider value={{...state, handleNewLanguage, handleChangeThemeDark, handleChangeThemeLight, handleNotificationsOn, handleNotificationsOff}}>
            {children}
            </UserPreferencesContext.Provider>
        )

    }

    export const useUserPreferencesContext = () => useContext(UserPreferencesContext);